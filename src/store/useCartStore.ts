import { create } from "zustand";

type Item = {
	id: number;
	name: string;
	price: number;
	imageURL: string;
};

type CartState = {
	cartItems: Item[];
	addToCart: (item: Item) => void;
	removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartState>((set) => ({
	cartItems: [],
	addToCart: (item) =>
		set((state) => ({
			cartItems: [...state.cartItems, item],
		})),
	removeFromCart: (id) =>
		set((state) => ({
			cartItems: state.cartItems.filter((item) => item.id !== id),
		})),
}));
