const fs = require("fs"); // importing the fs module

const readStream = fs.createReadStream("./docs/blogs3.txt", {
  encoding: "utf-8",
}); // creating a read stream

const writeStream = fs.createWriteStream("./docs/blogs4.txt"); // creating a write stream

// piping the read stream to the write stream
readStream.pipe(writeStream); // piping the read stream to the write stream
// listening for the end event
readStream.on("end", () => {
  // printing the end message
  console.log("----End of Stream----"); // printing the end message
});
// readStream.on("data", (chunk) => {
//   // listening for the data event
//   console.log("----New Chunk----"); // printing the new chunk
//   console.log(chunk); // printing the chunk
//   writeStream.write("\n\nNew Chunk\n"); // writing to the write stream
//   writeStream.write(chunk); // writing the chunk to the write stream
// });
