import styles from "./Pagination.module.scss";

type Props = {
	itemsPerPage: number;
	totalItems: number;
	currentPage: number;
	paginate: (pageNumber: number) => void;
};

export default function Pagination({ itemsPerPage, totalItems, paginate, currentPage }: Props) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div className={styles.pagination}>
			<ul style={{ display: "flex", listStyle: "none", gap: "10px" }}>
				{pageNumbers.map((number) => (
					<li key={number}>
						<button
							className={styles.paginationButton}
							style={{
								backgroundColor: currentPage === number ? "grey" : "white",
								color: currentPage === number ? "white" : "black",
							}}
							onClick={() => paginate(number)}>
							{number}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
