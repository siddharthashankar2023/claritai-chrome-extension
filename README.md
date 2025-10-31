ClaritAI Chrome Extension
ClaritAI is a Chrome extension that instantly simplifies any highlighted text using Chrome’s built-in AI. Simply select text, adjust the difficulty slider to the preferred level, and get clear, easy explanations. It’s perfect for students, researchers, or anyone browsing the web.

🚀 How to Get Started (Tested on Chrome Canary)
First, download or clone this repository. Next, open Chrome Canary and navigate to chrome://extensions. Enable Developer Mode in the top right corner. Click on Load unpacked and select the claritai-chrome-extension folder. The ClaritAI icon will appear on the toolbar, indicating it’s ready to use.

✨ Features
The extension provides AI-powered explanations by analyzing highlighted text on any webpage and delivering simplified summaries.
A difficulty slider allows adjusting the explanation level from beginner-friendly to expert detail.
Multi-language support is included through Chrome’s Translator API to offer explanations in various languages.
All processing is done locally using Chrome’s AI technology, ensuring fast responses and user privacy.

🧠 How It Works
The highlighted text along with the chosen difficulty level is sent to Chrome’s AI Prompt API. The API returns a tailored explanation matching the selected detail level. Optionally, the response can be translated using the built-in Translator API.

❓ How to Use
Highlight text to be simplified.
Click the ClaritAI toolbar icon.
Adjust the difficulty slider to easy, medium, or hard to choose the explanation depth.
The explanation will appear instantly in the popup window.

📹 Demo Video
See the extension in action: Demo Video – ClaritAI Chrome Extension

🛠️ Uninstalling
To remove the extension, visit chrome://extensions, locate ClaritAI, and select Remove.

⚡ Technology Used
Built with Chrome Extension Manifest V3.
Uses Chrome’s Prompt API for AI-powered explanations.
Employs Translator API for multi-language support.
All AI computations run locally for enhanced privacy and speed.

📄 License
The project is licensed under the MIT License.

🙋 Got Questions or Feedback?
Contact: Developed by Siddhartha Shankar.
Email: siddharthashankar2023@gmail.com
Created for the Google Chrome Built-in AI Challenge 2025 (Devpost).

🔵 ADDED FOR DEVPOST CHALLENGE COMPLIANCE

📂 Repository & Judge Access
GitHub Repository: (insert your link here)

All source code, setup instructions, and license provided

README included for easy setup and guidance

Extension is public and freely testable per Devpost requirements

🖼️ Screenshots
ClaritAI popup UI with highlighted input and simplified output

Privacy & difficulty controls

Error handling example (“model overloaded…retry”)

Result in other languages (optional)

💡 Which APIs Are Used?
Chrome's built-in Prompt API

Translator API (for language support)

All text processing is local when privacy mode is ON

📝 Problem & Solution (as required)
Problem:
Web content is often too complex for fast comprehension or non-native readers, and cloud-based tools can risk privacy or add latency.

Solution:
ClaritAI empowers every Chrome user to get instant, privacy-respecting explanations in the browser using real AI, with full user control.