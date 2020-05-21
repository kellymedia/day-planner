var timeDisplay = $("#currentDay");
var currentDay = moment().format("dddd, MMMM Do");

// 24 hour clock time
var currentHour = parseInt(moment().hour());

// display current date 
timeDisplay.text(currentDay);

// Number of time slots
var workDay = $(".time").length;

    renderLocalStorage();

        $(".notes").each(function() {
            var currentTimeValue = parseInt(moment($(this).attr("id"))._i);
            if (moment(currentTimeValue).isBefore(currentHour)) {
                $(this).addClass("past");
            }
            else if (moment(currentTimeValue).isSame(currentHour)) {
                $(this).addClass("present");
            }
            else if (moment(currentTimeValue).isAfter(currentHour)) {
                $(this).addClass("future");
            }
        });

        $(".save-btn").on("click", function() {
            for(var i = 0; i < workDay; i++) {
                var currentID = $(".notes").eq(i).attr("id");
                var value = $(".notes").eq(i).val().trim();
                localStorage.setItem(currentID, value);
            }
        });

        $(".clear-btn").on("click", function() {
            $(".notes").empty();
            localStorage.clear();
        });

        function renderLocalStorage() {
            for (var i = 9, j = 0; i < 18; i++, j++) {
                var blockInfo = (localStorage.getItem(i))
                $(".notes").eq(j).text(blockInfo)
            }
        }
    