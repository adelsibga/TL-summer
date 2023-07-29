--� ��������� ��� ������� ����� �� 6 ����
UPDATE [desk]
	SET [seats_count] = 6
	WHERE [hookah_place_id] = 1

--�������� ����� ���������� ������
UPDATE [hookah_place]
	SET [closes_time] = '05:00:00'
	WHERE [name] = '���� Lounge | ��������� �� ������'

--�������� ������ ��� ������� �������
UPDATE [desk_services]
	SET [desk_services_name] = 'PS5, ��������� �������, Wi-Fi'
	WHERE [desk_id] = 1

--��������� �������� ����� ��� null 
UPDATE [pre_order_desk_services_storage]
	SET [booking_id] = 17
	WHERE [booking_id] IS NULL AND [desk_services_id] IS NULL

UPDATE [pre_order_desk_services_storage]
	SET [desk_services_id] = 14
	WHERE [desk_services_id] IS NULL AND [booking_id] = 17

--��������� ������ ����� �� 2 ���� ����� ��� ����� 34
UPDATE [booking]
	SET [start_time] = '2023-07-28T14:15:00'
	WHERE [start_time] = '2023-07-28T12:15:00' AND [desk_id] = 34 

--Loyd �������� ��������� �� admin
UPDATE [utilizer]
	SET [role_name] = 'admin'
	WHERE [name] = 'Loyd'