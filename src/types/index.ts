// src/types/index.ts
export interface NavItem {
  label: string;
  href?: string;
  icon?: string;
  dropdown?: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  href: string;
  icon: string;
}

export interface NFT {
  id: number;
  name: string;
  image: string;
  rarity: string;
  price: number;
}

export interface StatsCard {
  value: number;
  label: string;
  icon: string;
  color: string;
}