---
title: Como Hice Este Blog
category: Tutorials
date: Thu, 05 Sep 2019 14:40:28 GMT
tags:
  - firebase
  - vue
  - vuepress
  - markdown
  - travis
  - github
  - disqus
  - tutorials
  - manual
  - tldr
header-image:
---
# Como Hice Este Blog

Creo que como primer post **Tecnico** dejare unas instrucciones de como fue que realice este blog. Nota un poco repelente? este post es largo, y para variar tiene mucho lenguaje tecnico pero si logran sortearlo podran tener su blog libre de las plataformas actuales.

# Por Que elegi esta tecnologia?

simplemente por el control que tengo sobre todo, ademas no tengo que manipular bases de datos y tendrian que pasar por casi tres autentificaciones de dos pasos para poder si quiera editar algo en este blog. Si, es por precaucion porque ociosos hay en todas partes, mas gente que se que les caigo mal... pero creo que eso puede ir a otro post.

## El stack

:::tip
Lo llamamos stack en informatica a un conjunto de servicios o tecnologias para resolver un problema
:::

para realizar este blog use los siguientes servicios tecnologias

- **Vuepress**: es el core del blog en si, es una plataforma que lee textos en [**Markdown**](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) para renderizarlos en HTML y dejar unos lindos estaticos.

- **Markdown**: es la forma en la cual se escriben los post aca es un archivo con "*atajos*" de formato de texto, la mayoria de las documentaciones online estan en markdown o similares.

:::tip
Wikipedia usa uno similar que se llama markup
:::

- **Github**: Si, el blog completo esta alojado en un repositorio, lo tengo oculto solo porque tendre muchos borradores de post y no quiero que lleguen a ellos si no estan en el sitio en si.

- **Firebase**: para alojar gratuitamente el sitio estoy usando firebase que me permite tener staticos y es mucho mas rapido que varios de sus competidores, aunque un poco limitado, la ventaja es que tengo analytics y posibilidad de desplegar desde consola inmediatamente cuando haga una actualizacion.

- **plopjs**: Siempre lo he dicho, soy un flojo de mierda asi que para evitar andar haciendo a cada rato plantillas y tiempo de codigo innecesario he creado un par de templates y con plopjs simplemente desde mi terminal escribo el tipo y el nombre y la cosita me deja tranquilamente el blog tal como quiero y solo me dedico a escribir.

- **travis-ci**: Nuevamente con mi flojera y tambien como seguridad, para evitar que muchos de mis WIP (work in progress) aparescan en el sitio sin que yo lo quiera tengo los despliegues y actualizaciones automaticas con travis, que es un servicio de integracion continua.

- **disqus**: Solo puse esto por si alguien se da la paja de comentar aca.

---

Ahora ustedes se preguntaran..... ¿Como es que hizo todo esto, y para que darse tanto la paja si es solo un blog?

No se preocupen que dejare un paso a paso de como cree esta maravilla usando todos esos servicios.

## Crea tu propio blog.

En los tiempos de dictadura de blogs, tenemos en realidad pocas plataformas y algunas bastante enfocadas o de nicho, wordpress por ejemplo se volvio un poco aparatoso y esta hecho en php lo que para mi seria un retroceso nuevamente, aunque mucha gente es la herramienta ideal ya que solo tiene  que preocuparse del contenido. Siempre puede haber opiniones discordantes pero para eso existen los debates.

### Esta es una plataforma de nicho

Si, si lo miran bien es demasiado compleja tecnicamente para que una persona de a pie vaya y salga con su blog, a mi mismo me tomo cerca de medio dia quedar con todo lo que necesito.

## Instrucciones:

Antes de comenzar tengo que aclarar que se debe tener un conocimiento tecnico para realizar todos estos pasos, aunque siguiendo esta buena guia es posible que cualquiera pueda hacerlo, tratare de dejarlo lo mas humanamente leible

### El repositorio
Como dije este blog esta hosteado completamente en github (no es una publicidad, es una necesidad). antes de ponerse a bajar paquetes o editar plataformas primero hay que crear un repositorio.

:::tip
Ahora github permite tener repositorios privados gratis, pero no son compatibles con la integracion continua de travis, a menos que pagues una suscripcion mensual en el segundo.
:::

- Se crean una cuenta en la pagina de github y una vez realizado todo lo que te pide, lo cual igual es arto, en la esquina superior izquierda del dashboard tenemos el crear nuevo repositorio.

![imagen1](/img/como_hice_este_blog/imagen1.png)

aca la guia puede tomar dos pasos, una es la integracion continua automatica usando travis o a manito con un poco mas de control, pero mas pajoso. En pro de hacer la mayor cantida de cosas automaticamente vamos a hacerlo con CI (eso es integracion continua).

es importante que al crear el repositorio este debe no debe ser privado si no travis no les va a servir.

![imagen2](/img/como_hice_este_blog/imagen2.png)

