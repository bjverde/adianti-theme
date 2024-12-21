# Temas para o Template
* [<- voltar para lista de temas BootStrap](../template.md)
* [<- voltar para index](../../README.md)


Temas para apresentação do template [Adianti FrameWork 8.0.0](https://adiantiframework.com.br/)

*Quais são as diferenças do tema padrão ?*.

# Malhorias

## Zoom no celular
Removendo `maximum-scale=1, user-scalable=no` - Sem esse parâmetro no celular o usuário consegue fazer o movimento de pinça para aumentar ou diminuir o zoom, o que aumenta acessebilidade para os usuários. Abaixo de lista de arquivos:
1. Arquivo: `layout-basic.html`
1. Arquivo: `layout.html`
1. Arquivo: `login.html`
1. Arquivo: `public.html`

## Outras melhorias
1. [Bug versão manifest](https://github.com/bjverde/adianti-theme/issues/30)
1. [Houver grid amarelo](https://github.com/bjverde/adianti-theme/commit/ef81ef52021f1b6abbb32fd6291201e738c03dc8)
1. [Permite selecionar Label](https://github.com/bjverde/adianti-theme/commit/ef81ef52021f1b6abbb32fd6291201e738c03dc8)


# Mudanças visual
Tema escuro houver com amarelo
![adminbs5_v2](../img/template_800_drak_tabela.png)

Tema claro houver com amarelo
![adminbs5_v2](../img/template_800_light_tabela.png)

# Como instalar o tema adminbs5_v2
1. copie a pasta pasta `adminbs5_v2` dentro de framework_puro cole em `<SISTEMA>/app/templates`
1. Excute as partes abaixo

## Parte 01 
Editar o arquivo `<SISTEMA>/app/config/application.ini`

### alterar o tema padrão
altere o valor `theme = <NOME ATUAL>` para `theme = adminbs5_v2`

### incluindo seção system 
Incluir uma nova seção com as informações abaixo

```ini
[system]
system_version = 2.0.0
head_title = Sistema de Exemplo
logo-lg = Exemplo
logo-link-class = 'SystemAboutView'
login-link = http://wwww.meusite.com.br
```

## Parte 02
Edite o arquivo `<SISTEMA>/app/lib/menu/AdiantiMenuBuilder.php` alterando nas linhas
```php
            case 'theme3':
                ob_start();
                $callback = array('SystemPermission', 'checkPermission');
                $xml = new SimpleXMLElement(file_get_contents($file));
```

incluido theme3_v5 logo abaixo theme3, ficando como o exemplo abaixo
```php
            case 'theme3':
            case 'theme3_v5':
                ob_start();
                $callback = array('SystemPermission', 'checkPermission');
                $xml = new SimpleXMLElement(file_get_contents($file));
```

## Parte 03
Edite o arquivo `<SISTEMA>/index.php` incluido as linhas abaixo:
```php
if ( TSession::getValue('logged') ){
    $content = file_get_contents("app/templates/{$theme}/layout.html");
    $menu    = AdiantiMenuBuilder::parse('menu.xml', $theme);
    $content = str_replace('{MENU}', $menu, $content);

    //Novas linhas para Theme3_v5
    $system_version = $ini['system']['system_version'];
    $head_title  = $ini['system']['head_title'].' - v'.$system_version;
    $content     = str_replace('{head_title}', $head_title, $content);
    $content     = str_replace('{system_version}', $system_version, $content);
    $content     = str_replace('{logo-mini}', $ini['general']['application'], $content);
    $content     = str_replace('{logo-lg}', $ini['system']['logo-lg'], $content);
    $content     = str_replace('{logo-link-class}', $ini['system']['logo-link-class'], $content);
}else{
    if (isset($ini['general']['public_view']) && $ini['general']['public_view'] == '1')
    {
        $content = file_get_contents("app/templates/{$theme}/public.html");
        $menu    = AdiantiMenuBuilder::parse('menu-public.xml', $theme);
        $content = str_replace('{MENU}', $menu, $content);

        //Novas linhas para Theme3_v5
        $system_version = $ini['system']['system_version'];
        $head_title  = $ini['system']['head_title'].' - v'.$system_version;
        $content     = str_replace('{head_title}', $head_title, $content);
        $content     = str_replace('{system_version}', $system_version, $content);
        $content     = str_replace('{logo-mini}', $ini['general']['application'], $content);
        $content     = str_replace('{logo-lg}', $ini['system']['logo-lg'], $content);
        $content     = str_replace('{logo-link-class}', $ini['system']['logo-link-class'], $content);
    }else{
        $content = file_get_contents("app/templates/{$theme}/login.html");

        //Novas linhas para Theme3_v5
        $system_version = $ini['system']['system_version'];
        $head_title  = $ini['system']['head_title'].' - v'.$system_version;
        $content     = str_replace('{head_title}', $head_title, $content);
        $content     = str_replace('{login-link}', $ini['system']['login-link'], $content);
    }
}
```
