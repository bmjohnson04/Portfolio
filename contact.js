$('document').ready(function(){
init_contact_form();
});

function init_contact_form() {
  var $form = $('#contact_form'), $btn = $('#btnSubmit');

  $form.submit(function () {
    var $fullname = $('#fullname').val(),
        $email = $('#email').val(),
        $subject = $('#subject').val(),
        $message = $('#message').val();
        $human = $('#human').val();
    if ($fullname == "" || $email == "", $subject == "", $message == "") {
      alert('Please input the required fields');
    } else {
      $.ajax({
        method: "POST",
        url: "contact.php",
        data: {fullname:$fullname, email: $email, subject: $subject, message: $message, human:$human },
        beforeSend:function(){
          $btn.button('Sending');
        }
      }).done(function (data) {
        if(data.status != ""){
          alert(data.status);
        }
        $form.trigger('reset');
        $btn.button('reset');
      });
    }
    return false;
  });
}
