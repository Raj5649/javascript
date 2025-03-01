let n = 5; // Number of rows

for (let i = 1; i <= n; i++) { // Outer loop for rows
    let row = "";
    for (let j = 1; j <= i; j++) { // Inner loop for columns
        row += "* ";
    }
    console.log(row.trim()); // Print each row
}
