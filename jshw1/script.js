// Bài 1:
function C2F(c) {
  console.log("Giá trị độ F là:");
  console.log(c * 1.8 + 32);
  return c * 1.8 + 32;
}

// Bài 2:
function USD2VND(n) {
  console.log("Số tiền theo mệnh giá VND:");
  console.log(n * 23500);
  return n * 23500;
}

// Bài 3:
function findArea(a, b) {
  console.log("Diện tích hình chữ nhật là:");
  console.log(a * b);
  return a * b;
}

// Bài 4:
function compoundInterest(P, r, n, t) {
  console.log("Lãi suất kép A:");
  console.log(P * (1 + r / n) ** (n * t));
  return P * (1 + r / n) ** (n * t);
}

// Bài 5:
function findTriagleArea(a, b, c) {
  let S = (a + b + c) / 2;
  console.log("Diện tích tam giác là:");
  console.log(Math.sqrt(S * (S - a) * (S - b) * (S - c)));

  return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
