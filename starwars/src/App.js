import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import MainPage from "./components/MainPage";



const App = () => {

  const [starwarsData, setStarwarsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        //console.log(response.data.results);
        setStarwarsData(response.data.results);
      })
      .catch(error => {
        console.log('use the force to find your error', error);
      });
    
  }, []);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {starwarsData.map((data, index) => {
        console.log(data);
        return (
          <MainPage
            key = {index}
            name = {data.name}
            homeworld = {data.homeworld}
            birthYear = {data.birthyear}
            image = {data.url}
            films = {data.films}

          />
        )
      })}
    </div>
  );
}

export default App;
