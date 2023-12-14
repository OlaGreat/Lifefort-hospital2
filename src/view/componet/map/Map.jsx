import React from 'react';
import locationmap from '../../../assets/image/map/location-map.jpg';
import '../../../style/map/Map.css'
const mapUrl = 'https://www.google.com/maps/place/Lifefort+Children\'s+Hospital/@6.5215149,3.2200885,12z/data=!4m10!1m2!2m1!1slifefort!3m6!1s0x103b8d5d6b5f6f7b:0xeb4039a25a3225f1!8m2!3d6.5215135!4d3.3642804!15sCghsaWZlZm9ydJIBEmNoaWxkcmVuc19ob3NwaXRhbOABAA!16s%2Fg%2F11f75lp2yw?entry=ttu';

const Map = () => {
    const handleViewOnMap = () =>{
        window.open(mapUrl, '_blank');
    }

    return (
       <div className='map'>
            <hr />  
            <div className='map'>
            
                <img src={locationmap} style={{height: '200px'}}   alt="" />

                <div className='mapWriteUp'>
                    <h1>Find us on the Map</h1>
                    <p>Find Lifefort Children's <br/>Medical Centre from wherever you are in lagos</p>
                    <button style={{color: 'white', backgroundColor: '#2775ad'}} onClick={handleViewOnMap}>view on map</button>
                </div>

           
            </div>
       </div>
        

    );
}
export default Map;