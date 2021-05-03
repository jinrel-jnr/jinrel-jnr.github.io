let displayRow = document.querySelector(".row2");
let displayTitle = document.querySelector(".title");
let displayInfos = document.querySelector(".infos");
let displayContent = document.querySelector(".contentSingle");
let itemId = document.querySelectorAll(".liste");
let item = document.querySelector("ul");
let count;

item.addEventListener("click", (e) => {
  let id = e.target.id;
  //   displayRow.textContent = e.srcElement.firstChild.data;
  displayRow.classList.add("info");

  switch (id) {
    case "0":
      reset();
      objetLitteral();
      break;
    case "1":
      reset();
      constructeurPersonnalise();
      break;
    case "2":
      reset();
      prototypes();
      break;
    case "3":
      reset();
      constructeurObjet();
      break;
    case "4":
      reset();
      heritage();
      break;
    case "5":
      reset();
      bindCallApply();
      break;
    case "6":
      reset();
      objetAvecClasseEtConstructeur();
      break;
    case "7":
      reset();
      getterSetter();
      break;

    default:
      reset();
      break;
  }
});

let reset = () => {
  displayInfos.hidden = false;
  displayContent.hidden = false;
  displayTitle.textContent = "A noter";
  displayInfos.textContent =
    "Vous pouvez choisir un objet de la liste pour voir le détail";
  displayContent.textContent = "Bonne visite :)";
};

// 1. CREER UN OBJET LITTERAL
//
//
//
// ***************** MISE EN FORME ********************* \\
//
//

let objetLitteral = () => {
  displayContent.style.display = "block";
  let titre = "Créer un objet littéral";
  let info =
    "A ne pas utiliser pour fonctionner sur de gros projets mais surtout pour transmettre des infos";
  displayTitle.textContent = titre;
  displayInfos.textContent = info;

  //
  // ***************** PRATIQUE ********************* \\
  //
  // variable contenant un objet - l'objet démarre à partir des accolades

  let mark = {
    prenom: "Mark", // <-- propriété != variable
    nom: "Zuckerberg",
    email: "rr@rr.fr",

    // A l'ancienne
    sePresenter: function () {
      displayContent.textContent = "Bonjour, je m'appelle " + this.prenom; // this remplace le mot-clef par celui de l'objet en cours
    },
  };

  mark.sePresenter();

  function recevoirLesCoordonnes() {
    return { latitude: 35, longitude: 139 };
  }

  let coordoones = recevoirLesCoordonnes();
  console.log();
  displayContent.textContent = coordoones.latitude + " " + coordoones.longitude;
};

// 2. Créer un objet avec un constructeur personnalisé
//
//
// ***************** MISE EN FORME ********************* \\
//
//

let constructeurPersonnalise = () => {
  displayTitle.style.display = "block";
  displayInfos.style.display = "block";
  displayContent.style.display = "block";
  let titre = "Créer un objet avec un constructeur personnalisé";
  let info = "création et utilisation du Constructeur ";
  displayTitle.textContent = titre;
  document.querySelector(".infos").textContent = info;

  //
  // ***************** PRATIQUE ********************* \\
  //
  //

  // on crée une fonction constructeur pour nos utilisateurs
  function Utilisateur(prenom, nom, email) {
    // prenom : prenom <-- non
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;

    this.sePresenter = () => {
      let coucou =
        "Bonjour, je m'appelle " +
        this.prenom +
        " " +
        this.nom +
        ".\n Vous pouvez me contacter à l'adresse email : " +
        this.email;
      return coucou;
    };
  }

  // On crée un objet
  var toto = new Utilisateur("Toto", "Ducks", "toto@riri.pcs");
  var riri = new Utilisateur("Riri", "Ducks", "riri@riri.pcs");

  riri.passion = "Chasse aux oeufs";

  console.log(toto);
  displayContent.textContent = riri.sePresenter();
  console.log(riri);

  function Logement(type, annee, placeDeParking, proprietaire) {
    this.type = type;
    this.annee = annee;
    this.placeDeParking = placeDeParking;
    this.proprietaire = proprietaire;
  }

  var appartA = new Logement("Maison", "1876", true, riri);
  console.log(appartA);
  console.log(appartA.proprietaire.sePresenter());
};

