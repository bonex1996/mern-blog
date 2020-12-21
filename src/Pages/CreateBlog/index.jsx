import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Ghap, Input, TextArea, Upload } from '../../Components/Atoms'
import './createblog.scss'

const CreateBlog = () => {
    const history = useHistory();
    return (
        <div className="create-blog-wrapper">
            <div className="back">
                <Button class="btn" title={<i class="fad fa-arrow-alt-from-left"></i>} onClick={() => history.push('/')} />
            </div>
            <p className="cbwp">Create New Blog Post</p>
            <Input label="Post title" />
            <Ghap height={10} />
            <Upload />
            <Ghap height={15} />
            <TextArea />
            <Button title="Save" />
        </div>
    )
}

export default CreateBlog
