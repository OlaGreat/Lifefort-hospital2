import React from 'react'
import childrenimage from '../../../assets/image/childrenImage.jpg'
import '../../../style/lifefortImage/Lifefortimage.css'

const Imageword = () =>{
    return(

        <div className='unique-care'>
            <img src={childrenimage} alt="children-image" className='children-image' />
            <h2>Unique care for every  child</h2>
            <p>LifeFort Hospital blends cutting-edge medical expertise with compassion.<br/>
             Your child's well-being is our priority. Choose LifeFort for a healthier, happier future. </p>
        </div>


    );

}
export default Imageword