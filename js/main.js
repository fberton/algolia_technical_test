require.config({
    deps: ['main'],
    paths: {
        "algoliasearch": "../bower_components/algoliasearch/dist/algoliasearch",
        "autocomplete": "../bower_components/algolia-autocomplete.js/dist/autocomplete",
        "autocompleteWrapper": "helper/autocomplete",
        "product": "ui/product",
        "ui": "helper/ui",
        "requireLib": "../bower_components/requirejs/require"
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
        datasets: datasets,
        onSelected: product.OnProductSelected
    };
    
    //Add Listenner
    var cross = ui.getElement("cross");
    cross.addEventListener("click", product.onCrossClick, false);
   
    //Beginning
    autocomplete.init(options);

});
