
function makePrimeHeader(primeHeader) {

	var headerIndex = $('.main_container > #home, .main_container > h1').index(primeHeader)

	var headerID = $(primeHeader).attr('id')

	var $tocPrimeHeader = $('<div />')
	$tocPrimeHeader.addClass('toc_header')
	$tocPrimeHeader.addClass('id_' + headerID)
	$tocPrimeHeader.data('id', headerID)

	var linkElem = $('<a />')
	linkElem.html(primeHeader.innerHTML)
	linkElem.data('id', headerID)

	linkElem.mousedown(function() {
		jumpToHeader(this)
	})

	

	$tocPrimeHeader.append(linkElem)

	return $tocPrimeHeader
}

function getJumpOffset(headerID) {
	var $header = $('#' + headerID)
	var $stickyHeader = $('.main_sticky_header')
	var isVisibleStickyHeader = $stickyHeader.length === 1 && $stickyHeader.css('display') !== 'none'
	var header_height = $header.height()
	var jumpOffset = header_height - 15
	
	if(isVisibleStickyHeader) {
		var stickyHeaderHeight = $stickyHeader.height()
		jumpOffset += stickyHeaderHeight + 15
	}

	return jumpOffset
}

function jumpToHeader(elem) {
	history.pushState({}, 'State')

	var id = $(elem).data('id')
	var $main_header = $('#' + id)
	var $main_container = $('body')
	
	var nextScrollTop = $main_header.offset().top

	var scrollTopDiff = Math.abs(nextScrollTop - $main_container.scrollTop())
	
	if(scrollTopDiff < 1.0)
		return

	var animationTime = 15 * Math.sqrt(1000 * scrollTopDiff / 1000)
	animationTime = Math.min(animationTime, 700)
	animationTime = Math.max(animationTime, 200)

	var jumpOffset = getJumpOffset(id)
	
	$main_container[0].scrollTop = nextScrollTop - jumpOffset

	// $main_container.animate({
	// 	scrollTop: nextScrollTop
	// }, animationTime);
}

function makeSecondaryHeader($primeHeader, $sectionElements, secondaryHeader) {
	
	var headerIndex = $sectionElements.filter('h2').index(secondaryHeader)

	var elem = $('<a />')
	elem.addClass('toc_header_secondary')
	elem.text(secondaryHeader.innerHTML)

	var id = $(secondaryHeader).attr('id')
	elem.data('id', id)

	elem.addClass('id_' + id)

	if($(secondaryHeader).hasClass('apiref_type_abstract'))
		elem.addClass('toc_type_abstract')

	elem.mousedown(function() {
		jumpToHeader(this)
	})

	return elem
}

