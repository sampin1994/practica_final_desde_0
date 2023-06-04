import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from './models/action';

export class Store<T> {
    private _state$: BehaviorSubject<T>;
    private _actions$: BehaviorSubject<Action>;

    constructor(initialState: T) {
        this._state$ = new BehaviorSubject(this.getClone(initialState));
        const initialAction: Action = {
            type: 'INITIAL',
            payload: initialState
        }
        this._actions$ = new BehaviorSubject(initialAction);
    }

    setState(mutation: Partial<T>){
        const mutatedState = { ... this.getSnapshot(), ... mutation}
        this._state$.next(this.getClone(mutatedState));
    }

    dispatch(action: Action) {
        this.setState(action.payload);
        this._actions$.next(action);
    }

    reduce(action: Action, reducer: (currentState: T, payload: any)=> T){
        const mutatedState = reducer(this.getSnapshot(), action.payload);
        this._state$.next(this.getClone(mutatedState));
        this._actions$.next(action);
    }

    getSnapshot() {
        return this.getClone(this._state$.value);
    }

    getState$() {
        return this._state$.asObservable().pipe(map(state => this.getClone(state)));
    }

    getActions$() {
        return this._actions$.asObservable();
    }

    private getClone(source: T): T {
        return {... source}

    }
}
