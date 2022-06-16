# Find Your Band Members 
A web application built with Angular that musicians can use to find people to form musical bands. 

To see the app demo click [here](https://youtu.be/Dc2MF4MxThE).

## Team Members: 
- Petre-Vlad Mihaela 241 
- Pletea Andi-Emilian 242 
- Vrinceanu Vlad-Florin 242
  

## Short Description: 
On sign up, a new user's profile page is created automatically. Users can edit their profile anytime they want. They can also create a band profile from their profile page. The information in both profiles is stored in the database.

If the users are part of a band they can edit the information on the band's profile page. In order to find new band members, the current members can complete a survey from their band's profile page. The results are based on the user profiles' information stored in the database. The survey gives a list of candidates with links to their profiles. The band members can send each candidate an invitation to join their band. 

The invitations to join bands will appear at the top of the users' profile page. Each invitation has a link to its respective band's profile and can be accepted or declined by the users. If the users accept an invitation they are added to the band members list and all the other invitations are automatically declined. 


## User Stories 
1. As a new user signing up, I would like my profile to be created automatically after registration. 
2. As a user of this web app, I want to be able to edit my profile, so that other people with the same interests can find me more easily. 
3. As an aspiring musician, I would like to easily find and contact like-minded people so that we can form a band together. 
4. As a musician looking for new band members, I want to find people that are good matches for me and my bandmates and invite them to join our band. 
5. As a user that is part of a band, I want my band to have a profile page so that more people can find information about us. 
6. As a user that is part of a band, I would like my profile page to have a link to my band's profile page. 
7. As a user that has started a band, I want to create a profile page for my band from my profile page. 
8. As a band member, I would like to complete a survey so that I can find people to join my band based on certain criteria. 
9. As a musician looking for a new band member, I would like to know some information about a person before inviting them to join my band. 
10. As a user, I want to be notified when I receive invitations to join bands. 
11. As a user, I want to be able to manage my notifications. 
12. As a user, I want to be able to change my username, email and password, so that I can manage my private info whenever I want. 


## Backlog: 
We used Trello to create and manage the project's backlog. It can be found here: [backlog link](https://trello.com/b/Jl79b3yD/backlog). 

## Design 
### 1. UML State Diagram 
The following state diagram illustrates the interactions the users can have with the web app:
![state-diagram](https://github.com/PetreVladMihaela/proiect-MDS/blob/main/state-diagram.png) 

### 2. Database Diagram
To show the structure of the backend database and the relations between the database tables we have made the following diagram:
![Database-diagram](https://github.com/PetreVladMihaela/proiect-MDS/blob/main/database-diagram.png) 


## Automated Testing
For testing the backend's functionality we have created the following 3 classes: UsersControllerTests, UserProfilesControllerTests and MusicalBandsControllerTests. These classes contain in total 8 integration tests:
1. TestGetUserByUsername
2. TestGetUserByEmail
3. TestCreateAndDeleteUser
4. TestEditUser
5. TestGetAllUserProfiles
6. TestGetUserProfileByUsername
7. TestGetBandById
8. TestCreateAndDeleteBandMatches

![tests](https://github.com/PetreVladMihaela/proiect-MDS/blob/main/tests.png) 


## Bug Reporting
The web app would not load after deleting browser history. Fixed by changing the routes in users-routing.module.ts - see [fix](https://github.com/PetreVladMihaela/proiect-MDS/commit/b169745db2a02420eaf32f22a69aabb3f086ba1e#).
