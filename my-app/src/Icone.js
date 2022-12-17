import React from 'react'

const Icone = (props) => {
    return(
        <div className='Icone'>

            <img src={props.image} alt='icon'/>
            <h2>{props.title}</h2>
            <p>{props.descriptif}</p>
        </div>

    )
}

export default Icone