// Greeting
function greet() {
  let name = prompt("Masukkan Nama Anda : ");
  document.getElementById('username').innerText = name || "Guest";
}
greet();

// Handle form submit
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const gender = document.getElementById("gender").value;
  const message = document.getElementById("message").value;
  const time = new Date().toLocaleTimeString();

  const output = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><em>Submitted at: ${time}</em></p>
  `;

  document.getElementById("output").innerHTML = output;
});
