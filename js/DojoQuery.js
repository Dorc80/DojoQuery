(function(global) {

    DojoQuery = function (selector) {
        return new DojoObj(selector);
    }

    function DojoObj(selector) {
        this.selector = selector;
        this.element = document.querySelector(selector);
    }

    DojoObj.prototype.click = function(callback) {
        this.element.addEventListener('click', callback);
    }

    DojoObj.prototype.pasarcursor = function(callback1, callback2) {
        this.element.addEventListener('mouseover', callback1);
        this.element.addEventListener('mouseout', callback2);
    }

    global.$DojoQuery = DojoQuery;

})(typeof window != "undefined" ? window : this )