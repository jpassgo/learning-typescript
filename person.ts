interface Person {
    first: string;
    last: string;
    [key: string]: any
}

const person: Person = {
    first: 'Jeff',
    last: 'Pascoe'
}

const person2: Person = {
    first: 'John',
    last: 'Snow',
    knowsNothing: true
}