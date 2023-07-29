--�������� ��� �� utilizer
SELECT * 
	FROM [dbo].[utilizer]

--�������� ���� �������
SELECT *
	FROM [dbo].[utilizer]
	WHERE [role_name] = 'admin'

-- �������� ���� � ���� ��� ���������� �� A
SELECT *
	FROM [dbo].[utilizer]
	WHERE [name] LIKE 'A%'

--�������� ���� user � ��������� �� �����
SELECT * 
	FROM [dbo].[utilizer]
	WHERE [role_name] LIKE 'user'
	ORDER BY [name]

--�������� ��� �� desk
SELECT * 
	FROM [dbo].[desk]

--�������� ������� � ������� ���-�� ���� > 4
SELECT *
	FROM [dbo].[desk]
	WHERE [seats_count] IN (5,6)

--�������� ������� � ������� ���-�� ���� > 4
SELECT * 
	FROM [dbo].[desk]
	WHERE [seats_count] > 4

--�������� ��� �� booking 
SELECT * 
	FROM [dbo].[booking]

--�������� ��� ���� ������������ ������� �������� ����� �������
SELECT * 
	FROM [dbo].[booking]
	WHERE DAY([start_time]) = '28' AND DAY([end_time]) = '29'

--�������� ��� ������������ ������� � �������� � 12 ����� 28 ����� � ���������� ������ ��� 
SELECT * 
	FROM [dbo].[booking]
	WHERE [start_time] BETWEEN '2023-07-28T12:00:00' AND '2023-07-28T23:59:59'

--�������� ��� �� hookah_place 
SELECT * 
	FROM [dbo].[hookah_place]

--�������� ��� ��������� �������� ������� �� ����� ���� Lounge
SELECT * 
	FROM [dbo].[hookah_place]
	WHERE NOT [name] = '���� Lounge'

--�������� ��� �� desk_services 
SELECT * 
	FROM [dbo].[desk_services]

--�������� ��� ����� � PS4
SELECT * 
	FROM [dbo].[desk_services]
	WHERE [desk_services_name] LIKE 'PS4%'

--�������� ��� �� pre_order_desk_services_storage 
SELECT * 
	FROM [dbo].[pre_order_desk_services_storage]

--�������� ��� ��� booking_id � desk_services_id = null
SELECT * 
	FROM [dbo].[pre_order_desk_services_storage]
	WHERE [booking_id] IS NULL AND [desk_services_id] IS NULL