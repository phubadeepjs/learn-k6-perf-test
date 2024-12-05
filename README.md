# Performance testing with K6

## Introduction
This project uses k6 for performance testing. This README provides instructions on how to install k6, run the application, and execute k6 tests.

## Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. **Install k6**:
   - For macOS, you can use Homebrew:
     ```bash
     brew install k6
     ```
   - For Windows, you can use Chocolatey:
     ```bash
     choco install k6
     ```
   - For Linux, you can download the binary from the [k6 releases page](https://github.com/loadimpact/k6/releases).

2. **Install dependencies**:
   If your `app.js` has dependencies, run:
   ```bash
   npm install
   ```

## Running the Application

To run your application, use the following command:
```bash
node app.js
```

## Running k6 Tests

   - To execute k6 tests, use the following command:
        ```bash
        k6 run <path-to-your-k6-script.js>
        ```
Replace `<path-to-your-k6-script.js>` with the actual path to your k6 script file.

   - An example K6 script is provided for your reference:
        ```bash
        k6 run test-script.js
        ```