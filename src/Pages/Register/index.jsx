import React from 'react'
import { Button, Input, Link, Ghap } from '../../Components/Atoms'
import './register.scss'

const index = () => {
    return (
        <div className="register-wrapper">
            <div className="form-input">
                <h4>Register</h4>
                <Input label="Full Name" type="text" placeholder="Your Full Name" />
                <Ghap height={10} />
                <Input label="Email" type="text" placeholder=" Your Email" />
                <Ghap height={10} />
                <Input label="Password" type="password" placeholder="Password" />
                <Ghap height={15} />
                <Button button="Register" />
                <p className="link-login">Sudah punya akun? <Link title="Login" /></p>
            </div>
        </div>
    )
}

export default index
