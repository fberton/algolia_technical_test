require.config({
    paths: {
        "algoliasearch": "../bower_components/algoliasearch.js",
        "autocomplete": "../bower_components/autocomplete.js",
        "autocompleteWrapper": "helper/autocomplete.js",
        "product": "ui/product.js",
        "ui": "helper/ui.js"
    },
    shim: {
        "algoliasearch": {
            exports: "algoliasearch"
        }
    }
});

require(["autocompleteWrapper", "product", "ui"], function (autocomplete, product, ui) {

    var inputId = "#search-input";
    var applicationId = "FTK37YW8UH";
    var apiKey = "40740dc386266c8ecb2cba5bcac35ff9";
    var displayKey = "name";

    var autoCompleteOption = {
        hint: false,
        debug: true
    };

    var datasets = [

        {
            datasetSource: "best_buy",
            datasetOptions: { hitsPerPage: 6 },
            name: "best_buy",
            displayKey: displayKey,
            templates: {
                footer: product.getFooterBottom(),
                suggestion: product.defaultProductHtml
            }
        }
    ];

    var options = {

        applicationId: applicationId,
        apiKey: apiKey,
        inputId: inputId,
        autoCompleteOptions: autoCompleteOption,
        datasets: datasets
    };
    
    //Add Listenner
    var cross = ui.getElement("cross");
    cross.addEventListener("click", product.onCrossClick, false);
   
    //Beginning
    autocomplete.init(options);

});
