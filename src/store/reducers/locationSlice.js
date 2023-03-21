import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  locationsInfo: {},
  locationsResults: {},
  locationResult: {},
  locationCharacters: [],
  loader: false,
};

export const fetchLocations = createAsyncThunk(
  "locations/fetchData",
  async ({ params }) => {
    const response = await fetch(`https://rickandmortyapi.com/api/location/?${params}`, {
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

export const fetchLocation = createAsyncThunk(
  "location/fetchData",
  async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`, {
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

export const fetchLocationsCharacters = createAsyncThunk(
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
    // builder.addCase(fetchLocationsCharacters.pending, (state) => {
    //   state.loader = true;
    // });
    // builder.addCase(fetchLocationsCharacters.fulfilled, (state, action) => {
    //   //   state.locationCharacters.push(action.payload);
    //   state.locationCharacters = action.payload;
    //   state.loader = false;
    // });
  },
});

export default locationsSlice.reducer;
