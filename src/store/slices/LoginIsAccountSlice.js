import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    message: "",
    isAuthenticated: false,
    error: "",
};

export const loginIsAccountSlice = createSlice({
    name: "loginIsAccountSlice",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(modalEnter.pending, (state) => {
                state.loading = true;
                state.message = "";
                state.isAuthenticated = false
                state.error = ""
            })
            .addCase(modalEnter.fulfilled, (state) => {
                state.loading = false;
                state.message = "";
                state.isAuthenticated = true
                state.error = ""
            })
            .addCase(modalEnter.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false
                state.message = action.payload || "Ошибка при входе";
                state.error = "Ошибка при входе"
            });
    },
});

export default loginIsAccountSlice.reducer;


export const modalEnter = createAsyncThunk(
    "log-in",
    async ({ loginIsAccount }, { fulfillWithValue, rejectWithValue }) => {
        try {
            const req = await fetch("http://43.204.218.113/api/v1/token/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginIsAccount)
            });
            if (req.status !== 200 && req.status !== 201) {
                throw new Error("Запрос жиберуудо ката кетти!");
            }
            const data = await req.json();
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
