import { createReducer, on } from "@ngrx/store";
import { IntitalState } from "./user.state"; // Assuming initialState is defined in user.state
import { loadUsers, loadUsersSuccess, loadUsersFailure } from "./user.action"; // Adjust imports based on your action file
import { Users } from "./user.model";

const _userReducer = createReducer(
    IntitalState,
  on(loadUsers, (state) => ({
    ...state,
    isLoading: true,
    error: ''
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    user: users,
    isLoading: false,
    error: ''
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);

export function userReducer(state: Users | undefined, action: any) {
  return _userReducer(state, action);
}
