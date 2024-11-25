# BitGifty Minipay Frontend
Minipay Frontend is a web-based interface for Minipay, a decentralized platform designed to enable seamless and affordable digital transactions, particularly leveraging the Celo blockchain. This repository contains the source code for the user-facing part of the Minipay application.

# Features
- User-Friendly Interface: A simple, intuitive interface designed for seamless transactions.
- Blockchain Integration: Built on the Celo blockchain to provide decentralized and secure transaction processing.
- Cross-Border Payments: Enables affordable international payments using stablecoins like cUSD.
- Gasless Transactions: Supports transactions without requiring users to hold gas tokens.

# Technologies Used
- React.js: Frontend framework.
- TypeScript: Strongly typed language for building scalable applications.
- Celo SDK: For blockchain interactions.
- Chakra UI.

# Prerequisites
- Node.js: Version 16+ is recommended.
- npm or yarn: Package manager.
- Access to a Celo blockchain network.
  
## Getting Started
- Clone the Repository

<code>bash
git clone https://github.com/Bitgifty/minipay-frontend.git
cd minipay-frontend
</code>
Install Dependencies
bash

yarn start
Visit http://localhost:3000 in your browser to view the app.

# Deployment
The project is set up for deployment using Vercel or any other hosting service. Ensure the environment variables are configured in your deployment platform.

## Contribution
We welcome contributions to improve Minipay Frontend! Follow these steps:

## Fork the repository.
Create a feature branch: git checkout -b feature-name.
Commit your changes: git commit -m "Add feature".
Push to the branch: git push origin feature-name.
Open a Pull Request.


# Repository Navigation

### Access the Repository
The repository is open source and can be accessed at Minipay Frontend GitHub Repository.

### Navigate to the Source Folder
- On the repository page, click on the Code tab in the navigation bar.
- Locate and open the packages/react-app/components/utility folder.

### Explore Component Folders
- Airtime and Data Folders: Contain Airtime.jsx and Data.jsx, which include Kenyan airtime and data network providers.
- Buy Goods and Paybills Folders: Unique to Kenyan users.

### Paybill Component
Located in the Paybills folder, it contains:

- PayBillForm: Includes the payBill function, which deducts from the user's wallet and sends the following parameters to the backend:
wallet_from: User's preferred crypto wallet.
transaction_hash: Hash of the transaction.
paybill_number: Mpesa sort code of the service to be credited.
account_number: User's unique account number for the service.
amount: Amount to be sent in KES.

### Buy Goods Component
Located in the BuyGoods folder, it contains:

- BuyGoodsForm: Includes the buyGood function, which deducts from the user's wallet and sends the following parameters to the backend:
wallet_from: User's preferred crypto wallet.
transaction_hash: Hash of the transaction.
till_number: Mpesa sort code of the business to be credited.
amount: Amount to be sent in KES.


## License
This project is licensed under the MIT License.

