import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const TokenBalance = ({ tokenAddress }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchTokenBalance = async () => {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          tokenAddress,
          ["function balanceOf(address owner) view returns (uint256)"],
          signer
        );

        const address = await signer.getAddress();
        const tokenBalance = await contract.balanceOf(address);
        setBalance(ethers.utils.formatUnits(tokenBalance, 18));
      }
    };
    fetchTokenBalance();
  }, [tokenAddress]);

  return (
    <div>
      <h2>Token Balance: {balance}</h2>
    </div>
  );
};

export default TokenBalance;
