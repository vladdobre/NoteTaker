import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import putLSData from "./putLSData";
import getNotebookId from "./getNotebookId";
import { CompactPicker } from 'react-color';
import NoteList from "./NoteList";
import { Nav } from "react-bootstrap";
import getNewNoteId from "./getNewNoteId";

const NoteWriter = (props) => {

    // Get data from props
    const notes = props.notes;
    let noteListDisplay = props.noteListDisplay;
    // Declare and initialize variables used in note creation
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[color, setColor] = useState('#000');
    const[showColorPicker, setShowColorPicker] = useState(false);

    //Note creation with input from the form
    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {
            title,
            body,
            color,
            notebookId:getNotebookId(),
            noteId:getNewNoteId()
        };
        if(notes){
            props.setNotes([note,...notes]);
        }
        else{
            props.setNotes([note]);
        }

    }

    // Save notes to local storage and update the note display
    useEffect(()=>{
        putLSData('notes',notes);
        const newNoteList = <NoteList notes={notes}/>
        if(newNoteList != noteListDisplay){
            noteListDisplay = props.setNoteListDisplay(newNoteList);
        }
    },[notes])



    //Return the title and form used to create notes
    return (
        <div className='pt-5 ps-5 pe-5 col-sm-5 bg-secondary border-end border-5 border-primary'>

            {/* Title area */}
            <h1 className="text-light">
                <i className="pe-2 bi bi-journal"></i>
                Take a Note
            </h1>
            
            {/* Form used to create notes */}
            <Form onSubmit={handleSubmit}>

                {/* Input for the title of the note */}
                <Form.Group className="mb-4" controlId="noteTitle">
                    <Form.Label ><h5>Title:</h5></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Note Title"
                        required
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </Form.Group>

                {/* Input for the body of the note */}
                <Form.Group className="mb-3" controlId="noteBody">
                    <Form.Label><h5>Note:</h5></Form.Label>
                    <Form.Control 
                    as="textarea"
                    rows={10}
                    required
                    onChange={
                        (e)=> {setBody(e.target.value);
                    }
                    }
                    />
                </Form.Group>
                
                {/* Create navbar to hold Submit,Clear and Color Changer buttons*/}
                <Nav variant="pills" className="justify-content-between">
                    <Nav.Item>
                        {/* Submit Button */}
                        <Button 
                            type="submit" 
                            size="lg" 
                            className="btn-primary" 
                            variant="success">
                            Submit
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        {/* Color picker */}
                        <Button 
                            onClick={() => setShowColorPicker(showColorPicker =>!showColorPicker)} 
                            size='lg'>
                            Color Picker
                        </Button>

                    </Nav.Item>
                    <Nav.Item>
                        {/* Clear form button */}
                        <Button 
                            type='reset' 
                            className="btn-danger">
                            Clear
                        </Button>
                    </Nav.Item>
                </Nav>
                <Row>
                    {/* Display color picker when the Color Picker button is pressed */}
                    <Col md={{offset:4}}>
                        {showColorPicker &&
                        (<CompactPicker color={color} onChange={updatedColor => setColor(updatedColor.hex)}/>)
                        }   
                    </Col>

                </Row>
            </Form>

        </div>
     );
}
 
export default NoteWriter;