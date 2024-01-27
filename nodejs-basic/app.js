// const Hapi = require('@hapi/hapi');
// const init = async ()={
//     const server = Hapi.server({
//         port:3000,
//         host: proccess.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com'
//     });
//     await server.start();
//     console.log(`Server berjalan pada ${server.info.uri}`);
// };
// init();

// const memoryInformation = process.memoryUsage();
// console.log(memoryInformation);

// const firstName = process.argv[2];
// const lastName = process.argv[3];
// console.log(`Hello ${firstName} ${lastName}`);

// import coffee from "./coffee.js";
// console.log(coffee);

// import { firstName, lastName } from "./user.js";
// console.log(firstName);
// console.log(lastName);

// import http from http;

// import moment from "moment";
// const date = moment().format("MMM Do YY");
// console.log(date);

// import EventEmitter from "events";
// const myEventEmitter = new EventEmitter();
// const makeCoffe = ({ name }) => {
//   console.log(`Kopi ${name} telah dibuat!`);
// };
// const makeBill = ({ price }) => {
//   console.log(`Bill sebesar ${price} telah dibuat!`);
// };
// const onCoffeeOrderedListener = ({ name, price }) => {
//   makeCoffe(name);
//   makeBill(price);
// };
// // myEventEmitter.on("coffee-order", makeCoffe);
// // myEventEmitter.on("coffee-order", makeBill);
// myEventEmitter.on("coffee-order", onCoffeeOrderedListener);
// myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });

// import fs from "fs";
// const fileReadCallback = (error, data) => {
//   if (error) {
//     console.log("Gagal membaca berkas");
//     return;
//   }
//   console.log(data);
// };
// fs.readFile("todo.txt", "utf-8", fileReadCallback);

// import fs from "fs";
// const readableStream = fs.createReadStream("./article.txt", {
//   highWaterMark: 10,
// });
// readableStream.on("readable", () => {
//   try {
//     process.stdout.write(`[${readableStream.read()}]`);
//   } catch (error) {}
// });
// readableStream.on("end", () => {
//   console.log("Done");
// });

import fs from "fs";
const writableStream = fs.createWriteStream("output.txt");
writableStream.write("Ini merupakan teks baris pertama!\n");
writableStream.write("Ini merupakan teks baris kedua!\n");
writableStream.end("Akhir dari writable stream!");
