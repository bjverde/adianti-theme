$(function () {
    window.addEventListener('keydown', function (e) {
        var code = e.which || e.keyCode;
        if (code == 116) e.preventDefault();
        else return true;
        var abas = $('#app-content-tab li');
        for (var i = abas.length; i > 0; i--) {
            if (abas[i - 1].tagName == "LI")
                abas[i - 1].children[0].children[0].click();
        }

    });

    // close side menu on small devices
    $('#side-menu a[generator="adianti"]').click(function () {
        $('body').removeClass('sidebar-open');
        $('body').scrollTop(0);
    });

    setTimeout(function () {
        $('#envelope_messages a').click(function () {
            $(this).closest('.dropdown.open').removeClass('open');
        });
        $('#envelope_notifications a').click(function () {
            $(this).closest('.dropdown.open').removeClass('open');
        });
    }, 500);

    $('.menu i.fa, .menu i.fas, .menu i.far, .menu i.fab').css('zoom', '120%');
    $('.menu i.fa, .menu i.fas, .menu i.far, .menu i.fab').css('margin-top', '8px');
    $('.menu ul li ul li i.fa, .menu ul li ul li i.far, .menu ul li ul li i.fas, .menu ul li ul li i.fab').css('margin-top', '5px');

    $('#leftsidebar a[generator="adianti"]').click(function () {
        $('body').scrollTop(0);
        $('body').removeClass('overlay-open');
        $('.overlay').hide();
    });

    $("#app-content-tab").on('click', 'li > a > button', function () {
        var tabContentId = $(this).parent().attr("href");
        $(tabContentId).remove(); //remove respective tab content
        $(this).parent().parent().remove(); //remove li of tab
        $('#app-content-tab a:last').tab('show'); // Select first tab
        var mod_sessao = tabContentId.substring(1, tabContentId.length);
        $.get('engine.php?class=LimpaSessao&modelo=' + mod_sessao);

    });

    $('#app-content-tab').on('click', 'a', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // ------------------------------------------------------- //
    // Multi Level dropdowns
    // ------------------------------------------------------ //
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass("show");


        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

    });
});

/**
 * Loads an HTML content
 */
function __adianti_load_html(content, afterCallback, url) {
    var match_container = content.match('adianti_target_container\\s?=\\s?"([0-z-]*)"');

    var match_title = content.match('adianti_target_title="(.*?)"');

    if (match_container == null && content.indexOf('widget="TWindow"') == -1) {
        var match_container = url.split('class=');
        match_container[1] = match_container[1].split('&');
        match_container[1] = match_container[1][0];
        var match_title = content.split('<li><span>');
        if (match_title.length > 1) {
            match_title = match_title[1].split('</span>');
            match_title[1] = match_title[0];
        } else {
            match_title = content.split('card-title">');
            if (match_title.length > 1) {
                match_title = match_title[1].split('</div>');
                match_title[1] = match_title[0];
            } else {
                match_title = content.split('panel-title">');
                if (match_title.length > 1) {
                    match_title = match_title[1].split('">');
                    match_title = match_title[1].split('</');
                    match_title[1] = match_title[0];
                } else {
                    match_title[0] = 'nao localizado';
                    match_title[1] = 'nao localizado';
                }
            }
        }
    }
    
    if (match_container == null && content.indexOf('<script language=') == 0 && content.indexOf('widget="TWindow"') == 0){
        content = content.replace(new RegExp("<script language='JavaScript'>", 'g'), '');
        content = content.replace(new RegExp("</script><div></div>", 'g'), '');
        content = content.replace(new RegExp('__adianti_error', 'g'), '');
        content = content.replace("(", '');
        content = content.replace(")", '');
        var dados = content.split(',');
        __adianti_error(dados[0], dados[1], function () {
        });
        if (typeof afterCallback == "function") {
            afterCallback(url, content);
        }
        return;
    }
    if (match_container !== null) {
        if (match_container[1] !== 'EmptyPage') {
            $('#app-content-tab').show();
            var target_container = match_container[1];

            var title = target_container;
            if (match_title !== null) {
                title = match_title[1];
            }

            var element = $('#' + target_container);

            if (element.length === 0) {
                var abas_total = $('#app-content-tab li').length;
                if (abas_total < 10) {
                    $('#app-content-tab.nav-tabs').append('<li class="nav-item"><a class="nav-link active" href="#' + target_container + '" role="tab">' +
                        '<button class="close closeTab" type="button">x</button>' + title + '</a></li>');
                    $(".nav").find(".active").removeClass("active");
                    $('#tab-content-page').append('<div class="tab-pane fade active" role="tabpanel" id="' + target_container + '"></div>');
                } else {
                    __adianti_error('Limite de Abas em aberto', 'Você esta com muitas abas em aberto, operação cancelada', function () {
                    });
                    if (typeof afterCallback == "function") {
                        afterCallback(url, content);
                    }
                    return;
                }
            }
            t_container = $('#' + target_container);
            t_container.empty();
            t_container.html(content);
            $('#app-content-tab').find('a[href="#' + target_container + '"]').tab('show');
        }
    } else if ($('[widget="TWindow"]').length > 0 && (content.indexOf('widget="TWindow"') > 0)) {
        $('[widget="TWindow"]').attr('remove', 'yes');
        $('#adianti_online_content').empty();
        content = content.replace(new RegExp('__adianti_append_page', 'g'), '__adianti_append_page2'); // chamadas presentes em botões seekbutton em window, abrem em outra janela
        $('#adianti_online_content').html(content);
        $('[widget="TWindow"][remove="yes"]').remove();
    } else {
        if (content && content.indexOf("TWindow") > 0) {
            content = content.replace(new RegExp('__adianti_append_page', 'g'), '__adianti_append_page2'); // chamadas presentes em botões seekbutton em window, abrem em outra janela
            $('#adianti_online_content').html(content);
        } else {
            if (typeof Adianti.onClearDOM == "function") {
                Adianti.onClearDOM();
            }

            $('[widget="TWindow"]').remove();
            $('#adianti_div_content').html(content);
            $('#app-content-tab').hide();
        }
    }

    if (typeof afterCallback == "function") {
        afterCallback(url, content);
    }
}

/**
 * Show message info dialog
 */
function __adianti_message(title, message, callback) {
    __adianti_dialog({type: 'success', title: title, message: message, callback: callback});
}

/**
 * Show standard dialog
 */
function __adianti_dialog(options) {
    setTimeout(function () {
        swal({
                html: true,
                title: options.title,
                text: options.message,
                type: options.type,
                allowEscapeKey: (typeof options.callback == 'undefined'),
                allowOutsideClick: (typeof options.callback == 'undefined')
            },
            function () {
                if (typeof options.callback != 'undefined') {
                    options.callback();
                }
            });
    }, 100);
}

/**
 * Show question dialog
 */
function __adianti_question(title, message, callback_yes, callback_no, label_yes, label_no) {
    setTimeout(function () {
        swal({
                html: true,
                title: title,
                text: message,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: label_yes,
                cancelButtonText: label_no
            },
            function (isConfirm) {
                if (isConfirm) {
                    if (typeof callback_yes != 'undefined') {
                        callback_yes();
                    }
                } else {
                    if (typeof callback_no != 'undefined') {
                        callback_no();
                    }
                }
            });
    }, 100);
}

$(document).on('click', 'ul.dropdown-menu a[generator="adianti"]', function () {
    $(this).parents(".dropdown.show").removeClass("show");
    $(this).parents(".dropdown-menu.show").removeClass("show");
});
