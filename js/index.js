const DEFAULT_LIMIT = 6;
var randomNews = [];
var recentNews = [];
var popularNews = [];
var recentArticles = [];
var articleStart = 0;
var scope = "none";
var landID = "1";

$(document).ready(function () {
    if (location.search != "") {
        var param1 = location.search.split('?')[0].split('&')[1];
        if (param1 !== undefined) {
            scope = location.search.split('?')[1].split('&')[0].split('=')[1];
        } else {
            scope = "none";
        }
        var param2 = location.search.split('?')[1].split('&')[1];
        if (param2 !== undefined) {
            landID = param2.split('=')[1];
        } else {
            landID = 2;
        }
    }
    var fd = new FormData();
    fd.append("limit", DEFAULT_LIMIT);
    fd.append("scope", scope);
    fd.append("land_id", landID);
    $.ajax({
        type: 'POST',
        url: PHP_URL + 'get-random-news-at-location.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            randomNews = JSON.parse(response);
            $("#bg-1").attr("src", randomNews[0]["img_path"]);
            $("#bg-2").attr("src", randomNews[1]["img_path"]);
            $("#bg-3").attr("src", randomNews[2]["img_path"]);
            $("#bg-4").attr("src", randomNews[3]["img_path"]);
            $("#bg-5").attr("src", randomNews[4]["img_path"]);
            $("#bg-6").attr("src", randomNews[5]["img_path"]);
            $('#random-news-1').html("<b>" + randomNews[0]["title"] + "</b>");
            $("#random-news-1-date").html(moment(randomNews[0]["date"]).format('MMM DD, YYYY'));
            $("#random-news-1-link").attr("href", "news/news.html?id="+randomNews[0]["id"]);
            $("#random-news-1-writer").html("<b>" + randomNews[0]["writer"] + "</b>");
            $("#random-news-1-viewers").html("<i>" + parseInt(randomNews[0]["viewers"]).toLocaleString() + "</i>");
            $("#random-news-1-comments").html("<i>" + parseInt(randomNews[0]["comments"]).toLocaleString() + "</i>");
            $('#random-news-2').html("<b>" + randomNews[1]["title"] + "</b>");
            $("#random-news-2-date").html(moment(randomNews[1]["date"]).format('MMM DD, YYYY'));
            $("#random-news-2-link").attr("href", "news/news.html?id="+randomNews[1]["id"]);
            $("#random-news-2-writer").html("<b>" + randomNews[1]["writer"] + "</b>");
            $("#random-news-2-viewers").html("<i>" + parseInt(randomNews[1]["viewers"]).toLocaleString() + "</i>");
            $("#random-news-2-comments").html("<i>" + parseInt(randomNews[1]["comments"]).toLocaleString() + "</i>");
            $('#random-news-3').html("<b>" + randomNews[2]["title"] + "</b>");
            $("#random-news-3-date").html(moment(randomNews[2]["date"]).format('MMM DD, YYYY'));
            $("#random-news-3-link").attr("href", "news/news.html?id="+randomNews[2]["id"]);
            $("#random-news-3-writer").html("<b>" + randomNews[2]["writer"] + "</b>");
            $("#random-news-3-viewers").html("<i>" + parseInt(randomNews[2]["viewers"]).toLocaleString() + "</i>");
            $("#random-news-3-comments").html("<i>" + parseInt(randomNews[2]["comments"]).toLocaleString() + "</i>");
            $('#random-news-4').html("<b>" + randomNews[3]["title"] + "</b>");
            $("#random-news-4-date").html(moment(randomNews[3]["date"]).format('MMM DD, YYYY'));
            $("#random-news-4-link").attr("href", "news/news.html?id="+randomNews[3]["id"]);
            $("#random-news-4-writer").html("<b>" + randomNews[3]["writer"] + "</b>");
            $("#random-news-4-viewers").html("<i>" + parseInt(randomNews[3]["viewers"]).toLocaleString() + "</i>");
            $("#random-news-4-comments").html("<i>" + parseInt(randomNews[3]["comments"]).toLocaleString() + "</i>");
            $('#random-news-5').html("<b>" + randomNews[4]["title"] + "</b>");
            $("#random-news-5-date").html(moment(randomNews[4]["date"]).format('MMM DD, YYYY'));
            $("#random-news-5-link").attr("href", "news/news.html?id="+randomNews[4]["id"]);
            $("#random-news-5-writer").html("<b>" + randomNews[4]["writer"] + "</b>");
            $("#random-news-5-viewers").html(parseInt(randomNews[4]["viewers"]).toLocaleString());
            $("#random-news-5-comments").html("<i>" + parseInt(randomNews[4]["comments"]).toLocaleString() + "</i>");
            $('#random-news-6').html("<b>" + randomNews[5]["title"] + "</b>");
            $("#random-news-6-date").html(moment(randomNews[5]["date"]).format('MMM DD, YYYY'));
            $("#random-news-6-link").attr("href", "news/news.html?id="+randomNews[5]["id"]);
            $("#random-news-6-writer").html("<b>" + randomNews[5]["writer"] + "</b>");
            $("#random-news-6-viewers").html("<i>" + parseInt(randomNews[5]["viewers"]).toLocaleString() + "</i>");
            $("#random-news-6-comments").html("<i>" + parseInt(randomNews[5]["comments"]).toLocaleString() + "</i>");
            $("#short-news-1").html("<b>"+randomNews[0]["title"]+"</b>");
            $("#short-news-2").html("<b>"+randomNews[1]["title"]+"</b>");
            $("#short-news-3").html("<b>"+randomNews[2]["title"]+"</b>");
            $("#short-news-4").html("<b>"+randomNews[3]["title"]+"</b>");
            $("#short-news-5").html("<b>"+randomNews[4]["title"]+"</b>");
            $("#short-news-6").html("<b>"+randomNews[5]["title"]+"</b>");
        }
    });
    $.ajax({
        type: 'POST',
        url: PHP_URL + 'get-recent-news.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            recentNews = JSON.parse(response);
            $("#recent-news-1-img").attr("src", recentNews[0]["img_path"]);
            $("#recent-news-1").html("<b>" + recentNews[0]["title"] + "</b>");
            $("#recent-news-1-name").html("<b>" + recentNews[0]["writer"] + "</b>,");
            $("#recent-news-1-date").html(moment(recentNews[0]["date"]).format('MMM DD, YYYY'));
            $("#recent-news-1-viewers").html(parseInt(recentNews[0]["viewers"]).toLocaleString());
            $("#recent-news-1-comments").html(parseInt(recentNews[0]["comments"]).toLocaleString());
            $("#recent-news-2-img").attr("src", recentNews[1]["img_path"]);
            $("#recent-news-2").html("<b>" + recentNews[1]["title"] + "</b>");
            $("#recent-news-2-name").html("<b>" + recentNews[1]["writer"] + "</b>,");
            $("#recent-news-2-date").html(moment(recentNews[1]["date"]).format('MMM DD, YYYY'));
            $("#recent-news-2-viewers").html(parseInt(recentNews[1]["viewers"]).toLocaleString());
            $("#recent-news-2-comments").html(parseInt(recentNews[1]["comments"]).toLocaleString());
            $("#recent-news-3-img").attr("src", recentNews[2]["img_path"]);
            $("#recent-news-3").html("<b>" + recentNews[2]["title"] + "</b>");
            $("#recent-news-3-name").html("<b>" + recentNews[2]["writer"] + "</b>,");
            $("#recent-news-3-date").html(moment(recentNews[2]["date"]).format('MMM DD, YYYY'));
            $("#recent-news-3-viewers").html(parseInt(recentNews[2]["viewers"]).toLocaleString());
            $("#recent-news-3-comments").html(parseInt(recentNews[2]["comments"]).toLocaleString());
            $("#recent-news-4-img").attr("src", recentNews[3]["img_path"]);
            $("#recent-news-4").html("<b>" + recentNews[3]["title"] + "</b>");
            $("#recent-news-4-name").html("<b>" + recentNews[3]["writer"] + "</b>,");
            $("#recent-news-4-date").html(moment(recentNews[3]["date"]).format('MMM DD, YYYY'));
            $("#recent-news-4-viewers").html(parseInt(recentNews[3]["viewers"]).toLocaleString());
            $("#recent-news-4-comments").html(parseInt(recentNews[3]["comments"]).toLocaleString());
            $("#recent-news-5-img").attr("src", recentNews[4]["img_path"]);
            $("#recent-news-5").html("<b>" + recentNews[4]["title"] + "</b>");
            $("#recent-news-5-name").html("<b>" + recentNews[4]["writer"] + "</b>,");
            $("#recent-news-5-date").html(moment(recentNews[4]["date"]).format('MMM DD, YYYY'));
            $("#recent-news-5-viewers").html(parseInt(recentNews[4]["viewers"]).toLocaleString());
            $("#recent-news-5-comments").html(parseInt(recentNews[4]["comments"]).toLocaleString());
            $("#recent-news-6-img").attr("src", recentNews[5]["img_path"]);
            $("#recent-news-6").html("<b>" + recentNews[5]["title"] + "</b>");
            $("#recent-news-6-name").html("<b>" + recentNews[5]["writer"] + "</b>,");
            $("#recent-news-6-date").html(moment(recentNews[5]["date"]).format('MMM DD, YYYY'));
            $("#recent-news-6-viewers").html(parseInt(recentNews[5]["viewers"]).toLocaleString());
            $("#recent-news-6-comments").html(parseInt(recentNews[5]["comments"]).toLocaleString());
        }
    });
    $.ajax({
        type: 'POST',
        url: PHP_URL + 'get-popular-news-at-location.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            popularNews = JSON.parse(response);
            $("#popular-news-1-img").attr("src", popularNews[0]["img_path"]);
            $("#popular-news-1").html("<b>" + popularNews[0]["title"] + "</b>");
            $("#popular-news-1-link").attr("href", "news/news.html?id="+popularNews[0]["id"]+"&scope=none");
            $("#popular-news-1-name").html("<b>" + popularNews[0]["writer"] + "</b>,");
            $("#popular-news-1-date").html(moment(popularNews[0]["date"]).format('MMM DD, YYYY'));
            $("#popular-news-1-viewers").html(parseInt(popularNews[0]["viewers"]).toLocaleString());
            $("#popular-news-1-comments").html(parseInt(popularNews[0]["comments"]).toLocaleString());
            $("#popular-news-2-img").attr("src", popularNews[1]["img_path"]);
            $("#popular-news-2").html("<b>" + popularNews[1]["title"] + "</b>");
            $("#popular-news-2-link").attr("href", "news/news.html?id="+popularNews[1]["id"]+"&scope=none");
            $("#popular-news-2-name").html("<b>" + popularNews[1]["writer"] + "</b>,");
            $("#popular-news-2-date").html(moment(popularNews[1]["date"]).format('MMM DD, YYYY'));
            $("#popular-news-2-viewers").html(parseInt(popularNews[1]["viewers"]).toLocaleString());
            $("#popular-news-2-comments").html(parseInt(popularNews[1]["comments"]).toLocaleString());
            $("#popular-news-3-img").attr("src", popularNews[2]["img_path"]);
            $("#popular-news-3").html("<b>" + popularNews[2]["title"] + "</b>");
            $("#popular-news-3-link").attr("href", "news/news.html?id="+popularNews[2]["id"]+"&scope=none");
            $("#popular-news-3-name").html("<b>" + popularNews[2]["writer"] + "</b>,");
            $("#popular-news-3-date").html(moment(popularNews[2]["date"]).format('MMM DD, YYYY'));
            $("#popular-news-3-viewers").html(parseInt(popularNews[2]["viewers"]).toLocaleString());
            $("#popular-news-3-comments").html(parseInt(popularNews[2]["comments"]).toLocaleString());
            $("#popular-news-4-img").attr("src", popularNews[3]["img_path"]);
            $("#popular-news-4").html("<b>" + popularNews[3]["title"] + "</b>");
            $("#popular-news-4-link").attr("href", "news/news.html?id="+popularNews[3]["id"]+"&scope=none");
            $("#popular-news-4-name").html("<b>" + popularNews[3]["writer"] + "</b>,");
            $("#popular-news-4-date").html(moment(popularNews[3]["date"]).format('MMM DD, YYYY'));
            $("#popular-news-4-viewers").html(parseInt(popularNews[3]["viewers"]).toLocaleString());
            $("#popular-news-4-comments").html(parseInt(popularNews[3]["comments"]).toLocaleString());
            $("#popular-news-5-img").attr("src", popularNews[4]["img_path"]);
            $("#popular-news-5").html("<b>" + popularNews[4]["title"] + "</b>");
            $("#popular-news-5-link").attr("href", "news/news.html?id="+popularNews[4]["id"]+"&scope=none");
            $("#popular-news-5-name").html("<b>" + popularNews[4]["writer"] + "</b>,");
            $("#popular-news-5-date").html(moment(popularNews[4]["date"]).format('MMM DD, YYYY'));
            $("#popular-news-5-viewers").html(parseInt(popularNews[4]["viewers"]).toLocaleString());
            $("#popular-news-5-comments").html(parseInt(popularNews[4]["comments"]).toLocaleString());
            $("#popular-news-6-img").attr("src", popularNews[5]["img_path"]);
            $("#popular-news-6-link").attr("href", "news/news.html?id="+popularNews[5]["id"]+"&scope=none");
            $("#popular-news-6").html("<b>" + popularNews[5]["title"] + "</b>");
            $("#popular-news-6-name").html("<b>" + popularNews[5]["writer"] + "</b>,");
            $("#popular-news-6-date").html(moment(popularNews[5]["date"]).format('MMM DD, YYYY'));
            $("#popular-news-6-viewers").html(parseInt(popularNews[5]["viewers"]).toLocaleString());
            $("#popular-news-6-comments").html(parseInt(popularNews[5]["comments"]).toLocaleString());
        }
    });
    fd = new FormData();
    fd.append("limit", 4);
    fd.append("scope", scope);
    fd.append("land_id", landID);
    $.ajax({
        type: 'POST',
        url: PHP_URL + 'get-popular-news-at-location.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            popularNews = JSON.parse(response);
            $("#most-popular-news-1-img").attr("src", popularNews[0]["img_path"]);
            $("#most-popular-news-1").html("<b>" + popularNews[0]["title"] + "</b>");
            $("#most-popular-news-1-name").html("<b>" + popularNews[0]["writer"] + "</b>,");
            $("#most-popular-news-1-date").html(moment(popularNews[0]["date"]).format('MMM DD, YYYY'));
            $("#most-popular-news-1-viewers").html(parseInt(popularNews[0]["viewers"]).toLocaleString());
            $("#most-popular-news-1-comments").html(parseInt(popularNews[0]["comments"]).toLocaleString());
            $("#most-popular-news-2-img").attr("src", popularNews[1]["img_path"]);
            $("#most-popular-news-2").html("<b>" + popularNews[1]["title"] + "</b>");
            $("#most-popular-news-2-name").html("<b>" + popularNews[1]["writer"] + "</b>,");
            $("#most-popular-news-2-date").html(moment(popularNews[1]["date"]).format('MMM DD, YYYY'));
            $("#most-popular-news-2-viewers").html(parseInt(popularNews[1]["viewers"]).toLocaleString());
            $("#most-popular-news-2-comments").html(parseInt(popularNews[1]["comments"]).toLocaleString());
            $("#most-popular-news-3-img").attr("src", popularNews[2]["img_path"]);
            $("#most-popular-news-3").html("<b>" + popularNews[2]["title"] + "</b>");
            $("#most-popular-news-3-name").html("<b>" + popularNews[2]["writer"] + "</b>,");
            $("#most-popular-news-3-date").html(moment(popularNews[2]["date"]).format('MMM DD, YYYY'));
            $("#most-popular-news-3-viewers").html(parseInt(popularNews[2]["viewers"]).toLocaleString());
            $("#most-popular-news-3-comments").html(parseInt(popularNews[2]["comments"]).toLocaleString());
            $("#most-popular-news-4-img").attr("src", popularNews[3]["img_path"]);
            $("#most-popular-news-4").html("<b>" + popularNews[3]["title"] + "</b>");
            $("#most-popular-news-4-name").html("<b>" + popularNews[3]["writer"] + "</b>,");
            $("#most-popular-news-4-date").html(moment(popularNews[3]["date"]).format('MMM DD, YYYY'));
            $("#most-popular-news-4-viewers").html(parseInt(popularNews[3]["viewers"]).toLocaleString());
            $("#most-popular-news-4-comments").html(parseInt(popularNews[3]["comments"]).toLocaleString());
        }
    });
    $.ajax({
        type: 'GET',
        url: PHP_URL+'get-socials.php',
        dataType: 'text',
        cache: false,
        success: function(response) {
            var socialInfo = JSON.parse(response);
            $("#facebook").attr("href", socialInfo["facebook"]);
            $("#twitter").attr("href", socialInfo["twitter"]);
            $("#google").attr("href", socialInfo["google"]);
            $("#instagram").attr("href", socialInfo["instagram"]);
            $("#youtube").attr("href", socialInfo["youtube"]);
            $("#facebook-2").attr("href", socialInfo["facebook"]);
            $("#twitter-2").attr("href", socialInfo["twitter"]);
            $("#google-2").attr("href", socialInfo["google"]);
            $("#instagram-2").attr("href", socialInfo["instagram"]);
            $("#youtube-2").attr("href", socialInfo["youtube"]);
        }
    });
    loadArticles();
    $.ajax({
        type: 'GET',
        url: PHP_URL+'get-lands.php',
        dataType: 'text',
        cache: false,
        success: function(response) {
            var provincesJSON = JSON.parse(response);
            for (var i=0; i<provincesJSON.length; i++) {
                var provinceJSON = provincesJSON[i];
                $("#provinces").append(""+
                    "<li><a href='#'>"+provinceJSON["name"]+"</a></li>");
            }
        }
    });
});

