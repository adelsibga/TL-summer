IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'MintDb')
BEGIN
	CREATE DATABASE [MintDb]
END

GO
	USE [MintDb]
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='desk' and xtype='U')
BEGIN
    CREATE TABLE desk (
		[desk_id] INT IDENTITY PRIMARY KEY NOT NULL,
		[seats_count] INT,
		[hookah_place_id] INT
    )
END

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='hookah_place' and xtype='U')
BEGIN
    CREATE TABLE hookah_place (
		[hookah_place_id] INT IDENTITY PRIMARY KEY NOT NULL,
		[name] NVARCHAR(50),
		[place_latitude] NVARCHAR(14) ,
		[place_longitude] NVARCHAR(14),
		[opens_time] TIME,
		[closes_time] TIME,
		[hookah_place_services_name] NVARCHAR(128)
    )
END

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='desk_services' and xtype='U')
BEGIN
    CREATE TABLE desk_services (
		[desk_services_id] INT IDENTITY PRIMARY KEY NOT NULL,
		[desk_id] INT,
		[desk_services_name] NVARCHAR(50)
    )
END

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='pre_order_desk_services_storage' and xtype='U')
BEGIN
    CREATE TABLE pre_order_desk_services_storage (
		[pre_order_desk_services_storage_id] INT IDENTITY PRIMARY KEY NOT NULL,
		[desk_services_id] INT,
		[booking_id] INT
    )
END

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='booking' and xtype='U')
BEGIN
    CREATE TABLE booking (
		[booking_id] INT IDENTITY PRIMARY KEY NOT NULL,
		[start_time] DATETIME,
		[end_time] DATETIME,
		[desk_id] INT,
		[utilizer_id] INT
    )
END

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='utilizer' and xtype='U')
BEGIN
    CREATE TABLE utilizer (
		[utilizer_id] INT IDENTITY PRIMARY KEY NOT NULL,
		[name] NVARCHAR(32),
		[password] NVARCHAR(32),
		[role_name] NVARCHAR(32)
    )
END