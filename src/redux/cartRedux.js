import {createSlice} from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast';


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total: 0,
    },
    reducers:{
        addProduct:(state, action) =>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;

            toast.success('Added to Cart Sucessfully', {
                duration: 4000,
                position: 'bottom-right',
                // Styling
                style: {},
                className: '',
                // Custom Icon
                icon: '👏',
                // Change colors of success/error/loading icon
                iconTheme: {
                  primary: '#000',
                  secondary: '#fff',
                },
                // Aria
                ariaProps: {
                  role: 'status',
                  'aria-live': 'polite',
                },
              });
        },
        removeProduct:(state, action) =>{
            state.quantity -= 1;
            // state.products.pop(action.payload.product);
            state.products.splice(
                state.products.findIndex((item)=>item._id === action.payload.id),1
            );



            // state.products.pop(
                // state.products.filter((item)=>item._id === action.payload.id),1
            // );
            // state.total -= action.payload.price;

            // const { id } = action.payload; 
            // console.log(id);
      
            // state.todos = state.todos.filter(item => item.id !== id)
        },
        clearCart:(state, action)=>{
            state.quantity= null;
            state.products =[];
            state.total = 0;
        },

    }
});

export const {addProduct, removeProduct, clearCart} = cartSlice.actions
export default cartSlice.reducer;