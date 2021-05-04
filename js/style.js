$(document).ready(function () {

    $(function () {
        var handle = $("#custom-handle");
        $("#slider").slider({
            value: 50,
            create: function () {
                handle.text($(this).slider("value"));
            },
            slide: function (event, ui) {
                let val = ui.value;

                console.log(event);
                handle.text(ui.value);
                if (val > 50) {
                    let test = (val - 50)*6;
                    $('.gray--positive').css({
                        right: "-" + test + "px"
                    })
                }
                if(val > 79){
                    $('.psyhBlock .bottom__list .bottom__list__item:nth-child(4) .item--name--right').css({
                        transaction : ".3s ease",
                        fontSize : "1.1rem",
                        fontWeight : "600",
                    })
                }
                else{
                    $('.psyhBlock .bottom__list .bottom__list__item:nth-child(4) .item--name--right').css({
                        transaction : ".3s ease",
                        fontSize : "1rem",
                        fontWeight : "normal",
                    })
                }
                if (val < 50) {
                    let test = (val );
                    $('.gray--negative').css({
                        left: "-" + test + "px"
                    })
                }
            },
            change: function (event, ui) {
                console.log('---',ui);
            }
        });
    });
});