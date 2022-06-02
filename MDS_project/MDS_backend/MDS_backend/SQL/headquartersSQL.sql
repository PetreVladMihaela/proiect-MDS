INSERT INTO [dbo].[Headquarters](Country, City, Address, SquareMeters, BandId) 
VALUES ('USA', 'Chicago', 'Michigan Avenue', 38, 1);
GO

INSERT INTO [dbo].[Headquarters](Country, City, Address, SquareMeters, BandId) 
VALUES ('France', 'Paris', null, null, 2);
GO

SELECT * FROM [dbo].[Headquarters];
GO
