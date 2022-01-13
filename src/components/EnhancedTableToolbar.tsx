import Toolbar from "@mui/material/Toolbar";
import {alpha} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import * as React from "react";
import {StateList} from "../Typse";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useState} from "react";
import {ModalAdd} from "./Modal";

interface EnhancedTableToolbarProps {
  numSelected: number;
  setState: (value: StateList | ((prev: StateList) => void)) => void
  state: StateList
}

export const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {

  const {numSelected, setState, state} = props;
  const [flag, setFlag] = useState(false)

  const addEvent = () => {
    setFlag(true)
  }

  return (
    <>
      <Toolbar
        sx={{
          pl: {sm: 2},
          pr: {xs: 1, sm: 1},
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{flex: '1 1 100%'}}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <><Tooltip title="Add event">
            <IconButton onClick={() => addEvent()}>
              <AddCircleIcon fontSize={'large'} color={"primary"}/>
            </IconButton>
          </Tooltip>
            <Typography
              sx={{flex: '1'}}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Appointments
            </Typography></>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={() => {
              setState([])
            }}>
              <DeleteIcon/>
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon/>
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      {flag && <ModalAdd flag={flag} setFlag={setFlag} setState={setState}/>}
    </>
  );
};

