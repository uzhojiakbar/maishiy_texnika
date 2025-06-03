function isAdminLoggedIn() {
  return localStorage.getItem("isAdmin") === "true";
}

function updateAdminPanelBtn() {
  const btn = document.getElementById("adminPanelBtn");
  if (!btn) return;
  if (isAdminLoggedIn()) {
    btn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Chiqish';
  } else {
    btn.innerHTML = '<i class="fas fa-user-shield"></i> Admin panel';
  }
}

function handleAdminPanelClick(event) {
  if (event) event.stopPropagation();
  if (isAdminLoggedIn()) {
    localStorage.removeItem("isAdmin");
    document.location.reload(); // Reload the page to update UI
  } else {
    // Modalni ochish uchun .active class qo'shamiz
    document
      .querySelectorAll(".modal-container")
      .forEach((modal) => modal.classList.remove("active"));
    var modal = document.getElementById("adminPanelModal");
    if (modal) modal.classList.add("active");
    var err = document.getElementById("adminLoginError");
    if (err) err.style.display = "none";
    var form = document.getElementById("adminLoginForm");
    if (form) form.reset();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateAdminPanelBtn();

  // Admin login form handler
  const adminLoginForm = document.getElementById("adminLoginForm");
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("adminUsername").value.trim();
      const password = document.getElementById("adminPassword").value.trim();
      const errorDiv = document.getElementById("adminLoginError");
      if (username === "admin" && password === "admin") {
        localStorage.setItem("isAdmin", "true");
        if (typeof closeModal === "function") closeModal();
        // Show toast on successful admin login
        if (typeof showToast === "function") {
          showToast("Admin panelga muvaffaqiyatli kirdingiz!", "success");
          document.location.reload(); // Reload the page to update UI
        }
      } else {
        errorDiv.textContent = "Login yoki parol noto'g'ri!";
        errorDiv.style.display = "block";
      }
    });
  }
});
