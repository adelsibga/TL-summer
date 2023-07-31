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
		[desk_id] INT IDENTITY (1,1) CONSTRAINT PK_desk PRIMARY KEY NOT NULL,
		[seats_count] INT NOT NULL,
		[hookah_place_id] INT NOT NULL CONSTRAINT FK_desk_hookah_place references hookah_place([hookah_place_id]),
    )
END

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='hookah_place' and xtype='U')
BEGIN
    CREATE TABLE hookah_place (
		[hookah_place_id] INT IDENTITY (1,1) CONSTRAINT PK_hookah_place PRIMARY KEY NOT NULL,
		[name] NVARCHAR(50) NOT NULL,
		[place_latitude] NVARCHAR(14) NOT NULL,
		[place_longitude] NVARCHAR(14) NOT NULL,
		[opens_time] TIME NOT NULL,
		[closes_time] TIME NOT NULL,
		[hookah_place_services_name] NVARCHAR(128)
    )
END

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='desk_services' and xtype='U')
BEGIN
    CREATE TABLE desk_services (
        [desk_services_id] INT IDENTITY (1,1) CONSTRAINT PK_desk_services PRIMARY KEY NOT NULL,
		[desk_id] INT NOT NULL CONSTRAINT FK_desk_services_desk references desk([desk_id]),
		[desk_services_name] NVARCHAR(50) NOT NULL
    )
END

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='pre_order_desk_services_storage' and xtype='U')
BEGIN
    CREATE TABLE pre_order_desk_services_storage (
		[pre_order_desk_services_storage_id] INT IDENTITY (1,1) CONSTRAINT PK_pre_order_desk_services_storage PRIMARY KEY NOT NULL,
		[desk_services_id] INT NOT NULL CONSTRAINT FK_pre_order_desk_services_storage_desk_services references desk_services([desk_services_id]),
        [booking_id] INT NOT NULL CONSTRAINT FK_pre_order_desk_services_storage_booking references booking([booking_id]),
    )
END

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='booking' and xtype='U')
BEGIN
    CREATE TABLE booking (
		[booking_id] INT IDENTITY (1,1) CONSTRAINT PK_booking PRIMARY KEY NOT NULL,
		[start_time] DATETIME NOT NULL,
		[end_time] DATETIME NOT NULL,
        [desk_id] INT NOT NULL CONSTRAINT FK_booking_desk references desk([desk_id]),
        [utilizer_id] INT NOT NULL CONSTRAINT FK_booking_utilizer references utilizer([utilizer_id]),
    )
END

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='utilizer' and xtype='U')
BEGIN
    CREATE TABLE utilizer (
		[utilizer_id] INT IDENTITY (1,1) CONSTRAINT PK_utilizer_id PRIMARY KEY NOT NULL,
		[name] NVARCHAR(32) NOT NULL,
		[password] NVARCHAR(32) NOT NULL,
		[role_name] NVARCHAR(32) NOT NULL
    )
END