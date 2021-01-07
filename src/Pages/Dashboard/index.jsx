import React from 'react'
import './dashboard.scss'
import { Button, Ghap, Link } from '../../Components/Atoms'
import { useHistory } from 'react-router-dom'
import { DashboardBG } from '../../Assets'

const Index = () => {
    const history = useHistory();
    return (
        <div div className="dashboard-wrapper" >
            <div className="dash-header">
                <div className="brand-name">Mern Blog</div>
                <div className="dash-login">
                    <Link className="u-login" title="Login" onClick={() => history.push('/login')} />
                </div>
            </div>
            <Ghap height={10} />
            <div className="dash-body">
                <div className="left-body">
                    <Ghap height={100} />
                    <h3 className="dash-body-title">What Is Mern Blog ???</h3>
                    <p className="dash-body-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus commodi repudiandae labore maxime beatae impedit nesciunt voluptatem itaque tempora, inventore quo repellat sunt voluptates excepturi dignissimos provident dolor fugiat soluta eum hic pariatur. Fuga beatae placeat vero facere reprehenderit, ea possimus inventore quae vel eveniet velit atque sapiente reiciendis.</p>
                    <Button title="Learn More" />
                    <Ghap height={100} />
                    <div className="medsos-info">
                        <ul>
                            <li><i className="fab fa-facebook-square"></i></li>
                            <li><i className="fab fa-twitter-square"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-github"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="right-body">
                    <img src={DashboardBG} alt="" />
                </div>
            </div>
        </div >
    )
}

export default Index
