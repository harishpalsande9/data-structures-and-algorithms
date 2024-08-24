const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('', n => {
    // Write your code here
        // Print n stars horizontally
      let horizontalStars = '';
      for (let i = 0; i < n; i++) {
          horizontalStars += '* ';
      }
      console.log(horizontalStars.trim());
  
      // Print n stars vertically
      for (let i = 1; i < n; i++) {
          console.log('*');
      }
    // console.log(n)
    readline.close();
  });