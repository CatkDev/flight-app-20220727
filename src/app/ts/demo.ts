// // src/app/ts/demo.ts
//
// import { FLIGHT } from '../flight';
// import { CharterFlight } from './charter-flight';
// import { CompanyAddress } from './company-address';
// import { FlightInvoice } from './flight-invoice';
//
// import { FlightManager } from './flight-manager';
// import { Passenger, Person, Pilot } from './person';
// import { ScheduledFlight } from './scheduled-flight';
//
// console.log('Hallo Welt!');
//
// const message = 'Hallo Welt!';
//
// let message3: any = 'Hallo Welt!';
// message3 = 42; // OK
//
// const message5 = 'Hallo';
// const message6 = message5 + ' Welt';
//
// const i2: number = parseInt('42', 10); // String 42 als Integer
// const d2: number = parseFloat('0.815'); // String 0.815 als Fließkommazahl
// const str: any = 'ein String';
//
// if (isNaN(str)) {
//     console.log('Ein String ist keine Zahl!');
// }
//
// const name1 = 'Max';
// const name2 = 'Max';
// const name3 = `
// ${name2} Mustermann`;
//
//
// const firstName = null;
// if (!firstName) {
//     console.log('firstName is falsy');
// }
//
//
// const namen: string[] = ['Max', 'Susi'];
// // Gleichbedeutende Alternative: const namen: Array<string> = ['Max', 'Susi'];
// namen.push('Rainer'); // Hinzufügen
// namen.push('Anna'); // Hinzufügen
//
// for (const entry of namen) {
//     console.log(entry);
// }
//
//
//
// const f: Function = function () {
//     console.log('Hallo Welt!');
// };
//
// f(); // Aufruf von f
//
// type MathFn = (a: number, b: number) => number;
// const func: MathFn = function (a: number, b: number) {
//     return a + b;
// };
// console.log(func(1, 2));
//
//
//
// const flight: FLIGHT = {
//     id: 1,
//     from: 'Graz',
//     to: 'Hamburg',
//     date: '2018-12-24T17:00:00.0001:00'
// };
//
// flight.from = 'GRZ';
// flight.to = 'HAM';
//
// console.log('from', flight.from);
// console.log('flight', f);
//
//
//
//
// const flights: Array<FLIGHT> = [
//     {
//         id: 17,
//         from: 'Graz',
//         to: 'Hamburg',
//         date: '2017-02-27'
//     },
//     {
//         id: 18,
//         from: 'Graz',
//         to: 'Hamburg',
//         date: '2017-02-27'
//     },
//     {
//         id: 19,
//         from: 'Graz',
//         to: 'Mallorca',
//         date: '2017-02-27'
//     },
//     {
//         id: 20,
//         from: 'Graz',
//         to: 'Hamburg',
//         date: '2017-02-27'
//     }
// ];
//
// const fm = new FlightManager(flights);
// const result1 = fm.search('Graz', 'Hamburg');
//
// for (const myFlight of result1) {
//     console.log('flight', myFlight);
// }
//
// function showFlight(fl: FLIGHT): void {
//     console.log('---- Flight ----');
//     console.log('id', fl.id);
//     console.log('date', fl.from);
//     console.log('date', fl.to);
//     console.log('date', fl.date);
// }
//
// const anotherFlight: FLIGHT = {
//     id: 1,
//     from: 'Graz',
//     to: 'Hamburg',
//     date: '2018-12-24T17:00:00.0001:00'
// };
//
// showFlight(anotherFlight);
//
//
//
// let oneMoreFlight: FLIGHT = new ScheduledFlight();
// oneMoreFlight.distance = 1000;
//
// if (oneMoreFlight.calcPrice) {
//     console.log('Preis', oneMoreFlight.calcPrice());
// }
//
// oneMoreFlight = new CharterFlight();
// // Ersetzen; dieselbe Variable zeigt nun
// // auf einen CharterFlight
//
// oneMoreFlight.distance = 1000;
//
// if (oneMoreFlight.calcPrice) {
//     console.log('Preis', oneMoreFlight.calcPrice()); // Neuer Preis
// }
//
//
//
// const scheduledFlight: FLIGHT = new ScheduledFlight();
// scheduledFlight.distance = 1000;
//
// const charterFlight: FLIGHT = new CharterFlight();
// charterFlight.distance = 1000;
//
// const myFlights: FLIGHT[] = [scheduledFlight, charterFlight];
//
// for (const fl of myFlights) {
//     if (fl.calcPrice) {
//         console.log('Preis', fl.calcPrice());
//     }
// }
//
//
//
// const person1: Person = new Passenger();
// person1.firstName = 'Max';
// person1.lastName = 'Muster';
//
// const person2: Person = new Pilot();
// person2.firstName = 'Jens';
// person2.lastName = 'Wolkenmeyer';
//
// const isPerson = person1 instanceof Person; // true
// const isPassenger = person1 instanceof Passenger; // true
// const isPilot = person1 instanceof Pilot; // false
//
// console.log('isPerson', isPerson);
// console.log('isPilot', isPilot);
// console.log('isPassenger', isPassenger);
//
//
// const person1AsPassenger = person1 as Passenger; // Type Assertion
// // let person1AsPassenger = <Pilot>person1;
// // Alternative Schreibweise
// const status = person1AsPassenger.passengerStatus;
//
//
//
// const a1 = new CompanyAddress(1);
// a1.id = 1;
// a1.city = 'Graz';
// a1.street = 'Hier';
// a1.zipCode = '8010';
// a1.companyName = 'Steh & Schau GmbH';
//
// console.log('a1 as csv', a1.toCSV());
// console.log('a1 as full Address', a1.fullAddress());
//
// const nextFlight = new ScheduledFlight();
// nextFlight.date = '2018-12-24';
// console.log('unix-date', nextFlight.unixDate);
// nextFlight.unixDate = 1000;
// console.log('unix-date', nextFlight.date);
//
//
// const charterFlightToCharge = new CharterFlight();
// charterFlightToCharge.from = 'Graz';
// charterFlightToCharge.to = 'Hamburg';
// charterFlightToCharge.distance = 1000;
//
// const charterInvoice = new FlightInvoice<CharterFlight>(charterFlightToCharge, 350);
//
// console.log('charterInvoice', charterInvoice.toString());
//
//
// function div(a: number, b: number): number {
//     if (b === 0) {
//         throw new Error('division by 0 is not allowed');
//     }
//     return a / b;
// }
//
//
//
// const fm2 = new FlightManager(null);
//
// setTimeout(() => {
//     console.log('Timeout!');
// }, 1000);
//
// setTimeout(() => {
//     console.log('Phase 1');
//     setTimeout(() => {
//         console.log('Phase 2');
//         setTimeout(() => {
//             console.log('Phase 3');
//             setTimeout(() => {
//                 console.log('Phase 4');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
//
//
// function timeout(time: number): Promise<number> {
//     return new Promise((resolve, reject) => {
//
//         if (time < 0) {
//             // Send error!
//             reject(`Don't be that negative!`);
//             return;
//         }
//
//         setTimeout(() => {
//             resolve(time);
//         }, time);
//
//     });
// }
//
// timeout(1000)
//     .then(result => console.log('Timeout!', result))
//     .catch(error => console.log('error', error));
//
// timeout(1000)
//     .then(() => {
//         console.log('Phase 1!');
//         return timeout(1000);
//     })
//     .then(() => {
//         console.log('Phase 2!');
//         return timeout(1000);
//     })
//     .then(() => {
//         console.log('Phase 3!');
//         return timeout(1000);
//     })
//     .then(() => {
//         console.log('Phase 4!');
//         return timeout(1000);
//     })
//     .catch(error => console.error('error', error));
//
//
// async function timeout2(time: number): Promise<number> {
//     return new Promise((resolve, reject) => {
//
//         if (time < 0) {
//             // Send error!
//             reject(`Don't be that negative!`);
//             return;
//         }
//
//         setTimeout(() => {
//             resolve(time);
//         }, time);
//
//     });
// }
//
// async function caller() {
//     let result;
//
//     try {
//         result = await timeout2(1000);
//         console.log('Phase 1', result);
//
//         result = await timeout2(1000);
//         console.log('Phase 2', result);
//
//         result = await timeout2(1000);
//         console.log('Phase 3', result);
//
//         result = await timeout2(1000);
//         console.log('Phase 4', result);
//     }
//     catch (error) {
//         console.error('error', error);
//     }
// }
//
// caller();
