# THE Witch and the GOBLINS

![WITCH](https://s-media-cache-ak0.pinimg.com/236x/dc/71/cd/dc71cd2630c10caea1decdd73c8ddb50.jpg)

There are 100 Goblins suffering from acid reflux, and there is sadistic witch doctor with the cure. The witch doctor could cure all of the Goblins if desired, but because of cruelty the witch choose to torture the Goblins with a little game.

#### The witch will meet with these 100 Goblins 100 times.
Each time the Goblins will line up in a straight line 1 - 100, once the Goblins line up they cannot change their position in line anymore (so the order of the Goblins in line doesn't change.)

#### For the first time when the witch meets with these 100 Goblins.
The witch starts from the beginning of the line and gives each of them the cure in turn, all 100 Goblins.
(At this point all 100 Goblins has a cure in hand.)

#### For the second time the witch meets with these Goblins.
The witch starts from the beginning of the line again...but
This time the witch will be starting with the second Goblin, and for every second Goblin The witch does the following:

if that Goblin has a cure the witch will take it away.
(At this point 50 Goblins still have the cure in hand, but the other 50 got the cure taken away)

#### For the third time the witch starts from the beginning of the line and again...
Starting with the third Goblin, and for every third Goblin The witch does the following:

if that Goblin has a cure the witch will take it away, but if the Goblin has no cure, the witch will give that Goblin a cure.
(At this point some number Goblins will have cure in hand, and some won't.)

#### The witch does it a fourth time, and goes to every fourth Goblin as the third time.
Then a fifth time.
Then a sixth time.
Etc...
For a total of 100 times...

### At the end how many Goblins will have a cure in their hand.
And at which positions in line will those Goblins be standing.

Geez! GO!

let gobs = [];
for(let i=0;i<100;i++){
  gobs.push(false);
}
function witch(n){
  for(let i=0;i<100;i++){
      if(i%n===0){
      gobs[i] = !gobs[i]
      }
    }
  }
function metaWitch(){
  for(let i=0;i<100;i++){
    witch(i);
  }
}
metaWitch();


let cured = [];
for(let i = 0;i<100;i++){
  if(gobs[i]===true){
    cured.push(i+1);
  }
}

console.log(cured);
