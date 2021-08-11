import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//importing actions
//importing components
import Login from "./Login";
import Sidebar from "../src/Sidebar/Sidebar";
import Chat from "../src/Chat/Chat";
import { ToastContainer } from "react-toastify";
//importing styles
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [rooms, setRooms] = useState([
    {
      id: "0000",
      data: {
        name: "John",
        messages: [{
          id: "0x01",
          uid: "0001",
          message: "Hey, I have problem with order #2"
        }, {
          id: "0x02",
          uid: "0000",
          message: "Can you tell me the problem?"
        }]
      }
    }
  ]);
  const [isRoomExist, setIsRoomExist] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className={`app ${loading === false && "app-no-bg"}`}>
      <>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Router>
              <Switch>
                <Route exact path="/">
                  <Sidebar
                    rooms={rooms}
                    setIsRoomExist={setIsRoomExist}
                    isRoomExist={isRoomExist}
                  />
                  <Chat data={rooms[0].data} isRoomExist={isRoomExist} />
                </Route>

                {/* <Route path="*">
                  <Redirect to="/" />
                </Route> */}
              </Switch>
            </Router>
          </div>
        )}
      </>
    </div>
  );
}

export default App;
