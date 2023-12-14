import React from 'react';
import childcare from '../../../assets/image/service-icon/child-care.svg';
import childfriendly from '../../../assets/image/service-icon/child-friendly.svg';
import dispensary from '../../../assets/image/service-icon/dispensary.svg';
import growthmonitoring from '../../../assets/image/service-icon/growth-monitoring.svg';
import immunization from '../../../assets/image/service-icon/immunization.svg';
import inpatient from '../../../assets/image/service-icon/in-patient.svg';
import ops from '../../../assets/image/service-icon/ops.svg';
import psurgeon from '../../../assets/image/service-icon/p_surgeon.svg';
import ps from '../../../assets/image/service-icon/ps.svg';
import schoolhealth from '../../../assets/image/service-icon/school-health.svg';
import woundcare from '../../../assets/image/service-icon/wound-care.svg';
import '../../../style/ourservice/Ourservice.css'




const Ourservices = () => {
    return(
        <div className="services">
            <h2>Our Services</h2>

            <div className='ourServices'>
                <div className='serviceImage'>
                    <img src={childcare}   alt="" />
                    <p>New-Born Care</p>
                </div>
                <div className='serviceImage'>
                    <img src={childfriendly}   alt="" />
                    <p>Children-Friendly Environment</p>
                </div>
                <div className='serviceImage'>
                    <img src={dispensary}  alt="" />
                    <p>Dispensary</p>
                </div>
                <div className='serviceImage'>
                    <img src={growthmonitoring}  alt="" />
                    <p style={{paddingRight: '45px'}}>Growth Monitoring & Health Education</p>
                </div>
                <div className='serviceImage'>
                    <img src={immunization} style={{width: '35px'}}  alt="" />
                    <p>Immunization</p>
                </div>
                <div className='serviceImage'>
                    <img src={inpatient}  alt="" />
                    <p>In-Patient</p>
                </div>
                <div    className='serviceImage'>
                <img src={ops}   alt="" />
                <p>Out Patient Services</p>
                </div>
                <div className='serviceImage'>
                <img src={psurgeon}   alt="" />
                <p>Paediatric Surgery</p>
                </div>
                <div className='serviceImage'>
                <img src={ps}   alt="" />
                <p>Paediatrician's Review of Every<br/> Child at Every Visit</p>
                </div>
                <div className='serviceImage'>
                <img src={schoolhealth}   alt="" />
                <p>School Health Services</p>
                </div>
                <div className='serviceImage'>
                <img src={woundcare}   alt="" />
                <p>Wound Care</p>
                </div>
            </div>
        </div>

    )
}

export default Ourservices