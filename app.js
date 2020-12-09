let suspectWagon = Math.floor((Math.random()*10)+1);

for (let SelectionRepeatNumber = 1; SelectionRepeatNumber <= 4; SelectionRepeatNumber++) {
    let chosenWagon = prompt("Vagon sec!");
    if (SelectionRepeatNumber == 4 && chosenWagon!=suspectWagon) {
        alert(`Hakkiniz bitti. Suclu bulunamadi. Puaniniz 0. SUCLU ${suspectWagon} NUMARALI VAGONDA IDI.`);
        console.log(`Hakkiniz bitti. Suclu bulunamadi. Puaniniz 0. SUCLU ${suspectWagon} NUMARALI VAGONDA IDI.`);
    } else {
        if (chosenWagon == suspectWagon) {
            let puan = 100 - 25 * (SelectionRepeatNumber - 1)
            alert(`Tebrikler, ${SelectionRepeatNumber}'inci hakkinizda sucluyu buldunuz. Puaniniz ${puan}.`);
            console.log(`Tebrikler, ${SelectionRepeatNumber}'inci hakkinizda sucluyu buldunuz. Puaniniz ${puan}.`);
            break;
        } else if (chosenWagon < suspectWagon) {
            alert("Arka vagonlara git!")
        } else if (chosenWagon > suspectWagon) {
            alert("Ön vagonlara git!")
        }
    }
}