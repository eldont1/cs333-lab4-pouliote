// Lab 4 Part 1: QR code generator

import QRCode from "qrcode";
import { appendFile } from "node:fs/promises";


// 1. Ask the user for a URL with the @inquirer/prompts package.

import { input } from "@inquirer/prompts";

const url = await input({
  message: "Which website should the QR code point to?",
  validate: function (value) {
    if (URL.canParse(value)) {
      return true;
    }
    return "Type the whole address, starting with https://";
  },
});
console.log("You typed:", url);


// 2. Turn it into a QR code PNG with the qrcode package.

const filename = new URL(url).hostname + ".svg";
await QRCode.toFile(filename, url);
console.log("Saved", filename);


await appendFile("urls.txt", url + "\n");
console.log("Added it to urls.txt");

const picture = await QRCode.toString(url, { type: "terminal", small: true });
console.log(picture);


// 3. Save every URL, with the date and time, to urls.txt using node:fs/promises.


// 4. Tell the user it worked.

