**Sorteio Ac: Uma Solução Open Source para Sorteios**

Sorteio Ac é uma plataforma robusta e confiável para realizar sorteios. Com ela, cada participante gera um código único e, ao final do evento, um código é selecionado aleatoriamente, coroando o vencedor.

**Características Principais**

  **Open Source:** Tenha total liberdade para personalizar e adaptar a plataforma às suas necessidades.
  **Front-end Angular:** Construído com uma das mais populares frameworks, garantindo uma experiência de usuário suave e responsiva.
  **Backend em Django REST:** Confiabilidade e segurança, com o poder do Django REST framework.
  **Base de Dados MySQL:** Uma das bases de dados mais utilizadas e confiáveis do mercado.

**Configuração Rápida**

**Front-end**
  1.** Obtenção:** Clone ou faça download do repositório.
  2.** Conexão com a API**: Navegue até `APP/SERVICE/public.service.ts` e modifique o `base_url` para a URL da sua API.
  3.** Acesso Secreto**: Em `APP.routing.module.ts`, altere a rota secreta para um nome de sua preferência.

**API e Base de Dados**

  1.** Restauração da Base de Dados:** Importe o dump da base de dados no seu cliente de banco de dados.
  2. **Configuração da Conexão:**
      o**	Vá ao arquivo `settings.py`.**
      o	**Atualize a seção `DATABASES` com suas informações:**
   	  ```python
    	 DATABASES = {
     	    'default': {
       	    'ENGINE': 'django.db.backends.mysql',  
         	    'NAME': 'seu_banco_de_dados',
           	    'USER': 'seu_usuario',
            	    'PASSWORD': 'sua_senha',
            	    'HOST': 'seu_host',
            	    'PORT': 'sua_porta',
         		}
     	}
    		 
  3. **Migrações:**
  **  o	Execute `python manage.py makemigrations`.
    o	Execute `python manage.py migrate`.**


A Sorteio Ac é a solução perfeita para quem busca uma forma eficiente e confiável de realizar sorteios. Comece agora mesmo e veja o poder desta plataforma em ação!
# Sorteio
