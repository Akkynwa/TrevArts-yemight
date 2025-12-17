export interface WalletState {
  isConnected: boolean;
  address?: string;
  chainId?: number;
  balance?: string;
}

export interface ConnectButtonProps {
  className?: string;
  label?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
}