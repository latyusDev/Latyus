const CartHeader = ()=>{
    return (
        <div className="flex justify-between bg-[#880000] py-2 px-5 ">
                <h3 className="basis-[20%] text-lg font-[600] text-white">items detail</h3>
                <div className="flex justify-between basis-[49%]">
                <h3 className="text-lg font-[600] text-white">quantity</h3>
                <h3 className="text-lg font-[600] text-white indent-[-22px]">item price</h3>
                <h3 className="text-lg font-[600] text-white">actions</h3>
                </div>
            </div>
    )
}
export default CartHeader