import React,{useState} from 'react';



const FilterPrice = ({
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice
}) => {
    
    const handelMaxPrice = (e) => {
        setMaxPrice(e.target.value) 
        console.log(maxPrice)
    }
    const handelMinPrice = (e) => {
        setMinPrice(e.target.value) 
        console.log(minPrice)
    }

    return ( 
        <>01
				<h1>Burger Place</h1>
				<h2>Filters</h2>
				<form>
					<fieldset>
						<legend>price</legend>
						Max price<input type="range" min="0" max="10" value={maxPrice} onChange={handelMaxPrice}/>
                        
                        Min price <input type="range" min="0" max="10" value={minPrice} onChange={handelMinPrice}/>
						
					</fieldset>
				</form>

                
		
        </>
     );
}
 
export default FilterPrice;