(function () {
	
	var cross = getElement("cross");
	var itemSelected = getElement("item-selected");
	var client = algoliasearch("FTK37YW8UH", "40740dc386266c8ecb2cba5bcac35ff9");
  	var index = client.initIndex("best_buy");
  	
  	var footer_bottom = '<div id="dropdown_footer"><a href="#">';
  	footer_bottom += '<img id="img-footer" src="images/arrow-bottom.png" alt="dropdown footer"/></a></div>';
  	
  	cross.addEventListener("click", onCrossClick, false);
  	
  	autocomplete('#search-input', { hint: false }, [
    {
      source: autocomplete.sources.hits(index, { hitsPerPage: 6 }),
      name: 'best_buy',
      debug: true,
      displayKey: 'name',
      templates: {
      	footer: footer_bottom,
        suggestion: function(suggestion) {
            console.log(suggestion._highlightResult);
          var html = '<img class="img-suggest" src="'+suggestion.image+'" alt="'+suggestion.name.value+'"/>';
          html += '<div class="wrapper-description-suggest">';
          html += '<span class="name-suggest"><span class="brand-suggest">'+suggestion._highlightResult.brand.value+'</span><br/>';
          html += suggestion._highlightResult.name.value+'</span>';
          html += '</div>';
        
          return html;
        }
      }
    }
  ]).on('autocomplete:selected', function(event, suggestion, dataset) {
  
		assignValue(suggestion);
  });
  
  function assignValue(suggestion) {
    
  	getElement("item-selected-price").textContent = suggestion.price;
  	getElement("item-selected-brand").textContent = suggestion.brand;
  	getElement("item-selected-name").textContent = suggestion.name;
  	getElement("item-selected-description").textContent = suggestion.description;
  	getElement("img-selected").src = suggestion.image;
  	itemSelected.style.opacity = 1;
  }
  
  function onCrossClick(e){
  	itemSelected.style.opacity = 0;
  	getElement("search-input").value = "";
  }
  
  function getElement(id){
  	return document.getElementById(id);
  }
})();

