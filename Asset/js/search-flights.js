$(document).ready(function() {
    $(".btn-info-flights").click(function() {
        $(this).find("i").toggleClass("down");
    });
    $(".item-filter").click(function() {
        $(this).find("i").toggleClass("down");
    });
    $("#slider-range-price").slider({
        range: true,
        min: 0,
        max: 5000000,
        values: [0, 5000000],
        slide: function(event, ui) {
            $("#price-amount").text(ui.values[0].toLocaleString() + "đ - " + ui.values[1].toLocaleString() + "đ");
        }
    });
    $("#price-amount").text($("#slider-range-price").slider("values", 0).toLocaleString() + "đ" +
        " - " + $("#slider-range-price").slider("values", 1).toLocaleString() + "đ");
    $("#slider-range-time").slider({
        range: true,
        min: 0,
        max: 5,
        step: 0.1,
        values: [0, 5],
        slide: function(event, ui) {
            $("#time-amount").text(ui.values[0].toLocaleString() + "h - " + ui.values[1].toLocaleString() + "h");
        }
    });
    $("#time-amount").text($("#slider-range-time").slider("values", 0).toLocaleString() + "h" +
        " - " + $("#slider-range-time").slider("values", 1).toLocaleString() + "h");
});