import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchFromApi } from "../../api/api"

const initialState = {
    loading: false,
    message: "",
    isAuthenticated: false,
    error: "",
}

export const addPhoneSlice = createSlice({
    name: "addPhone",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
            builder
                .addCase(addPhone.pending, (state) => {
                    state.loading = true;
                    state.message = "";
                    state.isAuthenticated = false;
                    state.error = "";
                })
                .addCase(addPhone.fulfilled, (state) => {
                    state.loading = false;
                    state.message = "";
                    state.isAuthenticated = true;
                    state.error = "";
                })
                .addCase(addPhone.rejected, (state, action) => {
                    state.loading = false;
                    state.isAuthenticated = false;
                    state.message = action.payload || "Ошибка при добавить товару";
                    state.error = "Ошибка при входе";
                });
        },
})


export const addPhone = createAsyncThunk(
    "add",
    async (newProducts, { fulfillWithValue, rejectWithValue }) => {
        console.log(newProducts);
        
        try {
            const data = await fetchFromApi(
                { name: "admin/product/", method: "POST", newProducts }
            )
            if (data._status !== 200 && data._status !== 201) {
                throw new Error("Запрос жиберуудо ката кетти!")
            }
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)