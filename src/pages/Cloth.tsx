import { useState } from "react";
import Card from "../components/shared/card/Card";
import Pagination from "../components/ui/pagination/Pagination.tsx";
import { useCartStore } from "../store/useCartStore.ts";
import { Item } from "../types/Item.ts";

type Props = {
	items: Item[];
};

export default function Cloth({ items }: Props) {
	const clothItems = items.filter((item) => item.category === "cloth");
	const addToCart = useCartStore((state) => state.addToCart);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = clothItems.slice(indexOfFirstItem, indexOfLastItem);

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
				totalItems={clothItems.length}
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				paginate={paginate}
			/>
		</div>
	);
}
