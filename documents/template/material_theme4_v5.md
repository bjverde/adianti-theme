# Temas para o Template
Temas para apresentação do template [Adianti FrameWork 7.1](https://www.adianti.com.br/) baseado na aparecencia do Material da google, são temas Bootstrap porém com o lock en feel diferente.

* [<- voltar para lista de temas BootStrap](../template.md)
* [<- voltar para index](../../README.md)

# theme4_v5
## *Quais são as diferenças do theme 4 do Adianti ?*
* retirada do `maximum-scale=1, user-scalable=no` da `viewport` no arquivo layout.html. Sem esse parâmetro no celular o usuário consegue fazer o movimento de pinça para aumentar ou diminuir o zoom , o que aumenta acessebilidade para os usuários.
* Inclusão dos arquivos das fontes MaterialIcons e source-code-pro assim não precisa de internet para baixar as fontes.
* Inclusão do nome do sistema de forma customizada `{logo-lg}` ou `{logo-mini}` no `application.ini`.
* Inclusão da versão do sistema `{system_version}` de forma customizada no `application.ini`.
* Title do HEAD alterado conforme novos parametos `{head_title}` e `{system_version}` no `application.ini`.
* Arquivo de `libraries.html` conforme Adianti 7.5.1b
* Arquivo favicon.png
* Arquivo de `layout.html` alterado removendo `layout-boxed` para ocupar toda area
