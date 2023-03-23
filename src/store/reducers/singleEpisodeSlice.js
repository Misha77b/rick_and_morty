import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  episodeInfo: {},
  episodeCharacters: [],
  loader: false,
};

export const fetchEpisode = createAsyncThunk(
  "episode/fetchData",
  async (id) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}`,
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

export const fetchEpisodeCharacters = createAsyncThunk(
  "episodeCharacters/fetchData",
  async (characters) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characters}`,
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

export const singleEpisodeSlice = createSlice({
  name: "singleEpisode",
  initialState,
  reducers: {
    setEpisodeCharacters: (state, action) => {
      state.episodeCharacters = action.payload;
      state.loader = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEpisode.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchEpisode.fulfilled, (state, action) => {
      state.episodeInfo = action.payload;
      //   state.loader = false;
    });
    builder.addCase(fetchEpisodeCharacters.pending, (state) => {
      //   state.loader = true;
    });
    builder.addCase(fetchEpisodeCharacters.fulfilled, (state, action) => {
      state.episodeCharacters = action.payload;
      state.loader = false;
    });
  },
});

export const { setEpisodeCharacters } = singleEpisodeSlice.actions;
export default singleEpisodeSlice.reducer;
