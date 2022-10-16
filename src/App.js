import './App.css';
import fighter from "./pages/fighter_profile";
import {useState, useEffect} from "react";

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to the Olympic Judo Search Website!
      </h1>
            <table>
                <th>
                    <a href="src/pages/fighter_profile.js"> Fighter Profile</a>
                </th>
                <th>
                    <a href="/pages/olympic_game">Olympic Games</a>
                </th>
                <th>
                    <a href="/pages/country_profile">Country Profile</a>
                </th>
            </table>

        <p>
            <form>
                <label>
                    Search For Judo Info:
                    <input type={"text"} name={"search"}/>
                </label>
            </form>
        </p>

    </div>

  );
}

export default App;
