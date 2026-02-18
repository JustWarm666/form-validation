const form = document.getElementById("registerForm");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const Parol = document.getElementById("Parol").value;
    const Parol_PER = document.getElementById("Parol_PER").value;

    if (!name || !email || !Parol || !Parol_PER) {
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

    if (Parol !== Parol_PER) {
        output.textContent = "Паролі не співпадають.";
        return;
    }

    output.textContent = `${name}, Реєстрація успішна`;
});
