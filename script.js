alert('Pronto a creare una password a prova di hacker?')

//Ottieni le 3 informazioni dall'utente
var user_name = prompt('Qual è il tuo nome?');
var user_surname = prompt('E il tuo cognome?');
var user_color = prompt('Qual è il tuo colore preferito?');

//Crea una variabile con l'anno attuale da aggiungere al termine della password
var year = new Date().getFullYear()

//mostra a schermo la password ottenuta
document.getElementById('password').innerHTML = user_name + user_surname + user_color + year;
document.getElementById('password_container').setAttribute('class', 'mostra');
document.getElementById('reload').setAttribute('class', 'mostra');
