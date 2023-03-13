import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  locationsInfo: {},
  locationsResults: [],
};

export const fetchLocations = createAsyncThunk(
  "characters/fetchData",
  async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/location`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.warn(err);
      });
    return response;
  }
);

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.locationsInfo = action.payload.info;
      state.locationsResults = action.payload.results;
      state.loader = false;
    });
  },
});

export default locationsSlice.reducer;
