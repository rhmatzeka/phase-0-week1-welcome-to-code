let pattern = ""
bintang = 5

for (let i = 0; i < bintang; i++) {
    for (let j = 0; j <= i; j++) {
        pattern += "*"
    }
    pattern += "\n"
}

console.log(pattern)