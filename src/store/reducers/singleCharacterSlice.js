import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  singleCharacterData: {},
  characterOrigin: {},
  loader: false
};

export const fetchSingleCharacter = createAsyncThunk(
  "singleCharacter/fetchData",
  async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
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

export const singleCharacterSlice = createSlice({
  name: "singleCharacter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCharacter.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchSingleCharacter.fulfilled, (state, action) => {
      state.singleCharacterData = action.payload;
      state.characterOrigin = action.payload.origin;
      state.loader = false;
    });
  },
});

export default singleCharacterSlice.reducer;
