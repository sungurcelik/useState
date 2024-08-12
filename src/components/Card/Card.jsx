import { useState } from "react";
import { InfoModal } from "../InfoModal/InfoModal";
import "./Card.css";

export default function Card({ personInfo }) {
  const { userPhoto, firstName, lastName, userMail, userGender } = personInfo;
  const [infoModalGoster, setInfoModalGoster] = useState(false);

  const cardStyle = {
    backgroundColor:
      userGender === "Female"
        ? "pink"
        : userGender === "Male"
        ? "blue"
        : "orangered",
  };

  return (
    <>
      <div
        onClick={() => setInfoModalGoster(true)}
        className="card"
        style={cardStyle}
      >
        <img src={userPhoto} alt="" />
        <div>
          <h5>{firstName + " " + lastName}</h5>
          <p>{userMail}</p>
          <p>{userGender}</p>
        </div>
      </div>
      {infoModalGoster === true && (
        <InfoModal setInfoModalGoster={setInfoModalGoster} />
      )}
    </>
  );
}
