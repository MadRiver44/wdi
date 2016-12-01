#First, things first!
You are **required** to add a picture to your slack and github accounts. Please do so by **tonight**.

#Second, Slack the interview
In the GA-Student Slack, write a private message to Ariana (@arianadziedzic), attaching a picture of your interview and interview questions from today. Please do so by **tonight**.

#Third, Star Wars, the Command Line, and The Battle for the Fate of the Universe
Working in the command line is a key skill to develop as a programmer. It's a big break from what you're used to, and practice makes (eventually) perfect. Let's explore the Star Wars narrative using the command line!

Please record your commands underneath each bullet point in this markdown.

As you work, make sure you `git add .` and `git commit -m "[YOUR MESSAGE HERE]"`!

## "A New Hope"
### Act I

**In your unit01/w00_d01/homework directory, create a new directory called `star_wars`.** </br>
1. mkdir star_wars</br>

**In the `star_wars` folder, create two new directories: `empire` and `rebellion`.**</br>
1. cd star_wars</br>
2. mkdir empire</br>
3. mkdir rebellion</br>
4. ls (To verify the directories were made)</br>

**Inside the `empire` directory, create a .txt file called `darth_vader`.**</br>
1. cd empire</br>
2. touch darth_vader.txt</br>
3. ls (To verify doc was made)</br>

**Use the force (or your knowledge of the command line) to add the text "...heavy breathing..." to the `darth_vader` file. (Don't remember how to do this? Use the `other force`, known as Google!)**</br>
1. echo "...heavy breathing..." >> darth_vadar.txt</br>
2. cat darth_vader.txt (To verify the change was made)</br>

**Inside the `empire` directory, create a .txt file called `emperor_palpatine`.**</br>
1. pwd (To verify correct directory)</br>
2. touch emperor_palpatine.txt</br>
3. ls (To verify doc was made)</br>

**Inside the `empire` directory, create a directory called `death_star`.**</br>
1. pwd (To verify correct directory)</br>
2. mkdir death_star</br>
3. ls (To verify directory was made)</br>

**Move `darth_vader` into the `death_star`.**</br>
1. mv darth_vader.txt death star</br>
2. ls (To verify doc was mov)</br>
3. cd death_star</br>
4. ls (To verify the doc was moved correctly location)</br>

### Act II

**Move back to your `star_wars` directory, and enter the `rebellion` directory.**</br>
1. cd ../.. (moves you back to star_wars directory)</br>
2. cd rebellion</br>

**Create a file called `princess_leia` and add the text "Help me, Obi-Wan...You're my only hope."**</br>
1. touch princess_leia.txt</br>
2. echo "Help me, Obi-Wan...You're my only hope." >> princess_leia.txt</br>
3. cat princess_leia.txt (To verify addition)</br>

**Create a file called `obi_wan`.**</br>
1. touch obi_wan.txt</br>
2. ls (To verify doc was made)</br>

**Create a file called `luke_skywalker`.**</br>
1. touch luke_skywalker.txt </br>
2. ls (To verify doc was made) </br>

**Create a directory called `millenium_falcon`.**</br>
1. mkdir millenium_falcon </br>
2. ls (To verify that all of those additions were made)</br>

**Inside the `millenium_falcon`, create two files: `han_solo` and `chewy`.**</br>
1. cd millenium_falcon</br>
2. touch han_solo.txt</br>
3. touch chewy.txt</br>
4. ls (To verify that all of those additions were made)</br>

**Move `luke_skywalker`, `obi_wan`, and `princess_leia` into the `millenium_falcon`.**</br>
1. cd ..(moves you back to rebellion directory)</br>
2. mv luke_skywalker.txt obi_wan.txt princess_leia -t millenium_falcon</br>

**Move the `millenium_falcon` into the `death_star`.**</br>
1. mv millenium_falcon ../empire/death_star</br>
2. cd ../empire/death_star (To verify the movement)</br>

### Act III

**Unload the Millenium Falcon! Move the whole crew from the `millenium_falcon` directory into the `death_star` directory.** </br>
1. cd millenium_falcon</br>
2. mv luke_skywalker.txt obi_wan.txt princess_leia chewy.txt han_solo.txt -t ..</br>
3. cd ..</br>
4. ls (To verify the movement of the files)</br>

**`darth_vader` has defeated `obi_wan`! Delete poor `obi_wan`.**</br>
1. rm obi_wan</br>
2. ls (To verify removal)</br>

**Our heroes have disabled the tractor beam! Move the whole crew back into the `millenium_falcon`! Remember: `darth_vader` remains in the `death_star` and `emperor_palpatine` is still in the `empire`.**</br>
1. mv luke_skywalker.txt princess_leia chewy.txt han_solo.txt -t millenium_falcon</br>
2. ls (To verify the movement of the files)</br>

**Move the `millenium_falcon` back into the `rebellion` directory.**</br>
1. mv millenium_falcon ../../rebellion</br>
2. ls (To verify the movement of the files)</br>

**`darth_vader` leaves the `death_star` to pursue Luke! Move him from the `death_star` into the `empire` directory!**</br>
1. mv darth_vadar ../</br>
2. ls (to verify he moved)</br>

**Thanks to his practice back home at Beggar's Canyon, Luke blew up the `death_star`! Remove it from the galaxy!**</br>
1. rm -r death_star</br>
2. ls (to verify the directory was deleted)</br>

 :boom:

#### Act IV

## How to Submit Your Evening Exercise
Once you've completed your assignment, it's time to submit your work!  Please follow these instructions for all homework moving forward.  Return to this document as a reference.

* In your folder for today's class, `git add .` to add **all** your changes to the stage.

* Then `git commit -m "[YOUR COMMIT MESSAGE HERE]"`

* `git push origin master` to push your changes up to GitHub.

* Go to **your** GitHub in Chrome and navigate to the class repository.

* Find your folder for today's work, click it, and copy the URL to your clipboard.

* Navigate into the `/ga-students/WDI_NYC_HAKUNA_MATATA/unit_01/w00_d01/homework` directory


* On the left hand side of navbar, find the **Issues** tab and click on it.
* There you will find a sample issue for the hw submission. Investigate it.

* Create a new issue with your submission by clicking the green button(left hand side).

* Title your issue `Submission: Week Number/Day Number Your name`

* In the body of your issue, include the following information:
  * URL to your submission
  * **Comfortability** on a scale of 0 to 5 (5 being most comfortable).
  * **Completeness** on a scale of 0 to 5 (5 being 100% complete).
  * What was a **win** for the submission?
  * What was **most challenging**?
  * Add a question to instructors(if any).
  * Any other **comments** about this assignment.

  As a reference you can use this template:
--------------------------
### HW Submission Kate
#### [Link to homework](paste link to your repository where you pushed your homework)

| Self Assessment | From 0 to 5 |
| --- | --- |
| Comfort level |   5  |
| Completeness |  4  |
#### Win:
Oh Gosh! I reeeeally understood the command line basics!!! Feels great!

#### Struggle:
Hm, wish I I had more time to complete the reading..

#### Question to instructors:
none at the moment.

#### Comments:
I'm super excited to fully complete the homework! I feel super confident that I'm ready to take on all the material ! Bring it on :)

--------------
* Click **Submit new issue!**
