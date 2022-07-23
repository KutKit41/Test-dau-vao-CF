//Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
//Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10)

let inputArray = [];
function adjacentElementsProduct(inputArray) {
  let output = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
    output.push(inputArray[i] * inputArray[i + 1]);
  }
  return Math.max(...output);
}

//
//

