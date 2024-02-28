import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        openModal:false,
        openDropDown:false,
        value:'',
}

const normalStateSlice = createSlice({
    name:'appState',
    initialState,
    reducers:{
        setOpenModal:(state,action)=>{
            state.openModal = action.payload
        },
        setValue:(state,action)=>{
            state.value = action.payload
        },
        setOpenDropDown:(state,action)=>{
            state.openDropDown = !state.openDropDown
        }
    }
})


export const {setOpenModal,setOpenDropDown,setValue} = normalStateSlice.actions;
export default normalStateSlice.reducer;
