// Function to generate a random Captcha
function generateCaptcha() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captchaText").textContent = captcha;
}

// Call captcha generation when the page loads
window.onload = generateCaptcha;

function validateForm() {
    let username = document.getElementById("username").value.trim();
    let userCaptcha = document.getElementById("captchaInput").value.trim();
    let generatedCaptcha = document.getElementById("captchaText").textContent;
    let message = document.getElementById("message");

    // Username Validation: 6-12 characters, starts with a letter, allows letters, numbers, underscores, but doesn't end with a special character
    let usernamePattern = /^[A-Za-z][A-Za-z0-9_]{4,10}[A-Za-z0-9]$/;

    if (!usernamePattern.test(username)) {
        message.innerHTML = "❌ Invalid username! Must be 6-12 characters long, start with a letter, contain only letters, numbers, underscores, and not end with special characters.";
        message.className = "error";
        return;
    }

    if (userCaptcha === "") {
        message.innerHTML = "❌ Please enter the captcha!";
        message.className = "error";
        return;
    }

    if (userCaptcha !== generatedCaptcha) {
        message.innerHTML = "❌ Captcha does not match! Try again.";
        message.className = "error";
        return;
    }

    // If everything is valid
    message.innerHTML = "✅ Registration Successful!";
    message.className = "success";
}
