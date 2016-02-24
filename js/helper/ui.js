define([], function () {

    var
        getElement = function (id) {

            return document.getElementById(id);
        },

        setText = function (element, text) {

            getElement(element).textContent = text;
        },

        setStyle = function (element, attribut, valeur) {

            getElement(element).style[attribut] = valeur;
        }

    return {
        getElement: getElement,
        setText: setText,
        setStyle: setStyle
    }
});