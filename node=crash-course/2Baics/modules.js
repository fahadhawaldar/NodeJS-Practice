require("./people"); // this will load the people.js file
const { log } = require("console");
const { people, ages } = require("./people"); // destructuring the people and ages arrays from the people.js file

// console.log(people); // prints the people array
// console.log(ages); // prints the ages array

const os = require("os"); // importing the os module
console.log(os.platform(), os.homedir()); // prints the platform of the operating system
// log(os.arch(), "Arch"); // prints the architecture of the operating system
// log(os.cpus(), "CPUs"); // prints the CPU information of the operating system
// log(os.freemem(), "Free Memory"); // prints the free memory of the operating system
// log(os.totalmem(), "Total Memory"); // prints the total memory of the operating system
// log(os.uptime(), "Uptime"); // prints the uptime of the operating system
// log(os.networkInterfaces(), "Network Interfaces"); // prints the network interfaces of the operating system
// log(os.userInfo(), "User Info"); // prints the user information of the operating system
// log(os.hostname(), "Host Name"); // prints the host name of the operating system
// log(os.release(), "Release"); // prints the release version of the operating system
// log(os.tmpdir(), "Temp Directory"); // prints the temporary directory of the operating system
// log(os.constants, "Constants"); // prints the constants of the operating system
// log(os.EOL, "End of Line"); // prints the end of line character of the operating system
// log(os.type(), "Type"); // prints the type of the operating system
