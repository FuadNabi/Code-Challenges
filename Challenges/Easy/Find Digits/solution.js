function findDigits(n) {
    const str = n.toString();
    let total = 0;
    
    for (let i = str.length - 1; i >= 0; i--) {
        const number = Number(str[i]);
        
        if (n % number == 0) total += 1;
    }
    
    return total;
}
