let test = 'Test';
console.log('test:', test);

let value = 42;
console.log(typeof value);

let a = "10";
let b = 10;
console.log(typeof a);
console.log(typeof b);

let x = 10;
let y = 20;
let xy = (x+y)/2;
console.log(xy);

let n = 13;
let ost = 13%5;
console.log(ost);

let count = 4;
let sum = count + 14;
console.log(sum);

let firstname = "Anna";
let lastname = "Ivanova";
console.log(firstname + " " + lastname);

let text = "javascript";
console.log(text,length);

let city = "London";
console.log(city.toUpperCase);

let xx = "5";
let yy = 5;
console.log(xx == yy);
console.log(xx === yy);

let number = -3;
if (number >= 0) {
    console.log("оложительное");
}
if (number <= 0) {
    console.log("отрицательное");
}

let price = 1000;
let precent = 15;
console.log(price *100/precent);

const filterLongWords = (words, minLength) => {
    return words.filter((word) => word.length >= minLength);
};
const animals = ["cat", "parrot", "gog", "fox"];
const min = 4;
filterLongWords(animals,min);


const sumNumber = (arr) => {
    let sum = 0;
    for (const item of arr) {
        if (typeof item === 'number') {
            sum += item;
        }
    }
    console.log(sum);
};
const aa = [1,"2", 3, null, 10];
sumNumber(aa);


function calculate(a, b, op) {
    switch(op) {
        case '+':
            return a + b;
            case '-':
                return a - b;
                case '*':
                    return a * b;
                    if (b === 0) {
                      return"ошибка. деление на ноль";
                    }
            
    }
}
console.log(calculate(10, 5, '+'));


function formatUsers(users, formatter) {
    return users.map(formatter);
  }
  const usersData = [
    { name: 'Arina', age: 14 },
    { name: 'Sonya', age: 15 },
  ];
  const userFormatter = (u) => `${u.name} (${u.age})`;
  const formattUsers = formatUsers(usersData, userFormatter);
  console.log(formattUsers);
  const anotherFormatter = (user) => ` ${user.name},${user.age}`;
  const formattUsers2 = formatUsers(usersData, anotherFormatter);
  console.log(formattUsers2);


  function greet(name, hour) {
    let greeting;
    if (hour >= 6 && hour <= 11) {
      greeting = "good morning";
    } else if (hour >= 12 && hour <= 17) {
      greeting = "good afternoon";
    } else if (hour >= 18 && hour <= 22) {
      greeting = "good ";
    } else {
      greeting = "good night";
    }
    return `${greeting}, ${name}!`;
  }
  console.log(greet("arina", 7));
  console.log(greet("arina", 15));
  console.log(greet("arina", 18));

  const isEmpty = (arr) => {
    return arr.length === 0;
  };
  console.log(isEmpty([]));
  console.log(isEmpty([1]));
  console.log(isEmpty([]));
  console.log(isEmpty(["a"]));
  console.log(isEmpty(["null"]))


  const formatName = (name) => {
    if (typeof name !== 'string' || name.length === 0) {
      return "";
    }
    const casename = name.toLowerCase();
    const first = casename.charAt(0).toUpperCase();
    const restOfName = casename.slice(1);
    return first + restOfName;
  };
  console.log(formatName("alex"));
  console.log(formatName("alEX"));
  console.log(formatName(""));
  console.log(formatName("a"));

  const isEmail = (email) => {
    if (typeof email !== 'string') {
      return false;
    }
    return email.includes('@');
  };
  console.log(isEmail("ghytvf@example.com"));
  console.log(isEmail("user.name@hjbiloh.ru"));
  console.log(isEmail("gyhugyugt.com"));
  console.log(isEmail("vgfcfj@example"));

  const createWallet = () => {
    let balance = 0;
  
    return (amount) => {
      balance += amount;
      return balance;
    };
  };

  const promise = new Promise((resolve, reject) => {
    resolve("ready");
  });

  promise.then ( result => {
    console.log(result);
  });

  promise.catch(error => {
    console.log(error);
  });

  promise.finally(() => {
    console.log("end");
  });

  /*fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
*/
  async function loadData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
    console.log(data);
    }
    catch(error) {
      console.log(error);
    }
  }

  const promis = new Promise((resolve, reject) => {
    resolve(10);
    promis.then(res => {
      return res * 2;
    })
    promis.then(res => {
      return res + 5;
  })
  promis.then(dat => {
    console.log(dat);
  })
});
const promiss = new Promise((resolve, reject) => {
  resolve(1);
promiss.then(res => {
  return res + 1;
})
promiss.then(res => {
  return res + 1;
})
promiss.then(res => {
  return res + 1;
})
promiss.then(res => {
  return res + 1;
})
promiss.then(res => {
  return res + 1;
})
promiss.then(final => {
  console.log(final);
})
});

const prom = new Promise((resolve, reject) => {
  resolve("hello");
prom.then(stroka => {
return stroka.toUpperCase();
})
prom.then(stroka => {
  return stroka + "!";
  })
  prom.then
})

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
.then(result => {
  console.log(result);
})

const aaa = new Promise(res => setTimeout(() => ReadableS("A"), 1000));
const bbb = new Promise(res => setTimeout(() => ReadableStream("B"), 500));

Promise.all([aaa, bbb]).then(resulr => {
  console.log(resulr);
});

 const canvas = document.getElementById("canvas");

 const ctx = canvas.getContext("2d");