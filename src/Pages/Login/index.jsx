import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Input, Link, Ghap } from '../../Components/Atoms'
import './login.scss'

const Index = () => {
    const history = useHistory();
    return (
        <div className="login-wrapper">
            <div className="form-input">
                <h4>Login</h4>
                <Input label="Email" type="text" placeholder=" Your Email" />
                <Ghap height={10} />
                <Input label="Password" type="password" placeholder="Password" />
                <Ghap height={15} />
                <Button button="Login" onClick={() => history.push('/')} />
                <p className="link-register">Belum Punya akun? <Link title="Register" onClick={() => history.push('/register')} /></p>
            </div>
        </div>
    )
}

export default Index
