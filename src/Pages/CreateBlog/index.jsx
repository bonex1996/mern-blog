import React from 'react'
import { Button, Ghap, Input, TextArea, Upload } from '../../Components/Atoms'
import './createblog.scss'

const CreateBlog = () => {
    return (
        <div className="create-blog-wrapper">
            <p className="cbwp">Create New Blog Post</p>
            <Input label="Post title" />
            <Ghap height={10} />
            <Upload />
            <Ghap height={15} />
            <TextArea />
            <Button button="Save" />
        </div>
    )
}

export default CreateBlog
