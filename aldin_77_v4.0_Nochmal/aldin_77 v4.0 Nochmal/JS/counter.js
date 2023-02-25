/* Die Input "Textarea" wurde in einer Variabile gespeichert, damit wir
mit ihr ein Event machen können*/
var a = document.getElementById("inp");
/* Der Variabile "a"(Textarea ) wird ein Event angewendet. Bei uns ist "Keyup". Das
heißt , jedes Mal wenn eine Taste gedruckt wird, soll etwas passieren. Bei
uns wird der Inhalt von "count"(span)" mit der Länge von "a " aktualisiert*/
a.addEventListener("keyup",function(){
document.getElementById("count").innerHTML = " " + " "+ a.value.length;
})