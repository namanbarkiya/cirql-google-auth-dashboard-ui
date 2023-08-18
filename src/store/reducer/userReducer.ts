import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    is_logged_in: false,
    name: "",
    id: "",
    picture: "",
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            const { name, id, picture, email } = action.payload;
            // console.log(action.payload);
            state.is_logged_in = true;
            state.email = email;
            state.name = name;
            state.id = id;
            state.picture = picture;
        },
    },
});

export const selectUser = (state: any) => state.user;

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
