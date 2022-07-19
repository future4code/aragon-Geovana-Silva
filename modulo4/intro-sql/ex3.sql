SELECT * FROM `Funcionarios`;

SELECT id AS identifier, name AS name FROM `Funcionarios`;

SELECT id FROM `Funcionarios`
WHERE name = "Laura";

SELECT * FROM `Funcionarios`
WHERE name LIKE "%a%";

SELECT * FROM `Funcionarios`
WHERE name NOT LIKE "%r%" AND email LIKE "%u%";

