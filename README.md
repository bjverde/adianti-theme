# adianti-theme
Temas para apresentação do [Adianti FrameWork 7.0](https://www.adianti.com.br/)

# Theme3_v2
é o mesmo tema que o theme3 com poucas diferenças

* retirada do `maximum-scale=1, user-scalable=no` no arquivo layout.html. Sem esse parâmetro no celular o usuário consegue fazer o movimento de pinça para aumentar ou diminuir o zoom.
* Inclusão dos arquivos das fontes MaterialIcons e source-code-pro assim não precisa de internet para baixar as fontes.

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

É o mesmo tema que o theme4 com poucas diferenças

* retirada do `maximum-scale=1, user-scalable=no` no arquivo layout.html. Sem esse parâmetro no celular o usuário consegue fazer o movimento de pinça para aumentar ou diminuir o zoom.
* Inclusão dos arquivos das fontes MaterialIcons e source-code-pro assim não precisa de internet para baixar as fontes.


# Origem das fontes
* MaterialIcons - https://github.com/google/material-design-icons/releases
* source-code-pro - https://github.com/adobe-fonts/source-code-pro
* Artigo do StackOverFlow que ajudou construir os temas - https://stackoverflow.com/questions/37270835/how-to-host-material-icons-offline