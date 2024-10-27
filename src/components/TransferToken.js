import React, { useState } from "react";
import { ethers } from "ethers";

const TransferToken = ({ tokenAddress }) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const transferToken = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        tokenAddress,
        ["function transfer(address to, uint amount) returns (bool)"],
        signer
      );

      const decimals = 18;
      const tokenAmount = ethers.parseUnits(amount, decimals);

      const tx = await contract.transfer(recipient, tokenAmount);
      await tx.wait();
      alert("Tokens sent successfully");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="border p-1"
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-1"
      />
      <button
        onClick={transferToken}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Send Tokens
      </button>
    </div>
  );
};

export default TransferToken;
