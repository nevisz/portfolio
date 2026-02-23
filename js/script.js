/* ----- SETTING UP INFO ----- */

// constants
const fe_display = {
    title: "- Front End -",
    img: ["../img/airbnb-project.png","Airbnb homepage replica using HTML and CSS (not responsive)"],
    img2: ["../img/madrid-de-metro-project.png","Article webpage using HTML and CSS (responsive, mobile first)"]
}
const gd_display = {
    title: "- Graphic Design -",
    img: ["../img/windsong_branding_poster.png","Poster for a hypothetical Taiwanese music festival, Windsong; designed in Illustrator"],
    img2: ["../img/windsong_branding_digital_story.png","Social media story for a hypothetical Taiwanese music festival, Windsong; designed in Illustrator"]
}
const games_display = {
    title: "- Games -",
    img: ["../img/wordle-project.png","Lenient Wordle simulation implemented in Java"],
}
const selected_color = "rgb(210, 207, 207)";
const hover_color = "rgb(237, 235, 235)";
const neutral_color = "whitesmoke";

// accounting 
let selected_button = "fe-button";

// preloading images
fe_img = new Image(); fe_img.src = fe_display.img[0];
fe_img2 = new Image(); fe_img2.src = fe_display.img2[0];
gd_img = new Image(); gd_img.src = gd_display.img[0];
gd_img2 = new Image(); gd_img2.src = gd_display.img2[0];
games_img = new Image(); games_img.src = games_display.img[0];

/* ----- JQUERY BUTTONS ----- */

$(document).ready(function() {

    $("button").mouseover(function(){
        if ($(this).attr("id") != selected_button) {
            $(this).css("background-color",hover_color);
        }
    });
    $("button").mouseout(function(){
        if ($(this).attr("id") != selected_button) {
            $(this).css("background-color",neutral_color);
        }
    });
    $("#fe-button").click(function(){
        selected_button = $(this).attr("id");
        $(this).css("background-color",selected_color);
        $("#gd-button").css("background-color",neutral_color);
        $("#games-button").css("background-color",neutral_color);

        $("#projects h2").text(fe_display.title);
        $(".img-container figure:nth-child(1) img").attr("src",fe_img.src);
        $(".img-container figure:nth-child(1) figcaption").text(fe_display.img[1]);
        $(".img-container figure:nth-child(2) img").attr("src",fe_img2.src);
        $(".img-container figure:nth-child(2) figcaption").text(fe_display.img2[1]);

        recalibratePortfolioDisplay(selected_button);
    });
    $("#gd-button").click(function(){
        selected_button = $(this).attr("id");
        $(this).css("background-color",selected_color);
        $("#fe-button").css("background-color",neutral_color);
        $("#games-button").css("background-color",neutral_color);

        $("#projects h2").text(gd_display.title);
        $(".img-container figure:nth-child(1) img").attr("src",gd_img.src);
        $(".img-container figure:nth-child(1) figcaption").text(gd_display.img[1]);
        $(".img-container figure:nth-child(2) img").attr("src",gd_img2.src);
        $(".img-container figure:nth-child(2) figcaption").text(gd_display.img2[1]);

        recalibratePortfolioDisplay(selected_button);
    });
    $("#games-button").click(function(){
        selected_button = $(this).attr("id");
        $(this).css("background-color",selected_color);
        $("#fe-button").css("background-color",neutral_color);
        $("#gd-button").css("background-color",neutral_color);

        $("#projects h2").text(games_display.title);
        $(".img-container figure:nth-child(1) img").attr("src",games_img.src);
        $(".img-container figure:nth-child(1) figcaption").text(games_display.img[1]);

        recalibratePortfolioDisplay(selected_button);
    });
});

/* ----- HELPER FUNCTIONS ----- */

function countHiddenImgs() {
    let count = $(".img-container figure").filter(function() {
                    return $(this).css("display") == "none";
                }).length;
    return count;
}

// Determining which imgs to hide/reveal based on which button is selected and 
// how many imgs are currently hidden
function recalibrateImgDisplay(selected_button) {
    let hiddenCount = countHiddenImgs();

    switch(selected_button) {
        case "fe-button":
            if (hiddenCount == 0) {
                $(".img-container figure:nth-child(3)").css("display","none");
                $(".img-container figure:nth-child(4)").css("display","none");
            }
            else if (hiddenCount == 3) {
                $(".img-container figure:nth-child(2)").css("display","block");
            }
            break;
        case "gd-button":
            if (hiddenCount == 2) {
                $(".img-container figure:nth-child(3)").css("display","block");
                $(".img-container figure:nth-child(4)").css("display","block");
                }
            if (hiddenCount == 3) {
                $(".img-container figure:nth-child(2)").css("display","block");
                $(".img-container figure:nth-child(3)").css("display","block");
                $(".img-container figure:nth-child(4)").css("display","block");
            }
            break;
        case "games-button":
            if (hiddenCount == 0) {
                $(".img-container figure:nth-child(2)").css("display","none");
                $(".img-container figure:nth-child(3)").css("display","none");
                $(".img-container figure:nth-child(4)").css("display","none");
            }
            else if (hiddenCount == 2) {
                $(".img-container figure:nth-child(2)").css("display","none");
            }
            break;
        default: break;
    }
}

function applyOrientationClasses() {
  $(".img-container figure").each(function () {
    const img = $(this).find("img")[0];

    if (!img) return;

    function setClass() {
      $(this).removeClass("landscape portrait square");

      if (img.naturalWidth > img.naturalHeight) {
        $(this).addClass("landscape");
      } else if (img.naturalWidth < img.naturalHeight) {
        $(this).addClass("portrait");
      } else {
        $(this).addClass("square");
      }
    }

    if (img.complete) {
      setClass.call(this);
    } else {
      img.onload = () => setClass.call(this);
    }
  });
}

function recalibratePortfolioDisplay(selected_button) {
    recalibrateImgDisplay(selected_button);
    applyOrientationClasses();
}