window.onload = function() {
    document.getElementById('registration').addEventListener('submit', function(event) {
        event.preventDefault();

        const elmentettFelhasznalonev = document.getElementById('nickname').value;
        const elmentettJelszo = document.getElementById('password').value;

        const felhasznaloAdatok = {
            felhasznalonev: elmentettFelhasznalonev,
            jelszo: elmentettJelszo
        };

        localStorage.setItem('felhasznaloAdatok', JSON.stringify(felhasznaloAdatok));
		
		window.location.href = 'uzenetH.html';/*Sikeres regisztráció*/
		
    });
};