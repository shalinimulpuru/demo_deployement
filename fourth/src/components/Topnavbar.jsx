import "./Top-navbar.css"

const Topnavbar = () => {
    return <nav style={{backgroundColor:"black",color:"beige", height:"50px", display:"flex", justifyContent:"space-around"}}> 
        <div>
            <p>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>
        </div>
        <div className="top-navbar-container2">
            <p>USD</p>
            <p>English</p>
            <p>My Account</p>
        </div>
    </nav>
}

export default Topnavbar;