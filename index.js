const data = {
    schoolName: 'SMK Negeri 2 Kota Bekasi',
    name: ['John', 'Daniel', 'Natasha'],
    score: [89, 78, 56]
};

let min = data.score[0];
let max = data.score[0];
let sum = 0;

for (let i = 0; i < data.score.length; i++) {
    let currentScore = data.score[i];
    if (currentScore > max) {
        max = currentScore;
    }
    if (currentScore < min) {
        min = currentScore;
    }
    sum += currentScore;
}
let avg = sum / data.score.length;

console.log("Data Sekolah:", data.schoolName);
console.log("Nilai Terendah (Min):", min);
console.log("Nilai Tertinggi (Max):", max);
console.log("Rata-rata (Avg):", avg);
