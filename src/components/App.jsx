import React from "react"
import { useState } from "react"

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import CreateArea from "./CreateArea.jsx"


function App(){
    const [notes, setNotes] = useState([])
    function addNote(note){

        setNotes(prev => {
            return [...prev, note]
        })
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id 
            })
        })
    }

    return (<>
    <div>
    <Header />
    </div>
    <CreateArea onAdd={addNote} />
    <div> 
        {notes.map((noteItem, index) => {
            return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
        })}
    </div>
    <div>
    <Footer />
    </div>
    </>
    )
};

export default App;