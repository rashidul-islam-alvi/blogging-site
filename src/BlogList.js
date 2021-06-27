import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class blogList extends Component {
    render() {
        return (
            <div className="blog-lists-container">
                <h2 className="blog-header">{this.props.title}</h2>

                <div className="blog-lists">


                        {this.props.blogs.map ((blog)=> (
                        <div className="blog-preview" key={blog.id}>

                            <Link to={`blog/${blog.id}`}>
                                <h2 className="blog-title">{blog.title}</h2>
                                <p>Writen by <b>{blog.author}</b></p>
                            </Link>
                       
                        </div>
                ))}



                </div>

            </div>
        )
    }
}






