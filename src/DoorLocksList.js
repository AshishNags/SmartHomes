import Header from "./Header";
import LeftNavigationBar from "./LeftNavigationBar";
import './style.css';
import Product from "./Product";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import { parse } from "react-xml-parser";
import XMLParser from 'react-xml-parser';
import { useState, useEffect } from "react";
export default function DoorLocksList({addItem, details}){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const CategoryName = queryParams.get("maker");
    const [doorlocksProducts, setDoorlocksProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("/ProductCatalog.xml");
            const xmlData = response.data;
            // const parsedData = parse(xmlData);
            const parsedData = new XMLParser().parseFromString(xmlData);
            const doorlocks = parsedData.getElementsByTagName("doorlocks");
    
            const products = doorlocks.map((doorlock) => {
              const id = doorlock.attributes.id;
              const name = doorlock.getElementsByTagName("name")[0].value;
              const price = doorlock.getElementsByTagName("price")[0].value;
              const image = doorlock.getElementsByTagName("image")[0].value;
              const description = doorlock.getElementsByTagName("description")[0].value;
              const manufacturer = doorlock.getElementsByTagName("manufacturer")[0].value;
              // ... other product details
    
              return {
                id,
                name,
                price,
                image,
                description,
                manufacturer,
                // ... other product details
              };
            });
    
            setDoorlocksProducts(products);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, [CategoryName]);

    function renderContent(){
        const productsByMaker = CategoryName
            ? doorlocksProducts.filter(
                (product) =>
                product.manufacturer.toLowerCase() === CategoryName.toLowerCase()
            )
            : doorlocksProducts;

        if (productsByMaker.length === 0) {
            return <p>No products found for {CategoryName}</p>;
        }

        // Render products in rows with three products per row
        const rows = [];
        for (let i = 0; i < productsByMaker.length; i += 3) {
        
            const row = productsByMaker.slice(i, i + 3).map((product) => (
            <td key={product.id}>
            <div id='shop_item'>
            <Product
                Id={product.id}
                Name={product.name}
                Price={product.price}
                Image={product.image}
                Desc={product.description}
                Type="Doorlocks"
                Maker={CategoryName}
                addItem={addItem}
                details = {details}
            />
            </div>
            </td>
        ));
        rows.push(<tr key={i}>{row}</tr>);
        }

        return rows;
    }
    
    return(
        <>
        <div className="Container">
        <Header />
        <LeftNavigationBar />
        <div id='content'>
            <div className='post'>
                <h2 className='title meta'>
		            <a style={{fontSize: "24px"}}>Smart Doorlocks</a>
                </h2>
                <div className='entry'>
                <table id='bestseller'>
                    <tbody>{renderContent()}</tbody>
                </table>
               </div>
            </div>
        </div>
        </div>
        </>
    );
}