import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Input, Link, Ghap } from '../../Components/Atoms'
import './register.scss'


const Index = () => {
    const history = useHistory();
    return (
        <div className="register-wrapper">
            <div className="form-register">
                <div className="left-item">
                    <h4 className="tr">Welcome Back!</h4>
                    <Ghap height={15} />
                    <p className="cr">if you have account, please for login.</p>
                    <Ghap height={50} />
                    <Button title="sign in" onClick={() => history.push('/login')} />
                </div>
                <div className="right-item">
                    <h4 className="tr">Create Account</h4>
                    <Ghap height={25} />
                    <p className="ti">Silahkan Masukan Data</p>
                    <div className="full-name">
                        <Input placeholder="Full Name" />
                    </div>
                    <Ghap height={5} />
                    <div className="email">
                        <Input placeholder="Email" />
                    </div>
                    <Ghap height={5} />
                    <div className="password">
                        <Input type="password" placeholder="Password" />
                    </div>
                    <Ghap height={25} />
                    <Button title="sign up" onClick={() => history.push('/login')} />
                </div>
            </div>
        </div>
    )
}

export default Index
