const baseURL = "http://localhost:5000/api";

document.getElementById("registerForm")?.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const location = document.getElementById("location").value;
  const availability = document.getElementById("availability").value;

  const res = await fetch(`${baseURL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, location, availability })
  });

  const data = await res.json();
  if (res.ok) {
    alert("Registration successful! Redirecting to login...");
    window.location.href = "index.html";
  } else {
    alert(data.message || "Registration failed");
  }
});
