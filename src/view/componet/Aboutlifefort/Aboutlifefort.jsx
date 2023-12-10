import React from 'react';
import '../../../style/aboutlifefort/Aboutlifefort.css'

const Aboutlifefort = () => {
    return(

        <div className='about'>
            <h2>Welcome to Lifefort</h2>
            <hr style={{backgroundColor: '#2775ad',borderColor: '#2775ad', width: '150px', height: '0.4px', marginTop: '1px'}}/>
            <p className='web-display'>
             Your dedicated partner in child healthcare. In our private specialist children's<br/>
                hospital, we prioritize each child's uniqueness with personalized attention beyond traditional <br/>
                medical care. Your child isn't just a patient but an individual deserving specialized understanding.<br/>
                Our experienced team blends cutting-edge medical technologies with compassion, creating a <br/>
                nurturing environment for your child to thrive. At LifeFort, your child receives personalized <br/>
                support for a healthier future. Choose us as your healthcare home, where your child's well-being is <br/>
                our primary focus.
            </p>

            <p className='mobile-display'>
                Lifefort ensure that your children live life at its fullest by providing excellent 
                comprehensive child health promotive services in a child friendly environment
            </p>

        </div>

    );
} 
export default Aboutlifefort;