import { useState } from "react";
import Card from "../components/shared/card/Card";
import Pagination from "../components/ui/pagination/Pagination";
import { useCartStore } from "../store/useCartStore";
import { Item } from "../types/Item";

type Props = {
	items: Item[];
};

export default function Electronics({ items }: Props) {
	const foodItems = items.filter((item) => item.category === "food");
	const addToCart = useCartStore((state) => state.addToCart);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);

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
				totalItems={foodItems.length}
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				paginate={paginate}
			/>
		</div>
	);
}
