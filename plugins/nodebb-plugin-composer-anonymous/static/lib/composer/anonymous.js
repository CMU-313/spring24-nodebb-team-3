'use strict';

define('composer/anonymous', ['hooks'], function (hooks) {
	var anonymous = {};

	anonymous.handleToggler = function (postContainer) {
		var showBtn = postContainer.find('.write-container .toggle-anon');
		var hideBtn = postContainer.find('.preview-container .toggle-anon');

		function hidePreview() {
			togglePreview(false);
			localStorage.setItem('composer:anonymousToggled', !(localStorage.getItem('composer:anonymousToggled')));
		}

		function showPreview() {
			togglePreview(true);
			if (preview.env !== 'xs' && preview.env !== 'sm') {
				localStorage.removeItem('composer:anonymousToggled');
			}
		}

		function togglePreview(show) {
			if (preview.env === 'xs' || preview.env === 'sm') {
				showBtn.toggleClass('hide', true);
			} else {
				showBtn.toggleClass('hide', show);
			}

			preview.matchScroll(postContainer);
		}
		preview.toggle = togglePreview;

		hideBtn.on('click', function () {
			hidePreview();
			postContainer.find('.write').focus();
		});
		showBtn.on('click', function () {
			showPreview();
			postContainer.find('.write').focus();
		});

		if (localStorage.getItem('composer:previewToggled') || (preview.env === 'xs' || preview.env === 'sm')) {
			hidePreview();
		} else {
			showPreview();
		}
	};

	return preview;
});
