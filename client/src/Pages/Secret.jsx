import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import {useFabricJSEditor } from 'fabricjs-react'
import { ToastContainer, toast } from "react-toastify";
import Header from '../Components/Header/Header.jsx'
import Canvas from "../Components/Canvas/Canvas.jsx";

const Secret = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const { selectedObjects, editor, onReady } = useFabricJSEditor({ defaultStrokeColor: 'black' })
  const [strokeColor, setStrokeColor] = useState('black');
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000",
          {},
          { withCredentials: true }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Hi ${data.user}`, { theme: "dark", position: "bottom-right" });
      }
    };
    verifyUser();
  }, [navigate, cookies, removeCookie]);

  const logout = () => {
    removeCookie("jwt");
    navigate("/register");
  };
  const onAddCircle = () => {
    editor?.addCircle()
  }

  const onAddRectangle = () => {
     editor?.addRectangle()
   }
   const onAddLine = () => {
     editor?.addLine()
   }

   const onDeleteAll = () => {
       editor?.deleteAll();
     }
     const onDeleteSelected = () => {
       editor?.deleteSelected();
     }
     const onZoomIn = () => {
       editor?.zoomIn()
     }
     const onSetStrokeColor = () => {
       editor?.setStrokeColor(strokeColor)
     }
     const onSetFillColor = () => {
       editor?.setFillColor(strokeColor)
     }
     const onZoomOut = () => {
       editor?.zoomOut()
     }

  return (
    <>
      <div className="App">
        <nav>
          <button onClick={logout} className="logout">Logout</button>
        </nav>
        <div className="paint-body">
    {editor ? (<Header onAddCircle={onAddCircle} onAddRectangle={onAddRectangle} onAddLine={onAddLine} onDeleteSelected={onDeleteSelected} onDeleteAll={onDeleteAll} onZoomIn={onZoomIn} onZoomOut={onZoomOut}
   setStrokeColor={setStrokeColor} onSetStrokeColor={onSetStrokeColor} onSetFillColor={onSetFillColor}/>): (<>Loading...</>)}
        </div>
        <Canvas onReady={onReady}/>
      </div>
      <ToastContainer />
    </>
  );
};

export default Secret;
