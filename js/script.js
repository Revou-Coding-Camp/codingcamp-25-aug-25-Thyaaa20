function greet() {
  let name = prompt("Masukkan Nama Anda : ");
  document.getElementById('username').innerText = name || "Guest";
}
greet();


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("dob").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const message = document.getElementById("message").value;
  const time = new Date().toLocaleTimeString();

  const output = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Date of Birth:</strong> ${date}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><em>Submitted at: ${time}</em></p>
  `;

  document.getElementById("output").innerHTML = output;
});
