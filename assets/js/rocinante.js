(function(document) {
  document.addEventListener('click', function(e) {
    const target = e.target;
    const emailHooks = document.getElementsByClassName('email-hook');
    const emailText = document.querySelector(`#email-text-${target.id}`);
    if(emailHooks.namedItem(target.id)) {
      if (emailText) {
        if (emailText.innerHTML == emailId)
          emailText.innerHTML = '';
        else {
          emailText.innerHTML = emailId;
          emailText.href = 'mailto:'+emailId
        }
      } else {
        target.innerHTML = emailId;
        target.href = 'mailto:'+emailId
        target.className = ''
      }
      e.preventDefault();
    }
  }, false);
})(document);