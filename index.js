const ele = (id) => {
  return document.getElementById(id);
};

const lc = () => {
  const value = ele("li").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let result;
    result = value.toLowerCase();
    ele("lcresult").innerText = result;
    ele("li").value = "";
  }
};
const uc = () => {
  const value = ele("ui").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let result;
    result = value.toUpperCase();
    ele("ucresult").innerText = result;
    ele("ui").value = "";
  }
};
const tc = () => {
  const value = ele("ti").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let result = "";
    for (let i = 0; i < value.length; i++) {
      if (value[i] === value[i].toLowerCase()) {
        // console.log(value[i]);
        result += value[i].toUpperCase();
      } else if (value[i] === value[i].toUpperCase()) {
        result += value[i].toLowerCase();

        // console.log(value[i]);
      } else {
        result += value[i];
      }
    }

    ele("tcresult").innerText = result;
    ele("ti").value = "";
  }
};
const stringcount = () => {
  const value = ele("sc").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let d = 0,
      a = 0,
      c = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i].match(/[a-z]/)) {
        a++;
      } else if (value[i].match(/[0-9]/)) {
        d++;
      } else {
        c++;
      }
    }

    ele(
      "scresult"
    ).innerText = `digits= ${d} alphabets= ${a} special character =${c}`;
  }
};
const stringcount2 = () => {
  const value = ele("sc2").value;
  if (value == "") {
    alert("Enter a text  ");
  } else if (value.match(/[a-z]/gi)) {
    let v = 0,
      c = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i].match(/[aeiou]/)) {
        v++;
      } else if (value[i].match(/[a-z]/)) {
        c++;
      }
    }

    ele("scresult2").innerText = `vowels = ${v} consents = ${c}`;
  } else {
    alert("enter characters only");
  }
  ele("sc2").value = "";
};
const stringcount3 = () => {
  let value = ele("sc3").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let result;
    value = value.replace(/(^\s*)|(\s*$)/gi, "");
    value = value.replace(/[ ]{2,}/gi, " ");
    value = value.replace(/\n /, "\n");
    result = value.split(" ").length;

    ele("scresult3").innerText = `no of words = ${result}`;
  }
  ele("sc3").value == "";
};
const prpropeties = () => {
  let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  let keys = Object.keys(student);
  ele("pr").innerText = `Properties of student object = ${keys}`;
};
const drpropeties = () => {
  let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  Bkeys = Object.keys(student);
  delete student.rollno;

  Akeys = Object.keys(student);
  ele("dpr").innerText = `Before delete properties = ${Bkeys} 
  After delete properties   = ${Akeys}`;
};
const prpol = () => {
  let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  let len = Object.keys(student).length;
  ele("pol").innerText = `Length of student object = ${len}`;
};
const preading = () => {
  let library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true,
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true,
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];
  let result = ``;
  const po = (o) => {
    let r = "";
    let key = Object.keys(o);
    for (let i = 0; i < key.length; i++) {
      r += o[key[i]];
      r += " ";
    }
    r += "     ";
    return r;
  };
  library.map((v, i) => {
    result += po(v);
    console.log(v, "v1");
  });

  ele("prs").innerText = `Reading status = ${result}`;
};
const volume = () => {
  const hi = ele("hi").value;
  const ri = ele("ri").value;
  class Cylinder {
    constructor(h, r) {
      this.height = h;
      this.radius = r;
    }
  }
  Cylinder.prototype.calculate = function () {
    return this.height * Math.PI * this.radius * this.radius;
  };
  let cyl = new Cylinder(hi, ri);
  let result = Math.round(cyl.calculate());
  ele("vor").innerText = `Volume = ${result}`;
};
const podd = () => {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  ele("onu").innerText = arr;
};
const Naturual = () => {
  const value = ele("nl").value;
  if (value !== "" && Number(value)) {
    let arr = 0;
    for (let i = 1; i <= value; i++) {
      arr += i;
    }
    ele("nresult").innerText = arr;
    ele("nl").value = "";
  } else {
    alert("Enter a number");
  }
};
const Even = () => {
  const value = ele("ne").value;
  if (value !== "" && Number(value)) {
    let arr = 0;
    for (let i = 1; i <= value; i++) {
      if (i % 2 == 0) {
        arr += i;
      }
    }
    ele("ner").innerText = arr;
    ele("ne").value = "";
  } else {
    alert("Enter a number");
  }
};
const Odd = () => {
  const value = ele("no").value;
  if (value !== "" && Number(value)) {
    let arr = 0;
    for (let i = 1; i <= value; i++) {
      if (i % 2 !== 0) {
        arr += i;
      }
    }
    ele("nor").innerText = arr;
    ele("no").value = "";
  } else {
    alert("Enter a number");
  }
};
const table = () => {
  const value = ele("to").value;
  if (value !== "" && Number(value)) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
      let tr = `${value} x ${i} = ${value * i} `;
      arr.push(tr);
    }
    ele("tor").innerText = arr;
    ele("to").value = "";
  } else {
    alert("Enter a number");
  }
};
const countd = () => {
  const value = ele("cd").value;
  if (value !== "" && Number(value)) {
    const result = value.length;
    ele("cor").innerText = result;
    ele("cd").value = "";
  } else {
    alert("Enter a number");
  }
};
const maxi = () => {
  const v1 = ele("v1");
  const v2 = ele("v2");
  let result;
  const in1 = Number(v1.value);
  const in2 = Number(v2.value);
  //   alert(value);
  if (in1 == "" || in2 == "") {
    alert("Please enter both values");
  } else {
    if (in1 > in2) {
      result = `${in1} is greater than  ${in2}`;
    } else if (in2 > in1) {
      result = `${in2} is greater than  ${in1}`;
    } else {
      result = "Both numbers are equal";
    }
    document.getElementById("maxresult").innerText = result;
    v1.value = "";
    v2.value = "";
  }
};
const maxi2 = () => {
  const v1 = ele("n1");
  const v2 = ele("n2");
  const v3 = ele("n3");
  let result;
  const in1 = Number(v1.value);
  const in2 = Number(v2.value);
  const in3 = Number(v3.value);
  //   alert(value);
  if (in1 == "" || in2 == "" || in3 == "") {
    alert("Please enter all three numbers");
  } else {
    // console.log(in1, in2, in3);
    let max = in1;
    if (in2 > max) {
      max = in2;
    }
    if (in3 > max) {
      max = in3;
    }
    ele("maxresult2").innerText = `Maximum no is ${max}`;
    v1.value = "";
    v2.value = "";
    v3.value = "";
  }
};
const chck = () => {
  const value = ele("nu1").value;
  //   alert(value);
  if (value == "") {
    alert("Please enter value ");
  } else {
    let result;
    if (value > 0) {
      result = "Num is positive";
    } else if (value < 0) {
      result = " Num is negative";
    } else {
      result = " Num is zero";
    }
    ele("chresult").innerText = result;
    ele("nu1").value = "";
    return result;
  }
};
const leap = () => {
  const value = document.getElementById("year").value;
  if (value == "") {
    alert("Enter year for checking leap year");
  } else {
    const result = checkleap(value);
    document.getElementById("leapresult").innerText = `${value} is ${result}`;
    document.getElementById("year").value = "";
  }
};
const check = () => {
  const value = Number(ele("no1").value);
  //   alert(value);
  if (value == "") {
    alert("Please enter value ");
  } else {
    let result;
    if (value % 5 === 0 && value % 11 === 0) {
      result = `${value} is divisible by 5 and 11`;
    } else {
      result = "Num is not divisible by 5 and 11";
    }
    ele("chresult2").innerText = result;
    ele("no1").value = "";
    return result;
  }
};
const eo = () => {
  const value = Number(ele("nu2").value);
  if (value == "") {
    alert("Enter number ");
  } else {
    let result;
    if (value % 2 === 0) {
      result = `${value} is even`;
    } else {
      result = `${value} is odd`;
    }
    ele("eoresult").innerText = result;
    ele("nu2").value = "";
    return result;
  }
};
const ca = () => {
  const value = ele("c1").value;
  if (value == "") {
    alert("Enter a charcter ");
  } else {
    let result;
    // console.log(value.match(/[a-z]/gi));
    if (value.match(/[a-z]/i)) {
      result = `${value} is alphabet`;
    } else {
      result = `${value} is not alphabet`;
    }
    ele("aresult").innerText = result;
    ele("c1").value = "";
    return result;
  }
};

