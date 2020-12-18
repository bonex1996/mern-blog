import React from 'react'
import { Blogitem, Button, Ghap } from '../../Components'
import './home.scss'

const index = () => {
    return (
        <div className="home-page-wrapper">
            <div className="content-wrapper">
                <Blogitem />
                <Blogitem />
                <Blogitem />
                <Blogitem />
            </div>
            <Ghap height={15} />
            <div className="pagination">
                <Button button="Previous" />
                <Ghap width={10} />
                <Button button="Next" />
            </div>
        </div>
    )
}

export default index
