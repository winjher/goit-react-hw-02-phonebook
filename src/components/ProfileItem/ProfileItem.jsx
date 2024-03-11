import React from 'react';

const ProfileItem = ({id,image,name,age,company,designation,contact,address,School,Course,WorkExperience, Gender, Relationship}) =>{
    return (
        <div style={{ marginBottom: '20px' }}>
            <img src={image} alt="" style={{ height: '400px' }} />

        <h2>{id}</h2>
        <p>{image}</p>
        <p>{name}</p>
        <p>{age}</p><p>{company}</p>
        <p>{designation}</p>
        <p>{contact}</p>
        <p>{address}</p>
        <p>{School}</p>
        <p>{Course}</p>
        <p>{WorkExperience}</p>
        <p>{Gender}</p>
        <p>{Relationship}</p>
        </div>
    )

}

export default ProfileItem