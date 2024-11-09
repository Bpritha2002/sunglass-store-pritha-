import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
    upload_status: false,
    AllProduct: [],
    researchDetailsData:[],
    redirectProduct: null,
    totalPages: 0,
    status: "idle",
};

export const product = createAsyncThunk("/product/create", async (formData) => {
    try {
        const res = await axiosInstance.post("/product/create", formData);
        return res.data;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
});

export const showProduct = createAsyncThunk("/product/list", async (formData) => {
    try {
        const res = await axiosInstance.post("/product/list", formData);
        return res.data;
    } catch (error) {
        console.error("Error showing product:", error);
        throw error;
    }
});

export const editList = createAsyncThunk("/edit", async (id) => {
    try {
        const res = await axiosInstance.get(`/product/detail/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching product details:", error);
        throw error;
    }
});

export const UpdateProduct = createAsyncThunk("/product/update", async ( formData, id ) => {
    try {
        const res = await axiosInstance.post("/product/update", formData, id);
        return res.data;
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
});

export const deleteProduct = createAsyncThunk("/product/remove", async (id) => {
    try {
        const res = await axiosInstance.post("/product/remove", { id });
        return res.data;
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
});

export const productCrudSlice = createSlice({
    name: "crud",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(product.pending, (state) => {
                state.upload_status = "Sending Product data";
                state.status = "loading";
            })
            .addCase(product.fulfilled, (state) => {
                state.upload_status = "Data submitted successfully";
                state.status = "succeeded";
            })
            .addCase(product.rejected, (state, { error }) => {
                state.upload_status = `Failed to submit Product details: ${error.message}`;
                state.status = "failed";
            })
            .addCase(showProduct.pending, (state) => {
                state.upload_status = "Showing product details";
                state.status = "loading";
            })
            .addCase(showProduct.fulfilled, (state, { payload }) => {
                state.upload_status = "Data uploaded successfully";
                state.AllProduct = payload?.data;
                state.totalPages = payload?.totalPages;
                state.status = "succeeded";
            })
            .addCase(showProduct.rejected, (state, { error }) => {
                state.upload_status = `Not showing details: ${error.message}`;
                state.status = "failed";
            })
            .addCase(editList.pending, (state) => {
                state.status = "Data fetching is pending";
            })
            .addCase(editList.fulfilled, (state, { payload }) => {
                state.status = "Successful";
                state.researchDetailsData = payload?.data;
            })
            .addCase(editList.rejected, (state, { error }) => {
                state.status = `Rejected: ${error.message}`;
            })
            .addCase(UpdateProduct.pending, (state) => {
                state.status = "Update pending";
            })
            .addCase(UpdateProduct.fulfilled, (state) => {
                state.upload_status = "Product data updated successfully";
                state.redirectProduct = "/showProduct";
                state.status = "succeeded";
            })
            .addCase(UpdateProduct.rejected, (state, { error }) => {
                state.status = `Rejected to update: ${error.message}`;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.upload_status = "Deletion pending";
                state.status = "loading";
            })
            .addCase(deleteProduct.fulfilled, (state) => {
                state.upload_status = "Data deleted successfully";
                state.status = "succeeded";
            })
            .addCase(deleteProduct.rejected, (state, { error }) => {
                state.upload_status = `Deletion failed: ${error.message}`;
                state.status = "failed";
            });
    },
});

export default productCrudSlice.reducer;
