import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  episodesInfo: {},
  episodesResults: {},
  loader: false,
};

export const fetchEpisodes = createAsyncThunk(
  "episodes/fetchData",
  async ({ params }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/?${params}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.warn(err);
      });
    return response;
  }
);

export const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEpisodes.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchEpisodes.fulfilled, (state, action) => {
      state.episodesInfo = action.payload.info;
      state.episodesResults = action.payload.results;
      state.loader = false;
    });
  },
});

export default episodesSlice.reducer;
