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

## Como Hice Este Blog

Creo que como primer post **Tecnico** dejare unas instrucciones de como fue que realice este blog. Nota un poco repelente? este post es largo, y para variar tiene mucho lenguaje tecnico pero si logran sortearlo podran tener su blog libre de las plataformas actuales.

## Por Que elegi esta tecnologia?

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

# Crea tu propio blog.

En los tiempos de dictadura de blogs, tenemos en realidad pocas plataformas y algunas bastante enfocadas o de nicho, wordpress por ejemplo se volvio un poco aparatoso y esta hecho en php lo que para mi seria un retroceso nuevamente, aunque mucha gente es la herramienta ideal ya que solo tiene  que preocuparse del contenido. Siempre puede haber opiniones discordantes pero para eso existen los debates.

### Esta es una plataforma de nicho

Si, si lo miran bien es demasiado compleja tecnicamente para que una persona de a pie vaya y salga con su blog, a mi mismo me tomo cerca de medio dia quedar con todo lo que necesito.

# Instrucciones:

Antes de comenzar tengo que aclarar que se debe tener un conocimiento tecnico para realizar todos estos pasos, aunque siguiendo esta buena guia es posible que cualquiera pueda hacerlo, tratare de dejarlo lo mas humanamente leible

## El repositorio
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

## Core: vuepress + markdown

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

### Vuepress
una vez instalado es necesario instalar vuepress, para casos de automatizacion posterior, voy a instalarlo como dependencia

ese es el nucleo del sitio, el motor por decirlo de una manera mas comoda, yo uso para este blog el framework **meteorlxy**

para instalarlo realizar el siguiente comando

```bash
yarn add vuepress vuepress-theme-meteorlxy
```

:::tip
aca tenemos la instalacion de dos paquetes, para instalar paquetes en nodejs puedes hacerlo en una sola linea separando con espacio a los paquetes.
:::

### Directorios y archivos de configuracion

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

para poder ver como va tu blog tienes que primero crear los "comandos" para poder visualizar.

en el archivo `package.json` en la raiz del sitio hay que agregar los siguientes scripts.

```json
...
"scripts": {
  "dev": "vuepress dev src",
  "build": "vuepress build src --dest dist"
},
...

```

el primer comando hace que uno vea una version en vivo y local del sitio, segun tu archivo de configuracion puede quedar en el puerto designado, o por defecto la url es http://localhost:8080

el segundo comando crea la version para subir del blog, que convierte todo a html estatico listo para subir a tu server favorito.

se invocan desde el terminal de la siguiente forma...

```bash
yarn run dev #vista en vivo
yarn run build #construir version para subir
```

si dejas la version en vivo puedes ver los cambios a penas guardas los archivos markdown


### Archivos Markdown

En la estructura de directorios dentro de `src/` esta la carpeta `_post/` ahi uno deja los archivos con extesion **.md** que serviran como post del blog.

Hay que tener en cuenta dos cosas al respecto:

los nombres de archivos y las cabeceras de estos....

**Nombre de Archivo**

estos deben ser unicamente de esta forma

```
[año]-[mes]-[dia]-[nombre_de_archivo].md
```

ejemplo:
```
2019-09-04-hola_mundo.md
```

esto permite a la plataforma de vuepress, mostrar en el home del sitio los post, cada archivo es un post.

**Cabecera**

Antes de ponerse a escribir en el maravilloso markdown, hay que poner unas cabeceras para que el archivo sea correctamente parseado en el blog.

una cabecera de ejemplo **TIENE** que ser asi:

```bash
---
vssue: false #esto lo dejamos en false porque no estamos usando esta plataforma para los comentarios
title: Hola Mundo
category: Blog #agrupenlo como les sea comodo, debe ser solo uno.
date: 2019-09-04T19:06:01.386Z # puede ser el formato que mas te acomode.
tags:
  - blog
  - saludos
  - noticias
header-image: # opcional pero si pones una url se vera en la cabecera
---
```

desde la utima linea segmentada hacia abajo, puede uno escribir en markdown y el blog lo va a renderizar bonito.

## Soy un flojo y no me gusta equivocarme con los archivos

es verdad, siempre lo he dicho, si tengo que automatizar cosas lo haré sin dudarlo, en especial cuando las tareas son repetitivas y tienden a fallar en lo mas minimo, por lo que para evitar todo eso de crear archivos de post asi mal estoy usando un template handler que se llama plop (no tiene nada que ver con condorito).

## Plopjs

Es un poco complejo y tiene muchas aristas, pero la verdad que aca solo dejare como tengo yo funcionando el plop en mi proyecto,

### Instalarlo

se tiene que instalar como dependendia de desarrollo, para hacer eso ejecutar el siguiente comando

```bash
yarn add -D plopjs
# el -D lo deja en dependencia de dev y eso hace que cuando lo pongas en CI no lo va a instalar, solo lo usaremos de forma local.
```

en la raiz del sitio se tiene que crear un archivo `plopfile.js` con la configuracion para que funcione, el que tengo yo es

<details>
<summary> Mostar archivo </summary>

```js
const todayDate = new Date().toISOString().slice(0,10);
module.exports = (plop) => {
  plop.setGenerator('post', {
    description: 'new blog post',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'blog post name please',
      },
      {
        type: 'input',
        name: 'category',
        message: 'design a category',
      },
      {
        type: 'input',
        name: 'tags',
        message: 'list array comma separate',
      },
    ],
    actions: (d) =>
      {
        const actions = [];
        actions.push({
          type: 'add',
          path: 'src/_posts/'+todayDate+'-{{ snakeCase name }}.md',
          templateFile: 'templates/blogpost.md',
          data: {
            date: new Date().toUTCString(),
            tagsArray: d.tags.split(",").map(item => item.trim()),
          },
        });
        return actions;
      },
  });
};
```
</details>

**Explicacion:**
esto hace que en la terminal se te hagan 3 preguntas, el nombre del post, la cateoria, los tags (separados con comma estos).

crear script para que se ejecute en el archivo `package.json`

```json
"scripts": {
  ...
  "plop": "plop",
  ...
},
```
asi podemos ejecutar el template.

```bash
➜ yarn plop
yarn run v1.17.0
$ plop
? blog post name please post de prueba
? design a category blog
? list array comma separate test, post, estamos probando
✔  ++ /src/_posts/2019-09-05-post_de_prueba.md
✨  Done in 17.15s.
```

**Archivo template**

si se fijan en el archivo `plopfile` te esta pidiendo un template que tiene que estar en el siguiente directorio `templates/`

el que estoy utilizando es el siguiente:

<details>
<summary> Mostar Archivo </summary>

```markdown
---
title: {{ titleCase name }}
category: {{ titleCase category }}
date: {{ date }}
tags:
{{#each tagsArray}}
  - {{ this }}
{{/each}}
header-image:
---
# {{ titleCase name}}


<disqus />
```

</details>


con eso plop va a rellenar la informacion consultada en los tags entre llaves.


_work in progress, voy a continuar con este mismo post y lo actualizare cuando tenga un poco mas de tiempo_

<disqus />
