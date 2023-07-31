SELECT * 
	FROM [dbo].[utilizer]

SELECT *
	FROM [dbo].[utilizer]
	WHERE [role_name] = 'admin'

SELECT *
	FROM [dbo].[utilizer]
	WHERE [name] LIKE 'A%'

SELECT * 
	FROM [dbo].[utilizer]
	WHERE [role_name] LIKE 'user'
	ORDER BY [name]

SELECT * 
	FROM [dbo].[desk]

SELECT *
	FROM [dbo].[desk]
	WHERE [seats_count] IN (5,6)

SELECT * 
	FROM [dbo].[desk]
	WHERE [seats_count] > 4

SELECT * 
	FROM [dbo].[booking]

SELECT * 
	FROM [dbo].[booking]
	WHERE DAY([start_time]) = '28' AND DAY([end_time]) = '29'

SELECT * 
	FROM [dbo].[booking]
	WHERE [start_time] BETWEEN '2023-07-28T12:00:00' AND '2023-07-28T23:59:59'

SELECT * 
	FROM [dbo].[hookah_place]

SELECT * 
	FROM [dbo].[hookah_place]
	WHERE NOT [name] = '���� Lounge'

SELECT * 
	FROM [dbo].[desk_services]

SELECT * 
	FROM [dbo].[desk_services]
	WHERE [desk_services_name] LIKE 'PS4%'

SELECT * 
	FROM [dbo].[pre_order_desk_services_storage]

SELECT * 
	FROM [dbo].[pre_order_desk_services_storage]
	WHERE [booking_id] IS NULL AND [desk_services_id] IS NULL