\copy my_table FROM '/путь/к/вашему/файлу.json' (FORMAT JSON);

CSV но важно чтобы колонки были в соответствии колонкам таблицы
\copy directory.client_industry from '/Users/kidyasovvb/Desktop/export_client_industry_2023_06_18_16_59_22_712.csv' delimiter ',' CSV HEADER;
\copy directory.client_status from '/Users/kidyasovvb/Desktop/export_client_status_2023_06_18_16_51_35_836.csv' delimiter ',' CSV HEADER;