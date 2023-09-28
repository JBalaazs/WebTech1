window.addEventListener('load', () => {

  const radios = document.querySelectorAll('input[type="radio"]');
  const Text = document.querySelectorAll('input[type="radio"]');
  const Button = document.querySelectorAll('button [type="submit"]');

  radios.forEach(radio => {
    radio.addEventListener('change', (event) => {
      const target = event.target;

      if (target.checked) {
        const isPF = target.value === 'PF';
        const isKF = target.value === 'KF'; /*A megfelelő van e kijelölve.*/
        const isPK = target.value === 'PK';
        const isKP = target.value === 'KP';
        const isZS = target.value === 'ZS';

		/*HÁTTÉR*/

        document.querySelector('.desc').style.backgroundColor = /*.desc szín állítása.*/
		  isPF ? '#eb4034' : /*piros*/
          isKF ? '#34b1eb' : /*kék*/
          isPK ? '#eb4034' : /*piros*/
          isKP ? '#34b1eb' : /*kék*/
          isZS ? '#9ceb34' : ''; /*zöld*/

        document.querySelector('.reg').style.backgroundColor = /*.reg szín állítása.*/
		  isPF ? 'white' : /*fehér*/
          isKF ? 'white' : /*fehér*/
          isPK ? '#34b1eb' : /*kék*/
          isKP ? '#eb4034' : /*piros*/
          isZS ? '#e7ed2d' : ''; /*sárga*/
		  
		  
		/*SZÖVEG*/
		
		document.querySelector('.desc').style.color = 
			isPF ? 'white' :
			isKF ? 'white' :
			isPK ? 'white' :
			isKP ? 'black' :
			isZS ? 'black' : '' ;
		
		document.querySelector('.reg').style.color = 
			isPF ? 'black' :
			isKF ? 'black' :
			isPK ? 'white' :
			isKP ? 'white' :
			isZS ? 'black' : '' ;
		
		/*GOMB*/

		document.querySelector('.gologin').style.backgroundColor = 
			isPF ? '#eb4034' :
			isKF ? 'black' :
			isPK ? '#eb4034' :
			isKP ? 'black' :
			isZS ? 'black' : '' ;
		

		
		document.querySelector('.submit').style.backgroundColor = 
			isPF ? '#f29807' :
			isKF ? '#f29807' :
			isPK ? 'black' :
			isKP ? '#eb4034' :
			isZS ? 'black' : '' ;
		
      }
    });
  });
});