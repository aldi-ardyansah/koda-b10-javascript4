# JavaScript 4

## Program Hitung Nilai

### Flowchart

```mermaid
flowchart TD
    A((start))
    B["data = {schoolName, name, score}"]
    C["min = score[0]"]
    D["max = score[0]"]
    E["sum = 0"]
    F["i = 0"]
    G{"i < score.length"}
    H["calculateScore = score[i]"]
    I{"calculateScore > max"}
    J["max = calculateScore"]
    K{"calculateScore < min"}
    L["min = calculateScore"]
    M["sum += calculateScore"]
    N["i++"]
    O["avg = sum / score.length"]
    P[/max/]
    Q[/min/]
    R[/avg/]
    Z(((stop)))

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G -- true --> H
    H --> I
    I -- true --> J
    I -- false --> K
    J --> K
    K -- true --> L
    K -- false --> M
    L --> M
    M --> N
    N --> G
    G -- false --> O
    O --> P
    P --> Q
    Q --> R
    R --> Z
```

### Kode
```javascript
const data = {
    schoolName: 'SMK Negeri 2 Kota Bekasi',
    name: ['Diana', 'Bayu', 'Budi'],
    score: [56, 78, 45]
};

data.name = [...data.name, 'Feri', 'Sarah', 'Dini', 'Rima'];
data.score = [...data.score, 95, 87, 76, 92];

let min = data.score[0];
let max = data.score[0];
let sum = 0;

for (let i = 0; i < data.score.length; i++) {
    let calculateScore = data.score[i];
    if (calculateScore > max) {
        max = calculateScore;
    }
    if (calculateScore < min) {
        min = calculateScore;
    }
    sum += calculateScore;
}
let avg = sum / data.score.length;

console.log("Nilai Tertinggi (Max):", max);
console.log("Nilai Terendah (Min):", min);
console.log("Rata-rata (Avg):", avg);
```