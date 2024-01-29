import React from "react";

const  productArray= [
        {
            id:1,
            name:'samsung',
            quantity:7,
            price:233.4,
            quantity:0,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto temporibus laudantium velit, eaque ipsum repellendus neque modi expedita nesciunt cumque.'
        },
        {
            id:2,
            name:'Tecno',
            quantity:5,
            price:533.4,
            quantity:0,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto temporibus laudantium velit, eaque ipsum repellendus neque modi expedita nesciunt cumque.'
        },
        {
            id:3,
            name:'Itel',
            quantity:13,
            price:833.4,
            quantity:0,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto temporibus laudantium velit, eaque ipsum repellendus neque modi expedita nesciunt cumque.'
        },
        {
            id:4,
            name:'iphone',
            quantity:7,
            price:133.4,
            quantity:0,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto temporibus laudantium velit, eaque ipsum repellendus neque modi expedita nesciunt cumque.'
        }
    ]

    const getProductData = (id)=>{
        let productData = productArray.find(product => product.id === id);
        return productData;
    }


export  {productArray, getProductData};