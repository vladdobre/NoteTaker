import Button from "react-bootstrap/esm/Button";
import NoteSort from "./NoteSort";
import NoteList from "./NoteList";
import NotebookSelection from "./NotebookSelection";
import getNotebookId from "./getNotebookId";

//Style for the container of the note list. Makes it scrollable
const noteListStyle={
    overflowY:"scroll", 
    height:"70vh"
}

//Display notes in the selected notebook
const NoteDisplay = (props) => {
    const id = getNotebookId();
    return (
        <div className="pt-5 col-sm-7 bg-light">
            {/* Header of the section */}
            <div className="border-bottom border-5 border-dark d-flex justify-content-between">
                <h1>
                    <i className="p-2 bi bi-book"></i>
                    Read Notes
                </h1>
                <div className="d-flex">
                    {/* Buttons for sorting the notes by color*/}
                    <Button className="btn-primary m-4" onClick={NoteSort}>Sort by Color</Button>
                    {/* Notebook selection menu */}
                    <NotebookSelection noteListDisplay={props.noteListDisplay} setNoteListDisplay={props.setNoteListDisplay}/>
                </div>
            </div>
            {/* Container for all of the notes in the selected notebook */}
            <div  style={noteListStyle}>
                <NoteList notes={props.notes} setNotes={props.setNotes}/>
            </div>
        </div>
    );
}
 
export default NoteDisplay;