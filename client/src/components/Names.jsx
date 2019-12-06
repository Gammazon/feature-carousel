import React from 'react';
import Name from './Name.jsx';

const Names = (props) => {
    return (
        <div>
            <div className="names">
                {props.recommendedNames.map((name, index) => {
                    return <Name name={name} index={index} recommendedID={props.recommendedID} />
                })}
            </div>
        </div>
    );
}

export default Names;