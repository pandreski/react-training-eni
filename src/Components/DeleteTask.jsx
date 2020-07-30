import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const DeleteTask = ({taskId, deleteTask}) => {
    return (
        <IconButton
            aria-label="delete"
            onClick={() => {
                deleteTask(taskId);
            }}
        >
            <DeleteIcon color={"error"} />
        </IconButton>
    );
};

export default DeleteTask;