import React, { useState } from "react";
import ConnectWallet from "./ConnectWallet";
import TransferETH from "./TransferETH";
import TransferToken from "./TransferToken";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("connectWallet");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Blockchain Application</h1>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveComponent("connectWallet")}
          className={`px-6 py-3 rounded-lg shadow-lg transition duration-300 ${
            activeComponent === "connectWallet"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Connect Wallet
        </button>
        <button
          onClick={() => setActiveComponent("transferEth")}
          className={`px-6 py-3 rounded-lg shadow-lg transition duration-300 ${
            activeComponent === "transferEth"
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Transfer ETH
        </button>
        <button
          onClick={() => setActiveComponent("transferToken")}
          className={`px-6 py-3 rounded-lg shadow-lg transition duration-300 ${
            activeComponent === "transferToken"
              ? "bg-purple-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Transfer Token
        </button>
      </div>
      <div className="w-full max-w-md">
        {activeComponent === "connectWallet" && <ConnectWallet />}
        {activeComponent === "transferEth" && <TransferETH />}
        {activeComponent === "transferToken" && (
          <TransferToken tokenAddress="0xYourTokenAddress" />
        )}
      </div>
    </div>
  );
};

export default App;
