import { useState } from "react";
import Card from "../components/shared/card/Card";
import { useCartStore } from "../store/useCartStore";
import { Item } from "../types/Item";
import Pagination from "../components/ui/pagination/Pagination";

type Props = {
	items: Item[];
};

export default function Electronics({ items }: Props) {
	const electornicItems = items.filter((item) => item.category === "electronics");
	const addToCart = useCartStore((state) => (item: Item) => state.addToCart({ ...item }));
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = electornicItems.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
	return (
		<div className='container'>
			{currentItems.map((item) => (
				<Card
					key={item.id}
					name={item.name}
					imageURL={item.imageURL}
					price={item.price}
					id={item.id}
					addToCart={() => addToCart(item)}
				/>
			))}
			<Pagination
				totalItems={electornicItems.length}
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				paginate={paginate}
			/>
		</div>
	);
}
