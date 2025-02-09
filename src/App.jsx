import { useState } from "react";
import "./App.css";
import Modal from "./Component/Modal";
import SliderCard from "./Component/SliderCard";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <SliderCard />
    </div>
  );
}

export default App;
