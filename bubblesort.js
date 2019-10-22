function bubbleSort(array) {
    let isSwapped = false
    let count = 0

    while (!isSwapped) {
        isSwapped = true
        for (let i = 0; i < array.length - count; i++) {
            if (array[i] > array[i+1]) {
                isSwapped = false
                const tmp = array[i]
                array[i] = array[i+1]
                array[i+1] = tmp
            }
        }
        count++
    }
    return array
}