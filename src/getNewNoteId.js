import getLSData from "./getLSData";

//Generate an ID for a note
const getNewNoteId = () => {
    //Load notes from local storage
    let notes = getLSData('notes');
    //Find the largest ip in use
    let new_id= Math.max(...notes.map(note=>note.noteId),0);
    //Increment that ip or use a default value if there are no notes in use
    new_id = new_id < 0 ? 0 : new_id+1;
    return (new_id);
}
 
export default getNewNoteId;