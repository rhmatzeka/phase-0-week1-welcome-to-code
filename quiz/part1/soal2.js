let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 6; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
let NamaBulan;

switch (bulan) {
  case 1:
    NamaBulan = "januari"
    break;
  case 2:
    NamaBulan = "february"
    break;

  case 3:
    NamaBulan = "maret"
    break;

  case 4:
    NamaBulan = "april"
    break;

  case 5:
    NamaBulan = "mei"
    break;

  case 6:
    NamaBulan = "juni"
    break;

  case 7:
    NamaBulan = "juli"
    break;

  case 8:
    NamaBulan = "agustus"
    break;

  case 9:
    NamaBulan = "september"
    break;

  case 10:
    NamaBulan = "oktober"
    break;

  case 11:
    NamaBulan = "november"
    break;
  case 12:
    NamaBulan = "desember"
    break;



 }

console.log(`${tanggal} ${NamaBulan} ${tahun}`)
