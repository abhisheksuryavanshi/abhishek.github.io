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
console.log("hello");
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

console.log("bye");

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomFromArray() {
    var colors = ["#e4e5eb", "#ed8805", "#302e2c"];
    var seed = Math.floor(Math.random() * colors.length);
    return colors[seed];
}

var canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var i, j;
var flag = false;
var height = 0;

class Circle {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        console.log(
            "x = " + this.x + "radius = " + this.radius + "dx = " + this.dx
        );
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, flag);
        flag = !flag;
        c.strokeStyle = "black";
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        if (
            this.x + this.radius >= window.innerWidth ||
            this.x - this.radius <= 0
        ) {
            this.dx = -1 * this.dx;
        }
        if (
            this.y + this.radius >= window.innerHeight ||
            this.y - this.radius <= 0
        ) {
            this.dy = -1 * this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

var circleArray = [];
var num_circles = 100;
var speed_factor = 2;
for (i = 0; i < num_circles; i++) {
    var r = 15;
    var x = Math.random() * (innerWidth - r);
    while (x - r <= 0) {
        x = Math.random() * (innerWidth - r);
    }
    var y = Math.random() * (innerHeight - r);
    while (y - r <= 0) {
        y = Math.random() * (innerHeight - r);
    }
    var dx = (Math.random() - 0.5) * speed_factor;
    var dy = (Math.random() - 0.5) * speed_factor;
    circleArray.push(new Circle(x, y, dx, dy, r, getRandomColor()));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (i = 0; i < num_circles; i++) {
        circleArray[i].update();
    }
}

animate();
