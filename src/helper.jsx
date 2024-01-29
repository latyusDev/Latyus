const categoryByName = (category,homeItems)=>{
    return homeItems.filter(({name})=>name === category)
 }

 export {categoryByName};