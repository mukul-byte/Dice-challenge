var n, m;

function refresh() {
    n = Math.random();
    n = Math.floor(n * 6) + 1;
    var randimg1 = "images/dice" + n + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randimg1);

    m = Math.random();
    m = Math.floor(m * 6) + 1;
    var randimg2 = "images/dice" + m + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randimg2);


if (n == m) {
        var heading = document.querySelectorAll("h1")[0];
        heading.innerHTML = "Draw!";
    } else if (n > m) {
        var heading = document.querySelectorAll("h1")[0];
        heading.innerHTML = "🚩Player 1 wins!";
    } else {
        var heading = document.querySelectorAll("h1")[0];
        heading.innerHTML = "Player 2 wins!🚩";
    }
}


document.querySelector(".butn").addEventListener("click", refresh);
