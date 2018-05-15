/*
    Arquivo: controllers/login.js
    Tipo: JavaScript
    Descrição:
        O arquivo deve implementar as seguintes rotas:
            (get) /login
                renderiza a página login.ejs com o atributo 'error' 
                de valor 'false'

            (get) /login/logout
                atribuí 'null' ao campo 'userId' do cookie 'sessao' e
                redireciona para a página de login
            
            (post) /login
                recebe username e password dentro de req.body e autentica
                o usuário. Se autenticado, guardar o id do usuário no cookie
                'sessions' sob o parâmetro 'userId' e redirecionar para a pagina
                admin/panel, se não autenticado renderizar a página 'login' com 
                o atributo 'error' de valor 'true'
*/