function loadArticles() {
    var fd = new FormData();
    fd.append("start", articleStart);
    fd.append("length", DEFAULT_LIMIT);
    fd.append("land_id", landID);
    $.ajax({
        type: 'POST',
        url: PHP_URL + 'get-recent-articles.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            console.log(response);
            if (response != "[]") {
                articleStart += 6;
                recentArticles = JSON.parse(response);
                $("#recent-article-1-img").attr("src", recentArticles[0]["img_path"]);
                $("#recent-article-1").html("<b>" + recentArticles[0]["title"] + "</b>");
                $("#recent-article-1-name").html("<b>" + recentArticles[0]["writer"] + "</b>,");
                $("#recent-article-1-date").html(moment(recentArticles[0]["date"]).format('MMM DD, YYYY'));
                $("#recent-article-1-viewers").html(parseInt(recentArticles[0]["viewers"]).toLocaleString());
                $("#recent-article-1-comments").html(parseInt(recentArticles[0]["comments"]).toLocaleString());
                $("#recent-article-2-img").attr("src", recentArticles[1]["img_path"]);
                $("#recent-article-2").html("<b>" + recentArticles[1]["title"] + "</b>");
                $("#recent-article-2-name").html("<b>" + recentArticles[1]["writer"] + "</b>,");
                $("#recent-article-2-date").html(moment(recentArticles[1]["date"]).format('MMM DD, YYYY'));
                $("#recent-article-2-viewers").html(parseInt(recentArticles[1]["viewers"]).toLocaleString());
                $("#recent-article-2-comments").html(parseInt(recentArticles[1]["comments"]).toLocaleString());
                $("#recent-article-3-img").attr("src", recentArticles[2]["img_path"]);
                $("#recent-article-3").html("<b>" + recentArticles[2]["title"] + "</b>");
                $("#recent-article-3-name").html("<b>" + recentArticles[2]["writer"] + "</b>,");
                $("#recent-article-3-date").html(moment(recentArticles[2]["date"]).format('MMM DD, YYYY'));
                $("#recent-article-3-viewers").html(parseInt(recentArticles[2]["viewers"]).toLocaleString());
                $("#recent-article-3-comments").html(parseInt(recentArticles[2]["comments"]).toLocaleString());
                $("#recent-article-4-img").attr("src", recentArticles[3]["img_path"]);
                $("#recent-article-4").html("<b>" + recentArticles[3]["title"] + "</b>");
                $("#recent-article-4-name").html("<b>" + recentArticles[3]["writer"] + "</b>,");
                $("#recent-article-4-date").html(moment(recentArticles[3]["date"]).format('MMM DD, YYYY'));
                $("#recent-article-4-viewers").html(parseInt(recentArticles[3]["viewers"]).toLocaleString());
                $("#recent-article-4-comments").html(parseInt(recentArticles[3]["comments"]).toLocaleString());
                $("#recent-article-5-img").attr("src", recentArticles[4]["img_path"]);
                $("#recent-article-5").html("<b>" + recentArticles[4]["title"] + "</b>");
                $("#recent-article-5-name").html("<b>" + recentArticles[4]["writer"] + "</b>,");
                $("#recent-article-5-date").html(moment(recentArticles[4]["date"]).format('MMM DD, YYYY'));
                $("#recent-article-5-viewers").html(parseInt(recentArticles[4]["viewers"]).toLocaleString());
                $("#recent-article-5-comments").html(parseInt(recentArticles[4]["comments"]).toLocaleString());
                $("#recent-article-6-img").attr("src", recentArticles[5]["img_path"]);
                $("#recent-article-6").html("<b>" + recentArticles[5]["title"] + "</b>");
                $("#recent-article-6-name").html("<b>" + recentArticles[5]["writer"] + "</b>,");
                $("#recent-article-6-date").html(moment(recentArticles[5]["date"]).format('MMM DD, YYYY'));
                $("#recent-article-6-viewers").html(parseInt(recentArticles[5]["viewers"]).toLocaleString());
                $("#recent-article-6-comments").html(parseInt(recentArticles[5]["comments"]).toLocaleString());
            }
        }
    });
}

function viewMoreArticle() {
    loadArticles();
}

function goToSubscribeForm() {
    $('html, body').animate({scrollTop: $("#subscribe-title").offset().top}, 'slow');
}