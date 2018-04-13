import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export const USER_AUTH_KEY: string = "currentUser"

export class AuthStateInfo {
    userName: string = "";
}

export interface AuthRequest{
    userName: string,
    password: string,
    rememberMe: boolean; 
}

@Injectable()
export class AuthStore {
    private subject = new BehaviorSubject<AuthStateInfo | undefined>(undefined);
    constructor() { }

    get authState(): AuthStateInfo | undefined {
        return this.subject.getValue();
    }

    get authStateChanges$(): Observable<AuthStateInfo | undefined> {
        return this.subject.asObservable();
    }

    setAuthState(newState: AuthStateInfo) {
        const state = Object.assign(this.authState || {}, newState);
        localStorage.setItem(USER_AUTH_KEY,JSON.stringify(state));
        this.subject.next(state);
    }

    login(model: AuthRequest): Observable<AuthStateInfo>{
        const newState = <AuthStateInfo>{
            userName: model.userName
        };
        this.setAuthState(newState);
        return Observable.of(newState).delay(3000);
    }

    logout() {
        this.subject.next(undefined);
    }

}
