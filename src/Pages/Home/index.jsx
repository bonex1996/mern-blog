import React from 'react'
import { Blogitem, Button, Ghap, Input } from '../../Components'
import './home.scss'

const index = () => {
    return (
        <div className="home-page-wrapper">
            <Ghap height={5} />
            <div className="seacrh">
                <Input placeholder="Masukan Pencarian ...." />
                <Button title={<i className=" fas fa-search"></i>} />
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

export default index
