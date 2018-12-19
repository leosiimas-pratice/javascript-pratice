INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 95694186000132),
    ('Vale', 95694186001235),
    ('Cielo', 95694123221123);

ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

desc empresas;
desc prefeitos;

select * from empresas;
select * from cidades;

INSERT INTO empresas_unidades
    (empresas_id, cidades_id, sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,2,1);


