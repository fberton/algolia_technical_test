requirejs(["algoliasearch", "autocomplete"], function (algoliasearch, autocomplete) {

    var
        init = function (options) {
            var
                client = algoliasearch(options.applicationId, options.apiKey),
                inst = autocomplete(options.inputId,
                    options.autoCompleteOptions,
                    options.datasets.map(function (dataset) {

                        var index = client.initIndex(dataset.index);
                        dataset.source = autocomplete.sources.hits(index, dataset.Options);
                        return dataset;
                    }));

            if (options.onSelected) {
                inst.on('autocomplete:selected', options.onSelected);
            }

            return inst;
        };

    return {

        init: init,
    };
});