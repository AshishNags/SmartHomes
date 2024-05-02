import './style.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LeftNavigationBar() {
    
	const history = useHistory();

		function routeToComponent(e, routePath){

			e.preventDefault();
			history.push(routePath);
		}		
		
		
		return(
        <div>
        <div id="sidebar">
	<ul>
		<li>
			<h2 style={{ background:'brown'}}>Smart Doorbells</h2>
			<ul>
				<li id="first"><a href="DoorBellsList?maker=arlo" onClick={(e)=>(routeToComponent(e,"DoorBellsList?maker=arlo")) }>Arlo </a></li>
				<li><a href="DoorBellsList?maker=blink" onClick={(e)=>(routeToComponent(e,"DoorBellsList?maker=blink")) }>Blink </a></li>
				<li><a href="DoorBellsList?maker=google" onClick={(e)=>(routeToComponent(e,"DoorBellsList?maker=google")) }>Google </a></li>
				<li><a href="DoorBellsList?maker=ring" onClick={(e)=>(routeToComponent(e,"DoorBellsList?maker=ring")) }>Ring</a></li>
			</ul>
		</li>
		<li>
			<h2 style={{ background:'brown'}}>Smart Doorlocks</h2>
			<ul>
				<li id="first"><a href="DoorLocksList?maker=yale" onClick={(e)=>(routeToComponent(e,"DoorLocksList?maker=yale")) }>Yale</a></li>
				<li><a href="DoorLocksList?maker=philips" onClick={(e)=>(routeToComponent(e,"DoorLocksList?maker=philips")) }>Philips</a></li>
				<li><a href="DoorLocksList?maker=simplisafe" onClick={(e)=>(routeToComponent(e,"DoorLocksList?maker=simplisafe")) }>Simplisafe</a></li>
			</ul>
		</li>
		<li>
			<h2 style={{ background:'brown'}}>Smart Lightings</h2>
			<ul>
				<li id="first"><a href="LightingsList?maker=et2" onClick={(e)=>(routeToComponent(e,"LightingsList?maker=et2")) }>ET2</a></li>
				<li><a href="LightingsList?maker=philips" onClick={(e)=>(routeToComponent(e,"LightingsList?maker=philips")) }>Philips</a></li>
				<li><a href="LightingsList?maker=gowing" onClick={(e)=>(routeToComponent(e,"LightingsList?maker=gowing")) }>Gowing</a></li>
			</ul>
		</li>
		
		<li>
			<h2 style={{ background:'brown'}}>Smart Speakers</h2>
			<ul>
				<li id="first"><a href="SpeakersList?maker=bose" onClick={(e)=>(routeToComponent(e,"SpeakersList?maker=bose")) }>Bose</a></li>
				<li><a href="SpeakersList?maker=apple" onClick={(e)=>(routeToComponent(e,"SpeakersList?maker=apple")) }>Apple</a></li>
				<li><a href="SpeakersList?maker=amazon" onClick={(e)=>(routeToComponent(e,"SpeakersList?maker=amazon")) }>Amazon</a></li>
				<li><a href="SpeakersList?maker=sonos" onClick={(e)=>(routeToComponent(e,"SpeakersList?maker=sonos")) }>Sonos</a></li>
			</ul>
		</li>
		
		<li>
			<h2 style={{ background:'brown'}}>Smart Thermostats</h2>
			<ul>
				<li id="first"><a href="ThermostatsList?maker=amazon" onClick={(e)=>(routeToComponent(e,"ThermostatsList?maker=amazon")) }>Amazon</a></li>
				<li><a href="ThermostatsList?maker=echobee" onClick={(e)=>(routeToComponent(e,"ThermostatsList?maker=echobee")) }>Echobee</a></li>
				<li><a href="ThermostatsList?maker=mysa" onClick={(e)=>(routeToComponent(e,"ThermostatsList?maker=mysa")) }>Mysa</a></li>
				<li><a href="ThermostatsList?maker=google" onClick={(e)=>(routeToComponent(e,"ThermostatsList?maker=google")) }>Google</a></li>
			</ul>
		</li>
		<li>
			<h2 style={{ background:'brown'}}>Accessories</h2>
			<ul>
				<li id="first"><a href="AccessoryList?maker=doorbells" onClick={(e)=>(routeToComponent(e,"AccessoryList?maker=doorbells")) }>Doorbells</a></li>
				<li><a href="AccessoryList?maker=speakers" onClick={(e)=>(routeToComponent(e,"AccessoryList?maker=speakers")) }>Speakers</a></li>
				<li><a href="AccessoryList?maker=lightings" onClick={(e)=>(routeToComponent(e,"AccessoryList?maker=lightings")) }>Lightings</a></li>
			</ul>
		</li>
	</ul>
</div>
    </div>    
    );
}
export default LeftNavigationBar;