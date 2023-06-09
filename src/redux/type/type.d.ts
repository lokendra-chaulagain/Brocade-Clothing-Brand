export interface Color {
  color: string;
}

export interface Subscriber {
  email: string;
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SearchTag {
  _id: string;
  name: string;
  createdAt: Date;
}

export interface Banner {
  totalBannerCount: number;
  allBanner: Array;
}

export interface Category {
  _id: string;
  name: string;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Size {
  _id: string;
  name: string;
  createdAt: Date;
}

export interface Genre {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: Date;
}



export interface Product {
  _id: string;
  name: string;
  images: Array;
  description: string;
  price: number;
  sku: number;
  colors: Array;
  sizes: Array;
  CategoryId: string;
}