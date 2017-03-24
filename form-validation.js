function register(){
	//Grab the user's input and store in variables
	var userEntered = document.getElementById("user").value;
	var passEntered = document.getElementById("pass").value;
	// store length of username in var
}

function validateUsername() {
	//show username error message if length is too short
	if (userEntered.length < 6) {
		document.getElementById("usernameError").innerHTML="Username too short.";
		document.getElementById("usernameError").classList.remove("hidden-message");
		document.getElementById("usernameError").classList.add("shown-message");
		//Turn the username items red
		document.getElementById("usernameGroup").classList.add("has-error");
		document.getElementById("usernameGroup").classList.remove("has-success");
	}
	//show username error message if username contains a space
	if (userEntered.indexOf(" ") > 0) {
		document.getElementById("usernameError").innerHTML="Usernames can't contain spaces.";
		document.getElementById("usernameError").classList.remove("hidden-message");
		document.getElementById("usernameError").classList.add("shown-message");
		//Turn the username items red
		document.getElementById("usernameGroup").classList.add("has-error");
		document.getElementById("usernameGroup").classList.remove("has-success");
	}
	//otherwise flag successful username entry
	else {
		document.getElementById("usernameGroup").classList.add("has-success");
		document.getElementById("usernameGroup").classList.remove("has-error");
	}
}

function validatePassword() {	
	//show password error message if user entered "password" as a password
	if (passEntered.toLowerCase() == "password") {
		document.getElementById("passwordError").innerHTML="Password cannot be \"password\".";
		document.getElementById("passwordError").classList.remove("hidden-message");
		document.getElementById("passwordError").classList.add("shown-message");
		//Turn the password items red
		document.getElementById("passwordGroup").classList.add("has-error");
		document.getElementById("passwordGroup").classList.remove("has-success");
	}
	//show password error message if password length invalid
	if (passEntered.length < 6 || passEntered.length > 20) {
		document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters.";
		document.getElementById("passwordError").classList.remove("hidden-message");
		document.getElementById("passwordError").classList.add("shown-message");
		//Turn the password items red
		document.getElementById("passwordGroup").classList.add("has-error");
		document.getElementById("passwordGroup").classList.remove("has-success");
	}
	//show password error message if password is the same as username
	if (passEntered == userEntered) {
		document.getElementById("passwordError").innerHTML="Password must be different from username.";
		document.getElementById("passwordError").classList.remove("hidden-message");
		document.getElementById("passwordError").classList.add("shown-message");
		//Turn the password items red
		document.getElementById("passwordGroup").classList.add("has-error");
		document.getElementById("passwordGroup").classList.remove("has-success");
	}
	//otherwise flag successful password entry
	else {
		document.getElementById("passwordGroup").classList.add("has-success");
		document.getElementById("passwordGroup").classList.remove("has-error");
	}
}
