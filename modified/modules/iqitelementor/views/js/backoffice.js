(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var iqitElementorButton;

$(document).ready(function () {

    iqitElementorButton = (function () {

        var $wrapperCms = $('#cms_form').find('.form-wrapper').first(),
            $wrapperProduct = $('#features'),
            $wrapperBlog = $('#elementor-button-blog-wrapper'),
            $btnTemplate = $('#tmpl-btn-edit-with-elementor'),
            $btnTemplateProduct = $('#tmpl-btn-edit-with-elementor-product'),
            $btnTemplateBlog = $('#tmpl-btn-edit-with-elementor-blog');

        function init() {
            $wrapperCms.prepend($btnTemplate.html());
            $wrapperProduct.prepend($btnTemplateProduct.html());
            $wrapperBlog.prepend($btnTemplateBlog.html());


            if (onlyElementor) {
                if (elementorPageType == 'cms' || elementorPageType == 'blog') {
                    $("[id^=content_]").first().parents('.form-group').last().remove();
                }
            }

        }

        return {init: init};

    })();

    iqitElementorButton.init();


});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ2aWV3cy9fZGV2L2pzL2JhY2tvZmZpY2UvYmFja29mZmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgaXFpdEVsZW1lbnRvckJ1dHRvbjtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgaXFpdEVsZW1lbnRvckJ1dHRvbiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyICR3cmFwcGVyQ21zID0gJCgnI2Ntc19mb3JtJykuZmluZCgnLmZvcm0td3JhcHBlcicpLmZpcnN0KCksXG4gICAgICAgICAgICAkd3JhcHBlclByb2R1Y3QgPSAkKCcjZmVhdHVyZXMnKSxcbiAgICAgICAgICAgICR3cmFwcGVyQmxvZyA9ICQoJyNlbGVtZW50b3ItYnV0dG9uLWJsb2ctd3JhcHBlcicpLFxuICAgICAgICAgICAgJGJ0blRlbXBsYXRlID0gJCgnI3RtcGwtYnRuLWVkaXQtd2l0aC1lbGVtZW50b3InKSxcbiAgICAgICAgICAgICRidG5UZW1wbGF0ZVByb2R1Y3QgPSAkKCcjdG1wbC1idG4tZWRpdC13aXRoLWVsZW1lbnRvci1wcm9kdWN0JyksXG4gICAgICAgICAgICAkYnRuVGVtcGxhdGVCbG9nID0gJCgnI3RtcGwtYnRuLWVkaXQtd2l0aC1lbGVtZW50b3ItYmxvZycpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgICAgICAkd3JhcHBlckNtcy5wcmVwZW5kKCRidG5UZW1wbGF0ZS5odG1sKCkpO1xuICAgICAgICAgICAgJHdyYXBwZXJQcm9kdWN0LnByZXBlbmQoJGJ0blRlbXBsYXRlUHJvZHVjdC5odG1sKCkpO1xuICAgICAgICAgICAgJHdyYXBwZXJCbG9nLnByZXBlbmQoJGJ0blRlbXBsYXRlQmxvZy5odG1sKCkpO1xuXG5cbiAgICAgICAgICAgIGlmIChvbmx5RWxlbWVudG9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRvclBhZ2VUeXBlID09ICdjbXMnIHx8IGVsZW1lbnRvclBhZ2VUeXBlID09ICdibG9nJykge1xuICAgICAgICAgICAgICAgICAgICAkKFwiW2lkXj1jb250ZW50X11cIikuZmlyc3QoKS5wYXJlbnRzKCcuZm9ybS1ncm91cCcpLmxhc3QoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7aW5pdDogaW5pdH07XG5cbiAgICB9KSgpO1xuXG4gICAgaXFpdEVsZW1lbnRvckJ1dHRvbi5pbml0KCk7XG5cblxufSk7XG4iXX0=
