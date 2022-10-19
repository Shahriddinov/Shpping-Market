import React from 'react';
import "./teacherCardStyle.scss";

function TeacherCard({props}) {
    return (
        <div className="teachCard">
            <div className="teacherImage">
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="teacherInfo">
                <h4>{props.name}</h4>
                <div className="d-flex">
                    <div>
                        <h5>Номер ID:</h5>
                        <h5>Балл:</h5>
                    </div>
                    <div>
                        <h5>{props.id}</h5>
                        <div className="score">
                            {props.score}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherCard;