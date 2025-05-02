import React from "react";
import { useNavigate } from "react-router-dom";

const CallButton = ({ title, handleSubmit, falseMargin }) => {
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate('/register')
        window.scrollTo({behavior:'instant', top:'0'})
    }
  return (
    <div>
      <div
        className={`flex justify-center items-center ${
          falseMargin ? "" : "mt-4"
        } `}
      >
        <button
          className="get-started-submit-button font-poppins-regular"
          onClick={handleSubmit ? handleSubmit : handleNavigate }
        >
          {title || "Get Started"}
        </button>
      </div>
    </div>
  );
};

export default CallButton;
