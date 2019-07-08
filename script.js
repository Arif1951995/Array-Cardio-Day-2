const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

console.table(`people Array \n`,people);

console.table(`Comments Array \n`,comments);



  // Array.prototype.some() // is at least one person 19 or older?
  let year  = new Date().getFullYear()
console.log(`is at least one person 19 or older?`)
console.log(people.some(el =>  year - el.year >= 19));

// Array.prototype.every() // is everyone 19 or older?
console.log(`is everyone 19 or older?`);
console.log(people.every(el =>  year - el.year >= 19));

    // find the comment with the ID of 823423
console.log(`find the comment with the ID of 823423`)
console.log(comments.find(e => e.id === 823423));



// delete the comment with the ID of 823423
console.log(`delete the comment with the ID of 823423`);
let indexToDelete = comments.findIndex(e => e.id === 823423);
delete comments[indexToDelete];
console.log(comments);
