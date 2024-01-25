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
        <div id="services">
            <h2 id='service'>Our Services</h2>

            <div className='ourServices'>
                <div className='serviceImage'>
                    <img src={childcare}   alt="" />
                    <p>New-Born Care</p>
                </div>
                <div className='serviceImage'>
                    <img src={childfriendly}   alt="" />
                    <p className='friendly-environment'>Children-Friendly Environment</p>
                </div>
                <div className='serviceImage'>
                    <img src={dispensary}  alt="" />
                    <p className='dispensary'>Dispensary</p>
                </div>
                <div className='serviceImage'>
                    <img src={growthmonitoring}  alt="" />
                    <p style={{paddingRight: '45px'}}>Growth Monitoring & Health Education</p>
                </div>
                <div className='serviceImage'>
                    <img src={immunization}   alt="" />
                    <p>Immunization</p>
                </div>
                <div className='serviceImage'>
                    <img src={inpatient}  alt="" />
                    <p className='inpatient'>In-Patient</p>
                </div>
                <div    className='serviceImage'>
                <img src={ops}   alt="" />
                <p id='ops'>Out Patient Services</p>
                </div>
                <div className='serviceImage'>
                <img src={psurgeon}   alt="" />
                <p className='psurgeon'>Paediatric Surgery</p>
                </div>
                <div className='serviceImage'>
                <img src={ps}   alt="" />
                <p className='Paediatrician'>Paediatrician's Review of Every Child at Every Visit</p>
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