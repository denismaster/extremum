import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export const USER_AUTH_KEY: string = "currentUser"

export class AuthStateInfo {
    userName: string = "";
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
        this.subject.next(state);
    }

    logout() {
        this.subject.next(undefined);
    }

}
