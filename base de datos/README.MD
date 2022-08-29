# DESCRIPTCIÓN DE LA BASE DE DATOS

## ENTIDADES/OBJETOS

### Clientes

#### Campos

- idCliente: identificador

- first_name: nombre del cliente

- last_name: apellido del cliente

- numbre_phone: número de teléfono del cliente

- address: direcion del cliente 

- idContactos: los contactos con los que habla el cliente

### Proyectos

#### Campos

- idProyectos: identificador

- nombre: nombre del proyecto

- description: descripcion del proyecto(de qué trata)

- cost: costo del proyecto

- state: estado en el que se encuentra el proyecto(0=pendiente 1=finalizado)

- idClientes: los proyectos que tiene cada cliente


### Reuniones

#### Campos

- idReuniones: identificador

- description: tema que se va hablar en la reunión

- date: fecha que se llevará a cabo la reunión

- idClientes: cliente que participara en la reunión

- idProyectos: el proyecto que se hablara en la reunión

### Contactos

#### Campos

- idContactos: identificador

- name: nombre del contacto

- rol: puesto o rol que tiene el contacto

- number_phone: número de teléfono del contacto

### Asignacion_Reunion

#### Campos

- idAsignacion: identificador

- idContactos: el contacto que va a tener asignada las reuniones

- idReuniones: la reunión que va tener asignada varios contactos 