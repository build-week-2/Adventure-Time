import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  const [open, setOpen] = React.useState(props.consoleLog);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen}> Console Log</button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
          className="consolelog"
        >
          Console Log
        </DialogTitle>
        <DialogContent className="consolelog" style={{ height: "300px" }}>
          <DialogContentText className="consolelog">
            <p className="log">
              {props.shortcut ? props.shortcut : ""}
              {props.currentRoom ? (
                <p>
                  room_id:{props.currentRoom.room_id} <br />
                  coordinates:{props.currentRoom.coordinates} <br />
                  title: {props.currentRoom.title} <br />
                  exits: [{props.currentRoom.exits}] <br />
                  items: [{props.currentRoom.items}] <br />
                  terrain: {props.currentRoom.terrain} <br />
                  players:[{props.currentRoom.players}] <br />
                  messages: [ {props.currentRoom.messages} ] <br />
                  errors: [{props.currentRoom.errors}] <br />
                  description:"{props.currentRoom.description}" <br />
                </p>
              ) : (
                ""
              )}
              {props.Apierror ? (
                <p>Error: Request failed with status code 400</p>
              ) : (
                ""
              )}
              {props.requestError ? props.requestError : ""}
              {props.guess ? <p>guess_hash: {props.guess}</p> : ""}
              {props.proof ? <p>Proof: {props.proof}</p> : ""}
              {props.transaction ? (
                <p>
                  index:{props.transaction.index} <br />
                  messages:{props.transaction.messages}
                  <br />
                  previous_hash{props.transaction.previous_hash}
                  <br />
                  proof:{props.transaction.proof}
                  <br />
                  transactions:{props.transaction.transactions}
                  <br />
                </p>
              ) : (
                ""
              )}
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="consolelog">
          <button onClick={handleClose}>Close</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
