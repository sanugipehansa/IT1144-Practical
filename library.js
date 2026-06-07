document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
    alert("You selected: " + item.querySelector('p').textContent);
  });
});

document.getElementById("sendbtn").addEventListener("click", function() {
  alert("Your message has been sent successfully!");
});