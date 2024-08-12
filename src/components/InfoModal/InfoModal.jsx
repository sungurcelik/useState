import CustomButton from "../CustomButton/CustomButton";
import "./InfoModal.css";
export const InfoModal = ({ setInfoModalGoster, personInfo }) => {
  const { firstName, lastName, userMail, userGender } = personInfo;

  return (
    <div className="info-modal-wrapper">
      <div className="info-modal">
        <form>
          <label htmlFor="">Ad Soyad:</label>
          <input type="text" value={firstName + " " + lastName} />
          <label htmlFor="">Email:</label>
          <input type="text" value={userMail} />
          <label htmlFor="">Cinsiyet:</label>
          <input type="text" value={userGender} />
          <CustomButton
            onClick={() => setInfoModalGoster(false)}
            buttonTitle={"Çıkış"}
            buttonColor={"red"}
          />
        </form>
      </div>
    </div>
  );
};
