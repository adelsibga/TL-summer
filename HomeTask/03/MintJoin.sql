SELECT *
	FROM [booking] b INNER JOIN [desk_services] ds
	ON b.desk_id = ds.desk_id

SELECT [booking_id],[start_time],[end_time],[desk_id],[name]
	FROM [booking] b
	LEFT JOIN [utilizer] u ON b.[utilizer_id] = u.[utilizer_id]

SELECT *
	FROM [desk] d
	RIGHT JOIN [desk_services] ds ON d.[desk_id] = ds.[desk_id]