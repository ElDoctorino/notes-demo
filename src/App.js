import React, {useState, useEffect} from 'react';
import './App.css';
import NewNote from './components/NewNote';
import Note from './components/Notes';
import noteService from './services/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newImportance, setNewImportance] = useState(false);
  
  const getNotes =  () => {
  noteService
    .getAll()
    .then(allNotes => {
    setNotes(allNotes);
    })
};

//muistiinpanot alussa haetaan
useEffect(getNotes,[]);

const addNote = event => {
  const now = new Date();
  event.preventDefault();
  const testNote = {
    content: newNote,
    date: now.toISOString(),
    important: newImportance
  };
noteService.add(testNote)
  .then(note => {
    let tempNotes = notes.concat(note);
    setNotes(tempNotes);
    setNewNote("");
    setNewImportance(false);
})
}




  return (
    <div className="App">
      <header className="App-header">
      <h1> JSON-server with notes</h1>
      <NewNote newNote ={newNote} setNewNote={setNewNote} newImportance={newImportance} setNewImportance={setNewImportance} submitHandler={addNote} />
      <button onClick={e => addNote(e)}>Lisää muistiinpano! </button>
      <Note mynotes={notes}  setNotes={setNotes}></Note>
      
      </header>
    </div>
  );
}

export default App;