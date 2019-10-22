function split(wholeArray) {
    let midPoint = Math.ceil(wholeArray.length / 2)
    let firstHalf = wholeArray.slice(0, midPoint)
    let secondHalf = wholeArray.slice(midPoint)

    return [firstHalf, secondHalf]
}

function merge(arr1, arr2) {
    let result = []

    if (!arr1[0] || !arr2[0]) {
        return result = [...arr1, ...arr2]
    }

    if (arr1[0] < arr2[0]) {
        let removed = arr1.shift()
        result.push(removed)
    }
    else {
        let removed = arr2.shift()
        result.push(removed)
    }
    return result.concat(merge(arr1, arr2))
}


