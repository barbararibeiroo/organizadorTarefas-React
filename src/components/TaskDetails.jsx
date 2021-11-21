import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-contanier">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-contanier">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          accusamus eveniet earum porro eligendi nostrum animi laboriosam
          aspernatur neque saepe veritatis autem libero, sunt quo repudiandae
          repellat quisquam fugiat placeat.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
