import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Cloth, Electornics, Food } from "./pages";
import Input from "./components/ui/input/Input";
import { Header, Cart } from "./widgets/index";

function App() {
	const [items, setItems] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		fetch("https://67fe9e7f58f18d7209eed7d1.mockapi.io/test")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItems(data);
			});
	}, []);

	const openCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	const filteredItems = items.filter((item) =>
		item.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div id='root'>
			{isCartOpen ? <Cart onCartOpen={openCart} /> : ""}
			<Header onCartOpen={openCart} />
			<div className='wrapper'>
				<Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
				<Routes>
					<Route path='/food' element={<Food items={filteredItems} />} />
					<Route path='/cloth' element={<Cloth items={filteredItems} />} />
					<Route path='/electronics' element={<Electornics items={filteredItems} />} />
					<Route path='/' element={<div className='container'>Выберите категорию</div>} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
