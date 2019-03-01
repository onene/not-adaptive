$(document).ready(function() {
    /*модальное окно логина*/
    $('a#login').click(function() {
        event.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#modal_form').css('display', 'block').animate({
                opacity: 1,
                top: '50%'
            }, 200);
        });
    });
    $('#modal_close, #overlay').click(function() {
        $('#modal_form')
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function() {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    /*модальное окно перезвона*/
    $('a#call').click(function() {
        event.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#modal_form_call').css('display', 'block').animate({
                opacity: 1,
                top: '50%'
            }, 200);
        });
    });
    $('#modal_close, #overlay').click(function() {
        $('#modal_form_call')
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function() {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    /*маска поля телефонного номера*/
    $('#phone_number').mask("+3 (099) 999-99-99");
    /*модальное окно подписки и валидация почты*/
    $('#email_inp').on('blur', function() {
        let email = $(this).val();
        if (email.length > 0 &&
            (email.match(/.+?\@.+/g) || []).length !== 1) {
            alert('Вы ввели не корректный e-mail')
        } else {
            event.preventDefault()
            $('#overlay').fadeIn(400, function() {
                $('#modal_form_sub').css('display', 'block').animate({
                    opacity: 1,
                    top: '50%'
                }, 200);
            });
        }
    })
    $('#modal_close, #overlay').click(function() {
        $('#modal_form_sub')
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function() {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    /*очистка фильтров*/
    $("#some_form").on('submit', function() {
        target.reset()
    })
});