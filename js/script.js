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

    // For Project Category Buttons

    recalibratePortfolioDisplay(selected_project_category_button);

    $("button").mouseover(function(){
        if ($(this).attr("id") != selected_project_category_button) {
            $(this).css("background-color",hover_color);
        }
    });
    $("button").mouseout(function(){
        if ($(this).attr("id") != selected_project_category_button) {
            $(this).css("background-color",neutral_color);
        }
    });
    $("#gd-button").click(function(){
        selected_project_category_button = $(this).attr("id");
        $(this).css("background-color",selected_color);
        $("#games-button").css("background-color",neutral_color);

        recalibratePortfolioDisplay(selected_project_category_button);
    });
    $("#games-button").click(function(){
        selected_project_category_button = $(this).attr("id");
        $(this).css("background-color",selected_color);
        $("#gd-button").css("background-color",neutral_color);

        recalibratePortfolioDisplay(selected_project_category_button);
    });
    $(".accordion-item-header").click(function() {
        const $currentlyActive = $(".accordion-item-header.active");

        if ($currentlyActive.length && !$currentlyActive.is($(this))) {
            $currentlyActive.removeClass("active");
            $currentlyActive.next().css("max-height", 0);
        }

        $(this).toggleClass("active");
  
        const $accordionItemBody = $(this).next();

        if ($(this).hasClass("active")) {
            $accordionItemBody.css("max-height", $accordionItemBody.prop("scrollHeight") + "px");
        } else {
            $accordionItemBody.css("max-height", 0);
        }
    });
});

//--------------------------------
/* ----- HELPER FUNCTIONS ----- */
//--------------------------------

function recalibratePortfolioDisplay(selected_project_category_button) {
    /*  let portfolio_imgs = $(".img-container figure");
    portfolio_imgs.hide(); */

    switch(selected_project_category_button) {
        case "gd-button":
            $("#projects h3").text("Graphic Design");

            $("#sago-po-accordion").show();
            $("#windsong-accordion").show();
            $("#wordle-accordion").hide();
            $("#yearbook-accordion").show();
            break;
        case "games-button":
            $("#projects h3").text("Games");
            
            $("#sago-po-accordion").hide();
            $("#windsong-accordion").hide();
            $("#wordle-accordion").show();
            $("#yearbook-accordion").hide();
            break;
        default: break;
    }
}