---
id: roles-and-permissions
title: Roles y Permisos 
---

Subsocial ofrece de forma nativa cuatro roles integrados y dinámicos. Los propietarios de espacios pueden especificar y luego actualizar el rol de forma dinámica sobre cualquier cuenta de Subsocial, así́ como designar qué permisos están asociados a ese rol.

Estos serian los cuatro roles integrados:

| Role                    | Descripción                                       |
| ----------------------- | ------------------------------------------------- |
| Todo el mundo           | Cualquier cuenta en la blockchain de Subsocial.   |
| Ninguno                 | Ninguna cuenta podría hacerlo.                    |
| Seguidor                | Cualquier cuenta que siga un espacio determinado. |
| Propietario del espacio | Un propietario vigente de un espacio determinado. |

Los roles pueden asumir diferentes permisos según lo desee el propietario del espacio o el moderador. Al igual que con otras plataformas de redes sociales, es importante definir los permisos teniendo en cuenta las siguientes cuestiones:

- ¿Quién puede crear publicaciones y comentarios en un espacio?
- ¿Es posible editar una publicación o un comentario?
- ¿Es posible eliminar una publicación o un comentario?
- ¿Es posible el voto positivo/negativo o compartir un post?
- ... y mucho más.

## Por ejemplo, un espacio similar al de Twitter

Si quieres que sea similar a Twitter, implementarías los permisos en tu espacio de la siguiente manera:

- Sólo el propietario puede escribir post en un espacio determinado.
- Desactivar la edición de publicaciones y comentarios.
- Desactivar el voto negativo (downvotes).

Los roles y permisos permiten que un espacio sea flexible, personal y que defina un control de acceso granular. Esto ayuda a la gestión del espacio cuando este representa a un grupo de personas, como una comunidad, una organización o un equipo.
