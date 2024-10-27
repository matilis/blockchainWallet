import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectWallet, disconnectWallet } from "../redux/connect/walletSlice";

const ConnectWallet = () => {
  const dispatch = useDispatch();
  const walletConnected = useSelector((state) => state.wallet.connected);
  const walletAddress = useSelector((state) => state.wallet.address);

  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        dispatch(connectWallet(address));
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const handleDisconnect = () => {
    dispatch(disconnectWallet());
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Connect Wallet</h2>
      {walletConnected ? (
        <div>
          <p>Wallet connected: {walletAddress}</p>
          <button
            onClick={handleDisconnect}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
