let nama = "Rahmat", peran = "ksatria";

if (nama === "" || nama === null) {
	console.log("nama harus di isi")
}
else if (peran === "") {
  console.log("peran wajib di isi")
}
else if (peran === "ksatria") {
  console.log(`halo ${nama} ${peran} kamu dapat menyerang dengan senjatamu`)
}
else if (peran === "tabib") {
  cosole.log(`halo ${nama} ${tabib} kamu dapat menyerang dengan senjatamu`)
}
else if (peran === "penyihir") {
  console.log(`halo ${nama} ${penyihir} kamu dapat menyerang dengan senjatamu`)
}
