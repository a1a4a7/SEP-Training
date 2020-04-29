var form = document.querySelector('form');

form.onsubmit = (e) => {
    e.preventDefault();
    let firstName = form.firstname.value;
    let lastName = form.lastname.value;
    let mobileNumber = form.mobilenumber.value;
    let email = form.email.value;

    console.log(firstName + lastName + ' has mobile number: ' + mobileNumber + ' and email is: ' + email);
    // console.log(form.firstname.value);
    form.reset();
}