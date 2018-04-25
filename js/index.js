$(() => {
  $(".c_content li").click(function() {
    var _index = $(this).index();
    $(this)
      .addClass("current")
      .siblings()
      .removeClass("current");
    if ($(this).hasClass("current")) {
      $(".s_header h3").text($(this).text());
      $(".s_content ul")
        .eq(_index)
        .show()
        .siblings()
        .hide();
    }
  });
});

$(() => {
  $(".s_btn span").click(function() {
    var _index = $(this).index();
    if (_index == 0) {
      $(this)
        .addClass("current")
        .siblings()
        .removeClass("current")
        .parent()
        .prev()
        .val($(this).text())
        .prev()
        .attr({ placeholder: $(this).text(), name: "wd" })
        .parent()
        .attr("action", "https://www.baidu.com/s");
    } else if (_index == 1) {
      $(this)
        .addClass("current")
        .siblings()
        .removeClass("current")
        .parent()
        .prev()
        .val($(this).text())
        .prev()
        .attr({ placeholder: $(this).text(), name: "q" })
        .parent()
        .attr("action", "https://www.google.com/search");
    } else if (_index == 2) {
      $(this)
        .addClass("current")
        .siblings()
        .removeClass("current")
        .parent()
        .prev()
        .val($(this).text())
        .prev()
        .attr({ placeholder: $(this).text(), name: "q" })
        .parent()
        .attr("action", "https://cn.bing.com/search");
    } else if (_index == 3) {
      $(this)
        .addClass("current")
        .siblings()
        .removeClass("current")
        .parent()
        .prev()
        .val($(this).text())
        .prev()
        .attr({ placeholder: $(this).text(), name: "query" })
        .parent()
        .attr("action", "https://www.sogou.com/web");
    } else if (_index == 4) {
      $(this)
        .addClass("current")
        .siblings()
        .removeClass("current")
        .parent()
        .prev()
        .val($(this).text())
        .prev()
        .attr({ placeholder: $(this).text(), name: "s" })
        .parent()
        .attr("action", "https://www.so.com");
    }
  });
});
