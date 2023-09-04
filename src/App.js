import "./App.css";
import React from "react";

import { Routes, Route, NavLink } from "react-router-dom";
import TicTacToe from "./components/TicTacToe";
import PlayerCollection from "./components/PlayerCollection";
import { Player } from "./components/Player";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <header>
              <h1>Welcome to the game</h1>
            </header>
          }
        ></Route>
        <Route path="players" element={<PlayerCollection />}>
          <Route path=":playerName" element={<Player />} />
        </Route>
        <Route path="/tictac" element={<TicTacToe />} />
        <Route
          path="/player-saved"
          element={<h2>Player saved successfully</h2>}
        />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>

      <footer>
        <div>
          <NavLink to="/players">Home </NavLink>
          <p>Made my tech203 </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
