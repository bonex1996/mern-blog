import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Input, Link, Ghap } from '../../Components/Atoms'
import './login.scss'

const Index = () => {
    const history = useHistory();
    return (
        <div className="login-wrapper">
            <div className="form-login">
                <div className="left-item">
                    <h4 className="tr">Login Blog</h4>
                    <Ghap height={25} />
                    <p className="ti">Silahkan Masukan Data</p>
                    <Ghap height={5} />
                    <div className="input-icon">
                        <Input placeholder="Email" />
                    </div>
                    <Ghap height={5} />
                    <div className="input-icon">
                        <Input type="password" placeholder="Password" />
                    </div>
                    <Ghap height={25} />
                    <Button title="sign in" onClick={() => history.push('/')} />
                </div>
                <div className="right-item">
                    <h4 className="tr">Welcome!</h4>
                    <Ghap height={15} />
                    <p className="cr">if you not have account, please for register.</p>
                    <Ghap height={50} />
                    <Button title="sign up" onClick={() => history.push('/register')} />
                </div>

            </div>
        </div>
    )
}

export default Index
