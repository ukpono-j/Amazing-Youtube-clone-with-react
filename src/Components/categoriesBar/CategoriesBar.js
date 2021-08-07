import React, { useState } from 'react';
import "./CategoriesBar.css";

const keywords = [
    "All",
    "React js",
    "Angular js",
    "React Native",
    "Use of API",
    "Redux",
    "Music",
    "Algorithm Art",
    "Guiter",
    "Bengali Songs",
    "Coding",
    "Cricket",
    "Football",
    "Real Madrid",
    "Gatsby",
    "Poor  Coder",
    "Shwetabh",
]



const CategoriesBar = () => {
    const [activeElement,setActivateElement] = useState('All')
    
    const handleClick=(value)=>{
        setActivateElement(value)
    }




    return (
        <div className="CategoriesBar">
            {
                keywords.map((value, i) => (
                <span
                 onClick={()=> handleClick(value)}
                
                key={i}
                className={activeElement ===  value?"active": ""}

                >{value}
                </span>
                ))}
        </div>
    )
}

export default CategoriesBar
