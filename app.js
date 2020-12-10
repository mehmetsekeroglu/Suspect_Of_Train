//Program akisi:
//1.  1-10 arasinda rastgele vagon numarası uretilir ve suclu bu vagonda saklanir.
//2.  En fazla 4 denemede suclunun bulunmasi gerekmektedir.
//3.  Suclunun kolay bulunabilmasi icin yönlendirme ifadeleri kullanilir.(Ön Vagon-Arka Vagon)
//4.  Suclunun kacinci denemede bulundugu ve aldigi puan konsola yazdirilir.

// suclunun hangi vagonda oldugunun random olarak olusturulmasi
let suspectWagon = Math.floor((Math.random()*10)+1);
// Oyunu oynayan kisinin 4 hakki icerisinde dogru tahmini yapmasi
for (let selectionRepeatNumber = 1; selectionRepeatNumber <= 4; selectionRepeatNumber++) {
    let chosenWagon = prompt("Vagon sec!");
// Eger kisi 4. hakkinda ise ve dogru tahmin yapamamissa oyun biter.
    if (selectionRepeatNumber == 4 && chosenWagon!=suspectWagon) {
        alert(`Hakkiniz bitti. Suclu bulunamadi. Puaniniz 0. SUCLU ${suspectWagon} NUMARALI VAGONDA IDI.`);
        console.log(`Hakkiniz bitti. Suclu bulunamadi. Puaniniz 0. SUCLU ${suspectWagon} NUMARALI VAGONDA IDI.`);
// Yonlendirmelerin yapilmasi ve kacinci tahminde dogru sonuca ulasildiginin belirlenmesi
    } else {
        if (chosenWagon == suspectWagon) {
            let puan = 100 - 25 * (selectionRepeatNumber - 1)
            alert(`Tebrikler, ${selectionRepeatNumber}'inci hakkinizda sucluyu buldunuz. Puaniniz ${puan}.`);
            console.log(`Tebrikler, ${selectionRepeatNumber}'inci hakkinizda sucluyu buldunuz. Puaniniz ${puan}.`);
            break;
        } else if (chosenWagon < suspectWagon) {
            alert("Arka vagonlara git!")
        } else if (chosenWagon > suspectWagon) {
            alert("Ön vagonlara git!")
        }
    }
}