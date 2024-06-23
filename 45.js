"use strict";
//Question 2
let personName1 = "Eric,";
let message = `would you like to learn some Python today?"`;
console.log(`"Hello`, personName1, message);
//Question 3
let personName2 = "Hassam";
console.log(personName2.toUpperCase(), personName2.toLowerCase());
//Question 4
let quote = `Prophet Muhammad PBUH once said, "Namaz is key to paeadise"`;
console.log(quote);
//Question 5
let famous_Person = "Prophet Muhammad PBUH";
let famousQuote = `"Never belittle a good act, even if it is nothing \n more than smiling at a fellow Muslim!"`;
console.log(famous_Person, "once said,", famousQuote);
//Question 6
let personName3 = "\tMuhammad Hassam \n Uddin";
console.log(personName3);
//Question 7/8
console.log(5 + 3);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
//Question 9
let favouriteNumber = 7;
console.log(`My favourite number is ${favouriteNumber}`);
//Question 10
//Hassam 16/june/2024
//This is a Object of my class data
// let obj = {
//     name: "Hassam",
//     rollNo: 415924,
//     Day: "Friday",
// }
// console.log(obj);
//This is a array of fruits collection
// let arr = ["Mango", "Apple", "Grapes", "Watermelon"];
// console.log(arr);
//Question 11
let friendsNames = ["Fayyaz", "Danish", "Anas", "Usama"];
console.log(friendsNames[0]);
console.log(friendsNames[1]);
console.log(friendsNames[2]);
console.log(friendsNames[3]);
//Question 12
let greeting = "Assalam O Alaikum";
console.log(greeting, friendsNames[0]);
console.log(greeting, friendsNames[1]);
console.log(greeting, friendsNames[2]);
console.log(greeting, friendsNames[3]);
//Question 13
let modeOfTransportation = ["Civic", "Sonata", "Range Rover", "BMW", "Audi V8"];
console.log(`My Favourite Mode of transportation is "${modeOfTransportation[4]}"`);
//Question 14
let guestList = ["Papa", "Mama", "cousinSister"];
let invitation = "You're invited to dinner";
console.log(guestList, invitation);
//Question 15
guestList.splice(2, 1, "Sister");
invitation = "You're invited to dinner Because my cousin sister is can't make the dinner";
console.log(guestList, invitation);
//Question 16
guestList.unshift("Grand father");
guestList.splice(2, 0, "Brother");
guestList.push("Uncle");
invitation = "All of you invited to dinner because \n I found a bigger dinner table";
console.log(guestList, invitation);
//Question 17
guestList.splice(2, 4);
invitation = "Only both of you are invited because I have space for only two guests";
console.log(guestList, invitation);
//Question 18
let locations = ['Makkah', 'Japan', 'London', 'Tokyo', 'Sydney'];
console.log(locations);
console.log(locations.slice().sort());
console.log(locations);
console.log(locations.slice().reverse());
console.log(locations);
locations.reverse();
console.log(locations);
locations.reverse();
console.log(locations);
locations.sort();
console.log(locations);
locations.sort().reverse();
console.log(locations);
//Question 19
let invitedPerson = "I have invited only";
console.log(invitedPerson, guestList.length, 'Person');
//Question 20
let mountain = ["K2", "Mount Everest", "Himalaya", "Nanga Parbat"];
let ocean = ["Pacific Ocean", "Arabian Sea", "Antartctic Ocean"];
let cities = ["Ohio State", "Toronto", "Karachi", "Mumbai", "Doha"];
let languages = ["Urdu", "Arabic", "English", "Chinese", "Hindi"];
let countries = ["Pakistan", "India", "South Korea", "Saudi Arabia"];
//Question 21
let Obj = {
    mountain: "K2",
    ocean: "Arabian Sea",
    cities: "Karachi",
    languages: "Urdu",
    countries: "Pakistan"
};
console.log(Obj);
//Question 22
let currentUsers = ["Hassam", "Fayyaz", "Ali", "Hamza", "Mudassir"];
if (currentUsers.length > 5) {
    console.log(currentUsers[5]);
}
else {
    console.log("Index 5 is out of bounds.");
}
//Question 23
let car1 = 'Civic';
console.log(car1 == 'Civic');
let car2 = 'Sonata';
console.log(car2 == 'Sonata');
let car3 = 'Hyundai';
console.log(car3 == 'Hyundai');
let car4 = 'Corolla';
console.log(car4 == 'Corolla');
let car5 = 'Kia';
console.log(car5 == 'Kia');
let bike1 = 'Honda';
console.log(bike1 == 'Unique');
let bike2 = 'Yamaha';
console.log(bike2 == 'Super Power');
let bike3 = 'Royal Enfield';
console.log(bike3 == 'Super Star');
let bike4 = 'Suzuki';
console.log(bike4 == 'United');
let bike5 = 'Unique';
console.log(bike5 == 'Union Star');
//Question 24
let str1 = "hello";
let str2 = "HELLO";
// Equality test
console.log(str1 === "hello"); // true
// Inequality test
console.log(str1 !== str2); // true
let str3 = "Hello";
// Convert to lowercase and compare
console.log(str3.toLowerCase() === "hello"); // true
let num1 = 10;
let num2 = 5;
// Equality test
console.log(num1 === 10); // true
// Inequality test
console.log(num1 !== num2); // true
// Greater than test
console.log(num1 > num2); // true
// Less than test
console.log(num2 < num1); // true
// Greater than or equal to test
console.log(num1 >= 10); // true
// Less than or equal to test
console.log(num2 <= 5); // true
let condition1 = true;
let condition2 = false;
// "and" operator (&&)
console.log(condition1 && condition2); // false
// "or" operator (||)
console.log(condition1 || condition2); // true
let numbers = [1, 2, 3, 4, 5];
// Check if item is in array
console.log(numbers.includes(3)); // true
// Check if item is not in array
console.log(!numbers.includes(6)); // true
let str4 = "world";
let num3 = 7;
let array = [1, 2, 3, 4, 5];
// Combined tests
console.log(str4 === "world" && num3 > 5); // true
console.log(array.includes(2) || num3 < 5); // true
console.log(num3 >= 7 && !array.includes(6)); // true
//Question 25
let alien_Color1 = 'Green';
if (alien_Color1 == 'Green') {
    console.log('The Player Just Earned 5 Points');
}
;
//Question 26
let alien_Color2 = 'Yellow';
if (alien_Color2 == 'Green') {
    console.log('The Player Just Earned 5 Points For Shooting The Alien');
}
else {
    console.log('The Player Just Earned 10 Points');
}
;
//Question 27
let alien_Color3 = 'Red';
if (alien_Color3 == 'Green') {
    console.log('The Player Just Earned 5 Points');
}
else if (alien_Color3 == 'Yellow') {
    console.log('The Player Just Earned 10 Points');
}
else if (alien_Color3 == 'Red') {
    console.log('The Player Just Earned 15 Points');
}
;
//Question 28
let life_Age = 23;
if (life_Age < 2) {
    console.log('The Person Is A Baby');
}
else if (life_Age === 2 || life_Age < 4) {
    console.log('The Person Is A Toddler');
}
else if (life_Age === 4 || life_Age < 13) {
    console.log('The Person Is A Kid');
}
else if (life_Age === 13 || life_Age < 20) {
    console.log('The Person Is A Teenager');
}
else if (life_Age === 20 || life_Age < 65) {
    console.log('The Person Is An Adult');
}
else if (life_Age >= 65) {
    console.log('The Person Is An Elder');
}
;
//Question 29
let favourite_Fruits = ['Mango'];
if (favourite_Fruits.includes('Banana')) {
    console.log(`You really like ${favourite_Fruits}`);
}
else if (favourite_Fruits.includes('Mango')) {
    console.log(`You really like ${favourite_Fruits}`);
}
else if (favourite_Fruits.includes('Watermelon')) {
    console.log(`You really like ${favourite_Fruits}`);
}
;
//Question 30
let userName = ['Hassam'];
if (userName.includes('Admin')) {
    console.log(`Hello ${userName}, would you like to see a status report?`);
}
else {
    console.log(`Hello ${userName}, thank you for logging in again.`);
}
;
//Question 31
let userName2 = [];
if (userName2.length <= 0) {
    console.log('We need to find some users');
}
;
//Question 32
let current_Users = ['hassam', 'shehroz', 'farhan', 'jibran', 'saajid'];
let new_Users = ['HASSAM', 'Usama', 'Zain', 'Abid', 'Danish',];
function checkUsernameAvailability(current_Users, new_Users) {
    let currentUsersLower = current_Users.map(user => user.toLowerCase());
    new_Users.forEach(new_User => {
        let newUserLower = new_User.toLowerCase();
        if (currentUsersLower.includes(newUserLower)) {
            console.log(`Sorry, ${new_User} is not available. Please choose a different username.`);
        }
        else {
            console.log(`Great! ${new_User} is available.`);
        }
    });
}
checkUsernameAvailability(current_Users, new_Users);
//Question 33
let ord_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i of ord_Numbers) {
    if (i > 0 && i < 10) {
        console.log(i + "th");
    }
}
;
//Question 34
let pizza = ["Chicken Tikka", "Pepperoni", "Afghani Tikka"];
for (let i of pizza) {
    console.log(`I really like ${i} pizza`);
}
;
console.log(`But my one of the most favourite is ${pizza[0]} pizza \nbecause this taste is very delicious`);
//Question 35
let great_Pets = ["Dog", "Cat", "Horse"];
for (let i of great_Pets) {
    console.log(`${i} is a great pets, beacuse he is very faithful`);
}
;
console.log(`But ${great_Pets[0]} would make a great pets`);
//Question 36
function make_Shirt(size, text) {
    console.log(size, text);
}
;
make_Shirt("Small,", "I Love Programming");
//Question 37
make_Shirt("Medium,", "I Love Typescript");
make_Shirt("Large,", "I Love Tailwind CSS");
//Question 38
function describe_City(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_City("Karachi");
describe_City("New York", "United States");
describe_City("London");
//Question 39
function city_Country(city, country) {
    let both = city + country;
    return both;
}
console.log(city_Country(`"Karachi,`, `Pakistan"`));
console.log(city_Country(`"Lahore,`, `Pakistan"`));
console.log(city_Country(`"Mumbai,`, `India"`));
function make_Album(artistName, albumTitle, numberOfTracks) {
    let music_Album = {
        name: artistName,
        songTitle: albumTitle
    };
    if (numberOfTracks !== undefined) {
        music_Album.tracks = numberOfTracks;
    }
    return music_Album;
}
;
console.log(make_Album("Atif Aslam", "Piya O re Piya", 6));
//Question 41
let magician = ["Harry Houdini", "Penn & Teller", "Shin Lim"];
function show_Magician() {
    for (let i of magician) {
        console.log([i]);
    }
    ;
}
;
show_Magician();
//Question 42
function make_Great() {
    for (let i of magician) {
        console.log(`${[i]} is a Great Magician`);
    }
}
;
make_Great();
//Question 43
function unchanged_magicians(magician) {
    let modifiedMagicians = [...magician];
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = `${modifiedMagicians[i]} the Great`;
    }
    return modifiedMagicians;
}
console.log(unchanged_magicians(magician));
//Question 44
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let i of items) {
        console.log(`- ${i}`);
    }
    console.log("Sandwich complete!\n");
}
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Tomato");
makeSandwich("Peanut Butter", "Jelly", "Banana");
function car_Specs(manufacturer, modelName, carColor) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    if (carColor !== undefined) {
        car.carColor = carColor;
    }
    return car;
}
;
console.log(car_Specs("Toyota", "Land cruiser", "Black"));
console.log(car_Specs("Honda", "Civic", "White"));
console.log(car_Specs("Ford", "Explorer"));
console.log("Thank You");
