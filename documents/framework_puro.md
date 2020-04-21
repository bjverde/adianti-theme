# Temas para o FremeWork Puro
Temas para apresentação do [Adianti FrameWork 7.0](https://www.adianti.com.br/)

## Bootstrap
Temas baseado na aparecem padrão do Bootstrap
* [Boostrap Theme_formdin](framework_puro/bootstrap_theme_formdin.md), tema com menu horizontal e baseado no tema classico do FormDin 4
* [theme3_v2](framework_puro/bootstrap_theme3_v2.md) 
* [theme3_v3](framework_puro/bootstrap_theme3_v3.md) - Informações dinâmica do arquivo `application.ini`
* [theme3_v4](framework_puro/bootstrap_theme3_v4.md) - V3 atulizado para Adianti 7.1 e favicon.png
* [theme3_v5](framework_puro/bootstrap_theme3_v5.md) - Ocupando toda tela


Ideia geral um Tema BootStrap
![theme_bootstrap](img/theme_bootstrap.png)

## Material
Temas baseado na aparecem Material da google, são temas Bootstrap porém com o lock en feel diferente.


# Theme4_v2
Tema baseado no theme4 do Adianti FrameWork 7.0, *Quais são as diferenças do theme 4 do Adianti 7.0 ?*. Abaixo as lista dediferenças:

* retirada do `maximum-scale=1, user-scalable=no` da `viewport` no arquivo layout.html. Sem esse parâmetro no celular o usuário consegue fazer o movimento de pinça para aumentar ou diminuir o zoom, o que aumenta acessebilidade para os usuários.

## Para usar 
Subistiua o arquivo `<SISTEMA>/app/templates/theme4/layout.html` pelo arquivo que está na pasta `theme4_v2/layout.html`.