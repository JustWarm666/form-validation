const form = document.getElementById("registerForm");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirmPassword) {
        output.textContent = "Всі поля повинні бути заповнені.";
        return;
    }

    if (!email.includes("@")) {
        output.textContent = "Email повинен містити символ @.";
        return;
    }

    if (password.length < 6) {
        output.textContent = "Пароль повинен містити не менше 6 символів.";
        return;
    }

    if (password !== confirmPassword) {
        output.textContent = "Паролі не співпадають.";
        return;
    }

    output.textContent = `Ім'я: ${name}, Email: ${email}. Реєстрація успішна!`;
});
