
INSERT INTO [dbo].[UserProfiles](Email, FirstName, LastName, Age, IsMusician, CanSing,
PlayedInstrument, PreferredMusicGenre, BandId) 
VALUES ('user_email@gmail.com', 'Generic', 'User', null, null, null, null, null, null);
GO

INSERT INTO [dbo].[UserProfiles](Email, FirstName, LastName, Age, IsMusician, CanSing,
PlayedInstrument, PreferredMusicGenre, BandId) 
VALUES ('email@gmail.com', 'Thomas', 'Scott', 23, 'True', 'True', 'Electric Guitar', 'Rock', 1);
GO

INSERT INTO [dbo].[UserProfiles](Email, FirstName, LastName, Age, IsMusician, CanSing,
PlayedInstrument, PreferredMusicGenre, BandId) 
VALUES ('myemail@yahoo.eu', 'Andrew', 'Smith', 22, 'True', 'False', 'Drums', 'Rock', 1);
GO

INSERT INTO [dbo].[UserProfiles](Email, FirstName, LastName, Age, IsMusician, CanSing,
PlayedInstrument, PreferredMusicGenre, BandId) 
VALUES ('email_1@yahoo.com', 'Lucas', 'Jackson', 21, 'True', 'False', 'Bass Guitar', 'Pop', 2);
GO

INSERT INTO [dbo].[UserProfiles](Email, FirstName, LastName, Age, IsMusician, CanSing,
PlayedInstrument, PreferredMusicGenre, BandId) 
VALUES ('email_2@yahoo.com', 'Rachel', 'Collins', 22, 'True', 'False', 'Electric Piano', 'Pop', null);
GO

INSERT INTO [dbo].[UserProfiles](Email, FirstName, LastName, Age, IsMusician, CanSing,
PlayedInstrument, PreferredMusicGenre, BandId) 
VALUES ('email_3@yahoo.com', 'Sarah', 'Williams', 21, 'True', 'True', 'Acoustic Guitar', 'Pop', 2);
GO

SELECT * FROM [dbo].[UserProfiles];
GO