// 3. Prototypes (chaîne des prototypes)
//
//
// ***************** MISE EN FORME ********************* \\
//
//

let prototypes = () => {
  displayTitle.style.display = "block";
  displayInfos.style.display = "block";
  displayContent.style.display = "block";
  let titre = "Prototypes (chaîne des prototypes)";
  let info = "A la place des classes, utilise des prototypes. ";
  let content =
    "Cf ligne __PROTO__ dans la console. Le prototype est une nouvelle propriété qui s'ajoute à l'objet. Cette propriété contient le constructeur Object qui permet de créer des objets génériques (dont des constructeurs).";
  displayTitle.textContent = titre;
  displayInfos.textContent = info;
  displayContent.textContent = content;

  //
  // ***************** PRATIQUE ********************* \\
  //
  //

  function Utilisateur(prenom, nom, email) {
    // prenom : prenom <-- non
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;

    this.sePresenter = () => {
      let coucou =
        "Bonjour, je m'appelle " +
        this.prenom +
        " " +
        this.nom +
        ".\n Vous pouvez me contacter à l'adresse email : " +
        this.email;
      return coucou;
    };
  }

  // On crée un objet
  var riri = new Utilisateur("Riri", "Ducks", "riri@riri.pcs");
  console.log(riri);
};
// 4. Créer un objet avec le constructeur Objet
//
//
// ***************** MISE EN FORME ********************* \\
//
//

let constructeurObjet = () => {
  displayTitle.style.display = "block";
  displayInfos.style.display = "block";
  displayContent.style.display = "block";
  let titre = "Créer un objet avec le constructeur Objet";
  let info = "Mise en pratique de Object()";
  displayTitle.textContent = titre;
  displayInfos.textContent = info;

  //
  // ***************** PRATIQUE ********************* \\
  //
  //

  function Utilisateur(prenom, nom, email) {
    // prenom : prenom <-- non
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
  }

  // attribue la méthode au parent Object - transmis par héritage
  Utilisateur.prototype.sePresenter = function () {
    let coucou =
      "Bonjour, je m'appelle " +
      this.prenom +
      " " +
      this.nom +
      ".\nVous pouvez me contacter à l'adresse email : " +
      this.email;
    return coucou;
  };
  // On crée un objet
  var riri = new Utilisateur("Riri", "Ducks", "riri@riri.pcs");
  console.log(riri); // Javascript ajoute une propriété __proto__ et constructor
  console.log(riri.sePresenter());

  // Créer un objet avec Object()
  var monObjet = new Object();
  monObjet.titre = "Le titre de l'objet";
  displayContent.textContent = monObjet.titre;
  displayContent.textContent = riri.sePresenter();
};

// 5. Comprendre l'héritage
//
//
// ***************** MISE EN FORME ********************* \\
//
//

let heritage = () => {
  displayTitle.style.display = "block";
  displayInfos.style.display = "block";
  displayContent.style.display = "block";
  let titre = "Comprendre l'héritage";
  let info =
    "Grace aux prototypes, on peut améliorer la factorisation et la hiérarchisation des méthodes transmisent par héritage";
  displayTitle.textContent = titre;
  document.querySelector(".infos").textContent = info;

  //
  // ***************** PRATIQUE ********************* \\
  //
  //
  //Animal (nombreDePattes, poids)
  function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;
  }

  Animal.prototype.presentation = function () {
    console.log(
      "Cet animal possède " +
        this.nombreDePattes +
        " pattes et fait " +
        this.poids +
        "."
    );
  };

  //   var Animal = (nombreDePattes, poids) => {
  //     this.nombreDePattes = nombreDePattes;
  //     this.poids = poids;
  //   };

  // Oiseau (nombreDePattes, poids / longueurDesAiles)
  function Oiseau(nombreDePattes, poids, longueurDesAiles) {
    Animal.call(this, nombreDePattes, poids);
    // La fonction Call() permet d'appeler une fonction constructeur : en premier paramètre (this) on donne l'objet actuel, ensuite, on donne les arguments de son constructeur
    this.longueurDesAiles = longueurDesAiles;
  }
  Oiseau.prototype = Object.create(Animal.prototype);
  Oiseau.prototype.constructor = Oiseau;
  Mammifere.prototype = Object.create(Animal.prototype);
  Mammifere.prototype.constructor = Mammifere;

  //Mammifere (nombreDePattes, poids / typeDePoils)
  function Mammifere(nombreDePattes, poids, typeDePoils) {
    Animal.call(this, nombreDePattes, poids);
    this.typeDePoils = typeDePoils;
  }

  var perroquet = new Oiseau(21, "11kg", "grandes");
  var vache = new Mammifere(30, "135kg", "Courts");
  console.log(perroquet);
  displayContent.textContent = perroquet.presentation;
  vache.presentation();
};

