import './style.css';
export default function Content() {
    return(
        <>
    <div id="content">
	<br/><br/>
		<h1 style={{ color:'brown' , paddingLeft:'20px'}}>Welcome to Smart Homes</h1><br/>
		<h2 style={{ color:'brown' , paddingLeft:'20px'}}>
      Discover unbeatable deals on a wide range of Smart Home appliances. Explore our everyday low prices and choose from
      convenient delivery or pickup options at your nearest store.
    </h2>
	<br/><br/>
	<div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
		<ol className="carousel-indicators">
			<li data-target="#carouselExampleInterval" data-slide-to="0" className="active"></li>
			<li data-target="#carouselExampleInterval" data-slide-to="1"></li>
			<li data-target="#carouselExampleInterval" data-slide-to="2"></li>
		</ol>

		<div className="carousel-inner">
			<div className="item active" >
				<img src="images/site/flash-sale.jpg" style={{width: "auto",
				height: "500px",
				maxHeight: "500px",
				margin: "auto", 
				display: "block"}} alt="..."/>
			</div>
			<div className="item" >
				<img src="images/site/home1.jpg" style={{width: "auto",
				height: "500px",
				maxHeight: "500px",
				margin: "auto", 
				display: "block"}} alt="..."/>
			</div>
			<div className="item"  >
				<img src="images/site/home2.jpg" style={{width: "auto",
				height: "500px",
				maxHeight: "500px",
				margin: "auto", 
				display: "block"}} alt="..."/>
			</div>
		</div>

		<a className="left carousel-control" href="#carouselExampleInterval" role="button" data-slide="prev">
			<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			<span className="sr-only">Previous</span>
		</a>
		<a className="right carousel-control" href="#carouselExampleInterval" role="button" data-slide="next">
			<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			<span className="sr-only">Next</span>
		</a>
	</div>

		<br/><br/>
	<h3 style={{ color:'brown' , paddingLeft:'20px' }}>Best Sellers:</h3>
      <hr /> 
      <div className="best-sellers-container" style={{ display: 'flex' , justifyContent: 'space-between',margin:'50px' }}>
      {/* Product 1 */}  
      <div className="best-seller-item">
        <img src="images/smartDoorbell/ringVideoDoorbell.jpg" alt="Ring Video Doorbell" style={{ width: '200px', height: '200px' }} />
        <p style={{ color:'black'}}>Ring Video Doorbell</p>
        <p style={{ color:'black'}}>$99.99</p>
        <button style={{ background:'brown'}}>Buy Now</button>
      </div>

      {/* Product 2 */}
      <div className="best-seller-item">
        <img src="images/smartLighting/NanoleafLightPanels.jpg" alt="Nanoleaf Light Panels" style={{ width: '200px', height: '200px' }} />
        <p style={{ color:'black'}}>Nanoleaf Light Panels</p>
        <p style={{ color:'black'}}>$37.99</p>
        <button style={{ background:'brown'}}>Buy Now</button>
      </div>

      {/* Product 3 */}
      <div className="best-seller-item">
        <img src="images/smartSpeaker/appleHomePod.jpeg" alt="Apple Home Pod" style={{ width: '200px', height: '200px' }} />
        <p style={{ color:'black'}}>Apple Home Pod</p>
        <p style={{ color:'black'}}>$259.99</p>
        <button style={{ background:'brown'}}>Buy Now</button>
      </div>
    </div>

</div>

        </>
    );
}