const ca2 = () => {
  const value = ele("c2").value;
  if (value == "") {
    alert("Enter a letter ");
  } else if (value.match(/[a-z]/i)) {
    let result;
    // console.log(value.match(/[a-z]/gi));
    // console.log(value.match(/[aeiou]/i));
    if (value.match(/[aeiou]/i)) {
      result = `${value} is vowel`;
    } else {
      result = `${value} is constant`;
    }
    ele("aresult2").innerText = result;
    ele("c2").value = "";
    return result;
  } else {
    alert("Enter a letter ");
  }
};
const cds = () => {
  const value = ele("c3").value;
  if (value == "") {
    alert("Enter a   character ");
  } else {
    let result;
    // console.log(value.match(/[a-z]/gi));
    if (value.match(/[a-z]/i)) {
      result = result = `${value} is alphaphet`;
    } else if (value.match(/[0-9]/i)) {
      result = result = `${value} is number`;
    } else {
      result = `${value} is special character`;
    }
    ele("cdsresult").innerText = result;
    ele("c3").value = "";
    return result;
  }
};
const checkleap = (v) => {
  if (v % 4 === 0) {
    return "leap year";
  } else {
    return "not a leap year";
  }
};
const cube = () => {
  const value = Number(ele("cui").value);
  if (value == "") {
    alert("Enter number ");
  } else {
    let result = `Cube of ${value} = ${value * value * value}`;

    ele("cur").innerText = result;
    ele("cui").value = "";
    return result;
  }
};
const Dac = () => {
  const value = Number(ele("daci").value);
  if (value == "") {
    alert("Enter number ");
  } else {
    let result = `Diameter = ${2 * value} 
    CircumFerence = ${2 * Math.PI * value}
    Area = ${Math.PI * value * value}
    `;

    ele("dacr").innerText = result;
    ele("daci").value = "";
    return result;
  }
};
const Cpap = () => {
  const value = Number(ele("papi").value);
  if (value == "" && value > 0) {
    alert("Enter a positive number ");
  } else {
    let result =
      checkprime(value) + ", " + checkarm(value) + checkperfect(value);

    ele("papr").innerText = result;
    ele("papi").value = "";
    return result;
  }
};
const checkprime = (v) => {
  let result = `${v} is  prime number`;
  for (let i = 2; i < v; i++) {
    if (v % i == 0) {
      result = `${v} is not prime number`;
    }
  }
  return result;
};
const checkarm = (num) => {
  let arm = 0,
    a,
    temp = num;
  while (temp > 0) {
    a = temp % 10;
    temp = parseInt(temp / 10);
    arm = arm + a * a * a;
  }
  if (arm == num) {
    return "is Armstrong number";
  } else {
    return "is not Armstrong number";
  }
};
const checkperfect = (number) => {
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }
  if (temp === number && temp !== 0) {
    return " and is a perfect number.";
  } else {
    return " and is not a perfect number.";
  }
};
const cmaxi = () => {
  const v1 = ele("cv1");
  const v2 = ele("cv2");
  let result;
  const in1 = Number(v1.value);
  const in2 = Number(v2.value);
  //   alert(value);
  if (in1 == "" || in2 == "") {
    alert("Please enter both values");
  } else {
    in1 > in2
      ? (result = `${in1} is greater than  ${in2}`)
      : in2 > in1
      ? (result = `${in2} is greater than  ${in1}`)
      : (result = "Both numbers are equal");

    document.getElementById("cmaxresult").innerText = result;
    v1.value = "";
    v2.value = "";
  }
};
const cmaxi2 = () => {
  const v1 = ele("cn1");
  const v2 = ele("cn2");
  const v3 = ele("cn3");
  let result;
  const in1 = Number(v1.value);
  const in2 = Number(v2.value);
  const in3 = Number(v3.value);
  //   alert(value);
  if (in1 == "" || in2 == "" || in3 == "") {
    alert("Please enter all three numbers");
  } else {
    // console.log(in1, in2, in3);
    let max;
    in2 > in1 ? (max = in2) : (max = in1);
    in3 > max ? (max = in3) : (max = max);

    ele("cmaxresult2").innerText = `Maximum no is ${max}`;
    v1.value = "";
    v2.value = "";
    v3.value = "";
  }
};
const cleap = () => {
  const value = document.getElementById("cyear").value;
  if (value == "") {
    alert("Enter year for checking leap year");
  } else {
    let result;
    value % 4 == 0
      ? (result = `${value} is leap year`)
      : (result = `${value} is not leap year`);
    ele("cleapresult").innerText = result;
    ele("cyear").value = "";
  }
};
const cea = () => {
  const value = ele("cai").value;
  if (value == "") {
    alert("Enter a charcter ");
  } else {
    let result;
    // console.log(value.match(/[a-z]/gi));
    value.match(/[a-z]/i)
      ? (result = `${value} is alphabet`)
      : (result = `${value} is not alphabet`);

    ele("caresult").innerText = result;
    ele("cai").value = "";
    return result;
  }
};
const Weekname = () => {
  const value = ele("wni").value;
  if (value == "" && !Number(value)) {
    alert("Enter a no");
  } else {
    let result;

    switch (Number(value)) {
      case 1:
        result = "Monday";
        break;
      case 2:
        result = "Tuesday";
        break;
      case 3:
        result = "Wednesday";
        break;
      case 4:
        result = "Thursday";
        break;
      case 5:
        result = "Friday";
        break;
      case 6:
        result = "Saturday";
        break;
      case 7:
        result = "Sunday";
        break;
      default:
        result = "Invalid input! Please enter week number between 1-7.";
    }
    ele("wnr").innerText = result;
    ele("wni").value = "";
  }
};
const noda = () => {
  const value = ele("ndai").value;
  if (value == "" && !Number(value)) {
    alert("Enter a no");
  } else {
    let result;
    switch (Number(value)) {
      case 1:
        result = "31 days";
        break;
      case 2:
        result = "28/29 days";
        break;
      case 3:
        result = "31 days";
        break;
      case 4:
        result = "30 days";
        break;
      case 5:
        result = "31 days";
        break;
      case 6:
        result = "30 days";
        break;
      case 7:
        result = "31 days";
        break;
      case 8:
        result = "31 days";
        break;
      case 9:
        result = "30 days";
        break;
      case 10:
        result = "31 days";
        break;
      case 11:
        result = "30 days";
        break;
      case 12:
        result = "31 days";
        break;
      default:
        result = "Invalid input! Please enter month number between 1-12";
    }
    ele("ndar").innerText = result;
  }

  ele("ndai").value = "";
};
const sca = () => {
  const value = ele("cha").value;
  console.log(value, "value");
  if (value == "") {
    alert("Enter a letter ");
  } else {
    if (value.match(/[a-z]/i)) {
      let result;
      // console.log(value.match(/[a-z]/gi));
      // console.log(value.match(/[aeiou]/i));
      switch (value) {
        case "A":
        case "a":
        case "E":
        case "e":
        case "I":
        case "i":
        case "O":
        case "o":
        case "U":
        case "u":
          result = `${value} is vowel`;
          break;
        default:
          result = `${value} is consonent`;
      }

      ele("saresult2").innerText = result;
      ele("sc2").value = "";
    }
  }
};
const smaxi = () => {
  const v1 = ele("sv1");
  const v2 = ele("sv2");
  let result;
  const in1 = Number(v1.value);
  const in2 = Number(v2.value);
  //   alert(value);
  if (in1 == "" || in2 == "") {
    alert("Please enter both values");
  } else {
    switch (in1 > in2) {
      case true:
        result = `${in1} is greater than  ${in2}`;
        break;
      case false:
        result = `${in2} is greater than ${in1}`;
        break;
    }

    document.getElementById("smaxresult").innerText = result;
    v1.value = "";
    v2.value = "";
  }
};
const sceo = () => {
  const value = ele("eoi").value;
  if (value == "" && !Number(value)) {
    alert("Enter a no");
  } else {
    let result;
    let v = Number(value);
    switch (v % 2 == 0) {
      case true:
        result = `${v} is even`;
        break;

      case false:
        result = `${v} is odd`;
    }
    ele("eor").innerText = result;
    ele("eoi").value = "";
  }
};
const cpnz = () => {
  const value = ele("pnzi").value;
  if (value == "" && !Number(value)) {
    alert("Enter a no");
  } else {
    let result;
    let v = Number(value);
    switch (v > 0) {
      case true:
        result = `${v} is positive number`;
        break;

      case false:
        switch (v < 0) {
          case true:
            result = `${v} is negative number`;
            break;
          case false:
            result = `${v} is zero`;
            break;
        }
        break;
    }
    ele("pnzr").innerText = result;
    ele("pnzi").value = "";
  }
};
const Roots = () => {
  const v1 = ele("rn1");
  const v2 = ele("rn2");
  const v3 = ele("rn3");
  let result;
  const a = Number(v1.value);
  const b = Number(v2.value);
  const c = Number(v3.value);
  //   alert(value);
  if (a == "" || b == "" || c == "") {
    alert("Please enter all three numbers");
  } else {
    let discriminant = b * b - 4 * a * c;
    let result;
    switch (discriminant > 0) {
      case true:
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `Two distinct and real roots exists
               ${root1} and ${root2}`;
        break;
      case false:
        switch (discriminant < 0) {
          case true:
            root1 = root2 = -b / (2 * a).toFixed(2);
            imaginary = Math.sqrt(-discriminant) / (2 * a);
            result = `Two distinct complex roots exists:  
                   ${root1}+ ${imaginary}i and ${root2}+ ${imaginary}i`;
            break;
          case false:
            root1 = root2 = -b / (2 * a);
            result = `Two equal and real roots exists: ${root1} and ${root2}`;
            break;
        }
    }
    ele("rootr").innerText = result;
    v1.value = "";
    v2.value = "";
    v3.value = "";
  }
};
const Calculate = () => {
  const v1 = ele("num1");
  const v2 = ele("op");
  const v3 = ele("num2");
  const num1 = Number(v1.value);
  const o = v2.value;
  const num2 = Number(v3.value);
  //   alert(value);
  if (num1 == "" || o == "" || num2 == "") {
    alert("Please enter all two avlid numbers and operators");
  } else {
    let result;
    switch (o) {
      case "+":
        result = num1 + num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        result = " Inavalid operator";
    }
    ele("calcur").innerText = result;
    v1.value = "";
    v2.value = "";
    v3.value = "";
  }
};
const valuetoarray = (value, type) => {
  const array = [value];
  for (let i = 0; i < value; i++) {
    const e = i + 1;
    let v;
    if (type) {
      v = prompt(`Enter ${type} value for element ${e}`);
    } else {
      v = prompt(`Enter  value for element ${e}`);
    }
    array[i] = v;
  }
  return array;
};
const countne = () => {
  const element = ele("cone").value;
  if (element > 0) {
    const array = valuetoarray(element, "number");
    let numbers = [];
    array.map((v, i) => {
      if (Number(v)) {
        numbers.push(v);
      }
    });
    if (numbers.length > 0) {
      let cne = 0;

      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
          cne++;
        }
      }

      ele("coneresult").innerText = `No of negative numbers = ${cne}`;
      ele("cone").value = "";
    } else {
      alert("inputed arrray should have atleast one number elements try again");
    }
  } else {
    alert("no of elements should be greater than zero");
  }
};

