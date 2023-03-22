import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  locationInfo: {},
  locationResidents: [],
  loader: false,
};

export const fetchLocation = createAsyncThunk(
  "location/fetchData",
  async (id) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location/${id}`,
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

export const fetchLocationCharacters = createAsyncThunk(
  "locationCharacters/fetchData",
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

export const singleLocationSlice = createSlice({
  name: "singleCharacter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      state.locationInfo = action.payload;
      state.loader = false;
    });
    builder.addCase(fetchLocationCharacters.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchLocationCharacters.fulfilled, (state, action) => {
      state.locationResidents = action.payload;
      state.loader = false;
    });
  },
});

export default singleLocationSlice.reducer;
