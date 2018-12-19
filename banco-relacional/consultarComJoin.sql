select 
    e.nome as Estado, 
    c.nome as Cidade 
from estados e, cidades c
where e.id = c.estado_id;

SELECT
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Regiao
from estados e 
inner join cidades c on e.id = c.estado_id