import { Fragment, useEffect, useState } from "react";
import AddPlayerDialog from "./AddPlayerDialog";
import { createPortal } from "react-dom";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const PlayerCollection = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch(
      "https://test-react-2694f-default-rtdb.asia-southeast1.firebasedatabase.app/players.json"
    ).then((response) => {
      const data = response.json();
      data.then((players) => {
        const loadedPlayers = [];
        for (const key in players) {
          loadedPlayers.push({
            id: key,
            email: players[key].email,
            name: players[key].name,
          });
        }
        setPlayerList(loadedPlayers);
      });
    });
  }, []);

  const handleAddPlayer = () => {
    setShowDialog(true);
  };
  const handleSavePlayer = () => {
    nav("/player-saved");
    setShowDialog(false);
  };
  return (
    <div>
      <h2>All players</h2>
      <ul>
        {playerList.map((player) => (
          <li>
            <NavLink to={player.name}> {player.name} </NavLink> | |{" "}
            {player.email}
          </li>
        ))}
      </ul>
      <button onClick={handleAddPlayer}>Add Player</button>

      {showDialog && <AddPlayerDialog onDialogClose={handleSavePlayer} />}
      <Outlet />
    </div>
  );
};

export default PlayerCollection;
