import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import FirebaseAuthTypes from '@react-native-firebase/auth';
interface profileType {
  data: any;
}

const initialState: profileType = {
  data: [],
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileData: (state, action: PayloadAction<profileType>) => {
      state.data = action.payload;
    },
  },
});

export const {profileData} = profileSlice.actions;

export default profileSlice.reducer;
