const h2 = document.querySelector('h2');

if (h2){ /*Ha igaz, akkor ki van választva, akkor mehetnek a változtatások.*/
    h2.style.textAlign = 'center';
    h2.style.fontSize = '35px';
}
else{
    console.error('Nem található ilyen elem.');
}