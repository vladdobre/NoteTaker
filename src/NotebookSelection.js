import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import getLSData from "./getLSData";
import NoteList from "./NoteList";
import putLSData from "./putLSData";

//Implement notbook generation and selection functionality
const NotebookSelection = (props) => {
    //Initialize the notebooks array, current notebook and the name of hte current notebook and get the necessary data from Local Storage
    const [notebooks, setNotebooks] = useState(getLSData('notebooks') ? getLSData('notebooks'): [{id:0, name:'Base'}]);
    const [current, setCurrent] = useState(getLSData('current')?getLSData('current'):0);
    const [notebookName, setNotebookName] = useState(getLSData('notebook_name')?getLSData('notebook_name'):'Select Notebook');

    //Update notebook list and current notebook local storage 
    useEffect(()=>{
        putLSData('current',current);
        putLSData('notebooks',notebooks);
    },[current, notebooks])

    //update local stoarge with the name of the current notebook
    useEffect(()=>{
        putLSData('notebook_name',notebookName);
    }, [notebookName])

    //Create a new notebook,add it to the list in local storage and switch to it.
    const addNotebook = ()=>{
        const id = notebooks.length;
        const enterTitle = prompt('Please enter notebook title', '');
        if(enterTitle !=''){
            const new_notebook={
                id,
                name:enterTitle
            }
            setNotebooks([...notebooks,new_notebook]);
            setNotebookName(enterTitle);
            setCurrent(id);
            putLSData('current',current);
            putLSData('notebooks',notebooks);
        }
    }
    
    //Update the list of notes when the notebook is changed
    useEffect(()=>{
        props.setNoteListDisplay(<NoteList/>);
    },[current])

    //Open a notebook chosen from the list.
    const openNotebook = (e) =>{
        setCurrent(e.target.id);
        setNotebookName(e.target.name);
    }
    
    //Create dropdown items for the Notebook selection menu.
    const notebookList = [];
    notebooks.map(
        notebook => {
            notebookList.push(
                <Dropdown.Item onClick={openNotebook} name={notebook.name} id={notebook.id}>{notebook.name}</Dropdown.Item>
            )
        }
    )

    //Return the dropdown menu used to select a notepad or create one
    return (                    
        <Dropdown className="m-4">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {notebookName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {notebookList}
                <Dropdown.Item onClick={addNotebook}>
                    Add Notebook 
                    <i className="bi bi-journal-plus ps-2"></i>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown> 
    );
}
 
export default NotebookSelection;