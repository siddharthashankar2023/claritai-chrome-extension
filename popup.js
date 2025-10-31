document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const textBox = document.getElementById('text');
    const langSelect = document.getElementById('lang');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const result = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    const copyBtn = document.getElementById('copyBtn');

    // -- Your Gemini API Key --
    const GEMINI_API_KEY = 'AIzaSyBxcAXMppl4WKqdpm7D0-JDtMAGwlC2u8c';
    const GEMINI_MODEL = "models/gemini-2.5-pro"; // <- Use this model!

    // === NEW: Auto-fill from context menu selection ===
    chrome.storage.local.get(["selectedText"], (data) => {
        if (data.selectedText) {
            textBox.value = data.selectedText;
            chrome.storage.local.remove("selectedText"); // clear so doesn't linger
        }
    });
    // === END NEW ===

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = textBox.value.trim();
        const lang = langSelect.value;

        if (!text) {
            showError('Please enter text');
            return;
        }

        await simplify(text, lang);
    });

    async function simplify(text, lang) {
        loading.classList.add('show');
        result.classList.remove('show');
        hideError();

        try {
            const prompt = `Simplify the following text for a student. Translate to ${lang}. Keep it clear and concise:\n\n${text}`;
            const url = `https://generativelanguage.googleapis.com/v1beta/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });
            const data = await response.json();
            console.log('Gemini API response:', data);
            if (data.candidates && data.candidates.length > 0) {
                resultText.textContent = data.candidates[0].content.parts[0].text;
            } else if (data.error) {
                showError('API Error: ' + JSON.stringify(data.error));
                resultText.textContent = prompt;
            } else {
                showError('No answer from Gemini API.');
                resultText.textContent = JSON.stringify(data, null, 2);
            }

            result.classList.add('show');
        } catch (err) {
            showError('Error: ' + err.message);
            resultText.textContent = text.substring(0, 150) + '...';
            result.classList.add('show');
        } finally {
            loading.classList.remove('show');
        }
    }

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(resultText.textContent);
        copyBtn.textContent = '✅ Copied!';
        setTimeout(() => copyBtn.textContent = '📋 Copy', 2000);
    });

    function showError(msg) {
        error.textContent = msg;
        error.classList.add('show');
    }

    function hideError() {
        error.classList.remove('show');
    }
});
