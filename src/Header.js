import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useUser } from './UserContext';
import {React, useEffect} from 'react';
import { useCart } from "./CartContext";
import './style.css';

export default function Header(){

	const history = useHistory();

	const { items, count, updateCount } = useCart();


	function routeToComponent(e, routePath){

		e.preventDefault();
		history.push(routePath);
	}

	const {user} = useUser();
    const { username, usertype } = user || {};

    return(
        <>
		{/* The name of the company goes here  */}
			
		<h1 style={{ color:'brown' , paddingLeft:'20px'}}>SMART HOME APPLIANCES</h1>
          <p style={{ color:'brown' , paddingLeft:'20px' }}>One stop for all home appliances</p>
		{/* the navigation bar starts here, the remaining items are added according to the session value from utilites servlet  */}

        <nav className="navbar navbar-default">    
			<div className="container-fluid" id="menu">
				<ul className="nav navbar-nav">
					<li><a href="Home"  onClick={(e)=>(routeToComponent(e,"Home")) } className="first"><span className="glyphicon glyphicon-home" style={{ paddingLeft: '250px' }}>Home</span></a></li>
					<li><a target="DoorBellsList" href="DoorBellsList" onClick={(e)=>(routeToComponent(e,"DoorBellsList")) }><span className="glyphicon">Smart-Doorbells</span></a></li>
					<li><a href="DoorLocksList" onClick={(e)=>(routeToComponent(e,"DoorLocksList")) }><span className="glyphicon">Smart-Doorlocks </span></a></li>
					<li><a href="SpeakersList" onClick={(e)=>(routeToComponent(e,"SpeakersList")) }><span className="glyphicon">Smart-Speakers</span></a></li>
					<li><a href="LightingsList" onClick={(e)=>(routeToComponent(e,"LightingsList")) }><span className="glyphicon">Smart-Lightings</span></a></li>
					<li><a href="ThermostatsList" onClick={(e)=>(routeToComponent(e,"ThermostatsList")) }><span className="glyphicon">Smart-Thermostats</span></a></li>
					<li><a href="AccessoryList?maker=all" onClick={(e)=>(routeToComponent(e,"AccessoryList?maker=all"))} ><span className="glyphicon">Accessory </span></a></li>
				</ul>
			</div>
            <div style={{float: 'right'}} >
                <ul className='nav navbar-nav'>
                    <li><a href='ViewOrder' onClick={(e)=>(routeToComponent(e,"ViewOrder"))}><span className='glyphicon'>View Order</span></a></li>
                    {username ? (<li>
					<a><span className='glyphicon'>Hello, {username}</span></a></li>
						) : null}
					{username ? (<>
					<li><a href='Logout' onClick={(e)=>(routeToComponent(e,"Logout"))}><span className='glyphicon'>Logout</span></a></li>
					<li><a href='Account' onClick={(e)=>(routeToComponent(e,"Account"))}><span className='glyphicon'>Account</span></a></li></>):
					<li><a href='Login' onClick={(e)=>(routeToComponent(e,"Login"))}><span className='glyphicon'>Login</span></a></li>}
                    <li><a href='Cart' onClick={(e)=>(routeToComponent(e,"Cart"))}><span className='glyphicon'>Cart({count})</span></a></li>
                </ul>
            </div>
        </nav>
    

        </>
    );
}