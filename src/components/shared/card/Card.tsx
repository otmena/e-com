import styles from "./Card.module.scss";

type Props = {
	name: string;
	imageURL: string;
	category?: string;
	price: number;
	id: number;
};

export default function Card({ name, imageURL, price, addToCart }: Props) {
	return (
		<div className={styles.card}>
			<img width={150} height={150} src={imageURL} alt={name} />
			<div>
				<h3>{name}</h3>
			</div>
			<p>Цена:</p>
			<div className={styles.cardDown}>
				<b>{price} руб.</b>
				<h2></h2>
				<button onClick={addToCart}>Добавить</button>
			</div>
		</div>
	);
}
