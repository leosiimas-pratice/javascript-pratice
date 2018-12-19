select * from estados

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 43)

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niteroi', 133.9, 37)

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Caruaru', 920.6, (select id  from estados WHERE sigla = 'PE'))

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Juazeiro do Norte', 248.2, (select id  from estados WHERE sigla = 'CE'))

SELECT * from cidades