import React from 'react'
import { useParams } from 'react-router'
import useFetch from './useFetch'
import {useHistory} from 'react-router-dom'
import './index.css'


export default function BlogDetails() {

   
    const {id} = useParams();
    const {Data : blog , isPending ,error} = useFetch ('http://localhost:8000/blogs/'+id)
    const history = useHistory ();

    const deleteHandler = () => {

        fetch ('http://localhost:8000/blogs/'+blog.id,{
            method: 'DELETE'
        })
        .then (()=>{
            history.push ('/')
        })
    }
   



    return (
        <div>
            {error && <div className="errorMsgSyle">{error}</div>}
            {isPending && <div className="loadingStyle">Loading.......</div> }
            {blog && 
                    <article className="blog-details"> 
                        <h2>{blog.title}</h2> 
                        <p>Writen by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={deleteHandler}>Delete</button>
                    </article>}
        </div>
    )
}
