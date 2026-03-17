function xo(str) {
    const huruf = str.split('');
    
    const jumlahX = huruf.filter(h => h === 'x').length;
    const jumlahO = huruf.filter(h => h === 'o').length;
    
    return jumlahX === jumlahO;

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

