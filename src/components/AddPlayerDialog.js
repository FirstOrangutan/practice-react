import { createPortal } from "react-dom";
import { Fragment } from "react";
const AddPlayerDialog = ({ onDialogClose }) => {
  const Backdrop = (props) => {
    return <div className="overlay" onClick={props.onConfirm} />;
  };

  const ModalOverlay = (props) => {
    return (
      <div className="modal">
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await fetch(
      "https://test-react-2694f-default-rtdb.asia-southeast1.firebasedatabase.app/players.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: event.currentTarget[0].value,
          email: event.currentTarget[1].value,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    onDialogClose();
  };
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {createPortal(<ModalOverlay />, document.getElementById("overlay-root"))}
    </>
  );
};

export default AddPlayerDialog;
