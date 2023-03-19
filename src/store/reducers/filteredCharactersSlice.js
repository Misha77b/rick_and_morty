// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   filteredCharactersInfo: {},
//   filteredCharactersResults: [],
//   loader: true,
// };

// export const fetchFiletredCharacters = createAsyncThunk(
//     "characters/fetchFiletredData",
//     async ({pageNumber, filters}) => {
//         console.log(pageNumber);
//         console.log(filters);
//       const response = await fetch(
//         `https://rickandmortyapi.com/api/character/?page=${pageNumber}&${filters}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//         .then((res) => res.json())
//         .catch((err) => {
//           console.warn(err);
//         });
//       return response;
//     }
//   );

// export const filteredCharactersSlice = createSlice({
//   name: "filteredCharacters",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchFiletredCharacters.pending, (state) => {
//       state.loader = true;
//     });
//     builder.addCase(fetchFiletredCharacters.fulfilled, (state, action) => {
//       state.filteredCharactersInfo = action.payload.info;
//       state.filteredCharactersResults = action.payload.results.sort((a, b) =>
//         a.name.localeCompare(b.name)
//       );
//       state.loader = false;
//     });
//   },
// });

// export default filteredCharactersSlice.reducer;
