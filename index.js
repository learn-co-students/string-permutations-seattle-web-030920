function findAllPermutations(str) {
    const result = []
    if (str.length === 0) {
        return [str]
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        let perArr = findAllPermutations(str.slice(0, i) + str.slice(i + 1, str.length))
        perArr.forEach(perm => {
            result.push(char + perm)
        });
    }
    return result
}

function recursion(str) {
    if (str.length === 1) {
        return str[0]
    } else if (str.length === 2) {
        return str[0] 
    }
}
