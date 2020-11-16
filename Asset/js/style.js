$(document).ready(function() {

    $("#plus_adult").click(function() {
        var qty = parseInt($("#adult_qty").val());
        $("#adult_qty").val(qty + 1);
    });
    $("#plus_child").click(function() {
        var qty = parseInt($("#child_qty").val());
        $("#child_qty").val(qty + 1);
    });
    $("#plus_infant").click(function() {
        var qty = parseInt($("#infant_qty").val());
        $("#infant_qty").val(qty + 1);
    });
    $("#minus_adult").click(function() {
        var qty = parseInt($("#adult_qty").val());
        if (qty == 1) {
            qty = 2;
        }
        $("#adult_qty").val(qty - 1);
    });
    $("#minus_child").click(function() {
        var qty = parseInt($("#child_qty").val());
        if (qty == 0) {
            qty = 1;
        }
        $("#child_qty").val(qty - 1);
    });
    $("#minus_infant").click(function() {
        var qty = parseInt($("#infant_qty").val());
        if (qty == 0) {
            qty = 1;
        }
        $("#infant_qty").val(qty - 1);
    });
    //depart City
    $("#departCity").click(function() {
        $(".sanbay").removeClass("return");
        $(".sanbay").addClass("depart");
        $(".sanbay").show();
        $(".sanbay").css({
            top: '543px',
            left: '444px'
        });
    });
    //return City
    $("#returnCity").click(function() {
        $(".sanbay").removeClass("depart");
        $(".sanbay").addClass("return");
        $(".sanbay").css({
            top: '543px',
            left: '707px'
        });
        $(".sanbay").show();
    });
    //search airport
    $('#searchFlight').bind('keyup', function() {
        $("#searchList").css("display", "block");
        var searchString = $(this).val();
        if (searchString == "") {
            $("#searchList").css("display", "none");
        }
        var res = "<ul class='list-unstyled ml-2'>";
        $("#tab-airport-content ul li").each(function(index, value) {
            var currentName = $(value).text().trim();
            if (currentName.toUpperCase().indexOf(searchString.toUpperCase()) > -1) {
                res += "<li onclick='selectFlight(\"" + currentName + "\")'>" + currentName + "</li>";
            }
        });
        res += "</ul>";
        $("#searchList").html(res);
    });
    //outer search
    $(document).mouseup(function(e) {
        var container = $("#searchList");
        var sanbay = $(".sanbay");
        var date = $("#datepicker");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
        if (!sanbay.is(e.target) && sanbay.has(e.target).length === 0) {
            sanbay.hide();
        }
        if (!date.is(e.target) && date.has(e.target).length === 0) {
            date.hide();
        }
    });
    //click
    $("#tab-airport-content ul li").click(function() {
        if ($(".sanbay").hasClass("depart")) {
            $("#departCity").val($(this).text().trim());
        } else if ($(".sanbay").hasClass("return")) {
            $("#returnCity").val($(this).text().trim());
        }
    });
    //close form flight
    $("#close-form-flight").click(function() {
        $(".sanbay").hide();
    });
    //date
    $(".ngaydi").click(function() {
        $("#ngaydi_flag").val(1);
        var dateToday = new Date();
        $('#datepicker').datepicker('option', 'minDate', dateToday, 'numberOfMonths', 5);
        $("#datepicker").show();
    });
    $("#ngayve").click(function() {
        if ($("input#fl_type").val() == 1) {
            $("#ngayve").removeClass("op-dayve");
            $("input#fl_type").val(2);
            $(".flightType>input#2").prop("checked", "true");
        }
        $("#ngaydi_flag").val(2);
        var date = $("#flights-checkin").val();
        var str = date.split("-");
        $('#datepicker').datepicker('option', 'minDate', new Date(Number(str[2]), Number(str[1]) - 1, Number(str[0])));
        $("#datepicker").show();
    });
    //search for flight
    $("#searchForFlight").click(function() {
        if ($("#departCity").val() == "") {
            alert("Điểm đi là bắt buộc !");
        } else if ($("#returnCity").val() == "") {
            alert("Điểm đến là bắt buộc !");
        } else if ($("#returnCity").val() == $("#departCity").val()) {
            alert("Hành trình bị trùng");
        } else {
            window.location.href = "/pages/timkiem.html";
        }
    });
    //change flight
    $("#icon-switch-flight").click(function() {
        var departCity = $("#departCity").val();
        var returnCity = $("#returnCity").val();
        $("#departCity").val(returnCity);
        $("#returnCity").val(departCity);
    });
});

function selectFlight(fl) {
    if ($(".sanbay").hasClass("depart")) {
        $("#departCity").val(fl);
    } else if ($(".sanbay").hasClass("return")) {
        $("#returnCity").val(fl);
    }
}