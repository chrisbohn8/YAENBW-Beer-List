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
		    htmlString += '<img class="enbw-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
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
		    htmlString += '<img class="beer-logo" src="images/Hipster-Dance-Party.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Hipster Dance Party</div>';
		    htmlString += '<div class="beer-tagline">Double IPA $3 Taster | $5 Half-Pint</div>';
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
		    htmlString += '<img class="enbw-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
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
		    htmlString += '<img class="enbw-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
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
		} if(document.getElementById('totcheckbox').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="enbw-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Trouble on Trinity</div>';
		    htmlString += '<div class="beer-tagline">American Wheat Collaboration with Meddlesome</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">5.6%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">2</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Krautrock if checked
		} if(document.getElementById('krcheckbox').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/Kraut-Rock.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Krautrock</div>';
		    htmlString += '<div class="beer-tagline">Pale Ale</div>';
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

		// Add Blueberry Wheat if checked
		} if(document.getElementById('bbwcheckbox').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="enbw-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Blueberry Wheat</div>';
		    htmlString += '<div class="beer-tagline">Wheat Ale</div>';
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

		// Add Coconut Creme if checked
		} if(document.getElementById('ccpcheckbox').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/Coconut-Creme.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Coconut Crème Pie</div>';
		    htmlString += '<div class="beer-tagline">Lactose & Coconut</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">6.7%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">2</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Augustfest if checked
		} if(document.getElementById('afcheckbox').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/August-Fest.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Augustfest</div>';
		    htmlString += '<div class="beer-tagline">Blackberry Wheat</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">4.2%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add I'm an IPA Agent if checked
		} if(document.getElementById('ipagentcheckbox').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="enbw-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">I\'m an IPA Agent</div>';
		    htmlString += '<div class="beer-tagline">APA</div>';
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

		// Add Wes Coast Hamatrillo if checked
		} if(document.getElementById('wchcheckbox').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/Wes-Coast.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Wes Coast Hamatrillo</div>';
		    htmlString += '<div class="beer-tagline">IPA, Amarillo and Citra Hops</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">7.2%</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">2</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Custom Checkbox 1
		} if(document.getElementById('customcheckbox1').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="enbw-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">';
		    htmlString += document.getElementById('ccb1beerName').value;
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tagline">';
		    htmlString += document.getElementById('ccb1beerTagline').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">';
		    htmlString += document.getElementById('ccb1beerABV').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">';
		    htmlString += document.getElementById('ccb1beerTier').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Custom Checkbox 2
		} if(document.getElementById('customcheckbox2').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="enbw-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">';
		    htmlString += document.getElementById('ccb2beerName').value;
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tagline">';
		    htmlString += document.getElementById('ccb2beerTagline').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">';
		    htmlString += document.getElementById('ccb2beerABV').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">';
		    htmlString += document.getElementById('ccb2beerTier').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Custom Checkbox 3
		} if(document.getElementById('customcheckbox3').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="enbw-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">';
		    htmlString += document.getElementById('ccb3beerName').value;
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tagline">';
		    htmlString += document.getElementById('ccb3beerTagline').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">';
		    htmlString += document.getElementById('ccb3beerABV').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">';
		    htmlString += document.getElementById('ccb3beerTier').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Custom Checkbox 4
		} if(document.getElementById('customcheckbox4').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="enbw-logo" src="images/ENBW-logo.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">';
		    htmlString += document.getElementById('ccb4beerName').value;
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tagline">';
		    htmlString += document.getElementById('ccb4beerTagline').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">';
		    htmlString += document.getElementById('ccb4beerABV').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">';
		    htmlString += document.getElementById('ccb4beerTier').value;
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Woodland Street 1
		} if(document.getElementById('wscb1').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/Woodland-St.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Woodland ';
		    htmlString += document.getElementById('ws1hops').value;
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tagline">Session IPA w/ ';
		    htmlString += document.getElementById('ws1hops').value;
		    htmlString += ' Hops</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">4.5%';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';

		// Add Woodland Street 1
		} if(document.getElementById('wscb2').checked) {
			htmlString += '<div class="beer">';
		    htmlString += '<div class= logo-and-text>';
		    htmlString += '<img class="beer-logo" src="images/Woodland-St.svg" alt="ENBW Logo">';
		    htmlString += '<div class="beer-text">';
		    htmlString += '<div class="beer-name">Woodland ';
		    htmlString += document.getElementById('ws2hops').value;
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tagline">Session IPA w/ ';
		    htmlString += document.getElementById('ws2hops').value;
		    htmlString += ' Hops</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="abv-and-tier">';
		    htmlString += '<div class="beer-abv">';
		    htmlString += '<div class="abv-text">ABV</div>';
		    htmlString += '<div class="abv-content">4.5%';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '<div class="beer-tier">';
		    htmlString += '<div class="beer-tier-text">TIER</div>';
		    htmlString += '<div class="beer-tier-content">1';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		    htmlString += '</div>';
		}



		// Always Add Wine & Cider List
		htmlString += '<div id="wine-cider" class="beer">';
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

		document.getElementById('beerSelector').style.display = "none";
		document.getElementById('btn').style.display = "none";
		document.getElementsByTagName('BODY').position = "fixed";
    });
});
