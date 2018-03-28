$(function(){
    $('#btn').click(function() {
    	var htmlString;
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
		
		// Add Young HIckory if checked
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
		div = document.getElementById('white-container');
		div.insertAdjacentHTML('beforeend', htmlString);
    });
});
