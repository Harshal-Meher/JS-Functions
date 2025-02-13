let arr = [1,2,3,4,4,5,3,4,2];

function removeElementWithFilter(value,index,array) {
    return array.indexOf(value) === index;
}

let result = arr.filter(removeElementWithFilter);
console.log('Remove Duplicate With Filter Method : ' , result)
