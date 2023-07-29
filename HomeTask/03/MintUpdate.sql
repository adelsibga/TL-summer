--В заведении все столики стали по 6 мест
UPDATE [desk]
	SET [seats_count] = 6
	WHERE [hookah_place_id] = 1

--Изменили время завершения работы
UPDATE [hookah_place]
	SET [closes_time] = '05:00:00'
	WHERE [name] = 'Мята Lounge | Кальянная на Арбате'

--Добавили вайфай для первого столика
UPDATE [desk_services]
	SET [desk_services_name] = 'PS5, предзаказ кальяна, Wi-Fi'
	WHERE [desk_id] = 1

--Добавляем значения когда они null 
UPDATE [pre_order_desk_services_storage]
	SET [booking_id] = 17
	WHERE [booking_id] IS NULL AND [desk_services_id] IS NULL

UPDATE [pre_order_desk_services_storage]
	SET [desk_services_id] = 14
	WHERE [desk_services_id] IS NULL AND [booking_id] = 17

--переносим начало брони на 2 часа позже для стола 34
UPDATE [booking]
	SET [start_time] = '2023-07-28T14:15:00'
	WHERE [start_time] = '2023-07-28T12:15:00' AND [desk_id] = 34 

--Loyd получает повышение до admin
UPDATE [utilizer]
	SET [role_name] = 'admin'
	WHERE [name] = 'Loyd'