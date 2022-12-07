// 21)
const x = `John`;
const y = `Doe`;
if (x === y) {
  console.log(`${x} equals to${y}`);
} else console.log(`${x} <> ${y}`);


// 22)
const student = {
  name: 'John',
  surname: `Doe`,
  email: `johndoe@student.com`,
};


// 23)
delete student.email;


// 24)
const pastries = [
  `cheesecake`,
  `pecan pie`,
  `toffee`,
  `cupcake`,
  `pumpkin pie`,
  `pudding`,
  `cinnamon rolls`,
  `chocolate`,
  `tiramisu`,
  `honey donut`,
];


// 25)
for (const pastry of pastries) {
  console.log(pastry);
}


// 26)
let randomNum = [];
for (let i = 1; i < 100; i++) {
  randomNum.push(Math.floor(Math.random() * 200));
}
console.log(randomNum);


 27
const maximum = Math.max(...randomNum);
const minimum = Math.min(...randomNum);
const result = [maximum, minimum];

console.log(result);

// 28)
const arr = [];
for (let i = 0; i < 4; i++) {
  const arrOfArr = [];
  for (let j = 0; j < 10; j++) arrOfArr.push(Math.floor(Math.random() * 100));
  arr.push(arrOfArr);
}
console.log(arr);


// 29)
const compareArrays = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a.length > b.length) {
      return `a is bigger`;
    }
    if (a.length < b.length) {
      return `b is bigger`;
    }
    return `a and b have equal number of elements`;
  }
};
const array1 = [21, 20, 23, 30];
const array2 = [35, `hey`, 45, 78];

console.log(compareArrays(array1, array2));


// 30)
const compareArrays1 = (a, b) => {
  const arr1 = [35, 15, 11];
  const arr2 = [3, 15, 11];
  let sum1 = 0;
  let sum2 = 0;

  for (const value of arr1) {
    sum1 += value;
  }
  for (const value2 of arr2) sum2 += value2;
  if (sum1 > sum2) {
    return `a is bigger`;
  }
  if (sum1 < sum2) {
    return `b is bigger`;
  }
  return `a and b are equal`;
};
console.log(compareArrays1());


// 31)
const container = document.getElementById(`container`);


// 32) and 33)
const td = document.getElementsByTagName(`td`);

for (const tdEl of td) {
  console.log(tdEl.textContent);
}


// 34)
const changeTitle = (newTitle) => {
  document.querySelector(`h1`).innerText = newTitle;
};


// 35)
const addRows = document.getElementById(`add-rows`);

addRows.onclick = () => {
  const table = document.getElementById(`my-table`);
  const row = table.insertRow(4);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);

  cell1.innerHTML = `New Marzipan`;
  cell2.innerHTML = `New Marzipan`;
  cell3.innerHTML = `New Marzipan`;
  cell4.innerHTML = `New Marzipan`;
  cell5.innerHTML = `New Marzipan`;
};


// 36)
const addClass = () => {
  const trElements = document.querySelectorAll(`tr`);
  for (const trElement of trElements) {
    trElement.classList.add(`test`);
  }
};


// 37
const redBackground = () => {
  const links = document.querySelectorAll(`a`);
  for (const link of links) {
    link.style.backgroundColor = `red`;
  }
};


// 38)
window.onload = () => {
  console.log('Page loaded');
};


// 39)
const addLi = (content) => {
  const newLi = document.createElement(`li`);
  newLi.innerHTML = content;

  const ul = document.querySelector(`ul`);
  ul.appendChild(newLi);
};


// 40)
const removeLi = () => {
  const ul = document.querySelector(`ul`);
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
};


// 41)
const aHref = document.getElementById(`footer-link`);
aHref.onmouseover = () => {
  alert(`https://github.com/`);
};


// 42)
const btnHide = document.getElementById(`hide-btn`);

btnHide.onclick = () => {
  const imgs = document.querySelectorAll(`img`);
  for (const img of imgs) {
    img.style.display = img.style.display === `none` ? `block` : `none`;
  }
};


// 43)
const btnHideTab = document.getElementById(`hide-table`);

btnHideTab.onclick = () => {
  const myTable = document.getElementById(`my-table`);
  myTable.style.display = myTable.style.display === `none` ? `block` : `none`;
};


// 44)
const sumRows = () => {
  const td = document.querySelectorAll('td');
  let total = 0;
  let rowsNumbers = [];

  for (let i = 0; i < td.length; i++) {
    rowsNumbers.push(parseInt(td[i].textContent)); 
    if (!isNaN(rowsNumbers[i])) {
      total += rowsNumbers[i];
    }
  }
  return total;
}



// 45)
const h1 = document.querySelector(`h1`);
h1.onclick = () => {
  h1.textContent = h1.textContent.slice(0, -1);
};


// 46)
const tdAllBlue = document.querySelectorAll(`td`);

for (const td of tdAllBlue) {
  td.onclick = () => {
    td.style.backgroundColor = `blue`;
  };
}


// 47)
const removeRandomCell = () => {
  const deleteTd = document.getElementById(`hide-first-td`);
  const td = document.getElementsByTagName(`td`);

  deleteTd.onclick = () => {
    const randomTd = Math.floor(Math.random() * td.length);
    td[randomTd].remove();
  };
}
console.log(removeRandomCell())


// 48)
const tdBorders = document.querySelectorAll(`td`);
for (const tdBorder of tdBorders) {
  tdBorder.onmouseover = () => {
    tdBorder.style.border = `1px solid pink`;
  };
}


// 49)
const createNewTable = () => {
  const footer = document.querySelector(`footer`);
  const newTable = document.createElement(`table`);
  newTable.classList.add(`table`);
  newTable.setAttribute(`id`, `new-table`);
  footer.appendChild(newTable);

  for (let i = 0; i < 4; i++) {
    const newTr = document.createElement(`tr`);

    for (let y = 0; y < 3; y++) {
      const newTd = document.createElement(`td`);
      newTr.appendChild(newTd);
      newTd.textContent = `Cookies`;
    }
    newTable.appendChild(newTr);
  }
};


// 50)
const removeLastTable = () => {
  document.getElementById(`new-table`).remove();
};
