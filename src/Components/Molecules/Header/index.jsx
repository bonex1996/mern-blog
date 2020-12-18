import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from '../../Atoms';
import './header.scss'

const Index = () => {
    const history = useHistory();
    return (
        <header className="header-wrapper">
            <div className="brand-name">Mern-Blog</div>
            <div className="login-user">
                <Link title="Logout" onClick={() => history.push('/login')} />
            </div>
        </header>
    )
}

export default Index
