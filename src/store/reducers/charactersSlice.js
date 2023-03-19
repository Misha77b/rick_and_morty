import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  charactersInfo: {},
  charactersResults: [],
  loader: true,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchData",
  async ({pageNumber, filters}) => {
    console.log(pageNumber, filters);
    let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
    if(filters) {
      url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&${filters}`
    }
    const response = await fetch(url, {
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
      // state.charactersResults = action.payload.results;
      state.charactersResults = action.payload.results.sort((a, b) => a.name.localeCompare(b.name));
      state.loader = false;
    });
  },
});

export default charactersSlice.reducer;
