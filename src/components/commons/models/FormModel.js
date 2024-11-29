import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { BookingPostForm } from '../forms/BookingPostForm'

const FormModal = ({open,handleClose,modelData}) => {
    
  return (
    <div>

          <Dialog
               
              open={open} onClose={handleClose}>
        <DialogContent>
                  <BookingPostForm modelData={ modelData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormModal;
