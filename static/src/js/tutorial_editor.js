(function() {
    'use strict';
    var website = openerp.website;
    website.openerp_website = {};
    // ^^ wraps custom functions in the editor file

    website.snippet.options.snippet_testimonial_options = website.snippet.Option.extend({
        on_focus: function() {
            alert("On focus!");
        }
    })
})();




// JS methods you can use to trigger custom function:
// start : Fires when the publisher selects the snippet for the first time
//        in an editing session or when the snippet is drag-dropped into the page
// on_focus : Fires each time the snippet is selected by the user or when the
//            snippet is drag-dropped into the page.
// on_blur : This event occurs when a snippet loses focus.
// on_clone : Fires just after a snippet is duplicated. A new js variable is
//            created ($clone) containing the cloned element.
// on_remove : It occurs just before the snippet is removed.
// drop_and_build_snippet : Fires just after the snippet is drag and
//                        dropped into a drop zone. When this event is triggered,
//                        the content is already inserted in the page.
// clean_for_save : It triggers before the publisher saves the page.
