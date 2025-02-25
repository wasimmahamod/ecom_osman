function nameValidation (name, value) {
    if (!name) {
        return false;
    }

    let pettern = /^[a-zA-Z]+$/;
    let result = pettern.test(name)

    if (!result) {
        return false;
    }

    return true;

}

module.exports = nameValidation