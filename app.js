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

  const errorDiv = document.getElementById("error-message");
  if (employes.length === 0 || taches.length === 0) {
    errorDiv.textContent = "Veuillez entrer au moins un employé et une tâche.";
    return;
  } else {
    errorDiv.textContent = "";
  }

  let tacheIndex = 0;
  for (let i = 0; i < employes.length; i++) {
    const li = document.createElement("li");
    let tachesAssignees = [];
    let nbTaches = Math.floor(taches.length / employes.length);
    if (i < taches.length % employes.length) nbTaches += 1;
    for (let j = 0; j < nbTaches && tacheIndex < taches.length; j++) {
      tachesAssignees.push(taches[tacheIndex]);
      tacheIndex++;
    }
    if (tachesAssignees.length > 0) {
      li.textContent = `${employes[i]} doit faire ${tachesAssignees.join(", ")} ce soir.`;
    } else {
      li.textContent = `${employes[i]} ne fait rien ce soir.`;
      li.classList.add("rien");
    }
    results.appendChild(li);
  }
}