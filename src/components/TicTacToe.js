import React, { useState } from "react";
import "../../src/TicTacToe.css";
import { useSelector, useDispatch } from "react-redux";
import xSlice from "../store/xSlice";
const TicTacToe = () => {
  const Square = ({ position }) => {
    const [player, setPlayer] = useState("");
    const { xMoves } = xSlice.actions;
    const onSquareClicked = () => {
      dispatch(xMoves(position));
    };
    const dispatch = useDispatch();
    return (
      <div onClick={onSquareClicked} className="square" disabled={false}>
        {player}
      </div>
    );
  };

  const Board = () => {
    const lines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "5"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];

    return (
      <div>
        <header>Current Player: X</header>
        <div className="row">
          <Square className="square" position="0" />
          <Square position="1" />
          <Square position="2" />
        </div>
        <div className="row">
          <Square position="3" />
          <Square position="4" />
          <Square position="5" />
        </div>
        <div className="row">
          <Square position="6" />
          <Square position="7" />
          <Square position="8" />
        </div>
      </div>
    );
  };

  return <Board />;
};

export default TicTacToe;