ahora una vez creado desde tu computador usando la terminal que mas te acomode *yo uso mac con iTerm2 para la gente con windows siempre puede usar linux subsystem* hay un buen post de como instalarlo [aca](https://medium.com/karibu-blog/usando-bash-nativo-con-linux-subsystem-for-windows-10-e6d3c49806a)

- crear un directorio, inicializarlo con git y conectar el repositorio remoto (suena complicado pero es mas simple de lo que parece)


**Comandos:**
```bash
mkdir [mi directorio]
cd [mi directorio]
git init
git remote add origin git@github.com:[mi usuario]/[mi repo].git
```

**Ejemplo:**
```bash
mkdir blog
cd blog
git init
git remote add origin git@github.com:TheYakuza/mi-blog.git
```

es recomendable seguir las buenas practicas y los estandards de como mantener un repositorio, cada quien sabe donde le aprieta el zapato en eso, yo para resolverlo uso [git flow](https://danielkummer.github.io/git-flow-cheatsheet/).

:::tip
Ahora todo se va a poner un poco mas tecnico aun a partir de aca todo tiene que ser desde el directorio que creamos y desde la terminal
:::

### Core: vuepress + plop

Vuepress es un framework que une muchas cosas que sirve para poder facilitar (si, increiblemente) el crear un blog de la forma en la que estoy haciendo. Para llegar a tener eso es necesario tener **NodeJS** y un gestor de paquetes del mismo. dependiendo que tanto sabes es recomendable seguir las guias de cada uno

- [install NodeJS](https://nodejs.org/es/)
- [install Yarn](https://yarnpkg.com/en/docs/install)

antes de ponerse a instalar paquetes a lo loco es reomendable que uno inicialice el directorio como proyecto nodejs por lo que debe usar la terminal y realizar el siguiente comando, asumiendo que tienes yarn.

```bash
yarn init
```
responder las preguntas que salen en el terminal, usualmente no hay que hacer muchos cambios en este punto, yo al menos le di `Enter` a todo, el inicializador es inteligente y toma los datos de tu repositorio.

:::tip
Ahora, cuando uno crea un proyecto en node, hay un par de cosas que tiene que tener en consideracion, uno son las excepciones y lo otro el mitico `node_modules` como directorio, para evitar que lo segundo le suba mucho el peso de tu proyecto en el servidor es recomendable tener un archivo `.gitignore` y poner todos los archivos, directorios y/o extensiones que no quieres que suban en el repositorio, no te preocupes, muchos de esos archivos son unos que no los vas a editar pero ayudan en el funcionamiento del blog, no te preocupes que con CI se resuelve eso, tambien sirve para no subir archivos sensibles como contraseñar y nombres privados. Yo uso el stack que te entrega el siguiente [enlace](https://gitignore.io/api/vue,node,linux,macos,windows,firebase)
:::

#### Vuepress
una vez instalado es necesario instalar vuepress, para casos de automatizacion posterior, voy a instalarlo como dependencia

ese es el nucleo del sitio, el motor por decirlo de una manera mas comoda, yo uso para este blog el framework **meteorlxy**

para instalarlo realizar el siguiente comando

```bash
yarn add vuepress vuepress-theme-meteorlxy
```

:::tip
aca tenemos la instalacion de dos paquetes, para instalar paquetes en nodejs puedes hacerlo en una sola linea separando con espacio a los paquetes.
:::

#### Directorios y archivos de configuracion

la estrucra de archivos para que funcione correctamente es:

```
my-blog
├── src # base de donde se encontraran los archivos
│   ├── .vuepress # directorio de vuepress
│   │   └── config.js # archivo de configuracion
│   └── _posts # directorio de posts
│       ├── xxx.md
│       ...
└── package.json
```

el archivo de configuracion es un javascript que contiene parametros estandard de vuepress asi como especiales para el tema que permite que funcione como blogs, el mio es parecido a esto:


<details>

<summary>Click to expand the sample config</summary>

```javascript
module.exports = {
  title: 'Nicolas\'s Blog',
  description: 'Blog surtido de ideas y cosas que salen',
  locales: {
    '/': {
      lang: 'en-US',
    },
  },
  theme: 'meteorlxy',
  port: 3000,
  serviceWorker: true,
  evergreen: true,
  markdown: {
    anchor: { permalink: true },
    toc: { includeLevel: [1, 2, 3] }
  },

  themeConfig: {
    comments: false,
    lang: 'en-US',
    personalInfo: {
      nickname: 'Nicolas',
      description: 'Tech Leader</br>FullStack Developer</br>DevOps</br>Blogger',
      email: '',
      location: 'Santiago, RM, Chile',
      avatar: '/img/avatar.jpg',
      sns: {
        github: {
          account: 'TheYakuza',
          link: 'https://github.com/TheYakuza/',
        },
        twitter: {
          account: '_makunga',
          link: 'https://twitter.com/_makunga',
        },
        linkedin: {
          account: 'nicolas martinez villarroel',
          link: 'https://www.linkedin.com/in/pedro-nicolas-martinez-v/',
        },
        instagram: {
          account: 'themakunga',
          link: 'https://instagram.com/themakunga/',
        },
      },
    },
    header: {
      background: {
        url: '/img/deader.png',
        useGeo: false,
      },
      showTitle: false,
    },
    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
    ],
    pagination: {
      perPage: 10,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
};
```
</details>

pueden encontrar una guia mucho mas completa y dedicada en el siguiente [link](https://vuepress-theme-meteorlxy.meteorlxy.cn/posts/2019/02/27/theme-guide-en.html)

_work in progress, voy a continuar con este mismo post y lo actualizare cuando tenga un poco mas de tiempo_

<disqus />
