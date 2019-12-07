$(document).ready(function () {

    var b = $('body');
    var c = $('.component'); 
    var i = $('input'); 
    var nav = $('.navbar')
    var card = $('.card')
    var id = 0;
    var cors = ["primary", "danger", "info", "success"];
    var animationsClass = ["fadeOut", "fadeIn", "bounceOut"]
    const change = createChangeComponents();
    const clear = createClearComponents();
    const animation = createAnimationsComponents();

    autoChangeComponents()
    /*window.setInterval(function(){
        autoChangeComponents()
    }, 10000);*/ 

    function autoChangeComponents(){
        const autoChange = createAutoChangeComponents();
        if(id < 4){
            autoChange.components()
            id = id + 1;
        }else id = 0;
    }

    function  createAutoChangeComponents(){
        function components(){
            clear.classes();
            clear.animations();
            change.background();
            change.color();
            animation.pulseMouseEnterAndLeave('.btn-login');
        }
        return{
            components
        }
    }

    function createChangeComponents(){

        function color(){
            switch (id) {
                case 0:
                    b.addClass('text-primary');
                    c.addClass('btn-primary');
                    c.addClass('bg-primary');
                    i.addClass('border border-primary');
                    nav.addClass('navbar-primary')
                    card.addClass('bg-primary')
                    card.addClass('text-white')
                    break;
                case 1:
                    b.addClass('text-danger');
                    c.addClass('btn-danger');
                    c.addClass('bg-danger');
                    i.addClass('border border-danger');
                    nav.addClass('navbar-danger')
                    card.addClass('bg-danger')
                    card.addClass('text-white')
                    break;
                case 2:
                    b.addClass('text-info');
                    c.addClass('btn-info');
                    c.addClass('bg-info');
                    i.addClass('border border-info');
                    nav.addClass('navbar-info')
                    card.addClass('bg-info')
                    card.addClass('text-white')
                    break;
                case 3:
                    b.addClass('text-success');
                    c.addClass('btn-success');
                    c.addClass('bg-success');
                    i.addClass('border border-success');
                    nav.addClass('navbar-success')
                    card.addClass('bg-success')
                    card.addClass('text-white')
                    break;
                default:
                    break;
            }
                   
        }
    
        function background(){
           b.css("background-image", "url(img/" + id + ".jpg)")
        }
        
        return {
            color,
            background
        }
    }

    function createClearComponents(){
        function classes(){
            $.each(cors ,function (index, value) { 
                b.removeClass('text-' + value);
                c.removeClass('btn-' + value);
                c.removeClass('bg-' + value);
                i.removeClass('border border-' + value);
                nav.removeClass('navbar-' + value)
                card.removeClass('bg-' + value)
            });
        }

        function animations(){
            $.each(animationsClass, function(index, value){
                $('.animated').removeClass('animated ' + value)
            })
        }

        return{
            classes,
            animations
        }
    }

    function createAnimationsComponents(){

        function pulseMouseEnterAndLeave(selector){
            $(selector).bind('mouseenter mouseleave', function (e) { 
                if(e.type=='mouseenter') $(this).addClass('animated infinite pulse');
                else                     $(this).removeClass('animated infinite pulse');
            });
        }

        function fadeOut(selector){
               $(selector).addClass('animated fadeOut');
        }

        function bounceOut(selector){
            $(selector).addClass('animated bounceOut');
     }
        return{
            pulseMouseEnterAndLeave,
            fadeOut,
            bounceOut
        }   
    }

    $('.btn-login').on('click', function(e){
        animation.bounceOut('.container-login')
    });
    
 });


