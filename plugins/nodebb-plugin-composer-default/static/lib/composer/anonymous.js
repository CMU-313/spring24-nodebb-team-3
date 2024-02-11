'use strict';

define('composer/anonymous', [], function () {
	const anonymous = {};
    const state = {
        isSel: false
    }
    let anonymousBtn;
    //Function for setting a button state
    anonymous.create = function (postContainer) {
        state.isSel = false;
        anonymousBtn = postContainer[0].querySelector('.anonymous-post-opt');
        anonymousBtn.addEventListener('click', onBtnSel);
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
