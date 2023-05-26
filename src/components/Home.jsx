import React from 'react'
import vg from "../Assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"




const Home = () => {
  return (
    <>
    <div className='home' id="home">
.     <main>
    <h1>Techystar</h1>
    <p>Solutions to all your problems</p>


</main>

    </div>

    <div className="home2">
        <img src={vg} alt="Graphics"  />
        <div>
            <p>
                We are your one and only Solutions to the tech problems you face everyday.
                We are leading a tech company whose aim is to increase problem solving capacity of childrens.
            </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
            <h1>Who are We?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ex necessitatibus sit, vero, 
                ducimus facilis nihil soluta alias a quae atque fugiat possimus quam rem laudantium temporibus accusamus ut iure magnam.
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis alias pariatur rerum corporis voluptatibus nemo reprehenderit esse optio vel facere possimus omnis ab, tempore totam explicabo cupiditate doloremque natus aliquid.
            </p>
        </div>
    </div>
    <div className="home4" id="brands">
     <div>

    <h1>Brands</h1>
    <article>
        <div >
<AiFillGoogleCircle />
<p>Google</p>
        </div>
        <div >
<AiFillAmazonCircle />
<p>Amazon</p>
        </div>
        <div >
<AiFillYoutube />
<p>Youtube</p>
        </div>
        <div >
<AiFillInstagram />
<p>Instagram</p>
        </div>
    </article>



     </div>



    </div>


    </>
  )
}

export default Home;