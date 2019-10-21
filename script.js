// Game Setup
var wizardName = "";
$(document).ready(function(){


    $("#wizard-name-button").click(function(){
        wizardName = $("#wizard-name").val()
        console.log(wizardName);
        $("#surface").html($("#startup").html());
        $("#surface").prepend("<h1>Welcome, "+wizardName+"</h1>");
    });

    $("#surface").on('click', '#gameplay', function(){
        console.log('clicked');
        $("#surface").html($("#aunties").html());
        $("#surface").prepend("<h1>"+wizardName+" Artifacts Found: 0</h1>");
        setTimeout(function(){ $("#surface .hints").append("<p class='bulletin orange'>Hedwig might enjoy them</p><img id='hedwig' src='images/hedwig.jpg'>")}, 10000)
        setTimeout(function(){ $("#surface .hints").append("<p class='bulletin orange'>Where can you find these?</p><img id='books' src='images/books.jpg'>")}, 20000)
    })
    
    $("#surface").on('click', '#aunties-solved', function(){
        $('#surface').html($("#aunties-spell").html());
    })

    $("#surface").on('click', '#barrister-solved', function(){
        $('#surface').html($("#barrister-spell").html());
    })

    $("#surface").on('click', '#sushi-solved', function(){
        $('#surface').html($("#sushi-spell").html());
    })
    
    $("#surface").on('click', '#boots-solved', function(){
        $('#surface').html($("#boots-spell").html());
    })
    
    $("#surface").on('click', '#boots-solved', function(){
        $('#surface').html($("#boots-spell").html());
    })

    $("#surface").on('click', 'td', function(){
        var current = $(this).css('background-color');
        console.log(current);
        if (current != 'rgb(255, 255, 255)'){
            $(this).css('background-color', 'rgb(255, 255, 255)')

        } else {
            $(this).css('background-color', 'green')
        }
    })
})

let meterSize, lastUpdateTime;
const MAXED_METER = 300;
const METER_FILL_SPEED = 0.03; // Pixels per millisecond


function startMeter(event) {
    lastUpdateTime = event.timeStamp;
}

function fillMeter(event){
    if (!meterSize) {
        meterSize = 1;
    }
    

    const timeNow = event.timeStamp;
    const deltaTime = timeNow - lastUpdateTime;
    lastUpdateTime = timeNow;

    $(".fill").css("width", function(){ 
        if (meterSize < MAXED_METER) {
            meterSize += METER_FILL_SPEED * deltaTime;
            return `${Math.floor(meterSize)}px`;
        }
    });
}
    
function endMeter(event, next, artifacts){
    // Don't move to next spell till meter is filled
    if (meterSize < MAXED_METER) {
        return;
    }
    $("#surface").fadeOut("slow", function(){
        // Reset meter
        $(".fill").css("width", 0);
        meterSize = 0;

        // Move to next puzzle
        $("#surface").html($(next).html());
        console.log($(next).attr('id'));
        if ($(next).attr('id') == "sushi"){
            $("#surface").prepend("<h1 class='alert'>"+wizardName+" Artifacts Found: "+artifacts+"</h1>");
            console.log(next);
        }
        else {
            $("#surface").prepend("<h1>"+wizardName+" Artifacts Found: "+artifacts+"</h1>");
        }
        $("#surface").fadeIn("fast");
    });
}