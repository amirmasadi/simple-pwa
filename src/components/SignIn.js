import googleLogo from "../assets/google.png";
import "./signin.css";
import { /*db,*/ auth, provider } from "../firebase";
import { SetUserContext } from "../DataProvider";
import { useContext } from "react";

export default function SignIn({ rooms }) {
  const setUser = useContext(SetUserContext);

  function signIn() {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user.displayName);
        // addRoom(result.user.displayName);
      })
      .catch((error) => console.log(error.message));
  }

  // function addRoom(roomName) {
  //   db.collection("rooms").add({ name: roomName });
  // }

  return (
    <div className="sign-in">
      <h3>sign in to access the chat</h3>
      <div className="sign-google" onClick={() => signIn()}>
        <img src={googleLogo} alt="google logo" />
        <h4>Sgin In With Google</h4>
      </div>
    </div>
  );
}
