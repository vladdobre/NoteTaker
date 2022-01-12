import getLSData from "./getLSData";
import putLSData from "./putLSData";

const NoteSort = () => {
    //Sort Notes by color
    const sortedNotes = getLSData("notes").sort((a,b)=> a.color > b.color ? 1:-1);
    putLSData('notes',sortedNotes);
    window.location.reload();
    //Check if you can update without reload
}
 
export default NoteSort;