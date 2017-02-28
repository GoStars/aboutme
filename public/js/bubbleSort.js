function bubbleSort(arr) {
	let len = arr.length, i, j, flag = 0, tmp

	for (i = 1; i <= len - 1; i++) {
		for (j = 0; j <= len - i - 1; j++) {
			// swap elements
			if (arr[j] > arr[j + 1]) {
				tmp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = tmp
				flag = 1
				console.log(arr)
			}
		}
		// avoid redundant passes (algorithm runs faster)
		if (flag == 0) {
			break
		}
	}
}

bubbleSort([20, 2, 8, 1, 7, 10]) // [1, 2, 7, 8, 10, 20]