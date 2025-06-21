# Temas para o FrameWork Puro
* [<- voltar para lista de temas BootStrap](../framework_puro.md)
* [<- voltar para index](../../README.md)


Temas para apresentação do FrameWork Puro [Adianti 8.1.0](https://adiantiframework.com.br/)

# Melhorias

*Quais são as diferenças do tema padrão ?*

## Zoom no celular
Removendo `maximum-scale=1, user-scalable=no` - Sem esse parâmetro no celular o usuário consegue fazer o movimento de pinça para aumentar ou diminuir o zoom, o que aumenta acessebilidade para os usuários. Abaixo de lista de arquivos:
1. Arquivo: `layout.html`
1. Arquivo: `login.html`

## Outras melhorias
1. Bug versão manifest
1. Permitir scalable
1. Houver grid amarelo
1. Permite selecionar Label


# Mudanças visual
Tema escuro houver com amarelo

![adminbs5_v2](../img/template_800_drak_tabela.png)


Tema claro houver com amarelo

![adminbs5_v2](../img/template_800_light_tabela.png)



# Como instalar o tema adminbs5_v3
1. copie a pasta pasta `adminbs5_v3` dentro de adianti template cole em `<SISTEMA>/app/templates`
1. Excute as partes abaixo

## Parte 01 
Editar o arquivo `<SISTEMA>/app/config/application.php`

### alterar o tema padrão
altere o valor `theme = <NOME ATUAL>` para `theme = adminbs5_v2`

### incluindo seção system 
Incluir uma nova seção com as informações abaixo

```ini
    'system' => [
        'system_version' => '2.0.0'
    ],
```

## Parte 02
Edite o arquivo `<SISTEMA>/app/lib/menu/AdiantiMenuBuilder.php` alterando nas linhas
```php
            case 'adminbs5':
                $xml  = new SimpleXMLElement(file_get_contents($file));
```

incluido adminbs5_v2 logo abaixo adminbs5, ficando como o exemplo abaixo
```php
            case 'adminbs5':
            case 'adminbs5_v3':
                $xml  = new SimpleXMLElement(file_get_contents($file));
```

## Parte 03
Edite o arquivo `<SISTEMA>/app/config/application.php` incluindo os arquivos abaixo
```php
    'system' =>  [
        'system_version' => '8.0.0',
        'system_name_sub'=> 'Fork do Adianti FrameWork',
        'adianti_min_version'=> '8.0.0',
        'formdin_min_version'=> '5.4.0',
    ],
```

## Parte 04
Edite o arquivo `<SISTEMA>/index.php` altere de 



PARA 
```php
$menu_string = AdiantiMenuBuilder::parse('menu.xml', $theme);
$content     = ApplicationTranslator::translateTemplate($content);
$system_version = $ini['system']['system_version'];
$title = $ini['general']['title'].' - v'.$system_version;
$content     = str_replace('{LIBRARIES}', file_get_contents("app/templates/{$theme}/libraries.html"), $content);
$content     = str_replace('{class}', isset($_REQUEST['class']) ? $_REQUEST['class'] : '', $content);
$content     = str_replace('{template}', $theme, $content);
$content     = str_replace('{MENU}', $menu_string, $content);
$content     = str_replace('{MENUTOP}', AdiantiMenuBuilder::parseNavBar('menu-top-public.xml', $theme), $content);
$content     = str_replace('{MENUBOTTOM}', AdiantiMenuBuilder::parseNavBar('menu-bottom-public.xml', $theme), $content);
$content     = str_replace('{lang}', $ini['general']['language'], $content);
$content     = str_replace('{title}', $title, $content);
$content     = str_replace('{system_version}', $system_version, $content);
$content     = str_replace('{template_options}',  json_encode($ini['template'] ?? []), $content);
$content     = str_replace('{adianti_options}',  json_encode($ini['general']), $content);
```
