!function(){function a(a){c("item-selected-price").textContent=a.price,c("item-selected-brand").textContent=a.brand,c("item-selected-name").textContent=a.name,c("item-selected-description").textContent=a.description,c("img-selected").src=a.image,e.style.opacity=1}function b(a){e.style.opacity=0,c("search-input").value=""}function c(a){return document.getElementById(a)}var d=c("cross"),e=c("item-selected"),f=algoliasearch("FTK37YW8UH","40740dc386266c8ecb2cba5bcac35ff9"),g=f.initIndex("best_buy"),h='<div id="dropdown_footer"><a href="#">';h+='<img id="img-footer" src="images/arrow-bottom.png" alt="dropdown footer"/></a></div>',d.addEventListener("click",b,!1),autocomplete("#search-input",{hint:!1},[{source:autocomplete.sources.hits(g,{hitsPerPage:6}),name:"best_buy",debug:!0,displayKey:"name",templates:{footer:h,suggestion:function(a){var b='<img class="img-suggest" src="'+a.image+'" alt="'+a.name+'"/>';return b+='<div class="wrapper-description-suggest">',b+='<span class="name-suggest"><span class="brand-suggest">'+a.brand+"</span><br/>",b+=a.name+"</span>",b+="</div>"}}}]).on("autocomplete:selected",function(b,c,d){a(c)})}();