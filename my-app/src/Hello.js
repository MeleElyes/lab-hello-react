import React from 'react'
import logoIK from './images/ironhack-logo-xs.png'
import menuTop from './images/menu-top-xs.png'

const Hello = () => {
    return (
        <>
        <div className='Nav'>
        <ul>
            <li><img src= {logoIK} alt='icon Iron Hack'/></li>
            <li><img src={menuTop} alt='icon menu'/></li>
        </ul>
        </div>
        <div className='Encart'>
        <h1>Say hello to <br/> ReactJS</h1>
        <p>You will learn how to use <br/> the most popular frontend library,<br/> and become a super ninja developer</p>
        <button>Awesome!</button>
        </div>
        </>
    )
}

export default Hello;