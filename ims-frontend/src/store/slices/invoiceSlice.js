import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    parents:[],
    childrenByParent:{},
    selectedByChildIds:[],
    status:'idle',
    error:null,
}

const invoiceSlice=  createSlice({
    name:'invoice',
    initialState,
    reducers:{
        setParents:(s,a)=>{s.parents=a.payload||[];},
        setChildrenForParent:(s,a)=>{
            const {parentId,children}=a.payload||{};
            s.childrenByParent[parentId]=children||[];
        },
        toggleSelectedChild:(s,a)=>{
            const id = a.payload;
            s.selectedByChildIds=s.selectedByChildIds.includes(id)
            ?s.selectedByChildIds.filter(x=>x!==id)
            :[...s.selectedByChildIds,id]
        },
        clearSelections:(s)=>{s.selectedByChildIds=[];},
        setInvoiceLoading:(s)=>{s.status='loading'},
        setInvoiceError:(s)=>{s.error='failed',s.error=a.payload;},
        setInvoiceIdle:(s)=>{s.status='idle',s.error=null;}
    }
})

export const {
    setParents,setChildrenForParent,toggleSelectedChild,
    clearSelections,setInvoiceLoading,setInvoiceError,setInvoiceIdle
} = invoiceSlice.actions;

export default invoiceSlice.reducer;