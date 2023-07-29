--выбираем все из utilizer
SELECT * 
	FROM [dbo].[utilizer]

--выбираем всех админов
SELECT *
	FROM [dbo].[utilizer]
	WHERE [role_name] = 'admin'

-- выбираем всех у кого имя начинается на A
SELECT *
	FROM [dbo].[utilizer]
	WHERE [name] LIKE 'A%'

--выбираем всех user и соритруем по имени
SELECT * 
	FROM [dbo].[utilizer]
	WHERE [role_name] LIKE 'user'
	ORDER BY [name]

--выбираем все из desk
SELECT * 
	FROM [dbo].[desk]

--выбираем столики у которых кол-во мест > 4
SELECT *
	FROM [dbo].[desk]
	WHERE [seats_count] IN (5,6)

--выбираем столики у которых кол-во мест > 4
SELECT * 
	FROM [dbo].[desk]
	WHERE [seats_count] > 4

--выбираем все из booking 
SELECT * 
	FROM [dbo].[booking]

--выбираем все даты бронирования который проходят через полночь
SELECT * 
	FROM [dbo].[booking]
	WHERE DAY([start_time]) = '28' AND DAY([end_time]) = '29'

--выбираем все бронирования начиная с открытия в 12 часов 28 числа и заканчивая концом дня 
SELECT * 
	FROM [dbo].[booking]
	WHERE [start_time] BETWEEN '2023-07-28T12:00:00' AND '2023-07-28T23:59:59'

--выбираем все из hookah_place 
SELECT * 
	FROM [dbo].[hookah_place]

--выбираем все заведения название которых не равно Мята Lounge
SELECT * 
	FROM [dbo].[hookah_place]
	WHERE NOT [name] = 'Мята Lounge'

--выбираем все из desk_services 
SELECT * 
	FROM [dbo].[desk_services]

--выбираем все столы с PS4
SELECT * 
	FROM [dbo].[desk_services]
	WHERE [desk_services_name] LIKE 'PS4%'

--выбираем все из pre_order_desk_services_storage 
SELECT * 
	FROM [dbo].[pre_order_desk_services_storage]

--выбираем все где booking_id и desk_services_id = null
SELECT * 
	FROM [dbo].[pre_order_desk_services_storage]
	WHERE [booking_id] IS NULL AND [desk_services_id] IS NULL