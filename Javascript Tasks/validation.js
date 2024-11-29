function checkdata() {
    // Fetch values
    let uname = document.getElementById("fname").value.trim();
    let uedu = document.getElementsByName("edu");
    let pwd = document.getElementById("fpwd").value;
    let email = document.getElementById("mail").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let gender = document.myform.gender;

    // Regular expressions for validation
    let uregname = /^[a-zA-Z ]{2,20}$/; // Name validation
    let upwd = /^(?=.*[A-Za-z])(?=.*[0-9])(?=(?:.*[^\w\s]){0,2})[A-Za-z0-9!@#$%^&*()_+]*.{8,20}$/; // Password validation
    let rmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation
    let rcontact = /^[6-9]\d{9}$/; // Contact Validation

    // Name validation
    if (uname === "") {
        window.alert("Full name is required.");
        document.getElementById("fname").focus();
        return false;
    }
    if (!uregname.test(uname)) {
        window.alert("Full name must contain characters only and be between 2 and 20 characters.");
        document.getElementById("fname").focus();
        return false;
    }

    // Qualification validation
    if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false)
        {
        window.alert("At least one qualification must be selected.");
        return false;
    }

    // Password validation
    if (!upwd.test(pwd)) {
        window.alert("Password must meet the following conditions:\n" +
            "- Minimum 8 characters and maximum 20 characters.\n" +
            "- Maximum of 2 symbols allowed.\n" +
            "- Maximum of 4 digits allowed.\n" +
            "- No spaces allowed.\n" +
            "- Both uppercase and lowercase letters are required.");
        document.getElementById("fpwd").focus();
        return false;
    }

    // Email validation
    if (email === "") {
        window.alert("Email is required.");
        document.getElementById("mail").focus();
        return false;
    }
    if (!rmail.test(email)) {
        window.alert("Please enter a valid email address.");
        document.getElementById("mail").focus();
        return false;
    }

    // Contact Number Validation
    if (contact === "") {
        alert("Contact number is required.");
        document.getElementById("contact").focus();
        return false;
    }
    if (!rcontact.test(contact)) {
        alert("Contact number must be a valid 10-digit number starting with 6-9.");
        document.getElementById("contact").focus();
        return false;
    }

    // Gender Validation
    let genderSelected = Array.from(gender).some((radio) => radio.checked);
    if (!genderSelected) {
        alert("Please select a gender.");
        return false;
    }


    // All validations passed
    window.alert("Form submitted successfully!");
    return true;
}
