INSERT INTO [dbo].[Users](Email, Password, Username) 
VALUES ('email@gmail.com', 'password123', 'cool_guitarist');
GO

INSERT INTO [dbo].[Users](Email, Password, Username) 
VALUES ('user-email@yahoo.eu', 'parola99', 'rockLover');
GO

INSERT INTO [dbo].[Users](Email, Password, Username) 
VALUES ('email_1@yahoo.com', '12345', 'musician1');
GO

INSERT INTO [dbo].[Users](Email, Password, Username) 
VALUES ('email_2@yahoo.com', '#1name', 'random_name');
GO

INSERT INTO [dbo].[Users](Email, Password, Username) 
VALUES ('email_3@yahoo.com', 'User-password', 'musician2');
GO

INSERT INTO [dbo].[Users](Email, Password, Username) 
VALUES ('user_email@gmail.com', '12345', 'WebsiteUser');
GO



DBCC CHECKIDENT ('Users', RESEED, 6);
GO

SELECT * FROM [dbo].[Users];
GO
