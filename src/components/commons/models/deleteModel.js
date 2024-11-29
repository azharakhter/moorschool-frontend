import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import { Alert } from '@mui/material';
const DeleteModal = ({ modelDelete, handleCloseDelete, handleDelete, successMessage, errorMessage }) => {

    return (
        <div>

            <Dialog open={modelDelete} onClose={handleCloseDelete}>
                <DialogTitle>
                    {/* Conditionally render success or error message */}
                    {successMessage && (
                        <Alert severity="success">{successMessage}</Alert>
                    )}
                    {errorMessage && (
                        <Alert severity="error">{errorMessage}</Alert>
                    )}

                </DialogTitle>
                <DialogTitle>Confirm Delete</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this item?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDelete} color="primary">Cancel</Button>
                    <Button onClick={handleDelete} color="secondary" autoFocus>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteModal;
