
INSERT INTO [dbo].[UserProfiles](UserId, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES (1, null, 'Thomas', 'Scott', 24, 'Musician', 'True', 'Electric Guitar', 'Rock', 
'Confident', 'Creative', 1);
GO

INSERT INTO [dbo].[UserProfiles](UserId, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES (2, null, 'Andrew', 'Smith', 23, 'Musician', 'False', 'Drums', 'Rock', 
'Hard-working', 'Observant', 1);
GO

INSERT INTO [dbo].[UserProfiles](UserId, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES (3, '1234567890', 'Lucas', 'Jackson', 22, 'Student', 'False', 'Bass Guitar', 'Pop', 
'Level-headed', 'Organized', 2);
GO

INSERT INTO [dbo].[UserProfiles](UserId, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES (4, '0111222333', 'Rachel', 'Collins', 20, 'Student', 'False', 'Electric Piano', 'Pop-Rock',
'Creative', 'Friendly', null);
GO

INSERT INTO [dbo].[UserProfiles](UserId, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES (5, '1122334455', 'Sarah', 'Williams', 21, 'Student', 'True', 'Acoustic Guitar', 'Pop', 
'Ingenious', 'Charismatic', 2);
GO

INSERT INTO [dbo].[UserProfiles](UserId, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES (6, null, 'Generic', 'User', 20, null, 'True', null, null, 'Analytical', 'Organized', null);
GO

INSERT INTO [dbo].[UserProfiles](UserId, Phone, FirstName, LastName, Age, Occupation, CanSing,
PlayedInstrument, PreferredMusicGenre, Trait1, Trait2, BandId) 
VALUES (7, null, 'Generic', null, 19, 'student', null, 'piano', 'classical', 'Organized', null, null);
GO


SELECT * FROM [dbo].[UserProfiles];
GO