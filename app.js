const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.question('Nama? ', (nama) => {
    rl.question('Email? ', (email) => {
        rl.question('NoTelp? ', (notelp) => {
            console.log(`Terimakasih ${nama} sudah memasukkan data!`);
            const data = fs.readFileSync('data/contacts.json', 'utf-8');
            if(data.length > 0) {
                arr = JSON.parse(data);
            }
            arr.push({ nama, email, notelp });
            fs.writeFileSync('data/contacts.json', JSON.stringify(arr));
            rl.close();
        });
    });
});