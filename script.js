const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Cek preferensi awal dari localStorage
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");

    // Ganti ikon
    themeIcon.classList.replace(isLight ? "fa-moon" : "fa-sun", isLight ? "fa-sun" : "fa-moon");

    // Simpan preferensi
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Form kosong!',
            text: 'Email dan password harus diisi.',
        });
        return;
    }

    if (email === 'admin@example.com' && password === '123456') {
        Swal.fire({
            icon: 'success',
            title: 'Login Berhasil!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = 'dashboard.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Login Gagal!',
            text: 'Email atau password salah.',
        });
    }
});