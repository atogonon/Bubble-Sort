function split(wholeArray) {
    let midPoint = Math.ceil(wholeArray.length / 2)
    let firstHalf = wholeArray.slice(0, midPoint)
    let secondHalf = wholeArray.slice(midPoint)

    return [firstHalf, secondHalf]
}