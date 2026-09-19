//-------------------------------
/* ----- SETTING UP INFO ----- */
//-------------------------------

// constants
const selected_color = "rgb(228, 228, 228)";
const hover_color = "rgb(238, 238, 238)";
const neutral_color = "whitesmoke";

// accounting 
let selected_project_category_button = "gd-button";

//------------------------------
/* ----- JQUERY BUTTONS ----- */
//------------------------------

$(document).ready(function() {

    // For Nav Bar buttons
    let page = window.location.pathname.split("/").pop();
    $("nav a").css("text-decoration","none");

    switch(page) {
        case "":
            $("nav a[href='index.html']").css("text-decoration","underline");
            break;
        case "projects":
            $("nav a[href='projects.html']").css("text-decoration","underline");
            break;
        default: break;
    }

    $(".filter-button").click(function() {

        // Get the filter that was clicked
        let filter = $(this).data("filter");

        // Turn every button off
        $(".filter-button").removeClass("active");

        // Turn the clicked button on
        $(this).addClass("active");

        // Show/hide projects
        $(".project-card").each(function() {

            // "All" shows every project
            if (filter === "all") {
                $(this).show();
                return;
            }

            // Look at all tags belonging to this project
            let hasTag = false;

            $(this).find(".project-tags span").each(function() {

                if ($(this).text().trim() === filter) {
                    hasTag = true;
                }

            });

            // Show project if it has the selected tag
            if (hasTag) {
                $(this).show();
            } else {
                $(this).hide();
            }

        });

    });
});