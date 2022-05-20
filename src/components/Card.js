import React from 'react'
import CardImg from '../images/en_mb_uae-cat-grocery-01.png';
export default function Card(props) {
    return (
       <div className='container bg-light'>
         <img src={CardImg} alt="" width={120} className="my-5 mx-3"/>
         <img src={CardImg} alt="" width={120} className="my-5 mx-3"/>
         <img src={CardImg} alt="" width={120} className="my-5 mx-3"/>
         <img src={CardImg} alt="" width={120} className="my-5 mx-3"/>
         <img src={CardImg} alt="" width={120} className="my-5 mx-3"/>
         <img src={CardImg} alt="" width={120} className="my-5 mx-3"/>
         <img src={CardImg} alt="" width={120} className="my-5 mx-3"/>
         <img src={CardImg} alt="" width={120} className="my-5 mx-3"/>
       </div>
    )
}

