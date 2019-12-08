$(document).ready(function () {

    var b = $('body');
    var c = $('.component'); 
    var i = $('input'); 
    var nav = $('.navbar')
    var card = $('.card')
    var id = 0;
    var cors = ["primary", "danger", "info", "success"];
    var animationsClass = ["fadeOut", "fadeIn", "bounceOut", "flipInX"]
    const change = createChangeComponents();
    const clear = createClearComponents();
    const animation = createAnimationsComponents();

    autoChangeComponents()
   /* window.setInterval(function(){
        autoChangeComponents()
    }, 10000); */

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
            animation.infinite('.btn-login, .task', 'pulse');
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

        function animation(selector, animatedClass){
            $(selector).removeClass(animatedClass)
        }

        function animations(){
            $.each(animationsClass, function(index, value){
                $('.animated').removeClass('animated ' + value)
            })
        }

        return{
            classes,
            animation,
            animations
        }
    }

    function createAnimationsComponents(){

        function infiniteTarget(target, selector,animatedClass){
            $(selector).bind('mouseenter mouseleave', function (e) { 
                if(e.type=='mouseenter') $(target).addClass('animated infinite ' + animatedClass);
                else                     $(target).removeClass('animated infinite ' + animatedClass);
            });
        }
        

        function infinite(selector, animatedClass){
            $(selector).bind('mouseenter mouseleave', function (e) { 
                if(e.type=='mouseenter') $(this).addClass('animated infinite ' + animatedClass);
                else                     $(this).removeClass('animated infinite ' + animatedClass);
            });
        }
        
        function fadeOut(selector){
               $(selector).addClass('animated fadeOut');
        }

        function flipInX(selector){
            $(selector).addClass('animated flipInX');
        }

        function fadeIn(selector){
            $(selector).addClass('animated fadeIn');
        }

        function bounceOut(selector){
            $(selector).addClass('animated bounceOut');
        }

        function bounceInLeft(selector){
            $(selector).addClass('animated bounceInLeft');
        }

        function bounceInLeft(selector){
            $(selector).addClass('animated bounceInLeft');
        }
        return{
            infinite,
            infiniteTarget,
            fadeIn,
            fadeOut,
            flipInX,
            bounceInLeft,
            bounceOut
        }   
    }

    $('.btn-login').on('click', function(e){
        animation.bounceOut('.container-login')
    });

    $('.icon-close').on('click', function(e){
        var idClose =  e.target.id
        clear.animation('.flipInX','animated flipInX')
        if(e.target.id === 'to-do-close') animation.bounceOut('.box-to-do')
        if(e.target.id === 'doing-close') animation.bounceOut('.box-doing')
        if(e.target.id === 'done-close')  animation.bounceOut('.box-done')
    });
    

    animation.bounceInLeft('.footer-bottom')
    animation.flipInX('.boxes')
    animation.infinite('.icon-close', 'rubberBand')
    animation.infiniteTarget('.icon-github','.link-git','bounce')
 });


