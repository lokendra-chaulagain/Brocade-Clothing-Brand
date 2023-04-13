import { Category } from './../../../src/redux/type/type.d';
export interface Color {
  _id: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscriber {
  _id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: number;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SearchTag {
  _id: string;
  name: string;
  createdAt: Date;
}

export interface Banner {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
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