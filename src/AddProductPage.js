import './style.css';
import Header1 from './Header1';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AddProductPage(){
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
            <div style={{marginRight:"10px",marginLeft:"15px", important: "all" }}><a style={{fontSize: "24px"}}>Add Product</a>
            <form>
            <div className='form-group'><label>Product Name:</label><input type='text' className='form-control' name='pname' placeholder='Enter Product Name'  /></div>
            <div className='form-group'><label>Product Description:</label><br/><textarea className='form-control' placeholder='Enter Product Description' name='pdescription' ></textarea></div>
            <div className='form-group'><label>Product Color:</label><br/><input className='form-control' type='text' placeholder='Enter Product Color' name='pcolor' /></div>
		    <div className='form-group'><label>Product Price:</label><input className='form-control' type='text' placeholder='Enter Product Price' name='pprice' /></div>
		    <div className='form-group'><label>Enter Product Image Name:</label><br/><input className='form-control' type='text'  placeholder='Enter Product Image Name(with Extension)' name='pimage'  /></div>
		    <div className='form-group'><label>Product Condition:</label><br/><input className='form-control' type='text' placeholder='Enter Product Condition' name='pcondition' /></div>
		    <div className='form-group'><label>Product Company:</label><br/><input className='form-control' type='text' placeholder='Enter Product Company' name='pcompany' /></div>
		    <div className='form-group'><label>Select Category:</label><br/><select className='form-control' name='pcategory'><option value='doorbells' selected>Smart Door Bells</option><option value='doorlocks'>Smart Door Locks</option><option value='speakers'>Smart Speakers</option><option value='lightings'>Smart Lightings</option><option value='thermostats'>Smart Thermostats</option></select></div>
		
		    </form></div>
		    <button  data-toggle='modal' data-target='#myModal1' className='btn btn-primary'>Add Product</button></div>
		    <div id='myModal1' className='modal fade' role='dialog'><div className='modal-dialog'><div className='modal-content'><div className='modal-header'> <button type='button' className='close' data-dismiss='modal'>&times;</button> <h4 className='modal-title'>Product Status</h4> </div>
		    <div className='modal-body'><p>Product Added Successfully!.</p></div><div className='modal-footer'><button type='button' className='btn btn-default' data-dismiss='modal' onClick={(e)=>(routeToComponent(e,"HomeSM"))}>Close</button></div></div></div></div>
            </div>
        </>
    );
}