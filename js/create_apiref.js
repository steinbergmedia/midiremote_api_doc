
jQuery(function () {

	Object.values($('a.apiref')).forEach(elem => {

		var id = (elem.hash || '').replace(/#([a-zA-Z0-9_]+)/, (match, p1) => {
			return p1
		})

		if(!id)
			return

		$(elem).removeAttr('href')
		$(elem).data('link-id', id)
		$(elem).on('mousedown', function () {

			history.pushState({}, 'State')

			var id = $(this).data('link-id')
			var $main_header = $('#' + id)
			var $main_container = $('body')
			
			var nextScrollTop = $main_header.offset().top
	
			var scrollTopDiff = Math.abs(nextScrollTop - $main_container.scrollTop())
			
			if(scrollTopDiff < 1.0)
				return
	
			var animationTime = 15 * Math.sqrt(1000 * scrollTopDiff / 1000)
			animationTime = Math.min(animationTime, 700)
			animationTime = Math.max(animationTime, 200)

			var $stickyHeader = $('.main_sticky_header')
			var isVisibleStickyHeader = $stickyHeader.length === 1 && $stickyHeader.css('display') !== 'none'
			var header_height = $main_header.height()
			var jumpOffset = header_height - 30
			
			if(isVisibleStickyHeader) {
				var stickyHeaderHeight = $stickyHeader.height()
				jumpOffset += stickyHeaderHeight - 50
			}
			
			$main_container[0].scrollTop = nextScrollTop + jumpOffset

		})

	})


})
