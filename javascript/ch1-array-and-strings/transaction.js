const transactions = [
    "Anna, 50, 10, New York",
    "Bob, 5, 12, Atlanta",
    "Anna, 2000, 15, New York",
    "John, 1001, 40, Boston",
    "John, 20, 50, New York",
    "Bob, 44, 52, Georgia",
];

function validateTransactions(transactions) {
    const map = {};
    const result = [];
    for (let transaction of transactions) {
        const [name, amount, time, location] = transaction
            .split(",")
            .map((s) => s.trim());
        if (amount > 1000) {
            result.push(`${name}, ${amount}, ${time}, ${location}`);
        } else if (map[name]) {
            if (
                Math.abs(map[name].time - time) <= 60 &&
                map[name].location !== location
            ) {
                if (map[name].amount <= 1000) {
                    result.push(
                        `${map[name].name}, ${map[name].amount}, ${map[name].time}, ${map[name].location}`
                    );
                }
                result.push(`${name}, ${amount}, ${time}, ${location}`);
            }
        }
        map[name] = { name, amount, time, location };
    }
    return result.join("\n");
}

console.log(validateTransactions(transactions));
