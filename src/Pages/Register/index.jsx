import React from 'react'
import Button from '../../Components/Atoms/Button'
import Ghap from '../../Components/Atoms/Ghap'
import Input from '../../Components/Atoms/Input'
import Link from '../../Components/Atoms/Link'
import './register.scss'

const index = () => {
    return (
        <div className="register-wrapper">
            <div className="form-input">
                <h4>Register</h4>
                <Input label="Full Name" placeholder="Your Full Name" />
                <Ghap height={10} />
                <Input label="Email" placeholder=" Your Email" />
                <Ghap height={10} />
                <Input label="Password" placeholder="Password" />
                <Ghap height={15} />
                <Button button="Register" />
                <Link title="Kembali Ke Login" />
            </div>
        </div>
    )
}

export default index
