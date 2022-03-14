const duplicates = ["sushi", "pizza", "burger", "potatoe", "pasta", "ice-cream", "pizza", "chicken", "onion rings", "pasta", "soda",];

function removeDuplicates(param) {
    let finalList = [];
    for (let i = 0; i < param.length; i++) {
        if (!finalList.includes(param[i])) {
            finalList.push(param[i]);
        }
    }
    return console.log(finalList);
}

removeDuplicates(duplicates);