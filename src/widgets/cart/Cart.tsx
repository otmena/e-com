import React from "react";
import styles from "./Cart.module.scss";
import Card from "../../components/shared/card/Card";
import { useCartStore } from "../../store/useCartStore";

type Props = {
	onCartOpen: () => void;
};

export default function Cart({ onCartOpen }: Props) {
	const cartItems = useCartStore((state) => state.cartItems);
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	return (
		<div className={styles.wrapper}>
			<div className={styles.cart}>
				<div className={styles.cartTop}>
					<h1>Корзина</h1>
					<button onClick={onCartOpen} className={styles.cartClose}></button>
				</div>
				<div className={styles.cartItems}>
					{cartItems.length === 0 ? (
						<p>Корзина пуста</p>
					) : (
						cartItems.map((item) => (
							<div key={item.id}>
								<img width={50} height={80} src={item.imageURL} alt='imageUrl' />
								<h3>{item.name}</h3>
								<p>{item.price} руб.</p>
								<button onClick={() => removeFromCart(item.id)}>Удалить</button>
							</div>
						))
					)}
				</div>
				<div className={styles.cartInfo}>
					<div className={styles.cartTotal}>
						<h3>Итого:</h3>
						<p></p>
						<b>11999 руб.</b>
					</div>
					<button className={styles.cartPay}>Оплатить</button>
				</div>
			</div>
		</div>
	);
}
