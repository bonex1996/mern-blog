import React from 'react'
import { RegisterBG } from '../../../Assets'
import './blogitem.scss'

const Blogitem = () => {
    return (
        <div className="blog-item">
            <img src={RegisterBG} alt="img-thumb" className="image-thumb" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tempora eaque officiis officia voluptate minima nobis eum illo facere nostrum. Deserunt eveniet reiciendis odit, quo numquam ratione maiores neque commodi!</p>
            </div>
        </div>
    )
}

export default Blogitem
