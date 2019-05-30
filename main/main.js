module.exports = function main(inputs) {
    let distance = inputs["distance"], parkTime = inputs["parkTime"], price = 6
    if(distance > 2 && distance <= 8) {
        price += 0.8 * (distance - 2)
    } else if (distance > 8) {
        // 4.8 = (8 - 2) * 0.8
        price += 4.8 + 1.2*(distance - 8)
    }
    price += 0.25 * parkTime
    return Math.round(price)
};
