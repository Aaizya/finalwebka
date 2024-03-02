function visibilityPassword() {
    try {
        let passwordCheckButton = document.getElementById('passwordCheckButton');
        let visibility = document.getElementById('visibility_check_password');
        let unvisibility = document.getElementById('unvisibility_check_password');
        let visibilityTest = false;

        let inputPassword = document.getElementById('input_password');

        if (!passwordCheckButton || !visibility || !unvisibility || !inputPassword) {
            throw new Error("Required DOM elements not found.");
        }

        passwordCheckButton.addEventListener('click', () => {
            if (visibilityTest) {
                visibilityTest = false;
                visibility.style.display = 'block';
                unvisibility.style.display = 'none';

                inputPassword.type = 'text';
            } else {
                visibilityTest = true;
                unvisibility.style.display = 'block';
                visibility.style.display = 'none';

                inputPassword.type = 'password';
            }
        });
    } catch (error) {
        console.error("Error in visibilityPassword function:", error);
    }
}

visibilityPassword();

function checkValidate() {
    try {
        let validate_first = document.getElementById('dragdown_first');
        let validate_second = document.getElementById('dragdown_second');
        let validate_third = document.getElementById('dragdown_third');
        let validate_fourth = document.getElementById('dragdown_fourth');
        let validUsername = document.getElementById("validate_username");
        let checkbox = document.getElementById('checkbox_accept_sign-up');
        let checkedBox = document.getElementById('checkedBox');
        let submitButton = document.getElementById('submit_button');
        let test = false;

        let inputPassword = document.getElementById('input_password').value;
        let inputRepeatPassword = document.getElementById('input_repeat_password').value;
        let inputUsername = document.getElementById("input_username").value;

        if (!validate_first || !validate_second || !validate_third || !validate_fourth || !validUsername || !checkbox || !checkedBox || !submitButton) {
            throw new Error("Required DOM elements not found.");
        }

        inputPassword = inputPassword.trim();
        document.getElementById('input_password').value = inputPassword;

        inputRepeatPassword = inputRepeatPassword.trim();
        document.getElementById('input_repeat_password').value = inputRepeatPassword;

        if(inputPassword.match(/[A-Z]/i)) {
            validate_first.style.backgroundColor = "#00A36C";
            test = true;
        } else {
            validate_first.style.backgroundColor = "#e4e6ef";
            test = false;
        }

        if(inputPassword.match(/[0-9]/i)) {
            validate_second.style.backgroundColor = "#00A36C";
            test = true;
        } else {
            validate_second.style.backgroundColor = "#e4e6ef";
            test = false;
        }

        if(inputPassword.match(/[^A-Za-z0-9-'']/i)) {
            validate_third.style.backgroundColor = "#00A36C";
            test = true;
        } else {
            validate_third.style.backgroundColor = "#e4e6ef";
            test = false;
        }

        if(inputPassword.length >= 8) {
            validate_fourth.style.backgroundColor = "#00A36C";
            test = true;
        } else {
            validate_fourth.style.backgroundColor = "#e4e6ef";
            test = false;
        }

        inputUsername = inputUsername.trim();
        document.getElementById('input_username').value = inputUsername;

        if(((inputPassword.match(/[A-Za-z]/i)) && (inputPassword.match(/[0-9]/i)) && (inputPassword.match(/[^A-Za-z0-9-'']/i)) && (inputPassword.length >= 8)) && (inputPassword == inputRepeatPassword)) {
            if((inputUsername.match(/[A-Za-z]/i)) && (inputUsername.length >= 5)) {
                test = true;
                validUsername.style.display = "none";
            } else {
                test = false;
                validUsername.style.display = "block";
            }
        }

        if(test) {
            checkbox.style.display = "block";
            submitButton.style.marginTop = "30px";
        } else {
            checkbox.style.display = "none";
            submitButton.style.marginTop = "30px";
        }

        if(checkedBox.checked) {
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "#0096FF";
            submitButton.style.cursor = "pointer";
        } else {
            submitButton.disabled = true;
            submitButton.style.backgroundColor = "#5e6778";
            submitButton.style.cursor = "default";
        }
    } catch (error) {
        console.error("Error in checkValidate function:", error);
    }
}

checkValidate();