const copya = () => {
  const element = ele("a1").value;
  const element2 = ele("a2").value;
  if (element > 0 && element2 > 0) {
    const array1 = valuetoarray(element);
    const array2 = valuetoarray(element2);
    let bfc = `before copy array1 = ${array1} arrayw2 = ${array2}`;

    let cne = 0;

    for (let i = 0; i < array1.length; i++) {
      array2.push(array1[i]);
    }
    let afc = `after copy array1 = 
    ${array1} arrayw2 = ${array2}`;

    ele("aresult").innerText = bfc + afc;
    ele("a1").value = "";
    ele("a2").value = "";
  } else {
    alert("both array no of elements should be greater than zero");
  }
};
let array = ["Hamza", "Ali", 1, 2, 3, 4];
const adde = () => {
  const value = ele("addele").value;
  if (value == "") {
    alert("Enter a value first");
  } else {
    array.push(value);
    araryvalues();
  }
};
const reme = () => {
  const value = ele("eindex").value;
  if (value !== "") {
    if (value < array.length && value >= 0) {
      array.splice(Number(value), 1);
      araryvalues();
    } else {
      alert("invalid index");
    }
  } else {
    alert("index is required");
  }
};
const araryvalues = () => {
  ele("addresult").innerText = `Array = ${array}`;
};
araryvalues();
const countfe = () => {
  const element = ele("cfe").value;
  if (element > 0) {
    const array = valuetoarray(element, "number");
    let result = getFrequency(array);

    document.getElementById("cferesult").innerText = JSON.stringify(result);
    document.getElementById("cone").value = "";
  } else {
    alert("no of elements should be greater than zero");
  }
};
const getFrequency = (array) => {
  const map = {};
  array.forEach((item) => {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  });
  return map;
};

