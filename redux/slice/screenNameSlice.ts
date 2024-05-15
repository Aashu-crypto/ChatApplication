import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../Store';
interface screenType {
  screen: string;
}
const initialState: screenType = {
  screen: 'WELCOME',
};

export const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    screen: (state, action: PayloadAction<string>) => {
      state.screen = action.payload;
    },
  },
});

export const {screen} = screenSlice.actions;
export const screenName = (state: RootState) => state.screen.screen;
export default screenSlice.reducer;
