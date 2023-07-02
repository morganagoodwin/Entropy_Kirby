var bigThree = [
    {
        name: "First Law of Thermodynamics",
        img: "fountainofdreams.webp",
        expl: "Matter can neither be created or destroyed."
    },
    {
        name: "Second Law of Thermodynamics",
        img: "fire.gif",
        expl: "Heat is transferred from one body to another body, from highest temperature to lowest."
    },
    {
        name: "Third Law of Thermodynamics",
        img: "ice.gif",
        expl: "The entropy of a system approaches a constant value as the temperature approaches zero."
    }
]
var flashCard = [
    {
    name: "Entropy",
    img: "marx.gif",
    expl: "The measurement of randomness in a system."
},
{
    name: "Enthalpy",
    img: "dance.gif",
    expl: "The measurement of available energy in a system."
},
{
    name: "Work",
    img: "hammer.gif",
    expl: "The process of a system exchanging energy with it's surroundings."
},
{
    name: "State Function",
    img: "kirbystate.gif",
    expl: "A function whose value is only dependent on the state of a system."
},
{
    name: "Reversible",
    img: "kiss.gif",
    expl: "A process that can be returned to it's initial state."
},
{
    name: "Irreversible",
    img: "irreversible.gif",
    expl: "A permanent proccess that is unable to return to it's original state."
},
{
    name: "System",
    img: "eating.gif",
    expl: "An amount of mass or a region in space that is of interest."
},
{
    name: "Surrounding",
    img: "kirby-ice-cream.gif",
    expl: "The mass or region outside of the system."
},
{
    name: "Gibbs Free Energy",
    img: "kirby-elec.gif",
    expl: "A potential to calculate the amount of work that can be performed by a closed system."
}

]
//Generating first three cards:
var threeBoard = document.getElementById("bigGrid");
var threeGrid = document.createElement("threeSection");
threeGrid.setAttribute("class", "bigGrid")
threeBoard.appendChild(threeGrid)

for (var i = 0; i < bigThree.length; i++){
    var bigCard = document.createElement("div");
    bigCard.classList.add("bigCard");

    var bigFront = document.createElement("div")
    bigFront.classList.add("bigFront");
    bigFront.style.backgroundImage = `url(${bigThree[i].img})`;

    var bigTexty = document.createElement("div")
    bigTexty.classList.add("bigText")
    var bigTitle = document.createTextNode(bigThree[i].name)
    bigTexty.appendChild(bigTitle)
    bigFront.appendChild(bigTexty);

    var bigBack = document.createElement("div");
    bigBack.classList.add("bigBack");
    var bigBackTexty = document.createElement("div")
    bigBackTexty.classList.add("backText")
    var bigDescription = document.createTextNode(bigThree[i].expl)
    bigBackTexty.appendChild(bigDescription)
    bigBack.appendChild(bigBackTexty)


    threeGrid.appendChild(bigCard);
    bigCard.appendChild(bigFront);
    bigCard.appendChild(bigBack);

}

//Generating the rest:
var game = document.getElementById("board");
var grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

  for (var i = 0; i < flashCard.length; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    
    var front = document.createElement("div");
    front.classList.add("front");
    front.style.backgroundImage = `url(${flashCard[i].img})`;

    var texty = document.createElement("div")
    texty.classList.add("text")
    var title = document.createTextNode(flashCard[i].name)
    texty.appendChild(title)
    front.appendChild(texty)
  
    var back = document.createElement("div");
    back.classList.add("back");
    var backTexty = document.createElement("div")
    backTexty.classList.add("backText")
    var description = document.createTextNode(flashCard[i].expl)
    backTexty.appendChild(description)
    back.appendChild(backTexty)
    
   
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  }

  //Making cards responsive:
grid.addEventListener("click", function (e) {
    var clicked = e.target;
    if (clicked.parentNode.classList.contains("selected")) {
        clicked.parentNode.classList.remove("selected")
    } else {
        clicked.parentNode.classList.add("selected") ||
        clicked.parentNode.classList.contains("selected")//  clicked.parentNode.classList.contains("selected")
    }
    
    
      
    
})

bigGrid.addEventListener("click", function (e) {
    var clicked = e.target;
    if (clicked.parentNode.classList.contains("selected")) {
        clicked.parentNode.classList.remove("selected")
    } else {
        clicked.parentNode.classList.add("selected") ||
        clicked.parentNode.classList.contains("selected")//  clicked.parentNode.classList.contains("selected")
    }
    
    
      
    
})