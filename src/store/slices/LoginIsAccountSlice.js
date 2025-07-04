import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFromApi } from "../../api/api";

export const modalEnter = createAsyncThunk(
    "log-in",
    async ({ loginIsAccount }, { fulfillWithValue, rejectWithValue }) => {
        try {
            const data = await fetchFromApi(
                { name: "token/", method: "POST", loginIsAccount}
            );
            if (data._status !== 200 && data._status !== 201) {
                throw new Error("Запрос жиберуудо ката кетти!");
            }
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

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
                state.isAuthenticated = false;
                state.error = "";
            })
            .addCase(modalEnter.fulfilled, (state, action) => {
                state.loading = false;
                state.message = "";
                state.isAuthenticated = true;
                state.error = "";

                const token = action.payload?.token;
                if (token) {
                    localStorage.setItem("token", token);
                }
})

            .addCase(modalEnter.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.message = action.payload || "Ошибка при входе";
                state.error = "Ошибка при входе";
            });
    },
});
