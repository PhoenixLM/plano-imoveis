/*
    Arquivo: controllers/admin.js
    Tipo: JavaScript
    Descrição:
        O arquivo deve implementar as seguintes rotas:
            (get) /admin/painel:
                renderiza a página admin/painel.ejs
            
            (get) /admin/imoveis:
                renderiza a página admin/imoveis.ejs passando para
                a mesma o array 'imovels' com todos os imovéis cadastra
                dos no banco de dados
            
            (get) /admin/imoveis/search/:id
                renderiza a página admin/imovel.ejs passando para a 
                mesma a variavel 'imovel' contendo as informações do
                imovel específicado na rota sob 'id'
            
            (get) /admin/admins:
                renderiza a página admin/admins.ejs passando para
                a mesma o array 'admins' com todos os administradores 
                cadastrados no banco de dados
            
            (get) /admin/admins/search/:id
                renderiza a página admin/admin.ejs passando para a 
                mesma a variavel 'admin' contendo as informações do
                administrador específicado na rota sob 'id'

            (get) /admin/imoveis/new
                renderiza a página admin/imovel-form.ejs

            (post) /admin/imoveis/new
                recebe um form com as informações de um imóvel, instancia
                um novo objeto 'Imovel' (ver tests/models/imovelSpec.js) e
                salva esse objeto no banco de dados. Deve-se então capturar
                os arquivos relevantes ao imovel na pasta tmp/ e move-los
                para public/img/imovel._id (ver tests/helpers/moveImgFromTmpSpec.js).
                Finalmente, redirecionar para /admin/imoveis

            (get) /admin/admins/new
                renderiza a página admin/admin-form.ejs

            (post) /admin/admins/new
                recebe um form com as informações de um admin, instancia
                um novo objeto 'Admin' (ver tests/models/adminSpec.js) e
                salva esse objeto no banco de dados. Finalmente, redirecionar
                para /admin/admins

            (post) /admin/media
                recebe um arquivo a ser armazenado na pasta tmp/.
                Ver (tests/helpers/moveImgToTmpSpec.js). Se o recebimento
                do arquivo obtever erros, enviar um JSON como tal:
                    {
                        "success":false
                    }
                Isso permite que o plugin de front-end 'fineuploader' possa
                tentar novamente o upload do arquivo em questão. Caso não
                haja erros modificar valor para 'true'.

            (get) /admin/imoveis/delete/:id
                Remove o documento da coleção 'imovels' de id referente a url

            (post) /admin/imoveis/update/:id
                Edita o documento da coleção 'imovels' de id referente a url

            (get) /admin/admins/delete/:id
                Remove o documento da coleção 'admins' de id referente a url

            (post) /admin/admins/update/:id
                Edita o documento da coleção 'admins' de id referente a url
            
*/