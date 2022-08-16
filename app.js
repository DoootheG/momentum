const player = {
  name: "DoootheG",
  tier: "silver",
  playtype: "aram",
};
console.log(player);
player.tier = "platinum";
console.log(player);

function theg(a, b) {
  console.log("내 책상에는 " + a + "개의 " + b + "이 있다.");
}

theg(1, "민트사탕");
theg(4, "껌");
theg(4, "책");
theg(15, "볼펜");

const greeting = {
  firstMeet: function (a) {
    console.log("Hello " + a + "! This is Hank. Nice to meet you!");
  },
};

greeting.firstMeet("Lukas");

const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerof: function (a, b) {
    console.log(a ** b);
  },
};

calculator.plus(100, 200);
calculator.divide(10000, 5);
calculator.powerof(2, 10);
