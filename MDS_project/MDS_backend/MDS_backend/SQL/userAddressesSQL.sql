--TRUNCATE TABLE [dbo].[UserAddresses];
--GO

INSERT INTO [dbo].[UserAddresses](UserId, Country, City, Street) 
VALUES (1, 'USA', 'Chicago', 'Harrison street');
GO

INSERT INTO [dbo].[UserAddresses](UserId, Country, City, Street) 
VALUES (2, 'USA', 'Chicago', 'Harrison street');
GO

INSERT INTO [dbo].[UserAddresses](UserId, Country, City, Street) 
VALUES (3, 'France', 'Paris', null);
GO

INSERT INTO [dbo].[UserAddresses](UserId, Country, City, Street) 
VALUES (4, 'France', 'Paris', 'Avenue Victor Hugo');
GO

INSERT INTO [dbo].[UserAddresses](UserId, Country, City, Street) 
VALUES (5, 'France', 'Paris', 'Rue Balard');
GO

INSERT INTO [dbo].[UserAddresses](UserId, Country, City, Street) 
VALUES (6, 'USA', 'Chicago', null);
GO

INSERT INTO [dbo].[UserAddresses](UserId, Country, City, Street) 
VALUES (7, 'france', 'paris', null);
GO


SELECT * FROM [dbo].[UserAddresses];
GO
