let nama = ("rahmat");
let peran = ("ksatria");

peran = peran ? peran.trim().toLowerCase() : "";

if (nama === "" || nama === null) {
    console.log("nama tidak boleh kosong");
} else if (peran === "") {
    console.log("peran tidak boleh kosong");
} else if (peran === "ksatria") {
    console.log(`halo ${peran} ${nama} mari cari musuh`);
} else if (peran === "tabib") {
    console.log(`halo ${peran} ${nama} mari sembuhkan rakyat`);
}else if (peran === "penyihir") {
    console.log(`halo ${peran} ${nama} mari ciptakan keajaiban`);
} else {
    console.log("jadi bot ajadeh kamu, pilihannya ga ada");
}   