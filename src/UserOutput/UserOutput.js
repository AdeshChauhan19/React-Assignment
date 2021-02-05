import React from 'react';
import './UserOutput.css'

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello {props.username} in our website</p>
        </div>
    )
}

export default useroutput;