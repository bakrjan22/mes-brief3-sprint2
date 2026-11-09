const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};
let submit_button = document.getElementById("submit-button");

let atelier_div = document.getElementById("liste-ateliers");
function html_atelier(ateliers) {
  let label_carte_choix = document.createElement("label")
  label_carte_choix.className = "carte-choix";
  atelier_div.appendChild(label_carte_choix);

  label_carte_choix.addEventListener("click",() => {
    selectedConfig.atelierId = ateliers.id;
    console.log(selectedConfig);
  })


  let card_inp = document.createElement("input");
  card_inp.type = "radio";
  card_inp.name = "atelier";
  card_inp.value = "";
  card_inp.required = "";
  card_inp.ariaDescription = "erreur-atelier";
  label_carte_choix.appendChild(card_inp);

  let span = document.createElement("span");
  label_carte_choix.appendChild(span);

  let strong = document.createElement("strong");
  strong.className = "atelier-titre";
  strong.textContent = ateliers.titre;
  span.appendChild(strong);

  let sub_span = document.createElement("span");
  sub_span.className = "atelier-places detail";
  sub_span.textContent = ateliers.places + " Places Disponible";
  span.appendChild(sub_span);
}
function afficher_atelier() {
  config.ateliers.forEach((atelier) => {
    if(atelier.places > 0){
      html_atelier(atelier);
    }
  });
}
let list_mode = document.getElementById("liste-modes");
function html_mode(mode_value) {
  let label_carte_choix= document.createElement("label")
  label_carte_choix.className = "carte-choix";
  list_mode.appendChild(label_carte_choix);
  
  let card_inp = document.createElement("input");
  card_inp.type = "radio";
  card_inp.name = "mode";
  card_inp.value = "";
  card_inp.required = "";
  card_inp.ariaDescription = "erreur-atelier";
  label_carte_choix.appendChild(card_inp);
  
  label_carte_choix.addEventListener("click",() => {
    if(mode_value == "À distance"){
      selectedConfig.mode = mode_value;
    }else{
      selectedConfig.mode = mode_value;
    }    
    affiche_type()
  })
  let span = document.createElement("span");
  span.className = "mode-libelle";
  span.textContent = mode_value;
  label_carte_choix.appendChild(span);
}
function afficher_mode() {
  html_mode(config.modes.presentiel);
  html_mode(config.modes.distance);
}
let liste_campus = document.getElementById("liste-campus");
function html_campus(campus_name) {
  let label_carte_choix= document.createElement("label")
  label_carte_choix.className = "carte-choix";
  liste_campus.appendChild(label_carte_choix);
  
  let card_inp = document.createElement("input");
  card_inp.type = "radio";
  card_inp.name = "campus";
  card_inp.value = "";
  card_inp.required = "";
  card_inp.ariaDescription = "erreur-atelier";
  label_carte_choix.appendChild(card_inp);

  card_inp.addEventListener("click", () => {
    selectedConfig.campus = campus_name;
    console.log(selectedConfig);
    
  })
  
  let span = document.createElement("span");
  span.className = "mode-libelle";
  span.textContent = campus_name;
  label_carte_choix.appendChild(span);
}
function affiche_campus(){
  liste_campus.textContent = "";
  config.campus.forEach((camp) => {
    html_campus(camp);
  })
}
let champ_email = document.getElementById("champ-email");
let email = document.getElementById("email");

afficher_atelier();
afficher_mode();

let champ_campus = document.getElementById("champ-campus");
function affiche_type(){
  if(selectedConfig.mode == "En présentiel"){
    champ_campus.hidden = false;
    champ_email.hidden = true;
    affiche_campus();
  }else{
    champ_campus.hidden = true;
    liste_campus.textContent = "";
    champ_email.hidden = false;
  }
}



submit_button.addEventListener("click",(e) => {
  e.preventDefault();
  selectedConfig.email = email.value;
  if(selectedConfig.atelierId == null){
    alert("please select atelier");
  }
  if(selectedConfig.mode == ""){
    alert("please select mode");
  }
  if(selectedConfig.mode == "En présentiel" && selectedConfig.campus == ""){
    alert("please select campus");
  }
  if(selectedConfig.mode == "À distance" && selectedConfig.email == ""){
    alert("please enter a email");
  }
})