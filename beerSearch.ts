class Beer {
    constructor(public name: string, public img: string) {
    }
} 

function searchBeer(str: string) {
    let beer = new Beer(str, "Bar");
    return beer;
}

let searchString = "foo";
document.body.textContent = searchBeer(searchString).name;