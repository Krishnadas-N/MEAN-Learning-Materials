import { createAction, props } from "@ngrx/store";
import { User } from "./user.model";

export const LOADUSER ='[USER Load] LOAD USER';
export const LOAD_SUCCESS='[USER Load Success] LOAD SUCCESS';
export const LOAD_FAILURE='[USER Load Failure] LOAD FAILURE';

// Actions
export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());