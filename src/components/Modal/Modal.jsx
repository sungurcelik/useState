import CustomButton from "../CustomButton/CustomButton";
import "./Modal.css";
export const Modal = ({ setModalGoster }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <form>
          <label htmlFor="">Adınızı Giriniz</label>
          <input type="text" />
          <label htmlFor="">Soyadınızı Gİriniz</label>
          <input type="text" />
          <CustomButton
            onClick={() => setModalGoster(false)}
            buttonTitle={"Çıkış"}
            buttonColor={"red"}
          />
        </form>
      </div>
    </div>
  );
};
