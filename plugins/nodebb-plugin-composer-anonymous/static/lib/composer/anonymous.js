'use strict';

//TODO make some kind of anonymous property
define('composer/anonymous', [], function () {
	var anonymous = {};
    var state = {
        isSel: false
    }

    //Function for setting a button state
    anonymous.create = function (postContainer) {
        var anonymousBtn = postContainer.find('.anonymous-post-opt');

        anonymousBtn.addEventListener('click', onBtnSel);
        state.isSel = false;
    }

    // Returns true if anonymous, false if not
    anonymous.getState = function () {
        return state.isSel;
    }

    //On click
    function onBtnSel() {
        state.isSel = !state.isSel;
    }
    return anonymous;

});
