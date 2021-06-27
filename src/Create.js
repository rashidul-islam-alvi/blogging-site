
import './index.css'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function Create() {


    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('');
    const [isPending , setIsPending] = useState (false);
    const history = useHistory ();


    const submitFormHandler = (e) => {
        e.preventDefault();

        const blog = {title,body,author}

        setIsPending (true);

        fetch ('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type":"application/json" },
            body: JSON.stringify (blog)
        })

        .then (()=> {
            setIsPending (false);
            console.log ("New blog added");
            history.push('/');
        })
    } 

    return (
        <div className="create">


            <h2>Add a new blog</h2>

            
            <form onSubmit={submitFormHandler}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value= {title}
                    onChange = {(e)=> setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea 
                    required
                    value= {body}
                    onChange = {(e)=> setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value= {author}
                    onChange = {(e)=> setAuthor(e.target.value)}>
                    <option value="Abid">Abid</option>
                    <option value="Alvi">Alvi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                { isPending && <button>Adding new blog</button>}

            </form>
        </div>
    )
}


