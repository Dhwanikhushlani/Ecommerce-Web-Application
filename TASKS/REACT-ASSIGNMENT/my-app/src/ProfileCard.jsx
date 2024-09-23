import React from 'react';

const ProfileCard = ({ name, age, location }) => {
    return (
        <div className="border: 1px solid #ccc border-radius: 8px padding: 16px margin: 16px max-width: 300px
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) text-align: center background-color: #f9f9f9;">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    );
};

export default ProfileCard;
