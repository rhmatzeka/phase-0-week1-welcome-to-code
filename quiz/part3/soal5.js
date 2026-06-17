let pattern = ""
bintang = 5

for (let i = 0; i < bintang; i++) {
  
  //space
    for (let j = 5; j > i; j--) {
        pattern += " "
    }

  //bintang
    
    for (let k = 0; k <= i * 2; k++)
        pattern += "*"
      
    pattern += "\n"
}

console.log(pattern)

//i = 1   i < 5 i++     j = 5  j >= 1 j--
//i = 2   i < 5 i++
