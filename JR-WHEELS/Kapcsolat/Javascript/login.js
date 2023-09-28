document.addEventListener('DOMContentLoaded', function() {
    const felhasznaloAdatokString = localStorage.getItem('felhasznaloAdatok');
    
    let counter = 0;
    
    if (felhasznaloAdatokString) {
        const felhasznaloAdatok = JSON.parse(felhasznaloAdatokString);

        const loginForm = document.getElementById('login');
        const loginNickname = document.getElementById('nickname');
        const loginPassword = document.getElementById('password');
        
        const errortext = document.getElementById('error');

        if (loginForm && loginNickname && loginPassword) {
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault();

                const bejelentkezoFelhasznalonev = loginNickname.value;
                const bejelentkezoJelszo = loginPassword.value;

                if (bejelentkezoFelhasznalonev === felhasznaloAdatok.felhasznalonev &&
                    bejelentkezoJelszo === felhasznaloAdatok.jelszo) {
                    window.location.href = 'uzenetH.html';/*Sikeres belépés*/
                } else {
                    loginNickname.style.border = 'solid 1px red';
                    loginPassword.style.border = 'solid 1px red';
                    counter++; /*Számolja hányszor nem sikerül belépni.*/
                    
                    
                    const buttcount = document.getElementsByClassName('submit'); /*HTMLCollection-t ad vissza.*/
                    for(let i = 0; i < buttcount.length; i++){
                        buttcount[i].textContent = 'Bejelentkezés' + ' (' + counter + ' )';
                    }
                    
                    
                    if( counter <= 1) /*Így nem lehet milliószor kiírattatni a szöveget.*/
                    {
                        
                        const errorParents = document.getElementById('error');
                        const newP = document.createElement('p'); /*Új html elem létrehozása.*/
                        newP.textContent = 'Hibás felhasználónév vagy jelszó!';
                        newP.style.color = 'red';
                        newP.style.textAlign = 'center';

                        errorParents.appendChild(newP);
                        
                    }
                    
                }
            });
        } else {
            console.error('Az űrlap elemek nem találhatók vagy nincsenek még betöltve.');
        }
    } else {
        console.log('Nincsenek regisztrációs adatok.');
    }
});
