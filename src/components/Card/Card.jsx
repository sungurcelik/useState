import "./Card.css";
import { personList } from "../../constants/fakeData";

export default function Card({ personInfo }) {
  const { userPhoto, firstName, lastName, userMail, userGender } = personInfo;
  return (
    <div
      className="card"
      style={{ backgroundColor: userGender === "Female" ? "pink": userGender === "Male" ? "blue" : "orangered" }}
    >
      <img src={userPhoto} />
      <h5>{firstName + " " + lastName}</h5>
      <p>{userMail}</p>
      <p>{userGender}</p>
    </div>
  );
}
