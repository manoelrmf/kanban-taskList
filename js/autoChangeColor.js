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

   changeComponents(1)
   /*autoChangeComponents()
   window.setInterval(function(){
        autoChangeComponents()
    }, 5000); */

    function autoChangeComponents(){
        const autoChange = createAutoChangeComponents();
        if(id < 4){
            autoChange.components()
            id = id + 1;
        }else id = 0;
    }

    function changeComponents(idCor){
        id = idCor
        const autoChange = createAutoChangeComponents()
        autoChange.components()
    }

    function  createAutoChangeComponents(){
        function components(){
            clear.classes();
            clear.animations();
            change.background();
            change.color();
        }

       
        return{
            components
        }
    }

    function createChangeComponents(){

        function color(){
            switch (id) {
                case 0:
                    $('.box').addClass(' bg-primary text-white op-8')
                    $('.btn-login').addClass('text-primary btn-light')
                    i.addClass('border border-primary');
                    nav.addClass('navbar-primary')
                    card.addClass('bg-primary text-white')
                    $('.icon-git').attr('src', 'img/icons/gitWhite.png')
                    $('#github').addClass('text-white')
                    break;
                case 1:
                    $('.box').addClass(' bg-danger text-white op-8')
                    $('.btn-login').addClass('text-danger btn-light')
                    i.addClass('border border-danger');
                    nav.addClass('navbar-danger')
                    card.addClass('bg-danger text-white')
                    $('.icon-git').attr('src', 'img/icons/gitWhite.png')
                    $('#github').addClass('text-white')
                    break;
                case 2:
                    $('.box').addClass(' bg-info text-white op-8')
                    $('.btn-login').addClass('text-info btn-light')
                    i.addClass('border border-info');
                    nav.addClass('navbar-info')
                    card.addClass('bg-info')
                    card.addClass('text-white')
                    $('.icon-git').attr('src', 'img/icons/gitWhite.png')
                    $('#github').addClass('text-white')
                    break;
                case 3:
                    $('.box').addClass(' bg-success text-white op-8')
                    $('.btn-login').addClass('text-success btn-light')
                    i.addClass('border border-success');
                    nav.addClass('navbar-success')
                    card.addClass('bg-success')
                    card.addClass('text-white')
                    $('.icon-git').attr('src', 'img/icons/gitWhite.png')
                    $('#github').addClass('text-white')
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
            background,
        }
    }

    function createClearComponents(){
        function classes(){
            $.each(cors ,function (index, value) {
                $('.box').removeClass('text-' + value);
                $('.btn-login').removeClass('text-' + value);

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
        
        function classe(selector, animation){
               $(selector).addClass('animated ' + animation);
        }

        return{
            infinite,
            infiniteTarget,
            classe
        }   
    }

    $('.btn-login').on('click', function(e){
        animation.classe('.container-login', 'bounceOut')
    });

    $('.icon-close').on('click', function(e){
        var idClose =  e.target.id
        clear.animation('.flipInX','animated flipInX')
        if(e.target.id === 'to-do-close') animation.classe('.box-to-do','bounceOut')
        if(e.target.id === 'doing-close') animation.classe('.box-doing')
        if(e.target.id === 'done-close')  animation.classe('.box-done')
    });
    

    animation.infinite('.btn-login, .task , .icon-settings', 'pulse');
    animation.classe('.link-git, .boxes,.icon-settings', 'bounceIn')
    animation.infinite('.icon-close', 'rubberBand')
    animation.infiniteTarget('.icon-github-black','.link-git','bounce')

 });
