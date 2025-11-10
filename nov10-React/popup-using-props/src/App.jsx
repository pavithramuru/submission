import React from "react";
import PopupMessage from "./components/PopupMessage";
import ClickCounterButton from "./components/ClickCounterButton";

const App = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupNumber, setPopupNumber] = React.useState(null);
  const [popupClickCount, setPopupClickCount] = React.useState(0);

  const popupTitle = "Multi Popup Component";

  const handleShowPopup = (popupId) => {
    setShowPopup(true);
    setPopupNumber(popupId);
    setPopupClickCount((prev) => prev + 1);
  };

  const popupMessage = popupNumber
    ? `Show popup clicked: ${popupNumber}`
    : "No popup selected.";

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        marginTop: "50px",
        lineHeight: "1.6",
      }}
    >

      <h1>Multiple Popups — One Handler Example</h1>

      {/* Buttons to open popups */}
      <button
        style={{ padding: "0.5rem 1rem", margin: "1rem" }}
        onClick={() => handleShowPopup(1)}
      >
        Show Popup 1
      </button>
      <button
        style={{ padding: "0.5rem 1rem", margin: "1rem" }}
        onClick={() => handleShowPopup(2)}
      >
        Show Popup 2
      </button>
      <button
        style={{ padding: "0.5rem 1rem", margin: "1rem" }}
        onClick={() => handleShowPopup(3)}
      >
        Show Popup 3
      </button>

      {/* Always show popup count */}
      <p style={{ marginTop: "1rem", color: "#333" }}>
        <strong>Popup opened {popupClickCount} time(s)</strong>
      </p>

      {/* Popup itself */}
      {showPopup && (
        <PopupMessage
          title={popupTitle}
          message={popupMessage}
          count={popupClickCount}
          onClose={() => setShowPopup(false)}
        />
      )}

      {/* Counter button */}
      <ClickCounterButton />
    </div>
  );
};

export default App;
