import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Users } from "./user.model";




export const selectUserState = createFeatureSelector<Users>('user');

export const userSelector = createSelector(selectUserState, (state: any) => state.users);

export const selectLoading = createSelector(
    selectUserState,
    (state: Users) => state.loading
  );
  
  export const selectError = createSelector(
    selectUserState,
    (state: Users) => state.error
  );