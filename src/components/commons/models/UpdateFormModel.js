import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { UpdateRoomPostForm } from '../forms/UpdateRoomPostForm'


const UpdateFormModal = ({openUpdateFormModel,handleCloseUpdate,modelDataUpdate,userData}) => {
    
  return (
    <div>

          <Dialog
               
              open={openUpdateFormModel} onClose={handleCloseUpdate}>
        <DialogContent>
          <UpdateRoomPostForm modelDataUpdate={modelDataUpdate} userData={userData}  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUpdate} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateFormModal;
