// //
// const party = message => {console.log(message)};

// party(`Let's go and party!!`)

// setTimeout(() => {party(`We have arrive`)}, 2000);

// const getWords = () => {
//     party(`Let's get drinks`);

//     setTimeout(() => {
//         party(`Shot One`);

//         setTimeout(() => {
//             party(`Shot Two`);

//             setTimeout(() => {
//                 party(`Shot Three`)

//             }, 1000);
//         }, 3000);
//     }, 4000);
// };

// getWords();


// // Call a countdown within itself, a concept called recursion
// const countdown = (num, callback) => {
//     if (num > 0) {
//         setTimeout(() => {
//             console.log(num);

//             countdown(num - 1, callback);
//         }, 1500);
//     } else {
//         callback();
//     }
// };

// const done = () => {
//     console.log(`Job is done!`);
// };

// countdown(3, done);

const lunchTime = false;

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
        const lunch = {
            lunch: "your favorite lunch",
            drink: "your favorite beverage"
        } 
        
        resolve(lunch)
        } else {
            const lunchError = new Error("It's not lunchtime");

            reject(lunchError)
        }
    })
}

orderMeSomeFood()
    .then(res => orderMeSomeFood(true))
    .then(res => console.log(res))
    .catch(err => console.log(err));