jQuery(function () {

	$('.tblcmd_node_category').each(function (idx, elem) {
		var $elem = $(elem)

		var img_plus_orig = document.getElementById("img_icon_plus")
		var img_minus_orig = document.getElementById("img_icon_minus")

		var img_plus_new = img_plus_orig.cloneNode(true)
		var img_minus_new = img_minus_orig.cloneNode(true)
		
		var $img_plus_new = $(img_plus_new)
		var $img_minus_new = $(img_minus_new)
		
		$img_plus_new.removeAttr('id')
		$img_minus_new.removeAttr('id')
		
		$img_plus_new.addClass('tblcmd_icon tblcmd_icon_plus')
		$img_minus_new.addClass('tblcmd_icon tblcmd_icon_minus')
		
		$elem.prepend($img_plus_new)
		$elem.prepend($img_minus_new)
	})

	$('.tblcmd_node_name').each(function (idx, elem) {
		var $elem = $(elem)

		var snippetToCopyToClipboard = $elem.attr('snippet')
		if(snippetToCopyToClipboard === undefined)
			return console.error('no attribute "snippet" found')

		var img_copy_orig = document.getElementById("img_icon_copy")
		var img_copy_new = img_copy_orig.cloneNode(true)
		var $img_copy_new = $(img_copy_new)

		$img_copy_new.removeAttr('id')
		$img_copy_new.addClass('tblcmd_icon tblcmd_icon_copy')

		$elem.prepend($img_copy_new)

		$elem.attr('title', `Click to copy snippet: ${snippetToCopyToClipboard}`)
	})

	$('.tblcmd_node_category').on('click', function (e) {
		var $elem = $(e.target)
		while($elem.hasClass('tblcmd_node') === false)
			$elem = $elem.parent()
		$elem.toggleClass('tblcmd_collapsed')
		e.preventDefault()
	});

	$('.tblcmd_node_name').on('click', function (e) {
		var $elem = $(e.target)
		while($elem.hasClass('tblcmd_node') === false)
			$elem = $elem.parent()

		var snippetToCopyToClipboard = $elem.attr('snippet')
		if(snippetToCopyToClipboard === undefined)
			return console.error('no attribute "snippet" found')

		navigator.clipboard.writeText(snippetToCopyToClipboard).then(function () {
			console.log('Async: Copying to clipboard was successful!');
		}, function (err) {
			console.error('Async: Could not copy text: ', err);
		})

		$('#tooltip').each(function (idx, elem) {
			$(elem).remove()
		})

		var $toolTip = $('<div></div>')
		$toolTip.attr('id', 'tooltip')

		$toolTip.attr('style', `position: absolute; left: ${e.pageX + 20}px; top: ${e.pageY - 25}px; z-index: 100000; width: auto; height: auto; text-align: center; padding: 0.5rem; border: 1px solid var(--main-text-color); border-radius: 5px; color: var(--main-text-color); background-color: var(--main-bg-color);`)
		$toolTip.html(`Snippet&nbsp;copied:&nbsp;<span><b>${snippetToCopyToClipboard}</b></span>`)

		$('body').append($toolTip)
		setTimeout(function () {
			$toolTip.remove()
		}, 2000)

		e.preventDefault()
	});



})
