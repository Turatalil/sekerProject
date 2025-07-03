import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFromApi } from "../../api/api";

const initialState = {

}
export    const AdminProductSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {

    }
})

export    const AdminProduct = createAsyncThunk(
    "product",
    async({loginIsAccount })=>{
        try {
            const req = fetchFromApi({method: "POST" ,  name: "admin/product/" , loginIsAccount})
        } catch (error) {
            
        }
    }
)