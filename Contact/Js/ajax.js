$(function (){
    $('#contact-form').submit(function(e){
        e.preventDefault();
        $('.comments').empty();

        var postData = $('#contact-form').serialize();

        $.ajax({
            type: 'POST',
            URL:'php/contact.php',
            data: postdata,
            datatype: 'json',
            success: function(result){
                if(result.isSuccess){
                    $('#contact-form').append("<p class= 'thank-you'> Votre Message a ete bien envoye. Merci de m' avoir contacte </p>");
                    $('#contact-form')[0].reset();
                }else{
                    $('#firstname + .comments').html(result.firstnameError);
                    $('#name + .comments').html(result.nameError);
                    $('#mail + .comments').html(result.mailError);
                    $('#phone + .comments').html(result.phoneError);
                    $('#message + .comments').html(result.messageError);
                }
            },
        })
    });
})