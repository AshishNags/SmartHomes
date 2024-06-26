import Header from "./Header";
import LeftNavigationBar from "./LeftNavigationBar";
import { useState} from "react";
import { useUser } from "./UserContext";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Cart(cartItems){

 
  const {user} = useUser();
  let ID = 0
  const { username, usertype } = user || {};
  const history = useHistory()

  if (!username){
    history.push('/Login')
    
  }

  const [items,setItems] = useState(cartItems.cartItems)
  const [display,setDisplay] = useState(1)  
  const [orderId,setOrderID] = useState(0)  
  
  let total =0;

  items.map((item)=>{
    total = total + parseFloat(item.price)
  })



  function removeItem(item) {
    
    console.log("removeiscalled")

    const temp = items.filter((cartItem)=> !(cartItem === item))

    console.log(temp)

    setItems(temp)
    cartItems.removeItem(item)

  };


  function storedPaymentDetails(){

    const storedPaymentDetails = JSON.parse(localStorage.getItem('PaymentDetails'));

    console.log(storedPaymentDetails);

    let tempOrder = storedPaymentDetails.orders;
    console.log(tempOrder)

    let orderId = tempOrder[tempOrder.length -1].orderid + 1;

    let orderItems = items.map((i) =>({'userName':username,'orderName':i.name,'orderPrice':i.price}))
    tempOrder.push({'orderid' : orderId, 'items':orderItems})

    console.log("added payment items")
    console.log(storedPaymentDetails)

    localStorage.setItem('PaymentDetails', JSON.stringify(storedPaymentDetails))
    
    setOrderID(orderId)
    cartItems.removeItem("")

    return orderId;

  }

  // Function to get unique categories from items
  function getUniqueCategories() {
    const categoriesSet = new Set();
    items.forEach((item) => {
      categoriesSet.add(item.category);
    });
    return Array.from(categoriesSet);
  }

  function renderAccessoriesForCategory(category) {
    // Call accessorylist.js or render accessories based on the category
    // You can pass category as a prop to accessorylist.js
   
    if(category === "Doorbells") {
      return (
      <>
  <h2>Accessory for Door Bells</h2>
  <table><tr><td><div id='shop_item'>
  <h3> Wedge Mount </h3>
  <strong>$ 7.99 </strong><ul>
  <li id='item'><img src='images/accessories/wedge_mount.jpg' alt='' /></li>

 <li><form method='post' action='Cart'>
    <input type='hidden' name='name' value='wedgemount'/>
    <input type='hidden' name='type' value='accessories'/>
    <input type='hidden' name='maker' value='blink'/>
    <input type='hidden' name='access' value=''/>
    <div className='btn-group'>
    <input type='submit' className='btn btn-success' value='Buy Now'/>
    </div></form></li></ul></div></td>

 <td><div id='shop_item'>
 <h3> Rain Cover </h3>
 <strong>$ 23.86 </strong><ul>
 <li id='item'><img src='images/accessories/rain_cover.jpg' alt='' /></li>

 <li><form method='post' action='Cart'>
  <input type='hidden' name='name' value='raincover'/>
  <input type='hidden' name='type' value='accessories'/>
  <input type='hidden' name='maker' value='HomeAll'/>
  <input type='hidden' name='access' value=''/>
  <div className='btn-group'>
  <input type='submit' className='btn btn-success' value='Buy Now'/>
  </div></form></li></ul></div></td></tr></table>
</>
);}
if(category === "Speakers") {
  return(
      <>

<h2>Accessory for Speakers</h2>
<table><tr><td><div id='shop_item'>
<h3> Holder </h3>
<strong>$ 12.59 </strong><ul>
<li id='item'><img src='images/accessories/holder.jpg' alt='' /></li>

<li><form method='post' action='Cart'>
<input type='hidden' name='name' value='holder'/>
<input type='hidden' name='type' value='accessories'/>
<input type='hidden' name='maker' value='holder'/>
<input type='hidden' name='access' value=''/>
<div className='btn-group'>
<input type='submit' className='btn btn-success' value='Buy Now'/>
</div></form></li></ul></div></td>

<td><div id='shop_item'>
<h3> Mount It </h3>
<strong>$ 16.99 </strong><ul>
<li id='item'><img src='images/accessories/mountit.jpg' alt='' /></li>

<li><form method='post' action='Cart'>
    <input type='hidden' name='name' value='mountit'/>
    <input type='hidden' name='type' value='accessories'/>
    <input type='hidden' name='maker' value='mountit'/>
    <input type='hidden' name='access' value=''/>
    <div className='btn-group'>
    <input type='submit' className='btn btn-success' value='Buy Now'/>
    </div></form></li></ul></div></td></tr></table>
    </>
);}
if(category === "Lightings" ) {
  return(
<>

<h2>Accessory for Lightings</h2>
<table><tr><td><div id='shop_item'>
<h3> Wall Switch Module </h3>
<strong>$ 44.99 </strong><ul>
<li id='item'><img src='images/accessories/philips_2.jpg' alt='' /></li>

<li><form method='post' action='Cart'>
<input type='hidden' name='name' value='switchmodule'/>
<input type='hidden' name='type' value='accessories'/>
<input type='hidden' name='maker' value='philips'/>
<input type='hidden' name='access' value=''/>
    <div className='btn-group'>
    <input type='submit' className='btn btn-success' value='Buy Now'/>
    </div></form></li></ul></div></td>

<td><div id='shop_item'>
<h3> Tap Dial Switch </h3>
<strong>$ 49.99 </strong><ul>
<li id='item'><img src='images/accessories/philips_3.jpg' alt='' /></li>

<li><form method='post' action='Cart'>
    <input type='hidden' name='name' value='tapdialswitch'/>
    <input type='hidden' name='type' value='accessories'/>
    <input type='hidden' name='maker' value='philips'/>
    <input type='hidden' name='access' value=''/>
    <div className='btn-group'>
    <input type='submit' className='btn btn-success' value='Buy Now'/>
    </div></form></li></ul></div></td></tr></table>
    </>
);}
  }
  
           

  return(<>
   <div className="Container">
        <Header />
        <LeftNavigationBar />
        <div id = 'content'>
        <div className='post'>
        {display ===1 && (
        
          <div style={{padding:"5px"}}>

            <h2 className='title meta' style={{color:'red', alignSelf:'center', fontSize:'24px'}}><center>
           
           Cart
           </center>
           </h2>
          
          <div >
           {items.map((item)=> (
            <div>
               <p> {item.name} - {item.price} </p>
               <button onClick={()=>{removeItem(item)}}>Remove Item</button>
               
            </div>
           ))} 
          </div>

          <div>

          </div>
          <h4> Total is {total}</h4>

          
          <p> Click to Add warranty </p>
          <button>Apply warranty </button>
          <br/>
          <p> </p>
          <p><button onClick={()=>{ setDisplay(2) }}> CheckOut</button></p>

          <div>
              {/* Iterate through items and get unique categories */}
              {getUniqueCategories().map((category) => (
                <div key={category}>
                  {/* Render accessories for the current category */}
                  {renderAccessoriesForCategory(category)}
                </div>
              ))}
            </div>
          
    
        </div>)}
        </div>

        {/* order page n store in payment details*/}
        <div style={{padding:"5px"}}>
          { display === 2 && (<>

           <h2 className='title meta' style={{color:'red', alignSelf:'center'}}><center>
           
           Order
           </center>
           </h2>
          
            <table className='gridtable'>
              <tr><td>Customer Name</td><td>UserName</td></tr>
              {items.map((item)=> (
            <tr>
               <td> {item.name}</td> <td> {item.price} </td>
            </tr>
           ))} 

            </table>


            <table>
              <tr>
                <td>
                  First Name 
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  Last Name 
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  Address 1
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  Address 2(Optional)
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  City
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  State
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  ZipCode
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  Phone Number 
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>

              <tr><td>Pick Up or Delivery</td></tr>
              <tr>
                <td>
                  <input type='radio' id='delivery' name='order' value='Delivery'/>
                  <label for='delivery'>Delivery</label>
                </td>
                <td>
                  <input type='radio' id='pickup' name='order' value='Pickup'/>
                  <label for='pickup'>Pickup</label>
                </td>
              </tr>
              <tr>
                <td>
                  Credit Card Number
                </td>
                <td>
                  <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                <p>For instore pickup, please select any one of the following store locations:</p>
                </td>
                <td>
                  <select name='storelocation' id='storelocation'>
                    <option value='60005'>Arlington Heights 60005</option>
                    <option value='60007'>Elk Groov Village 60007</option>
                    <option value='60016'>Des Plaines 60016</option>
                    <option value='60026'>Glenview 60026</option>
                    <option value='60047'>Lake Zurich 60047</option>
                    <option value='60134'>Geneva 60134</option>
                    <option value='60423'>Frankfort 60423</option>
                    <option value='60536'>Millbrook 60536</option>
                    <option value='60564'>Naperville 60564</option>
                    <option value='60606'>Chicago 60606</option>
                    <option value='60616'>Chicago 60616</option>

                  </select>
                </td>
              </tr>

            </table>
            <button onClick={()=> {storedPaymentDetails(); setDisplay(3);}}>Make Payment</button>

          
          </>)}

        </div>

        <div>

          { display === 3 && (<>
            <h2 className='title meta' style={{color:'red', alignSelf:'center'}}><center>
           
           Order
           </center>
           </h2>

            <h2 className='title meta' style={{color:'black', alignSelf:'center'}}>Your Order is placed 
           </h2>
           <h2 className='title meta' style={{color:'black', alignSelf:'center'}}>Your Order ID is {orderId}
           </h2>
           <h2 className='title meta' style={{color:'black', alignSelf:'center'}}>Delivery/Pick-Up Date is 11/18/2023 
           </h2>
           </>)}
            </div>
        </div>



    </div>
  </>);
}