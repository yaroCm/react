export function diferenceOfYear(year){
    return new Date().getFullYear()-year;

}

export function calculateBrand(brand){
    let incremento;
    switch(brand){
        case 'europeo':
            incremento=1.30;
            break;
        case 'americano':
            incremento=1.15;
            break;
        case 'asiatico':
            incremento=1.05;
            break;
        default:
            break;
    }
     return incremento;
}

export function obtainPlan(plan){
    return (plan==='basico')?1.20:1.50;
}