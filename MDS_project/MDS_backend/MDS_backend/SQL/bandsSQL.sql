﻿--TRUNCATE TABLE [dbo].[MusicalBands];
--GO

INSERT INTO [dbo].[MusicalBands](Name, MusicGenre, DateFormed, IsComplete) 
VALUES ('The Eagles', 'Rock', Convert(datetime,'November 3, 2021'), 'False');
GO

INSERT INTO [dbo].[MusicalBands](Name, MusicGenre, DateFormed, IsComplete) 
VALUES ('Wild Ride', 'Pop', Convert(datetime,'January, 2022'), 'False');
GO


DBCC CHECKIDENT ('MusicalBands', RESEED, 2);
GO

SELECT * FROM [dbo].[MusicalBands];
GO