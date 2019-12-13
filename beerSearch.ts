interface Beer {
    name: string;
} 

interface BeerWithImage extends Beer {
    img: string;
    printName(): void;
}

function searchBeer(name: string): BeerWithImage {
    if (!name) throw Error("Search string cannot be empty.")
    let beer: BeerWithImage = { name: name, img: "bar", printName: () => {console.log(name)} };
    return beer;
}

let searchString = "foo";
searchBeer(searchString).printName();