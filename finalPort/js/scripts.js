/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function ($) {
    // Remove no-js class
    $("html").removeClass("no-js");

    // Animate to section when nav is clicked
    $("header a").click(function (e) {
        // Treat as normal link if no-scroll class
        if ($(this).hasClass("no-scroll")) return;

        e.preventDefault();
        var heading = $(this).attr("href");
        var scrollDistance = $(heading).offset().top;

        $("html, body").animate(
            {
                scrollTop: scrollDistance + "px",
            },
            Math.abs(window.pageYOffset - $(heading).offset().top) / 1
        );

        // Hide the menu once clicked if mobile
        if ($("header").hasClass("active")) {
            $("header, body").removeClass("active");
        }
    });

    // Scroll to top
    $("#to-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            500
        );
    });

    // Scroll to first element
    $("#lead-down span").click(function () {
        var scrollDistance = $("#lead").next().offset().top;
        $("html, body").animate(
            {
                scrollTop: scrollDistance + "px",
            },
            500
        );
    });

    // Create timeline
    $("#experience-timeline").each(function () {
        $this = $(this); // Store reference to this
        $userContent = $this.children("div"); // user content

        // Create each timeline block
        $userContent.each(function () {
            $(this)
                .addClass("vtimeline-content")
                .wrap(
                    '<div class="vtimeline-point"><div class="vtimeline-block"></div></div>'
                );
        });

        // Add icons to each block
        $this.find(".vtimeline-point").each(function () {
            $(this).prepend(
                '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>'
            );
        });

        // Add dates to the timeline if exists
        $this.find(".vtimeline-content").each(function () {
            var date = $(this).data("date");
            if (date) {
                // Prepend if exists
                $(this)
                    .parent()
                    .prepend(
                        '<span class="vtimeline-date">' + date + "</span>"
                    );
            }
        });
    });

    // Open mobile menu
    $("#mobile-menu-open").click(function () {
        $("header, body").addClass("active");
    });

    // Close mobile menu
    $("#mobile-menu-close").click(function () {
        $("header, body").removeClass("active");
    });

    // Load additional projects
    $("#view-more-projects").click(function (e) {
        e.preventDefault();
        $(this).fadeOut(300, function () {
            $("#more-projects").fadeIn(300);
        });
    });
})(jQuery);

// $(document).ready(function () {
//     $("#switch").click(function () {
//         $("#content").animate(
//             { left: "+=100%", opacity: "0" },
//             1000,
//             "swing",
//             function () {
//                 $(this).remove();
//             }
//         );
//         // $("#box-one").slideDown();
//     });
// });

// $(document).ready(function () {
//     $("#switch").click(showSlide());
// });

var count = 0;

var contents = [""];
var bgimages = ["url('images/micro.jpg')", "url('images/ms.png')"];

var details = [
    {
        CompanyName: "Microsoft",
        Designation: "Software Developer",
        Description: "poghtkhotykh",
        Duration: "July 2020 - Present",
        bgImage: "url('images/microsoft.png')",
    },
    {
        CompanyName: "JP Morgan Chase & Co.",
        Designation: "Software Development Intern",
        Description: "asdasdawfw",
        Duration: "May 2019 - Jul 2019",
        bgImage: "url('images/jpmc.png')",
    },
];

function nextSlide() {
    count++;
    if (count >= bgimages.length) {
        count = 0;
    }
    document.getElementById("bgimage").style.backgroundImage =
        details[count].bgImage;
    content = document.getElementById("content");
    content.querySelector("#companyName").innerHTML =
        details[count].CompanyName;
    content.querySelector("#designation").innerHTML =
        details[count].Designation;
    content.querySelector("#duration").innerHTML = details[count].Duration;
    content.querySelector("#description").innerHTML =
        details[count].Description;
}

function prevSlide() {
    var slide = document.getElementById("bgimage");
    count--;
    if (count < 0) {
        count = bgimages.length - 1;
    }
    document.getElementById("bgimage").style.backgroundImage =
        details[count].bgImage;
    content = document.getElementById("content");
    content.querySelector("#companyName").innerHTML =
        details[count].CompanyName;
    content.querySelector("#designation").innerHTML =
        details[count].Designation;
    content.querySelector("#duration").innerHTML = details[count].Duration;
    content.querySelector("#description").innerHTML =
        details[count].Description;
}

// Load element data from json file!
