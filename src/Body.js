import NoteDisplay from './NoteDisplay';
import NoteWriter from './NoteWriter';
import {useState } from 'react';
import getLSData from './getLSData';
import NoteList from './NoteList';

//Style used for body container
const bodyStyle = {
    height:'93vh', 
    margin:'0'
}


const Body = () => {
    //Declare and initialize notes and the display for notes
    const[notes, setNotes] = useState(getLSData("notes")?getLSData("notes"):[]);
    const[noteListDisplay, setNoteListDisplay] = useState(NoteList(notes, setNotes));

    //Add the Note Writer and Note Display parts of the application
    //Send notes and noteList as props to children
    return ( 
        <div className="row container-full" style={bodyStyle}>
            <NoteWriter notes={notes} setNotes={setNotes} noteListDisplay={noteListDisplay} setNoteListDisplay={setNoteListDisplay}/>
            <NoteDisplay notes={notes} setNotes={setNotes} noteListDisplay={noteListDisplay} setNoteListDisplay={setNoteListDisplay}/>
        </div>
    );
}
 
export default Body ;