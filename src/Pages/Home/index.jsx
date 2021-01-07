import React from 'react'
import { useHistory } from 'react-router-dom'
import { Blogitem, Button, Ghap, Input } from '../../Components'
import './home.scss'

const Index = () => {
    const history = useHistory();
    return (
        <div className="home-page-wrapper">
            <Ghap height={5} />
            <div className="top-button">
                <div className="create-blog">
                    <Button title="Create Blog" onClick={() => history.push("/create-blog")} />
                </div>
                <div className="search">
                    <Input placeholder="Masukan Pencarian ...." />
                    <Button title={<i className=" fas fa-search"></i>} />
                </div>
            </div>
            <Ghap height={15} />
            <div className="content-wrapper">
                <Blogitem />
                <Blogitem />
                <Blogitem />
                <Blogitem />
            </div>
            <Ghap height={5} />
            <div className="pagination">
                <Button title="Previous" />
                <Ghap width={20} />
                <Button title="Next" />
            </div>
            <Ghap height={15} />
        </div >
    )
}

export default Index
