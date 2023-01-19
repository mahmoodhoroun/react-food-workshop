import React from 'react';

const FilterCategory = ({category,filterCategory,setFilterCategory}) => {
    const handelCategory = (e) =>{
        setFilterCategory(e.target.value) 
            console.log(filterCategory)
        
    }
    return ( 
                <label>
                <input type="radio" name="x" value={category} onClick={handelCategory} checked={category===filterCategory}/>{category}
                </label>
    
     );
}
 
export default FilterCategory;