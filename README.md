# Proyecto React Coder House

_E-commerce hecho con React JS_ para el curso de **CoderHouse**. 
El proyecto incluye los siguientes elementos:

- [x] **Hooks**
- [x] **Router-dom** 
- [x]  **Context** 
- [x] **SyntheticEvents**
- [x] **Firebase**

## Comenzando 🚀

  
_Para comenzar a utilizar el repositorio clonálo localmente en tu PC usando los siguientes comandos:_

```
git clone https://github.com/dharmachita/proyecto-react-coder
```
ó
```
gh repo clone dharmachita/proyecto-react-coder
```
O descargando el archivo comprimido del repositorio.



Mirá la sección de **Despliegue** para conocer como desplegar el proyecto.

  
  

### Pre-requisitos 📋

  

_Para poder utilizar el repositorio actual necesitás tener NPM (Node Package Manage)_

Descargalo desde acá --> [NPM](https://www.npmjs.com/)  



  

### Instalación 🔧

  



  

_Para instalar las dependencias declaradas en el **package.json** ejecutá el comando:_

```
npm install
```



  ## Uso 🐱‍👤

_Dentro de la ruta principal del proyecto tenés una serie de scripts que podés utilizar en el proceso de desarrollo:_

### `npm start`

Ejecuta la aplicación en modo de desarrollo. 

Abrí [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se volverá a cargar si realizás modificaciones. 

También verás cualquier _lint error_  en la consola.

  

### `npm run build`

  
Creá la aplicación para producción en la carpeta `build`. 

Agrupá correctamente React  y optimizá la compilación para obtener el mejor rendimiento.

La compilación se minimiza. 

¡Tu aplicación está lista para implementarse!


### `npm run eject`

  

** Nota: esta es una operación unidireccional. Una vez que "expulsás", ¡no podés regresar! **

  

Si no estás satisfecho con la herramienta de compilación y las opciones de configuración, podés "expulsar" en cualquier momento. Este comando eliminará la dependencia de compilación única de tu proyecto.

### `npm run upload`
  
  En cualquier momento podés subir productos a tu base de datos de **Firebase** haciendo uso del script ``upload``. Para ello necesitás tener una aplicación en Firebase y copiar las _KEYS_ de conexión en el archivo **.env** (Visitá la sección **Variables de Entorno** para más información). 
  En la ruta ``src/utils/productos.json`` podés encontrar el arhivo que tenés que editar para agregar productos antes de ejecutar el script. El formato por defualt es:
  _{
	  "catID":"",
	"descripcion":"",
	"lgImg":"imagen300x300",
	"precio":0,
	"smImg":"imagen150x150",
	"stock":0,
	"titulo":""
}_

### Variables de Entorno

Las _API KEY_ y otra información sensible que no puede ser compartido en los repositorios deben ser incluidos en archivos **.env** e incluir estos archivos dentro del **.gitignore**.
Para poder conectarte a tus aplicación de _Firebase_ y hacer uso de _Firestore_ y _Storage_necesitas incluir tus KEYS. Se sugiere que los nombres de las variables conserven los siguientes nombres:

**API_KEY
AUTH_DOMAIN
MESSAGING_SENDER_ID
APP_ID
MP_PUBLIC_KEY
MP_ACCESS_TOKEN**
  

## Despliegue 📦

  
_Podés hacer tus despliegues en plataformas de **cloud deploy** para sitios serverless. Algunos ejemplos son:_

 - [Vercel](https://vercel.com/)
 - [Netlify](https://www.netlify.com/)


## Autor ✒️

  

*  **Mauro Rambo** - [dharmachita](https://github.com/dharmachita)

  
 
---

⌨️ con ❤️ por [dharmachita](https://github.com/dharmachita) 😊
  
  


