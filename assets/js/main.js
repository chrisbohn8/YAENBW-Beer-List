$(function(){
    $('#btn').click(function() {
    	var htmlString = '<div id="beers">';
    	// Add Miro Miel if checked
		if(document.getElementById('mmcheckbox').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/Miro-Miel.svg" alt="Miro Miel">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Miro Miel</div>';
		    htmlString += '<div class="beer-tagline">Blonde Ale with Local Honey</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">5.2%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		
		// Add Cumberland Punch if checked
		} if(document.getElementById('cpcheckbox').checked) {		
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/Cumberland-Punch.svg" alt="Cumberland Punch">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Cumberland Punch</div>';
		    htmlString += '<div class="beer-tagline">American Wheat Ale</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">6.2%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		
		// Add Young Hickory if checked
		} if(document.getElementById('yhcheckbox').checked) {		
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/Young-Hickory.svg" alt="Young Hickory">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Young Hickory</div>';
		    htmlString += '<div class="beer-tagline">Hickory Smoked Porter</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">4.5%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		
		// Add Roaming Dog if checked
		} if(document.getElementById('rdcheckbox').checked) {		
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/Roaming-Dog.svg" alt="Roaming-Dog">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Roaming Dog</div>';
		    htmlString += '<div class="beer-tagline">ESB + APA = ASB</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">5.2%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Swing Bridge if checked
		} if(document.getElementById('sbcheckbox').checked) {		
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/Swing-Bridge.svg" alt="Swing Bridge">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Swing Bridge</div>';
		    htmlString += '<div class="beer-tagline">American IPA</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">6.5%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">2</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add East Bank if checked
		} if(document.getElementById('ebcheckbox').checked) {		
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/East-Bank.svg" alt="East Bank">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">East Bank</div>';
		    htmlString += '<div class="beer-tagline">Citra IPA</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">7.0%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">2</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Holla Blanc if checked
		} if(document.getElementById('hbcheckbox').checked) {		
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Holla Blanc</div>';
		    htmlString += '<div class="beer-tagline">APA w/ Hallertau Blanc Hops</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">5.2%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Hipster Dance Party if checked
		} if(document.getElementById('hdpcheckbox').checked) {		
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Hipster Dance Party</div>';
		    htmlString += '<div class="beer-tagline">Double IPA</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">8.5%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">*</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add The Grievance if checked
		} if(document.getElementById('tgcheckbox').checked) {		
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/The-Grievance.svg" alt="The Grievance">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">The Grievance</div>';
		    htmlString += '<div class="beer-tagline">Chocolate and Cinnamon Milk Stout</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">5.5%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Talbot's Corner if checked
		} if(document.getElementById('tccheckbox').checked) {		
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Talbot\'s Corner</div>';
		    htmlString += '<div class="beer-tagline">Belgian Style Witbier</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">6.0%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Fire of the Century if checked
		} if(document.getElementById('fotccheckbox').checked) {		
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Fire of the Century</div>';
		    htmlString += '<div class="beer-tagline">Malty Red with NZ Hops</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">5.5%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Woodland Hull Melon if checked
		} if(document.getElementById('hdpcheckbox').checked) {		
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Woodland Hull Melon</div>';
		    htmlString += '<div class="beer-tagline">Session IPA w/ Hull Melon Hops</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">4.5%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		}


		// Always Add Wine & Cider List
		htmlString += '<div id="wine-cider" class="beer">';
		htmlString += '<img id="wine-cider-img" src="images/wine-cider.svg" alt="Wine & Cider">';
		htmlString += '<div id="wine-cider-list">';
		htmlString += '<div class="guest-total">';
		htmlString += '<div class="guest-name">JACK\'S HARD CIDER $5</div>';
		htmlString += '</div>';
		htmlString += '<div class="guest-total">';
		htmlString += '<div class="guest-name">WINE $8</div>';
		htmlString += '</div>';
		htmlString += '<div class="guest-total">';
		htmlString += '<div class="guest-name">SPARKLING ROS&Eacute; $9</div>';
		htmlString += '</div>';
		htmlString += '</div>';
		htmlString += '</div>';
		htmlString += '</div>';
		div = document.getElementById('white-container');
		div.insertAdjacentHTML('afterbegin', htmlString);
    });
});
