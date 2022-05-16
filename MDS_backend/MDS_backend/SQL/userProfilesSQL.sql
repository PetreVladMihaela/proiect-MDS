
INSERT INTO [dbo].[UserProfiles](Email, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES ('user_email@gmail.com', null, 'Generic', 'User', 20, null, 'True', null, null, 'Analytical', 'Organized', null);
GO

INSERT INTO [dbo].[UserProfiles](Email, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES ('email@gmail.com', null, 'Thomas', 'Scott', 24, 'Musician', 'True', 'Electric Guitar', 'Rock', 
'Confident', 'Creative', 1);
GO

INSERT INTO [dbo].[UserProfiles](Email, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES ('myemail@yahoo.eu', null, 'Andrew', 'Smith', 23, 'Musician', 'False', 'Drums', 'Rock', 
'Hard-working', 'Observant', 1);
GO

INSERT INTO [dbo].[UserProfiles](Email, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES ('email_1@yahoo.com', '1234567890', 'Lucas', 'Jackson', 21, 'Student', 'False', 'Bass Guitar', 'Pop', 
'Level-headed', 'Organized', 2);
GO

INSERT INTO [dbo].[UserProfiles](Email, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES ('email_2@yahoo.com', '0111222333', 'Rachel', 'Collins', 22, 'Student', 'False', 'Electric Piano', 'Pop',
'Creative', 'Friendly', null);
GO

INSERT INTO [dbo].[UserProfiles](Email, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES ('email_3@yahoo.com', '1122334455', 'Sarah', 'Williams', 21, 'Student', 'True', 'Acoustic Guitar', 'Pop', 
'Ingenious', 'Charismatic', 2);
GO

SELECT * FROM [dbo].[UserProfiles];
GO