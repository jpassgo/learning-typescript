import * as _ from "lodash";

async function hello() {
    return 'world'
}

let anyType: any = 23;
anyType = "23"

type Style = 'bold' | 'italic';

let font: Style;


const arr: number[] = []
arr.push(1)
arr.push(2)
arr.push(3)

type myList = [number?, string?, boolean?]