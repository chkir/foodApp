import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '31503d10';
  const APP_KEY = '5190880b296581c09a1d4a22af18b67c';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')


  useEffect(()=> {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => ( 
        <Recipe 
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={Math.round(recipe.recipe.calories / recipe.recipe.yield)} 
          image={recipe.recipe.image} 
          url={recipe.recipe.url}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
      <div className="footer">
      <p>Made with the <a href="https://developer.edamam.com/">edamam.com API</a></p>
    </div>
    </div>

  );
}

export default App;
