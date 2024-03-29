/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
var name = 'Asia';
var email = 'asiaautrey@gmail.com';
var languages = ['javascript','css','html'];



// TODO: rewrite the object literal using object property shorthand
users.push({
  name: name,
  email: email,
  languages: languages
});


const person = {
  name,
  email,
  languages,
};

let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions



users.forEach((user) =>
   names.push(user.name))

users.forEach((user) =>
   emails.push(emails.name))

// TODO: replace `var` with `let` in the following declaration
let developers = [];

users.forEach(function(user) {


  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition

  // const user = { name: user.name, email: user.email, languages: user.languages};
  const users = { name:user.name,email:user.email,languages:user.languages } ;
  const { name, email ,languages } = users;


  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  // TODO: rewrite the assignment below to use template strings
  developers.push(`${name}'s email is${email}.${name} knows ${languages.join(', ')}`);
});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for (let developer of developers) {


// TODO: rewrite the assignment below to use template strings
  list += `<li> ${developer}</li>`;

  list += '</ul>';
}
