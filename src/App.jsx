import React, { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from './assets/img/toastify.png';


function App() {

  // const notify = () => toast("Wow so easy!");
  // Aşağıdaki ile aynı çalışıyor
  function notify() {
    toast("bottom-right toast", {
      position: "bottom-right",

    })
  }
  function notify2() {
    toast("top-center toast", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  // Promise alttaki

  let promise = () => {
    const resolveAfter3Sec = new Promise((resolve, reject) => {
      setTimeout(reject, 3000);
    });
    toast.promise(resolveAfter3Sec, {
      pending: "Promise is Pending",
      success: "Promise is resolved",
      error: "Promise rejected",
    });
  };

  // function notify3() {
  //   toast("bottom-right", {
  //     position: "bottom-right toast",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // }

  return (
    <div className="App">
      <br></br>
      <button onClick={notify}>bottom-right</button>
      <ToastContainer />
      <br></br>
      <button onClick={notify2}>top-center</button>
      <ToastContainer />
      <br></br>
      <ToastContainer theme="dark" />
      <button onClick={promise}>PROMISE LOAD</button>
      <div className="container">
        <h1>toastify 3 Favorites</h1>
        <img src={Logo} alt="React Logo" />
      </div>
    </div>
  )
}

export default App
