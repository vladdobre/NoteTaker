import getLSData from "./getLSData";

//Get the ID of the current notebook
const getNotebookId = () => {
    //Get the ID from the local storage and return it
    let id = getLSData('current');
    if(id){
        return (id);
    }
    return 0;
}
 
export default getNotebookId;