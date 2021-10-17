// listener - onLoad 
window.addEventListener('load', function() {

	let siteAndCopyrightInfo = document.getElementById('siteAndCopyrightInfo');
	siteAndCopyrightInfo.setAttribute('style', 'display:block;');

	var x = window.matchMedia('(max-width: 767px)')

	myFunction(x) // Call listener function at run time
	x.addEventListener('change', myFunction) // Attach listener function on state changes

	function myFunction(x) {

		if (x.matches) { // If media query matches

		  siteAndCopyrightInfo.setAttribute('style', 'text-align: center;');
		} else {

		 siteAndCopyrightInfo.setAttribute('style', 'text-align: left;');
		}
	  }

	siteAndCopyrightInfo.innerHTML = 'all material on this website is subject to copyright by myself, Jenna Hill, Jake Price, JP Creative Media, and other appropriate third parties.';
	siteAndCopyrightInfo.appendChild(document.createElement('br'));
	siteAndCopyrightInfo.appendChild(document.createElement('br'));
	siteAndCopyrightInfo.innerHTML += 'third parties include but not limited to: Constellate Films, Macys, The Yule Brothers, Parker Thompson Productions, Koba Entertainment, Kayla Gordon / Winnipeg Studio Theatre, Prairie Theatre Exchange, etc';
	siteAndCopyrightInfo.appendChild(document.createElement('br'));
	siteAndCopyrightInfo.appendChild(document.createElement('br'));
	siteAndCopyrightInfo.innerHTML += 'other third parties inlcude photograph authors, including but not limited to: <a href="https://jpcreativemedia.ca/" rel="author noopener nofollow" title="JP Creative Media">JP Creative Media</a>, <a href="https://rebeccarobertsstudios.com/" rel="noopener nofollow noreferrer" title="Rebecca Roberts Studios">Rebecca Roberts: Rebecca Roberts Studios</a>, <a href="https://www.theportraitsessionsphotography.com/" rel="noopener nofollow noreferrer" title="The Portrait Sessions Photography">Kristine Cofsky: The Portrait Sessions Photography</a>, <a href="https://www.kevinmcphotograph.com/" rel="noopener nofollow noreferrer" title="Kevin McIntyre Photography">Kevin McIntyre: Kevin McIntyre Photography</a>';
	siteAndCopyrightInfo.appendChild(document.createElement('br'));
	siteAndCopyrightInfo.appendChild(document.createElement('br'));
	siteAndCopyrightInfo.innerHTML += 'none of the material on this website can be reproduced or used without explicit prior written permission.';

}, {once: true});