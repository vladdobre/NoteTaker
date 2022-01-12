import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Header';
import Body from './Body';
import { useEffect } from 'react';


function App() {
  //Set the document title
  useEffect(()=>{
    document.title="Notetaker++";
  });

  //Load application header and body
  return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
  );
}

export default App;
