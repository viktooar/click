$(document).ready(function() {

    

    let list_quest = [
        ['Просмотреть видео','<iframe width="100%" height="100%" src="https://www.youtube.com/embed/aIfDguOV-po" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ['Название задания 2','Само задание 2'],
        ['Название задания 3','Само задание 3']
    ];

    
    $("#quest-text-info").html(list_quest[sdvig][0]);
    $(".next-quest").click(function(){

        if(sdvig<=list_quest.length){
        sdvig++;
        }else {
            sdvig = 0;
        }
        $("#quest-text-info").html(list_quest[sdvig][0]);
    });

    $(".start-quest").click(function(){
        
        $("#adv-c").html(list_quest[sdvig][1]);
        $(".advertising").css({"display":"block"});
    });

    $(".close").click(function(){
        $(".advertising").css({"display":"none"});
    });





}); 