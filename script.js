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
        if (current != 'green'){

            $(this).css('background-color', 'green')
        } else {
            $(this).css('background-color', 'white')
        }
    })
})

var beginning, end;

function startMeter(event){
    beginning = event.timeStamp;
}

function fillMeter(event){
    end = event.timeStamp;
    $(".fill").css("width", function(){ 
        if (parseInt($(this).css("width")) < 250) {
            return ((end-beginning) / 7) + "px" }
        }
        )
    }
    
    function endMeter(event, next, artifacts){
        $("#surface").fadeOut("slow", function(){
            $(".fill").css("width", 0);
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