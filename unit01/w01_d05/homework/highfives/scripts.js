var player1 = [];
var remainingClassmates = [];
var playerArray = [];
var status = "";
var attendance = "";

class Creature {
  constructor({name}){
    this.enthusiasm = Math.floor((Math.random() * 100) + 1);
    this.name = name;
  }
  botchHighFive () {
    this.enthusiasm = 0;
  }
}

class Person extends Creature {
  constructor(options){
    super(options);
    this.readyToHighFive = true;
  }
  switchReadyToHighFive () {
    this.readyToHighFive = !this.readyToHighFive;
  }
  nailHighFive (encouragement = Math.floor((Math.random() * 10) + 1)) { // Random number 1..10
    this.enthusiasm += encouragement;
    this.switchReadyToHighFive();
  }
}

class SocialGroup {
  constructor (cliqueName) {
    this.cliqueName = cliqueName;
    this.members = [];
  }
  acceptMember ( member ) {
    this.members.push( member );
  }
  randomMember () {
    return this.members[ Math.floor(Math.random() * this.members.length) ];
  }
  mingleRandomMembers () {
    const highFiveInitiator = this.randomMember();
    const highFiveReceiver = this.randomMember();
    if (highFiveInitiator === highFiveReceiver) {
      var status = `Whoa, ${ highFiveInitiator.name }, no fair high-fiving yourself!`;
      alert(`Whoa, ${ highFiveInitiator.name }, no fair high-fiving yourself!`);
      this.mingleRandomMembers();
    }
    if ( highFiveInitiator.readyToHighFive && highFiveReceiver.readyToHighFive ){
      highFiveInitiator.nailHighFive();
      highFiveReceiver.nailHighFive();
      alert(`Bingo!  Looks like ${ highFiveInitiator.name } nailed a highfive with ${ highFiveReceiver.name }!`);
    } else {
      highFiveInitiator.botchHighFive();
      alert(`On No!!!  Lame! ${ highFiveInitiator.name } botched a highfive with ${ highFiveReceiver.name }!`);
    }
  }
  doubleTap () {
    const doubleTapInitiator = this.randomMember();
    const doubleTapReceiver = this.randomMember();
    if (doubleTapInitiator === doubleTapReceiver) {
      alert(`Whoa, ${ doubleTapInitiator.name }, no fair double-tapping yourself!`);
      this.doubleTap();
      this.doubleTapChance = Math.floor((Math.random() * 2) + 1); // Random number 1..2
    }
    if (this.doubleTapChance === 1) {
      this.enthusiasm = this.enthusiasm * 2;
      this.displayAttendance();
      alert(`Sweet! ${ doubleTapInitiator.name} just hit a doubleTap!`);
    }
    else {
      doubleTapInitiator.enthusiasm = 0;
      // remove creature from game => this.({name})???
      var z = hakunaMatata.indexOf(doubleTapInitiator);
      hakunaMatata.splice(z, 1);
      console.log();
      this.displayAttendance();
      alert(`Aw! ${ doubleTapInitiator.name } failed a doubleTap! Enthusiasm reset to zero.`);
    }
  }
  displayAttendance () {
    let displayReport = "~~~~ Enthusiasm Report ~~~~\n";
    for (let member of this.members) {
      displayReport += `  ${ member.name } ~ ${ member.enthusiasm }\n`;
      //output.innerHTML = displayReport;
    }
    displayReport +=  "~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
    console.log(displayReport);
    //output.innerHTML = displayReport;
  }
  anotherDay () {
    this.mingleRandomMembers();
    this.displayAttendance();
  }
}

let hakunaMatata = [
"Alex Diaz",
"Chiemeka Ihebom",
"Chris Wilkening",
"Franklin Brooks",
"Jason Humphreys",
"Jay Webbe",
"Jennifer Kaplan",
"Jon Zachary",
"Kate Shishkina",
"Matt Kersner",
"Shantel Moore",
"Steven Gallo",
"Tenzin Chhosphel",
"Treniese Ladson",
"Alex Lebedyev",
"Andrew Dallas",
"Anthony Mejia",
"Arbiter Alison",
"Ardit Basho",
"Ariana Dziedzic",
"Calvin Bowen Jr",
"Claudia Matos",
"Cresta White",
"Dain Chatel",
"Daquon H Simpson",
"Darc Boykin",
"David N",
"Dominic Farquharson",
"Erik Jönsson",
"J Silverstein",
"Jason John",
"Joe Keohan",
"Jozye M",
"Judicious Jerel",
"Karthik M",
"Kevin Turney",
"Kyla Massey",
"Macia Batista",
"Melvin Johnson",
"Michael Abele",
"Mimi Klein",
"Mohammed Islam",
"Paris Yee",
"Patrice Prosper",
"Patrick Andre",
"Roberto Sanchez",
"Shauan Ferreira Leite",
"Stefan Hartmann",
"Tenzin Tsagong",
"Val Rigodon",
"Vincent Abruzzo"];

const friends = new SocialGroup('bffs');

for (i=0; i<hakunaMatata.length; i++) {
  friends.acceptMember(new Person({name: (hakunaMatata[i])}))
}



//friends.acceptMember( new Person({name: 'Lichard DeGray'}) );
//friends.acceptMember( new Person({name: 'Kathew Bod'}) );
//friends.acceptMember( new Person({name: 'Omily Threa'}) );
//friends.acceptMember( new Person({name: 'Joy'}) );

friends.displayAttendance();




