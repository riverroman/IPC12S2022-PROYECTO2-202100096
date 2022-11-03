## **IPC12S2022-PROYECTO_2_-202100096**

### 1. Tabla de Datos:

| CARNET:  |      NOMBRE COMPLETO :              |  
|----------|:-----------------------------------:|
| 202100096|RIVER ANDERSON ISMAELJ ROMAN         | 
| AUXILIAR:|    JAVIER OSWALDO MIRÓN CIFUENTES   |   
| SECCION: |                "F"                  |    

### 2.Fronted

>Tecnologia Utilizada:

 1. Para el desarrollo web se utilizaron las siguiente tecnologias:


    * Angular (Desarrollo de Fronted)
    * Boostrap (Kit de herramienta de prediseños)

2. Servicios utilizados:

    * Jugador (Service): Este servicio nos ayuda para declarar el redireccionamiento de los jugadores en la pagina de inicio.

    * Usuarios (Service): Este servicio nos ayuda al ingreso a la pagina de inicio, acà de igual forma declaramos una API_URI: con los ususarios.

3.  Manejo del sitio Web:

    * Login: Para el login nos encontraremos con un formulario donde debemos de ingresar el usuario y el password declarados en el proyecto.

    ![Login](/Fronted/1.png)


    * Inicio: Una vez ingresado con nuestro usuario esta nos redireccionará a la pagina principal donde podremos observar tarjetas de los jugadores que participaran en el mundial Qatar 2022.

    ![inicio](/Fronted/2.png) 

    * Cerrar Sesion: Contaremos con un botón llamado Cerrar Sesion este al ser presionado nos cerrará sesion del usuario actual y nos redigirá al login.


    ![Cerrar Sesion](/Fronted/3.png)

    * Indicador del Usuario Actual: Este indicador nos indica nuestro nombre de usuario logueado.

    ![usuario](/Fronted/4.png)

### 3. Backend

>Modulos Utilizados:

1. Algunos modulos que fueron utilizados para el desarrollo del backend:

    * '@angular/cors'
    * '@angualr/express'
    * '@angular/morgan'
    
2. Requerimientos del Sistema:

    * Visual Studio Code
    * Angular
    * Typescript

3.  Puerto utilizados:

    Para este proyecto se usaron 2 puertos para el backend se uitlizo el puerto 3,000, y para el fronted en este caso se uso Angular, Angular por defectò trabaja en el puerto local 4200.

4. Enpoinst:

    Estos endpoint fueron programados con el final que estos nos manden las diferentes informaciones que deseamos y que estas sean mostrados al usar el puerto 3000.

    Para este proyecto se usaron un total de 5 endpoints:


    * Obtener Usuarios: Este endpoint se encarga de mandarnos informacion sobre un jugador por medio de su usuario.

    * Obtener Jugadores: Este endpoint nos manda datos de los jugadores en este caso se encarga de mandarnos todos los jugadores que estan registrados.

    * Obtener por Seleccion: En este endpoint nos mandan informacion sobre las selecciones de los jugadores.

    * Obtener por Region: Al programar este endpoint esta nos mandara informacion sobre la Region en que juegan los jugadores.

    * Obtener pro Nombre: En este endpoint encontraremos mediante la busqueda de jugadores por medio de nombre.

    Al programar estos endpoints podemos interactuar mediante el navegador las diferenetes direcciones que se usaron para este caso serian: Seleccion, region, nombre y jugadores.








