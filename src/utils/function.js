export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function number2Currency(x){
    let formatter = new Intl.NumberFormat('en-US',{
        style: 'decimal',
        minimumFractionDigits: 2
    })
    
    return formatter.format(x);
}