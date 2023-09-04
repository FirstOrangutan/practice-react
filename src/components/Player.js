import { NavLink, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
export const Player = () => {
  const { playerName } = useParams();
  return (
    <div>
      <p>This is the {playerName} details screen </p>
      <NavLink to="/players">Back to players</NavLink>
      {/* <Outlet /> */}
    </div>
  );
};
