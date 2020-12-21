import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from '../../Atoms';
import './header.scss'

const Index = () => {
    const history = useHistory();
    return (
        <header className="header-wrapper">
            <div className="brand-name" >Mern-Blog</div>
            <div className="user">
                <div className="logout">
                    <Link title="sign out" onClick={() => history.push('/login')} />
                </div>
            </div>
        </header>
    )
}

export default Index
