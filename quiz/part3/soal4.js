let angka = 100 

for (let i = 0; i < angka; i++) {
    if (i % 10 === 0) {
        console.log(`${i} kelipatan 10`)
    }
    else if (i % 6 ===0 ) {
        console.log(`${i} kelipatan 6`)
    }
     else if (i % 3 === 0) {
        console.log(`${i} kelipatan 3`)
    }
}