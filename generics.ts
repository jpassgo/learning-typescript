class Observable<T> {
    constructor(public value: T) {}
}

let x: Observable<number>;

let y: Observable<string>;

let z = new Observable(23)