import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Background from '../images/test.jpg'
function Homepage() {
    return (
        <div className="homepage" >
            <Header />
            <div >
                <img src={Background} style={{ width: "100%" }} />
            </div>
            <Footer />
        </div>

    )
}

export default Homepage
