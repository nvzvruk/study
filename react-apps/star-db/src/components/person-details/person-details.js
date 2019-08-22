
import React from 'react';

const PersonDetailsView = ({ person: { id, name, gender, birthYear, eyeColor } }) => (
    <div className="person-details card">
        <img className="person-image"
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
             alt="selected person"/>

        <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Birth year</span>
                    <span>{birthYear}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Eye Color</span>
                    <span>{eyeColor}</span>
                </li>
            </ul>
        </div>
    </div>
);

export default PersonDetailsView;