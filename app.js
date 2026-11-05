/** @format */

// ==========================================
// YUSUF G'AYRAT - DASTURLASH DAN MASALALAR
// 30 TA MASALA YECHIMI (Edabit uslubida)
// ==========================================

// 1. Ikki son yig'indisi
function sum(x, y) {
  return x + y;
}

// 2. Minutlarni sekundga o'tkazish
function toSekunds(minutes) {
  return minutes * 60;
}

// 3. Keyingi sonni qaytarish
function nextInteger(int) {
  return int + 1;
}

// 4. Uchburchakning yuzini topish (S = (a * h) / 2)
function uchburchakYuzi(asos, balandlik) {
  return (asos * balandlik) / 2;
}

// 5. Yoshni kunlarda hisoblash (1 yil = 365 kun)
function ageToDays(age) {
  return age * 365;
}

// 6. Sonning kubini hisoblash
function kub(raqam) {
  return raqam ** 3;
}

// 7. Massivning birinchi elementini qaytarish
function firstElement(arr) {
  return arr[0];
}

// 8. Sonning darajasini topish (x ning y-darajasi)
function power(x, y) {
  return Math.pow(x, y);
}

// 9. Soatni sekundga o'tkazish (1 soat = 3600 sekund)
function hourToSekunds(hour) {
  return hour * 3600;
}

// 10. Uchburchakning uchinchi tomonining eng uzun qiymati
function uchinchiTomon(tomon1, tomon2) {
  return tomon1 + tomon2 - 1;
}

// 11. Bo'linmadagi qoldiqni topish
function qoldiq(son1, son2) {
  return son1 % son2;
}

// 12. To'rtburchakning yuzini topish (S = a * b)
function turtburchakYuzi(boyi, eni) {
  return boyi * eni;
}

// 13. Matnga "something " qo'shish
function stringQoshish(a) {
  return "something " + a;
}

// 14. Sonning kvadratini topish
function kvadrat(raqam) {
  return raqam ** 2;
}

// 15. Son 0 dan kichik yoki tengligini tekshirish
function noldan(raqam) {
  return raqam <= 0;
}

// 16. Ko'pburchakning ichki burchaklari yig'indisi: (n - 2) * 180
function ichkiBurchaklar(n) {
  return (n - 2) * 180;
}

// 17. Basketbol ochkolari (2 ochkolik va 3 ochkolik gollar)
function ochkolar(x, y) {
  return x * 2 + y * 3;
}

// 18. Matn oxiriga "Edabit" so'zini qo'shish
function nameString(name) {
  return name + "Edabit";
}

// 19. Ikki son yig'indisi 100 dan kichikmi?
function kichik100dan(x, y) {
  return x + y < 100;
}

// 20. 1 dan N gacha sonlar massivini qaytarish
function printArray(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}

// 21. Fermadagilarning oyoqlari soni (tovuq: 2, qo'y: 4, sigir: 4)
function oyoqlar(tovuq, qoy, sigir) {
  return tovuq * 2 + qoy * 4 + sigir * 4;
}

// 22. Mantiqiy AND (&&) operatori
function and(a, b) {
  return a && b;
}

// 23. Ikki qiymat va ularning turi tengmi? (===)
function tengMi(x, y) {
  return x === y;
}

// 24. Futbol ochkolarini hisoblash (yutish: 3, durang: 1, mag'lubiyat: 0)
function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
  return yutishlar * 3 + duranglar * 1 + maglubiyatlar * 0;
}

// 25. Soat va minutlarni umumiy sekundga o'girish
function sekundlar(soat, minut) {
  return soat * 3600 + minut * 60;
}

// 26. Mantiqiy inkor operatori (!)
function fun(value) {
  return !value;
}

// 27. Qiymat va tur bo'yicha tenglikni tekshirish
function checkEquality(value1, value2) {
  return value1 === value2;
}

// 28. Boolean qiymatni stringga o'tkazish
function booleanToString(bool) {
  return String(bool);
}

// 29. Arrow funksiyasini yaratish
const arrowFunc = (num) => num;

// 30. Frame (kadrlar) sonini hisoblash (minut * 60 * frame)
function frameSoni(minut, frame) {
  return minut * 60 * frame;
}
