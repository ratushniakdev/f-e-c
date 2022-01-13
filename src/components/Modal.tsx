import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {Grid, TextField} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import {State, StateList} from "../Typse";


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  setFlag: (value: boolean) => void
  flag: boolean
  setState: (value: StateList | ((prev: StateList) => void)) => void
}


export const ModalAdd = (props: ModalProps) => {
  const {flag, setFlag, setState} = props

  const handleClose = () => setFlag(false);

  const [form, setForm] = React.useState <State>({
    id: `${Date.now()}`,
    startDate: "",
    endDate: "",
    clinicianName: "",
    patient: {
      name: "",
      id: `${Date.now()}`,
    },
    status: "ACTIVE",
  })


  const addEvent = () => {
    setState((prev) => [...prev, form])
  }

  return (
    <div>
      <Modal
        open={flag}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <h2> Add event</h2>
            <Grid container rowSpacing={5} columnSpacing={{xs: 1, sm: 2, md: 3}}>
              <Grid item xs={6}>
                <TextField onChange={(e) => {
                  setForm((prev) => ({...prev, clinicianName: e.target.value}))
                }} id="outlined-basic" label="Name clinic" variant="outlined"/>
              </Grid>
              <Grid item xs={6}>
                <TextField onChange={(e) => {
                  setForm((prev) => ({...prev, patient: {...prev.patient, name: e.target.value}}))
                }} id="outlined-basic" label="Name patient " variant="outlined"/>
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Start data"
                    value={form.startDate}
                    onChange={(newValue) => {
                      setForm((prev) => ({...prev, startDate: `${newValue}`}));
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="End data"
                    value={form.endDate}
                    onChange={(newValue) => {
                      setForm((prev) => ({...prev, endDate: `${newValue}`}));
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <Button color={"secondary"} onClick={handleClose}>Cancel</Button>
                <Button onClick={addEvent} color={"primary"}>Add</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}