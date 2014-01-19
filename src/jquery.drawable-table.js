/*
 * The MIT License (MIT)

Copyright (c) 2014 Tomoya Tanaka

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
(function($) {
    $.fn.drawableTable = function(options) {
        var settings = $.extend({}, $.fn.drawableTable.defaults, options);
        return this.each(function() {
            var $table = $(this);
            $table.data('IS_DRAWING', false);

            var start = function() {
                $(this).data('IS_DRAWING', true);
            };
            var end = function() {
                $(this).data('IS_DRAWING', false);
            };
            var draw = function() {
                if ($table.data('IS_DRAWING')) {
                    settings.draw($(this));
                }
            };
            $table.mousedown(start).mouseup(end).mouseleave(end);
            $table.find("td").mouseover(draw).click(function(){
                settings.draw($(this));
            });
        });
    };

    $.fn.drawableTable.defaults = {
        draw: function($td) {
            $td.addClass("drawn");
        }
    };
})(jQuery);