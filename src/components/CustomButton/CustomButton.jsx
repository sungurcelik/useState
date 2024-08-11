import "./CustomButton.css";
function CustomButton({ buttonTitle, buttonColor, onClick }) {
  return (
    <button
      className="custom-button"
      style={{
        backgroundColor: buttonColor,
      }}
      onClick={onClick}
    >
      {buttonTitle}
    </button>
  );
}

export default CustomButton;
