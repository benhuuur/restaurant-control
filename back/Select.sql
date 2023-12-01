use master
go
use restaurant
go
select * from Users

-- -- Adicionar uma imagem à tabela Images
-- DECLARE @ImageID INT;
-- INSERT INTO Images (Picture) VALUES (0x...); -- Substitua 0x... pelo valor binário da sua imagem
-- SET @ImageID = SCOPE_IDENTITY();

-- -- Adicionar um produto à tabela Products
-- INSERT INTO Products (Name, Description, Price, OffersPrice, IsOffers, Picture)
-- VALUES ('Nome do Produto', 'Descrição do Produto', 19.99, 15.99, 1, @ImageID);