const DEFAULT_LIMIT = 6;
var popularNews = [];
var randomNews = [];
var newsID = 0;
var scope = ""; //daerah, nasional, none

$(document).ready(function () {
    if (location.search == "") {
        window.location.href = "http://" + HOST;
        return;
    } else {
        var param1 = location.search.split('?')[1].split('&')[0];
        var param2 = location.search.split('?')[1].split('&')[1];
        if (param1 !== undefined) {
            newsID = param1.split('=')[1];
        } else {
            newsID = 1;
        }
        if (param2 !== undefined) {
            scope = param2.split('=')[1];
        } else {
            scope = "none";
        }
        $("#comment-form").attr("action", "../php/comment.php?news_id=" + newsID);
    }
    var fd = new FormData();
    fd.append("id", newsID);
    $.ajax({
        type: 'POST',
        url: PHP_URL + 'get-news-by-id.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            var newsJSON = JSON.parse(response);
            $("#image").attr("src", "../"+newsJSON["img_path"]);
            var title = newsJSON["title"];
            $("#title").html("<b>"+title+"</b>");
            var content = newsJSON["content"];
            var contents = content.split("\n\n");
            var tagsJSON = JSON.parse(newsJSON["tags"]);
            for (let i = 0; i < contents.length; i++) {
                $("#content").append("<p class='mtb-15'>" + contents[i] + "<p class='mtb-15'>");
            }
            $("#writer").html("<b>" + newsJSON["writer"] + " </b>");
            $("#viewers").html("<b>" + newsJSON["viewers"] + " </b>");
            $("#comments").html("<b>" + newsJSON["comments"] + " </b>");
            for (let i = 0; i < tagsJSON.length; i++) {
                var tagJSON = tagsJSON[i];
                $("#tags").append("<li><a href='#'>" + tagJSON["name"] + "</a></li>");
            }
        }
    });
    fd = new FormData();
    fd.append("limit", DEFAULT_LIMIT);
    fd.append("scope", "none");
    $.ajax({
        type: 'POST',
        url: PHP_URL + 'get-popular-news.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            popularNews = JSON.parse(response);
            $("#popular-news-1-img").attr("src", popularNews[0]["img_path"]);
            $("#popular-news-1").html("<b>" + popularNews[0]["title"] + "</b>");
            $("#popular-news-1-link").attr("href", "../news/news.html?id="+popularNews[0]["id"]+"&scope=none");
            $("#popular-news-1-name").html("<b>" + popularNews[0]["writer"] + "</b>,");
            $("#popular-news-1-date").html(moment(popularNews[0]["date"]).format('MMM DD, YYYY'));
            $("#popular-news-1-viewers").html(parseInt(popularNews[0]["viewers"]).toLocaleString());
            $("#popular-news-1-comments").html(parseInt(popularNews[0]["comments"]).toLocaleString());
            $("#popular-news-2-img").attr("src", popularNews[1]["img_path"]);
            $("#popular-news-2").html("<b>" + popularNews[1]["title"] + "</b>");
            $("#popular-news-2-link").attr("href", "../news/news.html?id="+popularNews[1]["id"]+"&scope=none");
            $("#popular-news-2-name").html("<b>" + popularNews[1]["writer"] + "</b>,");
            $("#popular-news-2-date").html(moment(popularNews[1]["date"]).format('MMM DD, YYYY'));
            $("#popular-news-2-viewers").html(parseInt(popularNews[1]["viewers"]).toLocaleString());
            $("#popular-news-2-comments").html(parseInt(popularNews[1]["comments"]).toLocaleString());
            $("#popular-news-3-img").attr("src", popularNews[2]["img_path"]);
            $("#popular-news-3").html("<b>" + popularNews[2]["title"] + "</b>");
            $("#popular-news-3-link").attr("href", "../news/news.html?id="+popularNews[2]["id"]+"&scope=none");
            $("#popular-news-3-name").html("<b>" + popularNews[2]["writer"] + "</b>,");
            $("#popular-news-3-date").html(moment(popularNews[2]["date"]).format('MMM DD, YYYY'));
            $("#popular-news-3-viewers").html(parseInt(popularNews[2]["viewers"]).toLocaleString());
            $("#popular-news-3-comments").html(parseInt(popularNews[2]["comments"]).toLocaleString());
            $("#popular-news-4-img").attr("src", popularNews[3]["img_path"]);
            $("#popular-news-4").html("<b>" + popularNews[3]["title"] + "</b>");
            $("#popular-news-4-link").attr("href", "../news/news.html?id="+popularNews[3]["id"]+"&scope=none");
            $("#popular-news-4-name").html("<b>" + popularNews[3]["writer"] + "</b>,");
            $("#popular-news-4-date").html(moment(popularNews[3]["date"]).format('MMM DD, YYYY'));
            $("#popular-news-4-viewers").html(parseInt(popularNews[3]["viewers"]).toLocaleString());
            $("#popular-news-4-comments").html(parseInt(popularNews[3]["comments"]).toLocaleString());

            $("#foot-news-1-link").attr("href", "news.html?id="+popularNews[0]["id"]+"&scope=none");
            $("#foot-news-2-link").attr("href", "news.html?id="+popularNews[1]["id"]+"&scope=none");
            $("#foot-news-3-link").attr("href", "news.html?id="+popularNews[2]["id"]+"&scope=none");
            $("#foot-news-4-link").attr("href", "news.html?id="+popularNews[3]["id"]+"&scope=none");

            $("#foot-news-1").html("<b>" + popularNews[0]["title"] + "</b>");
            $("#foot-news-1-date").html(moment(popularNews[0]["date"]).format('MMM DD, YYYY'));
            $("#foot-news-2").html("<b>" + popularNews[1]["title"] + "</b>");
            $("#foot-news-2-date").html(moment(popularNews[1]["date"]).format('MMM DD, YYYY'));
            $("#foot-news-3").html("<b>" + popularNews[2]["title"] + "</b>");
            $("#foot-news-3-date").html(moment(popularNews[2]["date"]).format('MMM DD, YYYY'));
            $("#foot-news-4").html("<b>" + popularNews[3]["title"] + "</b>");
            $("#foot-news-4-date").html(moment(popularNews[3]["date"]).format('MMM DD, YYYY'));
        }
    });
    fd = new FormData();
    fd.append("limit", 2);
    fd.append("scope", "none");
    $.ajax({
        type: 'POST',
        url: PHP_URL + 'get-random-news.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            randomNews = JSON.parse(response);
            $("#random-news-1-img").attr("src", randomNews[0]["img_path"]);
            $("#random-news-1").html("<b>" + randomNews[0]["title"] + "</b>");
            $("#random-news-1-name").html("<b>" + randomNews[0]["writer"] + "</b>,");
            $("#random-news-1-date").html(moment(randomNews[0]["date"]).format('MMM DD, YYYY'));
            $("#random-news-1-viewers").html(parseInt(randomNews[0]["viewers"]).toLocaleString());
            $("#random-news-1-comments").html(parseInt(randomNews[0]["comments"]).toLocaleString());
            $("#random-news-2-img").attr("src", randomNews[1]["img_path"]);
            $("#random-news-2").html("<b>" + randomNews[1]["title"] + "</b>");
            $("#random-news-2-name").html("<b>" + randomNews[1]["writer"] + "</b>,");
            $("#random-news-2-date").html(moment(randomNews[1]["date"]).format('MMM DD, YYYY'));
            $("#random-news-2-viewers").html(parseInt(randomNews[1]["viewers"]).toLocaleString());
            $("#random-news-2-comments").html(parseInt(randomNews[1]["comments"]).toLocaleString());
        }
    });
    fd = new FormData();
    fd.append("news_id", 7);
    $.ajax({
        type: 'POST',
        url: PHP_URL + 'get-viewer-count-by-news-id.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            var viewerCount = parseInt(response);
            $("#viewers").html("<b>" + viewerCount + "</b>");
        }
    });
    fd = new FormData();
    fd.append("news_id", newsID);
    $.ajax({
        type: 'POST',
        url: PHP_URL + 'get-comment-count-by-news-id.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            var commentCount = parseInt(response);
            $("#comments-count").html("<b>" + commentCount + " KOMENTAR </b>");
            $("#comments").html("<b>" + commentCount + "</b>");
        }
    });
    fd = new FormData();
    fd.append("news_id", newsID);
    $.ajax({
        type: 'POST',
        url: PHP_URL + 'get-comments.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (response) {
            var commentsJSON = JSON.parse(response);
            for (var i = 0; i < commentsJSON.length; i++) {
                var commentJSON = commentsJSON[i];
                $("#user-comments").append("" +
                    "<div class='sided-70 mb-40'>" +
                        "<div class='s-left rounded'>" +
                            "<img src='../images/user.png' alt=''>" +
                        "</div>" +
                        "<div class='s-right ml-100 ml-xs-85'>" +
                            "<h5><b>"+commentJSON["name"]+"</b> <span class='font-8 color-ash'>"+moment(commentJSON["date"]).format('MMM DD, YYYY')+"</span></h5>" +
                            "<p class='mtb-15'>"+commentJSON["comment"]+"</p>" +
                        "</div>" +
                    "</div>");
            }
        }
    });
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
                    "<li><a href='../index-area.html?land_id="+provinceJSON["id"]+"'>"+provinceJSON["name"]+"</a></li>");
            }
        }
    });
    fd = new FormData();
    fd.append("news_id", newsID);
    $.ajax({
        type: 'POST',
        url: PHP_URL+'read-news.php',
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function(response) {
        }
    });
    $.ajax({
        type: 'GET',
        url: PHP_URL + 'get-socials.php',
        dataType: 'text',
        cache: false,
        success: function (response) {
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
});

function shareFacebook() {
    $(this).preventDefault();
    Native.shareToFacebook(encodeURIComponent(window.location.href));
}

function shareTwitter() {
    $(this).preventDefault();
    Native.shareToTwitter(encodeURIComponent(window.location.href));
}

function shareGoogle() {
    $(this).preventDefault();
    Native.shareToGoogle(encodeURIComponent(window.location.href));
}

function shareInstagram() {
    $(this).preventDefault();
    Native.shareToInstagram(encodeURIComponent(window.location.href));
}

function shareYouTube() {
    $(this).preventDefault();
    Native.shareTo(encodeURIComponent(window.location.href));
}