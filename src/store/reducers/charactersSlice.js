import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  charactersInfo: {},
  charactersResults: [],
  loader: true,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchData",
  async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`, {
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

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.charactersInfo = action.payload.info;
      state.charactersResults = action.payload.results;
      state.loader = false;
    });
  },
});

export default charactersSlice.reducer;