fetch("data.json")
  .then(response => response.json())
  .then(data => {

    const nom = localStorage.getItem("nom");
    const prenom = localStorage.getItem("prenom");

    if (!nom || !prenom) {
      alert("Erreur : informations manquantes");
      return;
    }

    // 🔍 chercher dans le JSON
    const user = data.find(e =>
      e.nom.toLowerCase() === nom.toLowerCase() &&
      e.prenom.toLowerCase() === prenom.toLowerCase()
    );

    if (user) {
        

    document.getElementById("bonjour").textContent =
    "Bonjour " + user.prenom ;


      document.getElementById("heure").textContent = user.heure;
      document.getElementById("jury").textContent = user.jury;
      document.getElementById("salle").textContent = user.salle;
      document.getElementById("accompagnant").textContent = user.accompagnant;
    } else {
      alert("Utilisateur non trouvé");
    }
  });

const select = document.getElementById("domaine");
const activitesContainer = document.getElementById("activites");

select.addEventListener("change", () => {
  const choix = select.value;

  // sauvegarde
  localStorage.setItem("domaine", choix);

  // reset affichage
  activitesContainer.innerHTML = "";

  if (choix === "numerique") {

    afficherCarte("Atelier GITI");
    afficherCarte("Billard");
    afficherCarte("Club LAN (PS5 / Switch)");
    afficherCarte("Babyfoot");
    afficherCarte("Unisique");

  } else if (choix === "energie") {

    afficherCarte("Atelier GETE");
    afficherCarte("Billard");
    afficherCarte("Club LAN (PS5 / Switch)");
    afficherCarte("Babyfoot");
    afficherCarte("Unisique3");

  } else if (choix === "les-deux") {

    afficherCarte("Atelier GITI");
    afficherCarte("Atelier GETE");
    afficherCarte("Billard");
    afficherCarte("Club LAN (PS5 / Switch)");
    afficherCarte("Babyfoot");
    afficherCarte("Unisique");

  }
});

// fonction carte
function afficherCarte(titre) {
  const card = document.createElement("div");
  card.classList.add("activite-card");

  card.innerHTML = `<h3>${titre}</h3>`;

  activitesContainer.appendChild(card);
}