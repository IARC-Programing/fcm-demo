import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import app from "../config/firebase";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { toast, ToastContainer } from "react-toastify";
function App() {
  const [count, setCount] = useState(0);
  const messaging = getMessaging(app);
  const vapidKey = import.meta.env.VITE_VAPID_KEY;

  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    toast(
      `Message received. ${payload.notification.title} ${payload?.notification?.body}`
    );
  });

  const registerNotify = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      getToken(messaging, { vapidKey }).then((currentToken) => {
        console.log("Token", currentToken);
        toast.success("Token: " + currentToken);
      });
    } else {
      alert("Notification permission denied");
    }
  };

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => registerNotify()}>Register Notify</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <ToastContainer />
    </>
  );
}

export default App;
