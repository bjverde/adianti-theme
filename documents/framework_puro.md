# Temas para o FremeWork Puro
Temas para apresentação do [Adianti FrameWork 7.0](https://www.adianti.com.br/)


* Theme3_v2 - melhorando acessabilidade e removendo dependencias externas.
* Theme3_v3 - V2 + informações dinamicas configuradas no arquivo `application.ini`
* Theme4_v2 - melhorando acessabilidade

# Theme3_v2
Tema baseado no theme3 do Adianti FrameWork 7.0. *Quais são as diferenças do theme 3 do Adianti 7.0 ?*. Abaixo as lista dediferenças:

* retirada do `maximum-scale=1, user-scalable=no` da `viewport` no arquivo layout.html. Sem esse parâmetro no celular o usuário consegue fazer o movimento de pinça para aumentar ou diminuir o zoom , o que aumenta acessebilidade para os usuários.
* Inclusão dos arquivos das fontes MaterialIcons e source-code-pro assim não precisa de internet para baixar as fontes.

## Origem das fontes MaterialIcons
* MaterialIcons - https://github.com/google/material-design-icons/releases
* source-code-pro - https://github.com/adobe-fonts/source-code-pro
* Artigo do StackOverFlow que ajudou corrigir os temas - https://stackoverflow.com/questions/37270835/how-to-host-material-icons-offline


## Para usar 
Edite o arquivo `<SISTEMA>/app/lib/menu/AdiantiMenuBuilder.php` incluido as linhas abaixo. Depois altere no arquivo `<SISTEMA>/app/config/application.ini` informando o nome do Tema.

```php
            case 'theme3_v2':
                    ob_start();
                    $xml = new SimpleXMLElement(file_get_contents($file));
                    $menu = new TMenu($xml, null, 1, 'treeview-menu', 'treeview', '');
                    $menu->class = 'sidebar-menu';
                    $menu->id    = 'side-menu';
                    $menu->show();
                    $menu_string = ob_get_clean();
                    return $menu_string;
                    break;  
```

# Theme4_v2
Tema baseado no theme4 do Adianti FrameWork 7.0, *Quais são as diferenças do theme 4 do Adianti 7.0 ?*. Abaixo as lista dediferenças:

* retirada do `maximum-scale=1, user-scalable=no` da `viewport` no arquivo layout.html. Sem esse parâmetro no celular o usuário consegue fazer o movimento de pinça para aumentar ou diminuir o zoom, o que aumenta acessebilidade para os usuários.

## Para usar 
Subistiua o arquivo `<SISTEMA>/app/templates/theme4/layout.html` pelo arquivo que está na pasta `theme4_v2/layout.html`.


# Theme3_v3
Tema baseado no [theme3_v2](framework_puro.md#theme3_v2) para Adianti FrameWork 7.0. *Quais são as diferenças do theme 3 do Adianti 7.0 ?*. Abaixo as lista dediferenças:

* Todos os itens do [theme3_v2](framework_puro.md#theme3_v2)
* Inclusão do nome do sistema de forma customizada no `application.ini`.
* Inclusão da versão do sistema de forma customizada no `application.ini`.
* Title do HEAD alterado conforme novos parametos `head_title` e `version` no `application.ini`.

Locais das alterações
![Theme3_v3](img/theme3_v3.png)

## Para usar 

### Etapa 01 
Editar o arquivo `<SISTEMA>/app/config/application.ini`

1. Alterar para `theme = theme3_v3`
1. incluindo as informações abaixo : 
```ini
[system]
version = 2.0.0
head_title = Sistema de Exemplo
logo-lg = Exemplo
logo-link-class = SystemAboutView
```
### Etapa 02
Edite o arquivo `<SISTEMA>/app/lib/menu/AdiantiMenuBuilder.php` incluido as linhas abaixo:
```php
            case 'theme3_v3':
                    ob_start();
                    $xml = new SimpleXMLElement(file_get_contents($file));
                    $menu = new TMenu($xml, null, 1, 'treeview-menu', 'treeview', '');
                    $menu->class = 'sidebar-menu';
                    $menu->id    = 'side-menu';
                    $menu->show();
                    $menu_string = ob_get_clean();
                    return $menu_string;
                    break;  
```

### Etapa 03
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

# Theme3_v4
Tema baseado no theme3 do Adianti FrameWork 7.1. Tem todas as melhorias e modificações do [theme3_v3](framework_puro.md#theme3_v3) com as inclusões:

* Arquivo de `libraries.html` conforme Adianti 7.1
* Arquivo favicon.png