// 6. Bind, Call et Apply
//
//
// ***************** MISE EN FORME ********************* \\
//
//
let bindCallApply = () => {
  displayTitle.style.display = "block";
  displayInfos.style.display = "block";
  displayContent.style.display = "block";
  let titre = "Bind, Call et Apply";
  let info =
    "Note : pas fait pour fonctionner sur de gros projets. Surtout utilisé pour transmettre des infos";
  let content = "All permet d'invoquer immédiatement une fonction";
  displayTitle.textContent = titre;
  document.querySelector(".infos").textContent = info;
  document.querySelector(".contentSingle").textContent = content;

  //
  // ***************** PRATIQUE ********************* \\
  //
  //

  let gandalf = {
    titre: "Magicien",
    // arme: "Bâton en Accacia",
    // degats: "99999999999",
  };

  function direBonjour(arme, degats) {
    displayContent.textContent = "Bonjour " + this.titre;
    console.log(
      "Bonjour " +
        this.titre +
        ", vous posédez " +
        arme +
        " qui donne " +
        degats +
        " points de dégats."
    );
  }

  direBonjour.apply(gandalf, ["un bâton", 875]);
  direBonjour.call(gandalf, "un bâton", 875);

  // Bind
  // Objectif : changer le contexte de "this".

  this.valeur = "Window";

  let monObjet = {
    valeur: "Objet",
    getValeur: function () {
      console.log(this.valeur);
    },
  };

  monObjet.getValeur();
  let maValeur = monObjet.getValeur;
  maValeur();

  let maValeurAvecBind = monObjet.getValeur.bind(monObjet);
  maValeurAvecBind();
};

// 7. Créer un objet avec une classe et un constructeur
//
//
// ***************** MISE EN FORME ********************* \\
//
//

let objetAvecClasseEtConstructeur = () => {
  displayTitle.style.display = "block";
  displayInfos.style.display = "block";
  displayContent.style.display = "block";
  let titre = "Créer un objet avec une classe et un constructeur";
  let info =
    "Note : pas fait pour fonctionner sur de gros projets. Surtout utilisé pour transmettre des infos";
  let content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem temporibus ipsum dicta suscipit atque. Velit repudiandae aperiam nisi neque enim adipisci harum sapiente, amet odit inventore eligendi placeat iste!  Voluptas quia eaque unde, repudiandae veritatis dolore beatae ducimus iste! Eligendi voluptates mollitia repellat laudantium suscipit ex iusto dolor distinctio voluptas sapiente odio tempore error voluptatem, molestiae quod dolores veniam!   Dolore iure voluptatem doloremque reprehenderit vel?";
  displayTitle.textContent = titre;
  document.querySelector(".infos").textContent = info;
  document.querySelector(".contentSingle").textContent = content;
};

// 8. Les Getter et les Setter
//
//
// ***************** MISE EN FORME ********************* \\
//
//

let getterSetter = () => {
  displayTitle.style.display = "block";
  displayInfos.style.display = "block";
  displayContent.style.display = "block";
  let titre = "Les Getter et les Setter";
  let info =
    "Note : pas fait pour fonctionner sur de gros projets. Surtout utilisé pour transmettre des infos";
  let content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem temporibus ipsum dicta suscipit atque. Velit repudiandae aperiam nisi neque enim adipisci harum sapiente, amet odit inventore eligendi placeat iste!  Voluptas quia eaque unde, repudiandae veritatis dolore beatae ducimus iste! Eligendi voluptates mollitia repellat laudantium suscipit ex iusto dolor distinctio voluptas sapiente odio tempore error voluptatem, molestiae quod dolores veniam!   Dolore iure voluptatem doloremque reprehenderit vel?";
  displayTitle.textContent = titre;
  document.querySelector(".infos").textContent = info;
  document.querySelector(".contentSingle").textContent = content;
};
