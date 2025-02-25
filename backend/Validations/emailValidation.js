function emailValidation(email) {

    if (!email) {
        return false;
    }

    let pettern =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = pettern.test(email)

    if (!result) {
        return false;
    }

    return true;
  
  }

  module.exports = emailValidation