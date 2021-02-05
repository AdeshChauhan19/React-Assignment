import React from 'react';

const userinput = (props) => {
    const style = {
        margin: 'auto',
        marginTop: '10px',
        width: '20%',
        height: '20px',
        border: '1px solid #fff',
        boxShadow: '1px 2px #cccccc',
        padding: '20px',
        textAlign: 'center',
    }
    return (
        <div>
            <input style = {style} type="text" onChange={props.change} value={props.username}></input>
        </div>
    )
}

export default userinput;