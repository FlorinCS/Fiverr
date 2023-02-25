
/* Das ist die Funktion die wir vom Anfang bekommen haben

Drinnen werden eine Obj und JSON - Datei umgewandelt */
export function zumWarenKorbHinzufuegen(Produkt){
    
 let warenkorb=JSON.parse(localStorage.getItem('warenkorb'));
 if(warenkorb){
    Produkt.id=warenkorb.length
 }else{
    Produkt.id=0
 }


 if (warenkorb){
    
    warenkorb.push(Produkt)

    localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
    
 }else{
    localStorage.setItem('warenkorb', JSON.stringify([Produkt]));
 }

}




