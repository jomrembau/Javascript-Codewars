function fibonacci(n) {
    var fibonacciList = []
    if (n === 0) return [];
    if (n === 1) return [0];
    fibonacciList.push(0)
    fibonacciList.push(1)
    for (var i = 0; i < n -2; i++) {
        fibonacciList.push(fibonacciList[i] + fibonacciList[i+1]);
    }
    return fibonacciList
        
}

fibonacci(10);