
INSERT INTO [dbo].[UserAddresses](email, Country, City, Street) 
VALUES ('email@gmail.com', 'USA', 'Chicago', 'Harrison street');
GO

INSERT INTO [dbo].[UserAddresses](email, Country, City, Street) 
VALUES ('myemail@yahoo.eu', 'USA', 'Chicago', 'Harrison street');
GO

INSERT INTO [dbo].[UserAddresses](email, Country, City, Street) 
VALUES ('email_1@yahoo.com', 'France', 'Paris', null);
GO

INSERT INTO [dbo].[UserAddresses](email, Country, City, Street) 
VALUES ('email_2@yahoo.com', 'France', 'Paris', 'Avenue Victor Hugo');
GO

INSERT INTO [dbo].[UserAddresses](email, Country, City, Street) 
VALUES ('email_3@yahoo.com', 'France', 'Paris', 'Rue Balard');
GO

SELECT * FROM [dbo].[UserAddresses];
GO
