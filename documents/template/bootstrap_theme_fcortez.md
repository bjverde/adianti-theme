# Tema para o Adianti Template

Temas para apresentação do template [Adianti FrameWork 7.2.2](https://www.adianti.com.br/) baseado na aparecem padrão d BootStrap. Provalemente irá funcionar nas versões 7.0 e 7.1.

Esse tema foi criado por : Felipe Cortez ( felipecortez.fgc@gmail.com ). Link do projeto original: https://github.com/cortezfelipe/template-horizontal

* [<- voltar para lista de temas BootStrap](../template.md)
* [<- voltar para index](../../README.md)


# Theme FCortez
Tema baseado no theme3 do Adianti Template

*Quais são as diferenças do theme 3 do Adianti ?*.
1. retirada do `maximum-scale=1, user-scalable=no` da `viewport` no arquivo layout.html. Sem esse parâmetro no celular o usuário consegue fazer o movimento de pinça para aumentar ou diminuir o zoom , o que aumenta acessebilidade para os usuários.
1. Layout com barra de menus vertical


## Telas e suas alterações
Desktop, o menu
![Theme3_v4_login](../img/template_fcortez.png)

Celular, o menu
![Theme3_v4_public](../img/template_fcortez_celular.png)

Celular, o DashBoard
![Theme3_v4_layout](../img/template_fcortez_celular02.png)

Tablet, o DashBoard
![template_theme3_v3_layout_rodape](../img/template_fcortez_tablet.png)



## Para usar 

### Etapa 01 
Editar o arquivo `<SISTEMA>/app/config/application.ini` alterar a linha abaixo : 

```ini
theme = theme_fcortez
```

### Etapa 02
Edite o arquivo `<SISTEMA>/app/lib/menu/AdiantiMenuBuilder.php` incluido as linhas abaixo:
```php
            case 'theme_fcortez':
                ob_start();
                $callback = array('SystemPermission', 'checkPermission');
                $menu = THMenuBar::newFromXML($file, $callback);
                $menu->show();
                $menu_string = ob_get_clean();
                return $menu_string;
            break;
```
### Etapa 03
Copiar toda pasta app/templates/theme3 do adianti template para app/templates/theme_fcortez

### Etapa 04

Copiar os arquivos as subpastas do adianti para
