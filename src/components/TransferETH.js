import React, { useState } from "react";
import { ethers, parseEther } from "ethers";

const TransferETH = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const transferETH = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const tx = await signer.sendTransaction({
        to: recipient,
        value: parseEther(amount),
      });

      await tx.wait();
      alert("ETH sent successfully");
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
        onClick={transferETH}
        className="bg-green-500 text-white p-2 rounded"
      >
        Send ETH
      </button>
    </div>
  );
};

export default TransferETH;
