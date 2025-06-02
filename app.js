function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function assignTasks() {
  const employes = document.getElementById("employes").value
    .split("\n")
    .map(e => e.trim())
    .filter(e => e.length > 0);
  const taches = document.getElementById("taches").value
    .split("\n")
    .map(t => t.trim())
    .filter(t => t.length > 0);

  shuffle(employes);
  shuffle(taches);

  const results = document.getElementById("results");
  results.innerHTML = "";

  for (let i = 0; i < Math.min(employes.length, taches.length); i++) {
    const li = document.createElement("li");
    li.textContent = `${employes[i]} doit faire ${taches[i]} ce soir.`;
    results.appendChild(li);
  }
}