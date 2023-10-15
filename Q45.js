function car_data(manufacturer, model, ...options) {
    let car = {
        manufacturer,
        model
    };
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }
    return car;
}
console.log(car_data("Honda", "2023", "color", "white", "waranty", "1 year"));
export {};
