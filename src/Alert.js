import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]); //Function ll be called everytime there is a change in the list
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
