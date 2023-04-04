
const nilaiUjian = 100; // nilai ujian peserta
const nilaiAbsensi = 90; // nilai absen peserta

document.writeln("Nilai Ujian :");
document.writeln("<br>");
const lulusUjian = nilaiUjian > 70; // nilai 70 adalah minimal lulus ujian
document.writeln(lulusUjian);
document.writeln("<br>");
document.writeln("Nilai Absensi :");
document.writeln("<br>");
const lulusAbsensi = nilaiAbsensi > 70; // nilai 70 adalah minimal lulus absensi
document.writeln(lulusAbsensi);
document.writeln("<br>");
document.writeln("Apakah lulus atau tidak? true untuk lulus, false untuk tidak lulus");
document.writeln("<br>");
const lulus = lulusUjian && lulusAbsensi; // apabila lulus keduanya maka yang keluar adalah nilai true
document.writeln(lulus);

document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");