import React, { useState, useContext } from 'react'
import noteContext from '../context/NoteContext'
const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNotes] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNotes({ title: "", description: "", tag: "" });
        props.showAlert("Added successfully","success");
    }
    const onChange = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div>
                <div className="container my-3">
                    <h2 className="my-4">Add a Note</h2>
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" value={note.title} name="title" placeholder="title" onChange={onChange} minLength={5} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" value={note.description} name="description" placeholder="Description" onChange={onChange} minLength={5} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tag</label>
                            <input type="text" className="form-control" id="tag" value={note.tag} name="tag" placeholder="tag" onChange={onChange} minLength={5} required/>
                        </div>
                        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary mb-3" onClick={handleClick}>Add Note</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNote
