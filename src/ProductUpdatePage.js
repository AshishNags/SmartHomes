import './style.css';
import Header1 from './Header1';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductUpdatePage(){
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
            <div style={{marginRight:"10px",marginLeft:"15px", important: "all" }}><a style={{fontSize: "24px"}}>Update Product</a>
            <form>
            <div className='form-group'><label>Select Product:</label><select className='form-control' name='pcategory'><option value='ringwired' selected>Ring - Wi-Fi Video Doorbell - Wired - Black</option><option value='ringwireless'>Ring 1080p Wireless Video Doorbell</option><option value='googlenest'>Google - Nest Doorbell Wired (2nd Generation)</option><option value='arlowired'>Arlo Essential 1080p Wired Video Doorbell</option><option value='arlowireless'>Arlo - Essential Wireless Video Doorbell</option><option value='blinkvideo'>Blink Video Doorbell</option><option value='Blink Video Doorbell'>Yale Assure Lock 2 Keypad with Bluetooth</option><option value='nestxyale'>Nest x Yale Lock with Nest Connect</option><option value='simplisafesmartlock'>SimpliSafe - Smart Lock Wi-Fi</option><option value='philipslock'>Philips Smart Lock</option><option value='yaleassure'>YALE ASSURE YRL226-ZW2</option><option value='Philipslight'>Philips Hue Fair Ceiling Light</option><option value='gowinglight'>Gowing Smart Ceiling Light Fixture Flush Mount LED</option><option value='et2hive'>ET2 Hive 8 inch Wide Mini Pendant</option><option value='et2icorona'>ET2 iCorona 18 inch Wide LED Flush Mount Drum Smart Ceiling Fixture - 277</option><option value='et2chimes'>ET2 Chimes 15 inch Tall LED Bathroom Sconce</option><option value='echodot'>Echo Dot (5th Gen, 2022 release) with clock</option><option value='bosespeaker'>Bose Home Speaker 500: Smart Bluetooth Speaker</option><option value='sonosone'>Sonos One</option><option value='applemini'>Apple HomePod mini</option><option value='echodot2'>Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa</option><option value='applehomepod'>Apple Homepod</option><option value='googlenest'>Google - Nest Learning Smart Wifi Thermostat</option><option value='echobeelite'>echobee3 Lite Smart Thermostat</option><option value='mysasmart'>Mysa Smart Thermostat</option><option value='amazonsmart'>Amazon Smart Thermostat</option></select></div>
            <div className='form-group'><label>Product Name:</label><input type='text' className='form-control' name='pname' placeholder='Enter Product Name'  /></div>
            <div className='form-group'><label>Product Description:</label><br/><textarea className='form-control' placeholder='Enter Product Description' name='pdescription' ></textarea></div>
            <div className='form-group'><label>Product Color:</label><br/><input className='form-control' type='text' placeholder='Enter Product Color' name='pcolor' /></div>
		    <div className='form-group'><label>Product Price:</label><input className='form-control' type='text' placeholder='Enter Product Price' name='pprice' /></div>
		    <div className='form-group'><label>Enter Product Image Name:</label><br/><input className='form-control' type='text'  placeholder='Enter Product Image Name(with Extension)' name='pimage'  /></div>
		    <div className='form-group'><label>Product Condition:</label><br/><input className='form-control' type='text' placeholder='Enter Product Condition' name='pcondition' /></div>
		    <div className='form-group'><label>Product Company:</label><br/><input className='form-control' type='text' placeholder='Enter Product Company' name='pcompany' /></div>
		    <div className='form-group'><label>Select Category:</label><br/><select className='form-control' name='pcategory'><option value='doorbells' selected>Smart Door Bells</option><option value='doorlocks'>Smart Door Locks</option><option value='speakers'>Smart Speakers</option><option value='lightings'>Smart Lightings</option><option value='thermostats'>Smart Thermostats</option></select></div>
		
		    </form></div>
		    <button  data-toggle='modal' data-target='#myModal' className='btn btn-primary'>Update Product</button></div>
		    <div id='myModal' className='modal fade' role='dialog'><div className='modal-dialog'><div className='modal-content'><div className='modal-header'> <button type='button' className='close' data-dismiss='modal'>&times;</button> <h4 className='modal-title'>Product Status</h4> </div>
		    <div className='modal-body'><p>Product Updated Successfully!.</p></div><div className='modal-footer'><button type='button' className='btn btn-default' data-dismiss='modal' onClick={(e)=>(routeToComponent(e,"HomeSM"))}>Close</button></div></div></div></div>
            </div>
        </>
    );
}