// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = name => {
    return cats.push(name)
}

const destructivelyPrependCat = name => {
    return cats.unshift(name);
}

const  destructivelyRemoveLastCat = () => cats.pop()

const destructivelyRemoveFirstCat = () => cats.shift()

function appendCat(name) {
    let cats2 = [...cats, name]
    return cats2
}

function prependCat(name) {
    let cats3 = [name, ...cats];
    return cats3
}

function removeLastCat() {
    let cats4 = cats.slice(0, -1)
    return cats4
}

function removeFirstCat() {
    let cats5 = cats.slice(1)
    return cats5
}
