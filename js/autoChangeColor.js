$(document).ready(function () {

    var b = $('body');
    var c = $('.component'); 
    var i = $('input'); 
    var id = 0;
    var cors = ["primary", "danger", "info", "success"];
    const change = createChangeComponents();
    const clear = createClearComponents();
    const animation = createAnimationsComponents();

    autoChangeComponents()
    window.setInterval(function(){
        autoChangeComponents()
    }, 1000);

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
                    break;
                case 1:
                    b.addClass('text-danger');
                    c.addClass('btn-danger');
                    c.addClass('bg-danger');
                    i.addClass('border border-danger');
                    break;
                case 2:
                    b.addClass('text-info');
                    c.addClass('btn-info');
                    c.addClass('bg-info');
                    i.addClass('border border-info');
                    break;
                case 3:
                    b.addClass('text-success');
                    c.addClass('btn-success');
                    c.addClass('bg-success');
                    i.addClass('border border-success');
                    break;
                default:
                    break;
            }
                   
        }
    
        function background(){
            b.css("background-image", "url(img/" + id + ".jpg)");
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
            });
        }
        return{
            classes
        }
    }

    function createAnimationsComponents(){
        function pulseMouseEnterAndLeave(selector){
            $(selector).bind('mouseenter mouseleave', function (e) { 
                if(e.type=='mouseenter') $(this).addClass('animated infinite pulse');
                else                     $(this).removeClass('animated infinite pulse');
            });
        }
        return{
            pulseMouseEnterAndLeave
        }   
    }
 });


