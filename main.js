// soal1
function balikKata(inputString) {
  let hurufKata = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    hurufKata += inputString[i];
  }

  return hurufKata;
}

// TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

//soal2
function dashWord(string, number) {
  let result = "";
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    result += string[i];
    count++;

    if (count === number && i !== string.length - 1) {
      result += "-";
      count = 0;
    }
  }

  return result;
}

// TEST CASES
console.log(dashWord("Semangat!", 3)); // Sem-ang-at!
console.log(dashWord("Uzumaki Naruto", 2)); // Uz-um-ak-i -Na-ru-to
console.log(dashWord("081234567890", 4)); // 0812-3456-7890
console.log(dashWord("Indonesia Hebat", 10)); // Indonesia -Hebat
console.log(dashWord("Love Coding", 1)); // L-o-v-e- -C-o-d-i-n-g
