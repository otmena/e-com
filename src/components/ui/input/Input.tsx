import styles from "./Input.module.scss";

type Props = {
	value: string;
	onChange: (e) => void;
};

export default function Input({ value, onChange }: Props) {
	return (
		<input
			value={value}
			onChange={onChange}
			type='text'
			placeholder='Найти...'
			className={styles.myInput}
		/>
	);
}
