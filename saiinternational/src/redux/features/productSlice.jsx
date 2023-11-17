import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:"products",
    initialState:{
        products:[]
    },

    reducers:{
        getProducts : (state, action) =>{
            state.products = action.payload
            // .map(pr=>{
            //     return {_id:pr._id, product_name:pr.product_name, 
            //             price:pr.price, quantity:pr.quantity, perma_link:pr.perma_link,
            //             show_price:pr.show_price, show_quantity:pr.show_quantity,
            //             createdAt:pr.createdAt, updatedAt:pr.updatedAt
            //         }
            // })
        },
        addProduct: (state, action)=>{
            // console.log("action.payload ", action.payload)
            state.products.push(action.payload);
        },

        updateProduct:(state, action)=>{
              const index = state.products.findIndex(p => p._id == action.payload._id);
              state.products[index] = action.payload;
            //   console.log("action.payload ", action.payload._id , index)
        },

        updateProductImage:(state, action)=>{
            const index = state.products.findIndex(p => p._id == action.payload._id);
            state.products[index].image = action.payload.image;
        },

        deleteProduct: (state, action)=>{
            const _id = action.payload._id;
            state.products = state.products.filter(p => p._id !== _id);
        },

        deleteAllProduct: (state, action)=>{
            state.products.length = 0;
        }
    }
})

export const {getProducts, addProduct, updateProduct, updateProductImage, deleteProduct, deleteAllProduct}  = productSlice.actions;
export default productSlice.reducer;