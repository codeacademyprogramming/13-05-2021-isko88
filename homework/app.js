"use strict";
var result = [];
let scales = {
  1: {
    1000000: "Bir Milyon",
    100000: "Yüz",
    10000: "On",
    1000: "Bir Min",
    100: "Yüz",
    10: "On",
    1: "Bir",
  },
  2: {
    1000000: "İki Milyon",
    100000: "İki Yüz",
    10000: "İyirmi",
    1000: "İki Min",
    100: "İki Yüz",
    10: "İyirmi",
    1: "İki",
  },
  3: {
    1000000: "Üç Milyon",
    100000: "Üç Yüz",
    10000: "Otuz",
    1000: "Üç Min",
    100: "Üç Yüz",
    10: "Otuz",
    1: "Üç",
  },
  4: {
    1000000: "Dörd Milyon",
    100000: "Dörd Yüz",
    10000: "Qırx",
    1000: "Dörd Min",
    100: "Dörd Yüz",
    10: "Qırx",
    1: "Dörd",
  },
  5: {
    1000000: "Beş Milyon",
    100000: "Beş Yüz",
    10000: "Əlli",
    1000: "Beş Min",
    100: "Beş Yüz",
    10: "Əlli",
    1: "Beş",
  },
  6: {
    1000000: "Altı Milyon",
    100000: "Altı Yüz",
    10000: "Altmış",
    1000: "Altı Min",
    100: "Altı Yüz",
    10: "Altmış",
    1: "Altı",
  },
  7: {
    1000000: "Yeddi Milyon",
    100000: "Yeddi Yüz",
    10000: "Yetmiş",
    1000: "Yeddi Min",
    100: "Yeddi Yüz",
    10: "Yetmiş",
    1: "Yeddi",
  },
  8: {
    1000000: "Səkkiz Milyon",
    100000: "Səkkiz Yüz",
    10000: "Səksən",
    1000: "Səkkiz Min",
    100: "Səkkiz Yüz",
    10: "Səksən",
    1: "Səkkiz",
  },
  9: {
    1000000: "Doqquz Milyon",
    100000: "Doqquz Yüz",
    10000: "Doxsan",
    1000: "Doqquz Min",
    100: "Doqquz Yüz",
    10: "Doxsan",
    1: "Doqquz",
  },
};

function Helper(n, divisor) {
  //   let result = [];
  let key = Math.floor(n / divisor);

  switch (key) {
    case 9:
      return scales[9][divisor];
      break;
    case 8:
      return scales[8][divisor];
      break;
    case 7:
      return scales[7][divisor];
      break;
    case 6:
      return scales[6][divisor];
      break;
    case 5:
      return scales[5][divisor];
      break;
    case 4:
      return scales[4][divisor];
      break;
    case 3:
      return scales[3][divisor];
      break;
    case 2:
      return scales[2][divisor];
      break;
    case 1:
      return scales[1][divisor];
      break;

    default:
      break;
  }
}

function convertWords(n) {
    n = +n;
    if (!n) {
        return "Sıfır";
    }
    if(n===NaN){
        return "Rəqəm daxil edin!";
    }
    if (n < 0) {
        result.push("Mənfi");
        n *= -1;
    }
    if (n > 9999999) {
        return "Rəqəm aralığı (-9 999 999 və 9 999 999)"
    }
  if (n >= 1000000) {
    result.push(Helper(n, 1000000));
    convertWords(n % 1000000);
  }else if (n >= 100000) {
    result.push(Helper(n, 100000));
    convertWords(n % 100000);
  }else if (n >= 10000) {
    result.push(Helper(n, 10000));
    convertWords(n % 10000);
  }else if (n >= 1000) {
    result.push(Helper(n, 1000));
    convertWords(n % 1000);
  }else if (n >= 100) {
    result.push(Helper(n, 100));
    convertWords(n % 100);
  }else if (n >= 10) {
    result.push(Helper(n, 10));
    convertWords(n % 10);
  }else if (n < 10 && n > 0) {
    result.push(Helper(n, 1));
  }
  return result.join(" ");
  
}
console.log(convertWords(9999999));