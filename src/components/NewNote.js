import React from'react';
import'../App.css';
 
const NewNote= ({newNote, setNewNote, newImportance, setNewImportance, submitHandler}) => {
console.log(newNote);
 
return (
<div>
<form onSubmit={e=>submitHandler(e)}>
<input type="text" onChange={e=> setNewNote(e.target.value)}value={newNote}/>
<br></br>
Tärkeä:

 <input onChange={e=>setNewImportance(e.target.checked)} checked={newImportance} type="checkbox"/>
</form>
</div>
 )
}
 
export default NewNote;