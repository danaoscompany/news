var popularNews = [];

$(document).ready(function() {
    var fd = new FormData();
    fd.append("limit", 4);
    fd.append("scope", "none");
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