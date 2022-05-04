import {createSlice} from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast';

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSuccess:(state, action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
            toast.success('Updated Sucessfully', {
                duration: 4000,
                position: 'top-center',
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
        loginFailure:(state)=>{
            state.isFetching= false;
            state.error = true;
        },
        logout:(state)=>{
            state.currentUser=null;

        }
    }
});

export const {loginStart, loginSuccess, loginFailure} = userSlice.actions
export default userSlice.reducer;