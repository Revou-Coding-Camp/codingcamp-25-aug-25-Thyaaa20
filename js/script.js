// Greet user
function greet() {
  let name = prompt("Masukkan Nama Anda : ");
  document.getElementById("username").innerText = name || "Guest";
}
greet();

// Form handling
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.getElementById("message").value;
  const time = new Date().toLocaleString();

  const output = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${dob}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Submitted At:</strong> ${time}</p>
  `;

  document.getElementById("output").innerHTML = `<h3 class="font-bold mb-2">Submitted Data:</h3>${output}`;
});
