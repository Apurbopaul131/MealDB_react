const searchControl = async(searchItem)=>{
    const singleMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
    return singleMeal;
}
export default searchControl;