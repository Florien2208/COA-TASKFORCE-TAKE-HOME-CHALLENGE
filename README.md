# Interactive Image Gallery

An elegant, responsive image gallery with interactive hover effects, built using HTML, CSS, and JavaScript. This project also includes utility functions for working with arrays and strings.

## Features

- Responsive image gallery with hover effects
- Cross-browser compatibility
- Array utility to find subarray with a target sum
- String utility to transform text based on its length

  # Setting Up and Running the Project

## Prerequisites

1. [Visual Studio Code](https://code.visualstudio.com/) (VSCode)
2. A modern web browser (Chrome, Firefox, Safari, or Edge)

## Step 1: Clone the Repository

1. Open VSCode.
2. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3. Type "Git: Clone" and press Enter.
4. Enter the repository URL: `https://github.com/Florien2208/COA-TASKFORCE-TAKE-HOME-CHALLENGE.git`
5. Choose or create a directory where you want to clone the project.

## Step 2: Open the Project

1. In VSCode, go to `File` > `Open Folder...`
2. Navigate to the `interactive-image-gallery` directory you just cloned and click `Select Folder`.

## Step 3: Explore the Project Structure

Your project structure should look like this:


```plaintext
interactive-image-gallery/
├── assets/
│   ├── image-1.png
│   ├── image-2.png
│   ├── image-3.png
│   └── image-4.png
├── css/
│   └── index.css
├── js/
│   ├── arrayMap.js
│   └── stringTransform.js
├── index.html
└── README.md

## Step 4: Install Live Server (Optional but Recommended)

Live Server will automatically reload your browser when you make changes to your files.

1. In VSCode, click on the Extensions icon in the left sidebar (it looks like a square).
2. In the search bar, type "Live Server".
3. Find the extension by Ritwick Dey and click `Install`.

## Step 5: Viewing the Project

### Using Live Server:

1. Right-click on `index.html` in the file explorer.
2. Select `Open with Live Server`.
3. Your default browser will open `http://127.0.0.1:5500/index.html`.

### Without Live Server:

1. Right-click on `index.html` in the file explorer.
2. Select `Copy Path`.
3. Open your browser and press `Ctrl+L` (Windows/Linux) or `Cmd+L` (macOS).
4. Paste the path and press Enter.

## Step 6: Making Changes

1. Open `index.html`, `css/index.css`, `js/arrayMap.js`, or `js/stringTransform.js` in VSCode.
2. Make your changes.
3. If using Live Server, the browser will automatically reload. Otherwise, manually refresh the browser.

## Step 7: Testing the Utilities

### Array Utility:

1. Open `js/arrayMap.js` in VSCode.
2. Modify the `sequence` or `desiredSum` values in the example.
3. Open the Integrated Terminal in VSCode (`View` > `Terminal` or `` Ctrl+` ``).
4. Run `node js/arrayMap.js` to see the output.

### String Utility:

1. Open `js/stringTransform.js` in VSCode.
2. Modify the input strings in the examples.
3. In the Integrated Terminal, run `node js/stringTransform.js` to see the output.

## Step 8: Cross-Browser Testing

Test your project in different browsers to ensure cross-browser compatibility:

1. Open `index.html` in Chrome, Firefox, Safari, and Edge.
2. Test responsiveness by resizing the browser window or using browser dev tools.

## Step 9: Version Control (Optional)

If you make changes you want to keep:

1. In the Integrated Terminal, run:
   ```bash
   git add .
   git commit -m "Describe your changes here"
   git push origin main

## Demo

![Screenshot 2024-06-07 102947](https://github.com/Florien2208/COA-TASKFORCE-TAKE-HOME-CHALLENGE/assets/110243021/f055e8f4-30b7-40c5-80ba-026b35d3ef1d)

![Screenshot 2024-06-07 103347](https://github.com/Florien2208/COA-TASKFORCE-TAKE-HOME-CHALLENGE/assets/110243021/31307409-1bd1-433c-8a2f-0d09e084bd63)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Florien2208/COA-TASKFORCE-TAKE-HOME-CHALLENGE.git
