/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"


inquirer
  .prompt([
    {name : "URL", message : "Please enter your URL",},
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
 
    var qr_svg = qr.image(answers.URL, {parse_url : true});
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

    fs.writeFile("message.txt", answers.URL, (err) =>
        {
            if (err) throw err;
            
        }
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


  



