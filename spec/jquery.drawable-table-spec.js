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
describe("jquery.drawableTable", function() {
    var $table;
    beforeEach(function() {
        $table = $("<table><tr><td/><td/></tr><tr><td/><td/></tr></table>");
    });
    it("should draw with drag.", function() {
        $table.drawableTable();
        var $first = $table.find("td:first-child");
        var $last = $table.find("td:last-child");
        expect($first.hasClass("drawn")).toBe(false);
        expect($last.hasClass("drawn")).toBe(false);

        $table.mousedown();
        $first.mouseover();
        expect($first.hasClass("drawn")).toBe(true);
        expect($last.hasClass("drawn")).toBe(false);
    });
    it("should not draw without drag.", function() {
        $table.drawableTable();
        expect($table.data("IS_DRAWING")).toBe(false);
        var $first = $table.find("td:first-child");
        expect($table.data("IS_DRAWING")).toBe(false);

        $first.mouseover();
        expect($table.data("IS_DRAWING")).toBe(false);
        expect($first.hasClass("drawn")).toBe(false);
    });
    it("should avoid to draw with mouseup.", function() {
        $table.drawableTable();
        var $first = $table.find("td:first-child");
        var $last = $table.find("td:last-child");
        expect($first.hasClass("drawn")).toBe(false);
        expect($last.hasClass("drawn")).toBe(false);

        $table.mousedown();
        $first.mouseover();
        expect($first.hasClass("drawn")).toBe(true);
        expect($last.hasClass("drawn")).toBe(false);

        $table.mouseup();
        $last.mouseover();
        expect($first.hasClass("drawn")).toBe(true);
        expect($last.hasClass("drawn")).toBe(false);
    });
});
