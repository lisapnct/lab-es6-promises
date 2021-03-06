// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
// const promiseSteak = addFood(steak[0], "#steak", () => {
//   addFood(steak[1], "#steak", () => {
//     addFood(steak[2], "#steak", () => {
//       addFood(steak[3], "#steak", () => {
//         addFood(steak[4], "#steak", () => {
//           addFood(steak[5], "#steak", () => {
//             addFood(steak[6], "#steak", () => {
//               addFood(steak[7], "#steak", () => {
//                 addFoodImage("steak");
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// // Iteration 2 using `.then()`
// const promiseMashPotatoes = addFood(mashPotatoes[0], "#mashPotatoes").then(
//   () => {
//     addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
//       addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
//         addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
//           addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
//             addFoodImage("mashPotatoes");
//           });
//         });
//       });
//     });
//   }
// );

// Iteration 3 using async and await

// async function makeFood() {
//   // ... your code here
//   await addFood(brusselSprouts[0], "#brusselSprouts");
//   await addFood(brusselSprouts[1], "#brusselSprouts");
//   await addFood(brusselSprouts[2], "#brusselSprouts");
//   await addFood(brusselSprouts[3], "#brusselSprouts");
//   await addFood(brusselSprouts[4], "#brusselSprouts");
//   await addFood(brusselSprouts[5], "#brusselSprouts");
//   await addFood(brusselSprouts[6], "#brusselSprouts");
//   await addFood(brusselSprouts[7], "#brusselSprouts");
//   await addFood(brusselSprouts[8], "#brusselSprouts");
//   addFoodImage("brusselSprouts");
// };

// const promiseBrusselsSprout = makeFood();

// REFACTO

const makeFood = async (step, id) => {
  for (let i = 0; i < step.length; i++) {
    await addFood(step[i], id);
  }
  addFoodImage(id);
};

let promiseMashPotatoes = makeFood(mashPotatoes, "#mashPotatoes");
let promiseSteak = makeFood(steak, "#steak");
let promiseBrusselsSprout = makeFood(brusselSprouts, "#brusselSprouts");

// BONUS 1
function addFoodImage(id) {
  const table = document.getElementById("table");
  table.innerHTML += `<img src="./public/images/${id.replace("#","")}.jpg" alt="food">`;
  // console.log(table);
}

// BONUS 2
Promise.all([promiseSteak, promiseMashPotatoes, promiseBrusselsSprout]).then(
  () => {
    document.body.innerHTML += `<button>Dinner is served!</button>`;
  }
);
