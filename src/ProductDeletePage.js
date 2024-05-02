import './style.css';
import Header1 from './Header1';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductDeletePage(){
    const history = useHistory();

    function routeToComponent(e, routePath){

        e.preventDefault();
        history.push(routePath);
    }

    return(
        <>
            <div className="Container">
            <Header1 />
            <div className='post'>
            <div style={{marginRight:"10px",marginLeft:"15px", important: "all" }}><a style={{fontSize: "24px"}}>Delete Product</a>
            <form>
            <div className='form-group'><label>Select Product:</label><select className='form-control' name='pcategory'><option value='ringwired' selected>Ring - Wi-Fi Video Doorbell - Wired - Black</option><option value='ringwireless'>Ring 1080p Wireless Video Doorbell</option><option value='googlenest'>Google - Nest Doorbell Wired (2nd Generation)</option><option value='arlowired'>Arlo Essential 1080p Wired Video Doorbell</option><option value='arlowireless'>Arlo - Essential Wireless Video Doorbell</option><option value='blinkvideo'>Blink Video Doorbell</option><option value='Blink Video Doorbell'>Yale Assure Lock 2 Keypad with Bluetooth</option><option value='nestxyale'>Nest x Yale Lock with Nest Connect</option><option value='simplisafesmartlock'>SimpliSafe - Smart Lock Wi-Fi</option><option value='philipslock'>Philips Smart Lock</option><option value='yaleassure'>YALE ASSURE YRL226-ZW2</option><option value='Philipslight'>Philips Hue Fair Ceiling Light</option><option value='gowinglight'>Gowing Smart Ceiling Light Fixture Flush Mount LED</option><option value='et2hive'>ET2 Hive 8 inch Wide Mini Pendant</option><option value='et2icorona'>ET2 iCorona 18 inch Wide LED Flush Mount Drum Smart Ceiling Fixture - 277</option><option value='et2chimes'>ET2 Chimes 15 inch Tall LED Bathroom Sconce</option><option value='echodot'>Echo Dot (5th Gen, 2022 release) with clock</option><option value='bosespeaker'>Bose Home Speaker 500: Smart Bluetooth Speaker</option><option value='sonosone'>Sonos One</option><option value='applemini'>Apple HomePod mini</option><option value='echodot2'>Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa</option><option value='applehomepod'>Apple Homepod</option><option value='googlenest'>Google - Nest Learning Smart Wifi Thermostat</option><option value='echobeelite'>echobee3 Lite Smart Thermostat</option><option value='mysasmart'>Mysa Smart Thermostat</option><option value='amazonsmart'>Amazon Smart Thermostat</option></select></div>
            </form></div>
		    <button  data-toggle='modal' data-target='#myModal2' className='btn btn-primary'>Delete Product</button></div>
		    <div id='myModal2' className='modal fade' role='dialog'><div className='modal-dialog'><div className='modal-content'><div className='modal-header'> <button type='button' className='close' data-dismiss='modal'>&times;</button> <h4 className='modal-title'>Product Status</h4> </div>
		    <div className='modal-body'><p>Product Deleted Successfully!.</p></div><div className='modal-footer'><button type='button' className='btn btn-default' data-dismiss='modal' onClick={(e)=>(routeToComponent(e,"HomeSM"))}>Close</button></div></div></div></div>
            </div>
        </>
    );
}