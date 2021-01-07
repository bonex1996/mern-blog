import React from 'react'
import { RegisterBG } from '../../../Assets'
import './blogitem.scss'
import { Button, Ghap } from '../../Atoms'

const Blogitem = () => {
    return (
        <div className="blog-item">
            <img src={RegisterBG} alt="img-thumb" className="image-thumb" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tempora eaque officiis officia voluptate minima nobis eum illo facere nostrum. Deserunt eveniet reiciendis odit, quo numquam ratione maiores neque commodi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tempora eaque officiis officia voluptate minima nobis eum illo facere nostrum. Deserunt eveniet reiciendis odit, quo numquam ratione maiores neque commodi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tempora eaque officiis officia voluptate minima nobis eum illo facere nostrum. Deserunt eveniet reiciendis odit, quo numquam ratione maiores neque commodi!</p>
                <Ghap height={10} />
                <Button title="Lihat Postingan" />
            </div>
        </div>
    )
}

export default Blogitem
