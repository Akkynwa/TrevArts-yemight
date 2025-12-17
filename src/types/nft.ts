export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';

export interface NFTAttribute {
  trait_type: string;
  value: string;
  rarity_score?: number;
}

export interface NFTCardProps {
  id: number;
  name: string;
  image: string;
  rarity: Rarity;
  price: number;
  currency?: string;
  attributes?: NFTAttribute[];
  onClick?: () => void;
}

export interface NFTCollectionStats {
  totalSupply: number;
  minted: number;
  floorPrice: number;
  totalVolume: number;
}