import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUsers, loadUsersFailure, loadUsersSuccess } from "./user.action";
import { catchError, map, of, switchMap, tap } from "rxjs";


export class UserEffects{
    constructor(private action$:Actions){}

    LoadUser$=createEffect(()=>(
        this.action$.pipe(
            ofType(loadUsers),
            tap(()=>console.log("users logged")),
            switchMap(()=>this.service.getUser().pipe(
                map((users:any)=> loadUsersSuccess({users: users})),
                catchError((err)=> of(loadUsersFailure({error: err})) )
            ))
        )
    ))
}