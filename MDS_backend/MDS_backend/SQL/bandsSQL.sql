--TRUNCATE TABLE [dbo].[MusicalBands];
--GO

INSERT INTO [dbo].[MusicalBands](Name, MusicGenre, DateFormed, Complete) 
VALUES ('The Eagles', 'Rock', Convert(datetime,'November 3, 2021'), 'False');
GO

INSERT INTO [dbo].[MusicalBands](Name, MusicGenre, DateFormed, Complete) 
VALUES ('Wild Ride', 'Pop', Convert(datetime,'January, 2022'), 'False');
GO

SELECT * FROM [dbo].[MusicalBands];
GO

DBCC CHECKIDENT ('MusicalBands', RESEED, 2);
GO