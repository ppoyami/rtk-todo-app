import { createSlice } from '@reduxjs/toolkit';

export const filterTypes = {
  ALL: 'SHOW_ALL',
  ACTIVE: 'SHOW_ACTIVE',
  COMPLATE: 'SHOW_COMPLATE',
};

/* eslint-disable no-param-reassign */
const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    SHOW_ALL: true,
    SHOW_ACTIVE: false,
    SHOW_COMPLATE: false,
  },
  reducers: {
    filterChange(state, action) {
      Object.keys(state).forEach(key => {
        state[key] = false;
      });
      state[action.payload.key] = true;
    },
  },
});

export const { filterChange } = filtersSlice.actions;

export default filtersSlice.reducer;
