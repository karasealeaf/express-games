import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // store our games data in state
  cost[(games, setGames)] = useState([]);
  // function to get our data
  async function getGames(event) {
    event.preventDefault();
    console.log(event.target);
    const API = `http://localhost:8080/games?year=${event.target.year.value}`;
    const res = await axios.get(API);
    setGames(res.data);
  }

  return (
    <>
      <form onSubmit={getGames}>
        <input name="year" placeholder="Year" />
        <button>Get Games</button>
      </form>
      {/* have a form with an input that lets us choose a year*/}
      {/* map through our games data to show all of them*/}
      {games.map((game) => {
        return (
          <div key={game.name}>
            <h2>{game.name}</h2>
            <h3>{game.year}</h3>
          </div>
        );
      })}
    </>
  );
}

export default App;