$(document).ready(function () {

	var toc_container = $('.toc_container')
	var main_container = $('.main_container')

	main_container.append($('<div />').addClass('main_additional_height'))
	main_container.prepend($('<div />').addClass('main_sticky_header'))

	$('.main_container > #home, .main_container h1').each(function() {
		var $sectionElements = $(this).nextUntil('h1')

		var $primeHeader = makePrimeHeader(this)

		toc_container.append($primeHeader)

		var $secondaryHeaders = $sectionElements.filter('h2')

		if($secondaryHeaders.length === 0)
			return

		var $secondaryHeaderSection = $('<div class="toc_header_secondary_section" />')

		$primeHeader.append($secondaryHeaderSection)

		$secondaryHeaders.each(function() {
			var $secondaryHeader = makeSecondaryHeader($primeHeader, $sectionElements, this)
			$secondaryHeaderSection.append($secondaryHeader)
		})
	})

	function updateAdditionalHeight() {
		var main_container = $('body')[0]
		var last_header = $('.main_container').children('.home, h1, h2').last()[0]
		var elemAddHeight = $('.main_additional_height')[0]

		var headerTop = last_header.offsetTop;
		var mainHeight = main_container.scrollHeight - elemAddHeight.offsetHeight
		var mainScrollTop = main_container.scrollTop

		var maxPossibleViewHeight = mainHeight - headerTop

		var viewHeight = window.innerHeight;

		var additionalMainHeight = maxPossibleViewHeight < viewHeight ? viewHeight - maxPossibleViewHeight : 0

		$('.main_additional_height').css('height', additionalMainHeight)
	}

	$(window).resize(function() {
		updateAdditionalHeight()
	})

	updateAdditionalHeight()

	var $body = $('body')

	function updateOnScroll() {
		var viewHeight = window.innerHeight;
		var mainScrollTop = window.scrollTop
		var mainScrollHeight = window.scrollTop

		window.localStorage.setItem('mainScrollTop', mainScrollTop)
		
		$('.main_container > #home, .main_container h1').filter(function() {
			var mainScrollTop = $('body')[0].scrollTop
			var viewHeight = window.innerHeight
			var mainScrollBottom = mainScrollTop + viewHeight
			var headerTop = this.offsetTop
			var headerHeight = $(this).height()
			var headerBottom = headerTop + headerHeight

			var isVisible = headerBottom >= mainScrollTop && headerTop < mainScrollBottom

			var mainViewVCenter = mainScrollTop + (mainScrollBottom - mainScrollTop) / 2
			var headerVCenter = headerTop + (headerBottom - headerTop) / 2

			var id = $(this).attr('id')
			var tocHeader = $('.toc_container .id_' + id)

			tocHeader.data('inViewPort', isVisible)
			tocHeader.data('viewHeight', viewHeight)
			tocHeader.data('mainViewVCenter', mainViewVCenter)
			tocHeader.data('headerVCenter', headerVCenter)

			$(this).nextUntil('h1').filter('h2').each(function() {
				
				var mainScrollTop = $('body')[0].scrollTop
				var viewHeight = window.innerHeight
				var mainScrollBottom = mainScrollTop + viewHeight
				var headerTop = this.offsetTop
				var headerHeight = $(this).height()
				var headerBottom = headerTop + headerHeight

				var isVisible = headerBottom >= mainScrollTop && headerTop < mainScrollBottom

				var mainViewVCenter = mainScrollTop + (mainScrollBottom - mainScrollTop) / 2
				var headerVCenter = headerTop + (headerBottom - headerTop) / 2

				var id = $(this).attr('id')
				var tocHeader = $('.toc_container .id_' + id)

				tocHeader.data('inViewPort', isVisible)
				tocHeader.data('viewHeight', viewHeight)
				tocHeader.data('mainViewVCenter', mainViewVCenter)
				tocHeader.data('headerVCenter', headerVCenter)
				
			})

			return isVisible
		})

		var $toc_container = $('.toc_container')
		$toc_container.data('header_distances', {})

		function setupPositionData($container, $item) {
			
			var id = $item.data('id')
			var header_distances = $container.data('header_distances')
			

			var inViewPort = $item.data('inViewPort')
			var viewHeight = $item.data('viewHeight')
			var mainViewVCenter = $item.data('mainViewVCenter') - 2 * viewHeight / 5
			var headerVCenter = $item.data('headerVCenter')

			header_distances[id] = Math.abs(headerVCenter - mainViewVCenter)

			$container.data('header_distances', header_distances)

			if(inViewPort)
				$item.addClass('toc_header_in_viewport')
			else
				$item.removeClass('toc_header_in_viewport')
		}

		$toc_container.children('.toc_header').each(function() {
			var $this = $(this)
			var $toc_container = $('.toc_container')

			setupPositionData($toc_container, $this)

			$this.children('.toc_header_secondary_section').each(function() {
				var $secondarySection = $(this)

				$secondarySection.data('header_distances', {})

				$secondarySection.children('.toc_header_secondary').each(function() {
					var $this = $(this)
					var $container = $this.parent()
					setupPositionData($container, $this)
				})
				
			})
		})

		var header_distances = $toc_container.data('header_distances')

		var minDistance = 10000000
		var minDistanceKey = undefined
		for(var key in header_distances) {
			var distance = header_distances[key]
			if(minDistance > distance) {
				minDistance = distance
				minDistanceKey = key
			}

			$('.toc_container .id_' + key).removeClass('toc_header_highlighted')
			$('.toc_container .id_' + key).addClass('toc_header_normal')

			$('#' + key).removeClass('highlighted')
			$('#' + key).addClass('normal')
		}

		function getHiddenYOffset(headerElem) {
			var headerElemTop = headerElem.offsetTop
			var headerElemHeight = headerElem.offsetHeight
			var headerElemBottom = headerElemTop + headerElemHeight
			var headerElemVCenter = (headerElemTop + headerElemBottom) / 2
			var bodyElem = $('body')[0]
			var bodyElemScrollTop = bodyElem.scrollTop
			var windowHeight = window.innerHeight
			var viewPortTop = bodyElemScrollTop
			var viewPortBottom = viewPortTop + windowHeight

			var jumpOffset = getJumpOffset($(headerElem).attr('id')) + 50

			var res = headerElemVCenter - viewPortBottom + windowHeight - headerElemHeight - jumpOffset
			return res
		}

		var $minDistanceHeader = $('#' + minDistanceKey)

		while($minDistanceHeader.length > 0 && getHiddenYOffset($minDistanceHeader[0]) > 0) {
			var $prevHeader = $($minDistanceHeader.prevUntil('h1').last().prev())
			if($prevHeader.length === 0)
				break
			$minDistanceHeader = $prevHeader
			minDistanceKey = $minDistanceHeader.attr('id')
		}

		var tocHeader = $('.toc_container .id_' + minDistanceKey)
		tocHeader.addClass('toc_header_highlighted')
		tocHeader.removeClass('toc_header_normal')
		tocHeader.data('id', minDistanceKey)

		$minDistanceHeader.addClass('highlighted')
		$minDistanceHeader.removeClass('normal')

		tocHeader.children('.toc_header_secondary_section').each(function() {
			var $secondarySection = $(this)

			var header_distances = $secondarySection.data('header_distances')
			
			var minDistance = 10000000
			var minDistanceKey = undefined
			for(var key in header_distances) {
				var distance = header_distances[key]
				if(minDistance > distance) {
					minDistance = distance
					minDistanceKey = key
				}
	
				$secondarySection.children('.id_' + key).removeClass('toc_header_highlighted')
				$secondarySection.children('.id_' + key).addClass('toc_header_normal')
			}

			function getHiddenYOffset(headerElem) {
				var headerElemTop = headerElem.offsetTop
				var headerElemHeight = headerElem.offsetHeight
				var headerElemBottom = headerElemTop + headerElemHeight
				var headerElemVCenter = (headerElemTop + headerElemBottom) / 2
				var bodyElem = $('body')[0]
				var bodyElemScrollTop = bodyElem.scrollTop
				var bodyElemHeight = bodyElem.offsetHeight
				var windowHeight = window.innerHeight
				var viewPortTop = bodyElemScrollTop
				var viewPortBottom = viewPortTop + windowHeight
				var viewPortVCenter = (viewPortTop + viewPortBottom) / 2

				var jumpOffset = getJumpOffset($(headerElem).attr('id')) + 50
	
				var res = headerElemVCenter - viewPortBottom + windowHeight - jumpOffset
				return res
			}
	
			var $minDistanceHeader = $('#' + minDistanceKey)
	
			while($minDistanceHeader.length > 0 && getHiddenYOffset($minDistanceHeader[0]) > 0) {
				var $prevHeader = $($minDistanceHeader.prevUntil('h2').last().prev())
				if($prevHeader.length === 0)
					break
				$minDistanceHeader = $prevHeader
				minDistanceKey = $minDistanceHeader.attr('id')
			}

			var tocHeader = $('.toc_container .id_' + minDistanceKey)
			tocHeader.data('id', minDistanceKey)
			tocHeader.addClass('toc_header_highlighted')
			tocHeader.removeClass('toc_header_normal')
		})

		$toc_container.children('.toc_header.toc_header_highlighted').each(function() {
			$secSec = $(this).children('.toc_header_secondary_section')
			if($secSec.length === 0)
				return
	
			secSec = $secSec[0]

			var secSecTop = secSec.offsetTop;

			var secSecOriginalHeight = $secSec.data('originalHeight')
			if(secSecOriginalHeight === undefined || secSecOriginalHeight === null) {
				secSecOriginalHeight = secSec.offsetHeight
				$secSec.data('originalHeight', secSecOriginalHeight)
			}

			var windowHeight = window.innerHeight

			$(secSec).css('height', Math.min(secSecOriginalHeight, windowHeight - secSecTop))
			
			$secSec.children('.toc_header_highlighted').each(function() {
				var $elem = $(this)
				var $secSec = $elem.parent()
				var secSec = $secSec[0]

				var elemTop = this.offsetTop
				var elemHeight = this.offsetHeight
				var elemBottom = elemTop + elemHeight

				var elemVCenter = (elemTop + elemBottom) / 2
				
				
				var secSecTop = secSec.offsetTop;
				var secSecHeight = secSec.offsetHeight;
				var secSecBottom = secSecTop + secSecHeight

				var secSecScrollThreshold = secSecHeight / 5.
				var secSecVFirst = secSecTop + secSecScrollThreshold
				var secSecVSecond = secSecBottom - secSecScrollThreshold

				if(elemVCenter <= (secSecVFirst + secSec.scrollTop))
					secSec.scrollTop = Math.max(elemVCenter - secSecVFirst, 0)

				else if(elemVCenter >= (secSecVSecond + secSec.scrollTop))
					secSec.scrollTop = Math.max(elemVCenter - secSecVSecond, 0)
			})
		})

		function makeStickyHero() {
			var $hero = $('.main_container > .hero')
			var $stickyHero = $('<div class="hero">' + Object.values($hero.children()).map(function(e) { return e.outerHTML === undefined ? '' : e.outerHTML; }).join('') + '</div>')
			$stickyHero.data('id', 'home')
			
			$stickyHero.mousedown(function() {
				jumpToHeader(this)
			})

			return $stickyHero
		}

		function updateStickyHeader() {

			var id = tocHeader.data('id')
			var $mainContainerHeader = $('#' + id)

			var headerTitle = $mainContainerHeader.html()

			var toc_subHeader = tocHeader.children('.toc_header_secondary_section').children('.toc_header_highlighted')
			var subHeaderTitle = toc_subHeader.html()
	
			var $stickyHeader = $('.main_sticky_header')
			$stickyHeader.children().remove()

			$stickyHero = makeStickyHero()

			if(tocHeader.data('id') === 'home') {
				$stickyHeader.append($stickyHero)
				return
			}

			var $stickyTitle = $('<span>' + headerTitle + '</span>')
			$stickyTitle.attr('class', $mainContainerHeader.attr('class'))
			if(id !== 'home')
				$stickyTitle.addClass('h1')
			$stickyTitle.data('id', tocHeader.data('id'))
	
			$stickyTitle.mousedown(function() {
				jumpToHeader(this)
			})

			$stickyHeader.append($stickyTitle)


			if(subHeaderTitle) {
				var $stickySubTitle = $('<span class="h2">' + subHeaderTitle + '</span>')
				$stickySubTitle.data('id', toc_subHeader.data('id'))
				$stickySubTitle.mousedown(function() {
					jumpToHeader(this)
				})
	
				$stickyHeader.append($('<span class="hyphen"> - </span>'))
	
				$stickyHeader.append($stickySubTitle)
			}

			$stickyHeader.append($stickyHero)
		}

		updateStickyHeader()

		
	}

	$(window).data('scrollCount', 1)
	$(window).data('updateCount', 0)

	setInterval(function() {
		var updateCount = $(window).data('updateCount')
		var scrollCount = $(window).data('scrollCount')
		if(updateCount < scrollCount) {
			$(window).data('updateCount', scrollCount)
			updateOnScroll()
		}
	}, 100)

	function incrScrollCount() {
		var scrollCount = $(window).data('scrollCount')
		$(window).data('scrollCount', scrollCount + 1)
	}

	$(window).on('scroll', incrScrollCount)
	$(window).on('resize', incrScrollCount)

	var storedMainScrollTop = window.localStorage.getItem('mainScrollTop')

	if(storedMainScrollTop !== null) {
		window.scrollTop = storedMainScrollTop
	}

	updateOnScroll()
})
