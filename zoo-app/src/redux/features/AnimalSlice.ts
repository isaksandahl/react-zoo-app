import { createSlice } from "@reduxjs/toolkit";
import { IAnimal } from "../../models/IAnimal";
import { getList, save } from "../../services/LocalStorageService";
import { IAction } from "../models/IAction";

let defaultValue: IAnimal[] = getList<IAnimal>();

const animalSlice = createSlice({
  name: "animal",
  initialState: { value: defaultValue },
  reducers: {
    markAsFed: (state, action: IAction<number>) => {
      state.value[action.payload].isFed = true;
      save(state.value);
    },
  },
});

export const { markAsFed } = animalSlice.actions;

export default animalSlice.reducer;
