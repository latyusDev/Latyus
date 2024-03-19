import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        openModal:false,
        openDropDown:false,
        openSidebar:false,
        value:'',
}

const normalStateSlice = createSlice({
    name:'appState',
    initialState,
    reducers:{
        setOpenModal:(state,action)=>{
            state.openModal = action.payload
        },
        setOpenSidebar:(state,action)=>{
            state.openSidebar = action.payload!==undefined?action.payload:!state.openSidebar
        },
        setValue:(state,action)=>{
            state.value = action.payload
        },
        setOpenDropDown:(state,action)=>{
            state.openDropDown = action.payload!==undefined?action.payload:!state.openDropDown
        }
    }
})


export const {
    setOpenModal,setOpenDropDown,
    setValue,setOpenSidebar
} = normalStateSlice.actions;
export default normalStateSlice.reducer;
