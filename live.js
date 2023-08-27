// soal nomer 1

const tahun = [2016, 2017, 2018]; // Daftar tahun

for (let i = 0; i < tahun.length; i++) {
  const yearStr = tahun[i].toString(); // Mengubah tahun menjadi string

  // Menghitung nilai tahun berdasarkan karakter-karakter dalam string tahun
  let year = 0;
  for (let j = 0; j < yearStr.length; j++) {
    const digit = yearStr.charCodeAt(j) - '0'.charCodeAt(0);
    year = year * 10 + digit;
  }

  // Memeriksa apakah tahun adalah tahun kabisat atau bukan
  let isLeapYear = false;

  // Jika tahun habis dibagi 4 dan tidak habis dibagi 100, atau habis dibagi 400
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    isLeapYear = true;
  }

  // Menampilkan hasil
  if (isLeapYear) {
    console.log(year + ' adalah tahun kabisat.');
  } else {
    console.log(year + ' bukan tahun kabisat.');
  }
}



// soal nomer 2 
function hapusSimbol(str) {
    let cleanStr = '';
  
    for (let i = 0; i < str.length; i++) {
      const karakter = str[i];
      
      // Periksa apakah karakter adalah huruf a-z atau angka 0-9
      if (
        (karakter >= 'a' && karakter <= 'z') ||
        (karakter>= '0' && karakter <= '9') ||
        (karakter >= 'A' && karakter <= 'Z')
      ) {
        cleanStr += karakter; // Tambahkan karakter ke cleanStr
      }
    }
  
    return cleanStr;
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100



//   soal ke 3 
  function MajoritySweeper(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    const frekuensi = {}; // Objek untuk menghitung frekuensi kemunculan nilai
    let nilaiMayoritas = arr[0];
    let frekuensiMaks = 1;
  
    for (let i = 0; i < arr.length; i++) {
      const nilai = arr[i];
      if (!frekuensi[nilai]) {
        frekuensi[nilai] = 1;
      } else {
        frekuensi[nilai]++;
        if (frekuensi[nilai] > frekuensiMaks) {
          nilaiMayoritas = nilai;
          frekuensiMaks = frekuensi[nilai];
        }
      }
    }
  
    const hasil = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== nilaiMayoritas) {
        hasil.push(arr[i]);
      }
    }
  
    return hasil;
  }
  
  // TEST CASES
  console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
  console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])); // [ 22, 22, 2000 ]
  console.log(MajoritySweeper([2, 2])); // []
  console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])); // [ 1, 1, 1, 2, 2 ]
  