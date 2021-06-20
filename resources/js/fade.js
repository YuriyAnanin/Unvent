$(function() {

    var $window = $(window);

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var viewportTop = $window.scrollTop(),
            viewportBottom = viewportTop + $window.height();

        // Showed...
        $(".js_scroll_animate:not(.animated)").each(function () {
            var $this     = $(this),
                userOffset = $this.data('viewportOffset'),
                win_height_padded = $window.height() / 100 * userOffset,
                startAnimationTop   = viewportTop + win_height_padded,
                startAnimationBottom = viewportBottom - win_height_padded,
                offsetTop       =  $this.offset().top,
                offsetBottom    =  offsetTop + $this.height();

            if ((startAnimationTop < offsetBottom) && (startAnimationTop > offsetTop)
                || (startAnimationBottom > offsetTop) && (startAnimationBottom < offsetBottom)) {
                if ($this.data('timeout')) {
                    window.setTimeout(function(){
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'),10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
    }

    revealOnScroll();
});
