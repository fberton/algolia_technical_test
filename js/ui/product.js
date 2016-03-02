define(["ui"], function (ui) {

    var
        OnProductSelected = function (event, product, dataset) {
            console.log(product);
            ui.setText("item-selected-price", product.price);
            ui.setText("item-selected-brand", product.brand);
            ui.setText("item-selected-name", product.name);
            ui.setText("item-selected-description", product.description);
            ui.getElement("img-selected").src = product.image;
            ui.setStyle("item-selected", "opacity", "1");
        },

        onCrossClick = function (e) {

            ui.setStyle("item-selected", "opacity", "0");
            ui.setValue("search-input", "");
        },

        defaultProductHtml = function (product) {

            var product_html = '<img class="img-suggest" src="' + product.image + '" alt="' + product.name.value + '"/>';
            product_html += '<div class="wrapper-description-suggest">';
            product_html += '<span class="name-suggest"><span class="brand-suggest">' + product._highlightResult.brand.value + '</span><br/>';
            product_html += product._highlightResult.name.value + '</span>';
            product_html += '</div>';

            return product_html;
        },

        getFooterBottom = function () {

            var footer_bottom = '<div id="dropdown_footer"><a href="#">';
            footer_bottom += '<img id="img-footer" src="images/arrow-bottom.png" alt="dropdown footer"/></a></div>';

            return footer_bottom;
        };

    return {
        OnProductSelected: OnProductSelected,
        onCrossClick: onCrossClick,
        defaultProductHtml: defaultProductHtml,
        getFooterBottom: getFooterBottom
    };
});