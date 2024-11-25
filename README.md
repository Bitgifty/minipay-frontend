<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minipay Frontend README</title>
</head>
<body>
    <h1> BitGifty Minipay Frontend</h1>
    <p>
        Minipay Frontend is a web-based interface for Minipay, a decentralized platform designed to enable seamless and affordable digital transactions, particularly leveraging the Celo blockchain. This repository contains the source code for the user-facing part of the Minipay application.
    </p>

    <h2>Features</h2>
    <ul>
        <li><strong>User-Friendly Interface</strong>: A simple, intuitive interface designed for seamless transactions.</li>
        <li><strong>Blockchain Integration</strong>: Built on the Celo blockchain to provide decentralized and secure transaction processing.</li>
        <li><strong>Cross-Border Payments</strong>: Enables affordable international payments using stablecoins like cUSD.</li>
        <li><strong>Gasless Transactions</strong>: Supports transactions without requiring users to hold gas tokens.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>React.js</strong>: Frontend framework.</li>
        <li><strong>TypeScript</strong>: Strongly typed language for building scalable applications.</li>
        <li><strong>Celo SDK</strong>: For blockchain interactions.</li>
        <li><strong>Styled Components</strong>: For managing styles.</li>
    </ul>

    <h2>Prerequisites</h2>
    <ul>
        <li><strong>Node.js</strong>: Version 16+ is recommended.</li>
        <li><strong>npm</strong> or <strong>yarn</strong>: Package manager.</li>
        <li>Access to a Celo blockchain network.</li>
    </ul>

    <h2>Getting Started</h2>

    <h3>Clone the Repository</h3>
    <pre>
        <code>
git clone https://github.com/Bitgifty/minipay-frontend.git
cd minipay-frontend
        </code>
    </pre>

    <h3>Install Dependencies</h3>
    <pre>
        <code>
npm install
# or
yarn install
        </code>
    </pre>

    <h3>Configuration</h3>
    <ol>
        <li>Create a <code>.env</code> file in the root directory.</li>
        <li>Add the following variables:
            <pre>
                <code>
REACT_APP_CELO_NETWORK=&lt;Celo Network URL&gt;
REACT_APP_API_KEY=&lt;Your API Key&gt;
                </code>
            </pre>
        </li>
    </ol>

    <h3>Run the Application</h3>
    <pre>
        <code>
npm start
# or
yarn start
        </code>
    </pre>
    <p>Visit <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser to view the app.</p>

    <h2>Deployment</h2>
    <p>
        The project is set up for deployment using <strong>Vercel</strong> or any other hosting service. Ensure the environment variables are configured in your deployment platform.
    </p>

    <h2>Contribution</h2>
    <p>We welcome contributions to improve Minipay Frontend! Follow these steps:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a feature branch: <code>git checkout -b feature-name</code>.</li>
        <li>Commit your changes: <code>git commit -m "Add feature"</code>.</li>
        <li>Push to the branch: <code>git push origin feature-name</code>.</li>
        <li>Open a Pull Request.</li>
    </ol>

    <h2>License</h2>
    <p>
        This project is licensed under the <a href="LICENSE">MIT License</a>.
    </p>

    <h2>Support</h2>
    <p>
        For inquiries, please open an issue on the repository or contact us at <a href="mailto:support@minipay.com">support@minipay.com</a>.
    </p>
</body>
</html>
