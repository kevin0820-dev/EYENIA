const fs = require("fs");
const net = require("net");

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "sdb-57.hosting.stackcp.net",
  user: "eyenia-353031357597",
  password: "ayaz4321",
  database: "eyenia-353031357597",
});

// Create a TCP server that listens on port 3001
const server = net.createServer((socket) => {
  console.log("New Teltonika device connected");

  // When a new connection is established, listen for data events
  socket.on("data", (data) => {
    console.log("Received data:", data);

    fs.write("info.txt", data + "\n", function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
    // If the data received is the IMEI number, send back a confirmation packet
    if (data.slice(0, 4).toString("hex") === "000f") {
      const acceptData = true; // Set to true or false based on whether the server should accept data from this module
      const confirmationPacket = Buffer.alloc(1);
      confirmationPacket.writeUInt8(acceptData ? 0x01 : 0x00);
      socket.write(confirmationPacket);

      console.log(`Sent confirmation packet ${acceptData ? "01" : "00"}`);
    }

    // If the data received is an AVL data packet, extract the information
    // if (data.slice(0, 2).toString() === "00") {
    else {
      const dataLength = data.slice(2, 6).readUInt32BE();
      console.log(`Received AVL data packet (${dataLength} bytes)`);

      // Parse the AVL data packet
      const avlData = {
        timestamp: data.slice(10, 14).readUInt32BE(),
        priority: data.slice(14, 15).readUInt8(),
        longitude: data.slice(15, 19).readInt32BE(),
        latitude: data.slice(19, 23).readInt32BE(),
        altitude: data.slice(23, 25).readUInt16BE(),
        angle: data.slice(25, 27).readUInt16BE(),
        satellites: data.slice(27, 28).readUInt8(),
        speed: data.slice(28, 30).readUInt16BE(),
        io: data.slice(30, dataLength + 9),
        battery: data.slice(dataLength + 9, dataLength + 10).readUInt8(),
      };

      // Extract the information from the AVL data packet
      const timestamp = new Date(avlData.timestamp * 1000).toISOString();
      const longitude = avlData.longitude / 10000000;
      const latitude = avlData.latitude / 10000000;
      const speed = avlData.speed;
      const batteryLevel = avlData.battery;

      const deviceInfo = {
        longitude,
        latitude,
        speed,
        batteryLevel,
        timestamp,
      };

      con.connect(function (err) {
        if (err) throw err;
        console.log("Database connected!");
        // con.query(
        //   "CREATE TABLE fmc130 (ID int, longitude varchar(255), latitude varchar(255), speed int, batteryLevel int, timestamp varchar(255))"
        // );
        con.query("INSERT INTO fmc130 SET ?", deviceInfo, (err, result) => {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });

      console.log(`Timestamp: ${timestamp}`);
      console.log(`Longitude: ${longitude}`);
      console.log(`Latitude: ${latitude}`);
      console.log(`Speed: ${speed}`);
      console.log(`Battery Level: ${batteryLevel}`);

      // Send back a confirmation packet with the number of data received
      const dataReceivedPacket = Buffer.alloc(4);
      dataReceivedPacket.writeUInt32BE(dataLength);
      socket.write(dataReceivedPacket);
    }
  });
});

server.listen(5500, () => {
  console.log("Teltonika server listening on port 3001");
});
