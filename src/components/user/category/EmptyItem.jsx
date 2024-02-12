import React from "react";


const EmptyItem = ({message,styles})=>{
    return (
        <h1 className={styles}>{message}</h1>
    )
}

export default EmptyItem;