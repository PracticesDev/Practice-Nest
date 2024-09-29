<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).




Practice DB

Tablas y Relaciones

- Estudiante (Students)
Cada estudiante puede estar matriculado en varios cursos.

id: clave primaria (PK)
nombre: nombre del estudiante
email: correo del estudiante
Relaciones:
Un estudiante puede estar matriculado en muchos cursos (relación muchos a muchos con la tabla Cursos, a través de la tabla Matrículas).

- Profesor (Teachers)
Cada profesor puede enseñar varios cursos.

id: clave primaria (PK)
nombre: nombre del profesor
email: correo del profesor
Relaciones:
Un profesor puede enseñar muchos cursos (relación uno a muchos con la tabla Cursos).


- Curso (Courses)
Cada curso tiene un profesor y muchos estudiantes.

id: clave primaria (PK)
nombre: nombre del curso
descripcion: descripción del curso
profesorId: clave foránea (FK) que apunta al profesor que enseña el curso
Relaciones:
Un curso tiene un solo profesor (relación muchos a uno con Profesores).
Un curso puede tener muchos estudiantes (relación muchos a muchos con Estudiantes, a través de la tabla Matrículas).


-Matrícula (Enrollments)
Esta tabla es intermedia para modelar la relación muchos a muchos entre Estudiantes y Cursos.

id: clave primaria (PK)
estudianteId: clave foránea (FK) que apunta a Estudiantes
cursoId: clave foránea (FK) que apunta a Cursos
fechaMatricula: fecha en que el estudiante se matriculó en el curso



Relaciones:
Relación muchos a uno con Estudiantes (un estudiante puede tener muchas matrículas).
Relación muchos a uno con Cursos (un curso puede tener muchas matrículas).


Estudiantes                      Cursos                         Profesores
------------                      ------------                   ------------
id (PK)                           id (PK)                        id (PK)
nombre                            nombre                         nombre
email                             descripcion                    email
                                  profesorId (FK)

                   Enrollments (Matrículas)
                   -----------------------
                   id (PK)
                   estudianteId (FK)
                   cursoId (FK)
                   fechaMatricula
              

Relación entre Tablas
Estudiantes ↔ Cursos (Muchos a muchos) a través de Matrículas.
Cursos ↔ Profesores (Muchos a uno), donde un profesor puede tener varios cursos.
Matrículas conecta la relación entre estudiantes y cursos.