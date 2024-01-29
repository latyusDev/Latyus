import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, createProduct, getProduct } from "../../features/product/productSlice";
import { allCategories, createCategory, getCategory } from "../../features/category/categorySlice";
import { allBrands, createBrand, getBrand } from "../../features/brand/brandSlice";
import axiosClient from "../../api/axios";
import { authUser } from "../../features/user/authSlice";
const Dashboard = ()=>{
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category_id, setCategoryId] = useState('');
    const [brand_id, setBrandId] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(authUser);
    const products = useSelector(allProducts);
    const categoryItems = useSelector(allCategories);
    const brandItems = useSelector(allBrands);
    // console.log(categoryItems)

    const fetchCategory = async()=>{
        await dispatch(getCategory()).unwrap();
    }

    const fetchProducts = async()=>{
        await dispatch(getProduct()).unwrap();
    }

     const fetchBrands = async()=>{
        await dispatch(getBrand()).unwrap();
    }
    useEffect(()=>{
        try{
            axiosClient.get('/home').then((data)=>console.log(data))
        }catch(e){
            console.log(e)
        }
       
        },[])

    useEffect(()=>{
        fetchCategory()
    },[])

    useEffect(()=>{
        // fetchCategory()
        fetchProducts()
    },[])

    useEffect(()=>{
        fetchBrands()
    },[])


    console.log(categoryItems)
    console.log(brandItems)


    const form = new FormData();
    form.append('name',name)
    form.append('quantity',quantity)
    form.append('price',price)
    form.append('description',description)
    form.append('image',image)
    form.append('category_id',category_id)
    form.append('brand_id',brand_id)
    form.append('user_id',user?.id)
    
    const onCreateProduct = async(e)=>{
        e.preventDefault();
        console.log(form,'h')
             try {
                await dispatch(createProduct(form)).unwrap();
             } catch (e) {
                console.log(e)
            }
    }

    const onCreateCategory = async(e)=>{
        e.preventDefault();
             try {
                await dispatch(createCategory({user_id:user.id,category})).unwrap();
             } catch (e) {
                console.log(e)
            }
    }

    const onBrandCategory = async(e)=>{
        e.preventDefault();
             try {
                await dispatch(createBrand({user_id:user.id,brand,category_id})).unwrap();
             } catch (e) {
                console.log(e)
            }
    }

    return (
        <section>
            hello
            <h1>ash</h1>
            <form onSubmit={onCreateCategory}>
                <input type="text" name="category" placeholder="category" 
                onChange={(e)=>setCategory(e.target.value)} />
                <br />
                <button type="submit">Create Category</button>
            </form>
            <hr />
            
            <form onSubmit={onBrandCategory}>
                <input type="text" value={brand} name="brand" placeholder="brand" 
                onChange={(e)=>setBrand(e.target.value)} />
                <br />
                <select name="category_id" onChange={(e)=>{
                    setCategoryId(e.target.value)
                    console.log(category_id)
                }} >
                    <option value="">select category</option>
                    {
                       categoryItems.length > 0 ?  categoryItems.map(categoryItem=>{
                        const {name,id} = categoryItem
                        // console.log(categoryItem)
                            return <option key={categoryItem.name} value={id}>{categoryItem.name}</option>
                        }):'loa'
                    }
                </select>
                <br />

                <button type="submit">Create Brand</button>
            </form>

            <hr />

            <form onSubmit={onCreateProduct} >
                <select name="category_id" onChange={(e)=>{
                    setCategoryId(e.target.value)
                }} >
                    <option value="">select category</option>
                    {
                       categoryItems.length > 0 && categoryItems.map(categoryItem=>{
                        const {name,id} = categoryItem
                        // console.log(categoryItem)
                            return <option key={categoryItem.name} value={id}>{categoryItem.name}</option>
                        })
                    }
                </select>
                <br />

                    <label htmlFor="">select brandi</label>
                    <br />
                <select name="brand_id" onChange={(e)=>{
                    setBrandId(e.target.value)
                }} >
                    <option value="">select brand</option>
                    {
                       brandItems.length > 0 && brandItems.map(brandItem=>{
                            return <option key={brandItem.name} value={brandItem.id}>{brandItem.name}</option>
                        })
                    }
                </select>
                <input type="file" name="image" placeholder="image" 
                onChange={(e)=>setImage(e.target.files[0])} />
                <input type="text"  value={name} name="name" placeholder="name" 
                onChange={(e)=>setName(e.target.value)} />
                <br />
                <input type="text"  value={price} name="price" placeholder="price" 
                onChange={(e)=>setPrice(e.target.value)} />
                <br />
                <input type="text"  value={description} name="description" placeholder="description" 
                onChange={(e)=>setDescription(e.target.value)} />
                <br />
                <input type="text"  value={quantity} name="quantity" placeholder="quantity" 
                onChange={(e)=>setQuantity(e.target.value)} />
                <br />
                <button type="submit">Create Product</button>
            </form>

            <section style={{paddingInline:'2rem'}}>
                <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>

                 {
                        products.length > 0 && products.map(product=>{
                            // console.log(product,'h')
                             return   <div key={product.id} style={{flexBasis:'15%',textAlign:'center'}}>
                                    <img src={product.image} alt=""  style={{width:'100%', height:'200px'}}/>
                                    <h3>{product.name}</h3>
                                    <p>{product.price}</p>
                                    <p>{product.description}</p>
                                    <p>{product.quantity}</p>
                                    <button onClick={()=>increase(product)} style={{background:'blue',color:'white'}}>Add to cart</button>
                                 </div>
                        })
                } 
                </div>
            </section> 
        </section>
    )
}

export default Dashboard;