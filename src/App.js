import Dishes from "./componants/Dishes";
import data from "./data";
import FilterPrice from "./componants/FilterPrice";
import FilterCategory from "./componants/FilterCategory";
import { useState } from "react";

const categories = [
  "all",
  "burger",
  "hot dog",
  "sandwich",
  "fries",
  "topping",
  "drink",
  "extra",
];

function App() {
	const [maxPrice, setMaxPrice] = useState(8);
    const [minPrice, setMinPrice] = useState(0);
	const [filterCategory,setFilterCategory] = useState("all")


	let filteredData=data.filter((ele) =>{
		return (ele.price >= minPrice && ele.price <= maxPrice);
	})
	filteredData = filteredData.filter((ele) => {
		if(filterCategory === "all" || filterCategory === ""){
			return ele
		}else{
			return ele.category === filterCategory
		}
	})
	return (
		<main>
			<section className="filters">
				<FilterPrice 
				maxPrice={maxPrice}
				minPrice={minPrice}
				setMaxPrice={setMaxPrice}
				setMinPrice={setMinPrice}

				/>

				<fieldset>
				<legend>Category</legend>
					{categories.map((ele) => {
						return(
							<FilterCategory category={ele}
							 filterCategory={filterCategory} 
							 setFilterCategory={setFilterCategory}
							 />
						);
					})}

				</fieldset>
			</section>
			
				
			
			<section className="dishes">
				<h2>Dishes</h2>
				<ul className="grid">
					{filteredData.map((ele) => {
						return(
							<Dishes name={ele.name} description={ele.description} price={ele.price}/>
						);
					})}
				</ul>
			</section>

			
		</main>
	);
}

export default App;
