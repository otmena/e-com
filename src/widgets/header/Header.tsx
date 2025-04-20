import styles from "./Header.module.scss";
import { Link } from "react-router";

type Props = {
	onCartOpen: () => void;
};

export default function Header({ onCartOpen }: Props) {
	return (
		<div>
			<header className={styles.header}>
				<Link to='/' className={styles.logo}>
					Test Project
				</Link>
				<div className={styles.links}>
					<Link to='/food'>Еда</Link>
					<Link to='/cloth'>Одежда</Link>
					<Link to='/electronics'>Техника</Link>
				</div>
				<button onClick={onCartOpen}>Корзина</button>
			</header>
		</div>
	);
}
