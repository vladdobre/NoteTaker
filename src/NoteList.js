import getLSData from "./getLSData";
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import putLSData from "./putLSData";




const NoteList = (props) => {
    const notes=props.notes;
    const setNotes=props.setNotes;
    let data =  getLSData('notes');
    if(data){
        data =data.filter(note => note.notebookId == getLSData('current'));
    }else{
        data =[];
    }

    const handleDelete = (deleteId) => {
        let localNotes = getLSData('notes').filter(note=>note.noteId != deleteId);
        putLSData('notes',localNotes);
        setNotes(getLSData('notes'));
    };

    const noteList = [];

    for(const[index, note] of data.entries()){
        noteList.push(
            <div className="py-1 " style={{background:note.color}}>
                <Card className="ms-2">
                    <Card.Body>
                        <Row >
                            <Col md={8}>
                                <Card.Title className="display-6">
                                    {note.title}
                                </Card.Title>
                            </Col>
                            <Col md={{span:2, offset:2}}>
                                <Button size="sm" className="btn-danger" onClick={()=>handleDelete(note.noteId)} >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                        <Card.Text>
                            {note.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    return (
        noteList
    );
}
 
export default NoteList;