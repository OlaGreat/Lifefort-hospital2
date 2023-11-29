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




const Ourservices = () => {
    return(
        <div className="services">
            <h2>Our Services</h2>

            <img src={childcare}  style={{width: '35px'}}  alt="" />
            <p>New-Born Care</p>
            <img src={childfriendly} style={{width: '35px'}}  alt="" />
            <p>Children-Friendly Environmenty</p>
            <img src={dispensary} style={{width: '35px'}}  alt="" />
            <p>Dispensary</p>
            <img src={growthmonitoring} style={{width: '35px'}}  alt="" />
            <p>Growth Monitoring & Health Education</p>
            <img src={immunization} style={{width: '35px'}}  alt="" />
            <p>Immunization</p>
            <img src={inpatient} style={{width: '35px'}}  alt="" />
            <p>In-Patient</p>
            <img src={ops} style={{width: '35px'}}  alt="" />
            <p>Out Patient Services</p>
            <img src={psurgeon} style={{width: '35px'}}  alt="" />
            <p>Paediatric Surgery</p>
            <img src={ps} style={{width: '35px'}}  alt="" />
            <p>Paediatrician's Review of Every Child at Every Visit</p>
            <img src={schoolhealth} style={{width: '35px'}}  alt="" />
            <p>School Health Services</p>
            <img src={woundcare} style={{width: '35px'}}  alt="" />
            <p>Wound Care</p>
        </div>

    )
}

export default Ourservices