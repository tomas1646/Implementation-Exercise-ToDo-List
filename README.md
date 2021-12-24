# Implementation-Exercise-ToDo-List

### Requerimientos
* Creación de una lista To-Do.
* Creación de carpetas (Folders) que agrupen los To-Do items.

### Requisitos para correr en Linux
Instalar Java, en caso de no tenerlo, lo podemos hacer con el siguiente comando.

`sudo apt install default-jdk`

Instalar Maven, para poder instalarlo se hace con el siguiente comando.

`sudo apt get install maven`

Tener instalado MySQL, con: 
* usuario = root
* contraseña = root 
* Corriendo en el puerto 3306 (puerto por defecto)

Asi no hay que hacer configuraciones adicionales.

En caso de no tenerlo instalado se puede hacer con el siguente comando
`sudo apt install mysql-server`

Crear el usuario y la contraseña se puede encontrar facilmente en internet.

### Como abrirlo en Linux
1. Desde la terminal nos vamos al directorio donde queremos clonar el repositorio.
2. Clonamos el repositorio

`git clone https://github.com/tomas1646/Implementation-Exercise-ToDo-List`

3. Una vez clonado, entramos a la carpeta

`cd Implementation-Exercise-ToDo-List/`

4. y para configurar el proyecto ejecutamos:

`./bash.sh`

Lo que hace este Script es:
* Crea la Base de Datos en MySQL
* Instala Maven en el proyecto
* Ejecuta el .war para que corra la aplicacion en el puerto 8080

La aplicacion corre en el puerto numero 8080. La podemos abrir de nuestro navegador de preferencia.

`http://localhost:8080/`

### Vistas

##### Folder
![Folder](https://github.com/tomas1646/Implementation-Exercise-ToDo-List/blob/master/img%20README/Folder.jpg "Folder")

##### Lista To-Do
![ToDo](https://github.com/tomas1646/Implementation-Exercise-ToDo-List/blob/master/img%20README/ToDo%20List.jpg "ToDo")

##### Editar To-Do
![Edit ToDo](https://github.com/tomas1646/Implementation-Exercise-ToDo-List/blob/master/img%20README/EditingTodo.jpg "Edit ToDo")

### Technologies

#### Front-End

Framework:
* Bootstrap v 5.1.3 

Al ser una pagina simple, solo use Bootstrap para hacer el diseño Responsive. El manejo de la Single Page web Application (SPA) lo hice solo con JavaScript, sin usar otros frameworks.

#### Back-End
Las tecnologias utilizadas con sus versiones son:
* Java v 1.8
* MySQL v 8.0.25

Frameworks:
* Spring Boot v 2.6.2

Librerias:
* Lombok v 1.18.22

#### Comunicacion
Para la comunicacion entre el Front-End y el Back-End se hace a traves de un servicio API REST. Que cuenta con la configuracion necesaria para modificar, crear y/o eliminar datos.

#### Requerimientos Extra

* Diseño Responsive de la aplicacion