const unique = () => {
  const element = ele("uniquei").value;
  if (element > 0) {
    const arr = valuetoarray(element, "number");
    let result = arr
      .sort()
      .filter((item, i) => !(arr[i] == arr[i + 1] || arr[i - 1] == arr[i]));

    document.getElementById("uniqueresult").innerText = `${result}`;
    document.getElementById("uniquei").value = "";
  } else {
    alert("no of elements should be greater than zero");
  }
};
const dupli = () => {
  const element = ele("dui").value;
  if (element > 0) {
    const arr = valuetoarray(element, "number");
    const uarr = toUniqueArray(arr);
    let resultd = 0;
    arr.map((v, i) => {
      if (uarr.indexOf(v) === 0) {
        resultd++;
      }
    });

    document.getElementById("dueresult").innerText = `${resultd}`;
    document.getElementById("dui").value = "";
  } else {
    alert("no of elements should be greater than zero");
  }
};
const rdupli = () => {
  const element = ele("rdui").value;
  if (element > 0) {
    const arr = valuetoarray(element, "number");
    let result = toUniqueArray(arr);

    document.getElementById("rdueresult").innerText = `${result}`;
    document.getElementById("rdui").value = "";
  } else {
    alert("no of elements should be greater than zero");
  }
};
const toUniqueArray = (a) => {
  var newArr = [];
  for (var i = 0; i < a.length; i++) {
    if (newArr.indexOf(a[i]) === -1) {
      newArr.push(a[i]);
    }
  }
  return newArr;
};
const merge = () => {
  const element = ele("ma1").value;
  const element2 = ele("ma2").value;
  const element3 = ele("ma3").value;
  if (element > 0 && element2 > 0 && element3 > 0) {
    const array1 = valuetoarray(element);
    const array2 = valuetoarray(element2);
    const array3 = valuetoarray(element3);
    let bfc = `before merge array1 = ${array1} arrayw2 = ${array2}
    array3 ${array3}
    `;

    let merged = [...array3, ...array1, ...array2];
    let afc = `after merge array3 = 
     ${merged}`;

    ele("maresult").innerText = bfc + afc;
    ele("ma1").value = "";
    ele("ma2").value = "";
    ele("ma3").value = "";
  } else {
    alert("all array no of elements should be greater than zero");
  }
};
