import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: "",
	firstName: "",
	gender: "",
	id: 0,
	image: "",
	lastName: "",
	token: "",
	username: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action) => {
			return { ...state, ...action.payload };
		},
	},
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
