let arr = [1,2,3,4,4,5,3,2];

function removeDuplicate() {
    let newArr = [];

    if(arr.length > 0) {
        arr.forEach((ele)=> {
            if(newArr.indexOf(ele) === -1) {
                newArr.push(ele);
            }
        })
        return newArr;
    }
}