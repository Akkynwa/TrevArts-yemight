import { useConnect, useAccount, useDisconnect } from 'wagmi';

export default function ConnectButton() {
  const { connectors, connect } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  // If the user is already connected, show their address and a disconnect option
  if (isConnected) {
    return (
      <div className="flex flex-col items-end gap-1">
        <button 
          onClick={() => disconnect()}
          className="px-6 py-2 bg-gray-200 text-black font-bold rounded-lg hover:bg-gray-300 transition-colors"
        >
          {address?.slice(0, 6)}...{address?.slice(-4)} (Disconnect)
        </button>
      </div>
    );
  }

  // If not connected, show the "Connect Wallet" button
  return (
    <div className="flex gap-2">
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
          className="px-6 py-2 bg-[#f53513ff] text-black font-bold rounded-lg hover:bg-[#f53513ff]/90 transition-colors"
        >
          Connect {connector.name}
        </button>
      ))}
    </div>
  );
}