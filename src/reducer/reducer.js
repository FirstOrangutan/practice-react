const initialState = {
  nextPlayer: "",
  xMoves: [],
  oMoves: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "move-x": {
      return {
        ...state,
        nextPlayer: "O",
        xMoves: [action.payload.position, ...state.xMoves],
      };
    }
    case "move-o": {
      return {
        ...state,
        nextPlayer: "X",
        xMoves: [action.payload.position, ...state.oMoves],
      };
    }

    default:
      return state;
  }
}
