# Temas para o Template
Temas para apresentação do template [Adianti FrameWork 7.1](https://www.adianti.com.br/) baseado na aparecencia do Material da google, são temas Bootstrap porém com o lock en feel diferente.

* [<- voltar para lista de temas BootStrap](../template.md)
* [<- voltar para index](../../README.md)

# theme4_v5
## *Quais são as diferenças do theme 4 do Adianti ?*
* Arquivo: `layout.html` - retirada do `maximum-scale=1, user-scalable=no` da `viewport`. Sem esse parâmetro no celular o usuário consegue fazer o movimento de pinça para aumentar ou diminuir o zoom, o que aumenta acessebilidade para os usuários.
* Arquivo: `layout.html` - Inclusão do nome do sistema de forma customizada `{logo-lg}` ou `{logo-mini}` no `application.ini`.
* Arquivo: `layout.html` - Inclusão da versão do sistema `{system_version}` de forma customizada no `application.ini`.
* Arquivo: `layout.html` - Title do HEAD alterado conforme novos parametos `{head_title}` e `{system_version}` no `application.ini`.
* Arquivo: `layout.html` - Inclusão favicon.png
* Arquivo: `libraries.html` - conforme Adianti 7.5.1b
* Arquivo: `login.html` - Inclusão do nome do sistema de forma customizada `{logo-lg}` ou `{logo-mini}` no `application.ini`.
* Arquivo: `login.html` - Title do HEAD alterado conforme novos parametos `{head_title}` e `{system_version}` no `application.ini`.
* Arquivo: `public.html` - Inclusão do nome do sistema de forma customizada `{logo-lg}` ou `{logo-mini}` no `application.ini`.
* Arquivo: `public.html` - Title do HEAD alterado conforme novos parametos `{head_title}` e `{system_version}` no `application.ini`.

## Para usar o theme4_v5
1. copie a pasta pasta `theme4_v5` dentro de framework_puro cole em `<SISTEMA>/app/templates`
1. Excute as partes abaixo

### Parte 01 
Editar o arquivo `<SISTEMA>/app/config/application.ini`

#### alterar o tema padrão
altere o valor `theme = <NOME ATUAL>` para `theme = theme4_v5`

#### incluindo seção system 
Incluir uma nova seção com as informações abaixo
```ini
[system]
system_version = 2.0.0
head_title = Sistema de Exemplo
logo-lg = Exemplo
logo-link-class = 'SystemAboutView'
login-link = http://wwww.meusite.com.br
```

### Parte 02

Edite o arquivo `<SISTEMA>/app/lib/menu/AdiantiMenuBuilder.php`. 

Depois altere no  
```php
$menu->style = 'overflow: hidden; width: auto; height: 390px;';
```

para
```php
$menu->style = 'overflow: hidden; width: auto;';
```

### Parte 03
Edite o arquivo `<SISTEMA>/index.php` incluido as linhas abaixo:

```php
$system_version = $ini['system']['version'];
$head_title  = $ini['system']['head_title'].' - v'.$system_version;
$content     = str_replace('{head_title}', $head_title, $content);
$content     = str_replace('{system_version}', $system_version, $content);
$content     = str_replace('{logo-mini}', $ini['general']['application'], $content);
$content     = str_replace('{logo-lg}', $ini['system']['logo-lg'], $content);
$content     = str_replace('{logo-link-class}', $ini['system']['logo-link-class'], $content);
```