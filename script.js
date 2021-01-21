function validateAll(){
    if(validateFirstName() && validateLastName() && validateEmail() && validatePhone() && validateAdress() && validateZipCode() && validateCity()){
        $('#submitButton').removeAttr('disabled');
    }
}

function validateFirstName(){
    if (/^[a-zA-ZåÅäÄöÖ]+$/.test($('#firstName').val())){
        $('#errorFirstName').hide();
        $('#firstName').css('border-color', 'lightgray');
        return(true)
    }
    $('#submitButton').attr('disabled', 'disabled');
    return(false)
}

function displayErrorFirstName(){
    if(!validateFirstName()){
        $('#errorFirstName').show();
        $('#firstName').css('border-color', 'red');
    }
}

function validateLastName(){
    if (/^[a-zA-ZåÅäÄöÖ]+$/.test($('#lastName').val())){
        $('#errorLastName').hide();
        $('#lastName').css('border-color', 'lightgray');
        return(true)
    }
    $('#submitButton').attr('disabled', 'disabled');
    return(false)
}

function displayErrorLastName(){
    if(!validateLastName()){
        $('#errorLastName').show();
        $('#lastName').css('border-color', 'red');
    }
}

function validateEmail(){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test($('#email').val())){
        $('#errorEmail').hide();
        $('#email').css('border-color', 'lightgray');
        return(true)
    }
    $('#submitButton').attr('disabled', 'disabled');
    return(false)
}

function displayErrorEmail(){
    if(!validateEmail()){
        $('#errorEmail').show();
        $('#email').css('border-color', 'red');
    }
}

function validatePhone(){
    if (/^[0-9]+$/.test($('#phone').val())){
        $('#errorPhone').hide();
        $('#phone').css('border-color', 'lightgray');
        return(true)
    }
    $('#submitButton').attr('disabled', 'disabled');
    return(false)
}

function displayErrorPhone(){
    if(!validatePhone()){
        $('#errorPhone').show();
        $('#phone').css('border-color', 'red');
    }
}

function validateAdress(){
    if (/^[a-zA-Z0-9 ]+$/.test($('#adress').val())){
        $('#errorAdress').hide();
        $('#adress').css('border-color', 'lightgray');
        return(true)
    }
    $('#submitButton').attr('disabled', 'disabled');
    return(false)
}

function displayErrorAdress(){
    if(!validateAdress()){
        $('#errorAdress').show();
        $('#adress').css('border-color', 'red');
    }
}

function validateZipCode(){
    if (/^[0-9]+$/.test($('#zipCode').val())){
        $('#errorZipCode').hide();
        $('#zipCode').css('border-color', 'lightgray');
        return(true)
    }
    $('#submitButton').attr('disabled', 'disabled');
    return(false)
}

function displayErrorZipCode(){
    if(!validateZipCode()){
        $('#errorZipCode').show();
        $('#zipCode').css('border-color', 'red');
    }
}

function validateCity(){
    if (/^[a-zA-ZåÅäÄöÖ]+$/.test($('#city').val())){
        $('#errorCity').hide();
        $('#city').css('border-color', 'lightgray');
        return(true)
    }
    $('#submitButton').attr('disabled', 'disabled');
    return(false)
}

function displayErrorCity(){
    if(!validateCity()){
        $('#errorCity').show();
        $('#city').css('border-color', 'red');
    }
}

var users = []

function getInfo(e) {
    var userObj = {
        firstName: e.target.form[0].value,
        lastName: e.target.form[1].value,
        email: e.target.form[2].value,
        phone: e.target.form[3].value,
        adress: e.target.form[4].value,
        zipCode: e.target.form[5].value,
        city: e.target.form[6].value
    };

    userObj.randomId = Date.now();
    users.push(userObj);

    e.target.form[0].value = '';
    e.target.form[1].value = '';
    e.target.form[2].value = '';
    e.target.form[3].value = '';
    e.target.form[4].value = '';
    e.target.form[5].value = '';
    e.target.form[6].value = '';
    $('#body').empty();

    users.forEach(function (user) {
        var div1 = $('<div></div>');
        var div2 = $('<div></div>');
        div1.addClass('flip');
        div2.addClass('panel');

        div1.append($('<p>').text(user.firstName + ' ' + user.lastName));
        div1.append($('<i>').addClass('fas fa-chevron-down'));
        div2.append($('<p>').html('<strong>E-postadress: </strong>' + user.email));
        div2.append($('<p>').html('<strong>Telefonnummer: </strong>' + user.phone));
        div2.append($('<p>').html('<strong>Postadress: </strong>' + user.adress));
        div2.append($('<p>').html('<strong>Postnummer: </strong>' + user.zipCode));
        div2.append($('<p>').html('<strong>Ort: </strong>' + user.city));
        div2.append($('<p>').html('<strong>Id: </strong>' + user.randomId));
        
        $('#body').append(div1, div2);
    });
}

var emailArray = [];
function uniqueEmail(){
    if(jQuery.inArray($('#email').val(), emailArray) !== -1){
        alert('Den här e-postadressen används redan!');
        $('#email').val('');
        $('#email').focus();
        stopImmediatePropagation()
        return;
    }
    emailArray.push($('#email').val());
}

$('#regForm').submit(function(e){
    e.preventDefault();
    $('#submitButton').attr('disabled', 'disabled');
});

$('#submitButton').on('click', uniqueEmail);

$('#submitButton').on('click', getInfo);

$('#submitButton').click(function(){
    $('.panel').hide();
});

$('#body').on('click','.flip', function(){
    $(this).next('.panel').slideToggle('slow');
    $(this).toggleClass('flip-background');
    $(this).find($('.fas')).toggleClass('.fas fa-chevron-up');
});

