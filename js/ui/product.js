define(["../helper/ui.js"], function (ui) {

    var
        OnProductSelected = function (suggestion) {

            ui.setText("item-selected-price", suggestion.price);
            ui.setText("item-selected-brand", suggestion.brand);
            ui.setText("item-selected-name", suggestion.name);
            ui.setText("item-selected-description", suggestion.description);
            ui.getElement("img-selected").src = suggestion.image;
            ui.setStyle("item-selected", "opacity", "1");
        },

        onCrossClick = function (e) {

            ui.setStyle("item-selected", "opacity", "0");
            ui.setText("search-input", "");
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
        }

    return {
        OnProductSelected: OnProductSelected,
        onCrossClick: onCrossClick,
        defaultProductHtml: defaultProductHtml,
        getFooterBottom: getFooterBottom
    }
});