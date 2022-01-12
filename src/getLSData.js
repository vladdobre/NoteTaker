const getLSData = (input) => {
    // Get data by name from local storage and parse it from JSON
    let data=localStorage.getItem(input);
    if(data!="undefined"){
        return JSON.parse(data);
    }else{
        //return default value null
        return null;
    }
}
 
export default getLSData;