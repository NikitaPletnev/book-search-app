import React from "react";
import {Alert, AlertColor, Snackbar} from "@mui/material";

interface StyledSnackBarInterface {
    type: AlertColor | undefined;
    message: string;
    
    handleClose(): void;
}

const SnackBar = ({type, message, handleClose}: StyledSnackBarInterface): JSX.Element => {
    return (
        <Snackbar
            open={!!type}
            onClose={handleClose}
            autoHideDuration={3000}
            key={"add admin snackbar"}
        >
            <Alert severity={type} sx={{
                width: "100%"
            }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default SnackBar;
