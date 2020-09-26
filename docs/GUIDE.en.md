# Guide

# Index

 - [1. Introduction](#introduction)
 - [1.1. ¿What is it?](#what-is-it)
 - [1.2. What is it for?](#what-is-it-for)
 - [1.3. Why?](#why)
 - [1.4. To what?](#to-what)
 - [1.5. Alternatives](#alternatives)
 - [2. Requirements](#requirements)
 - [3. Installation](#installation)
 - [4. Dependencies](#dependencies)
 - [5. Structure](#structure)
 - [6. APIs](#apis)
 - [7. Deployment](#deployment)
 - [8. Commands](#commands)
 - [9. Fluxes of work](#fluxes-of-work)
 - [10. Debugging and tracing](#debugging-and-tracing)
 - [11. Hooks](#hooks)
 - [11.1. ¿Por qué `hooks`?](#¿Por qué `hooks`?)
 - [11.2. extender-hooks](#extender-hooks)
 - [12. Plugins and markets](#plugins-and-markets)
 - [13. Reference](#reference)
 - [14. Kernel overwrittings](#kernel-overwrittings)
 - [15. Acknowledgement](#acknowledgement)
 - [16. License](#license)
 - [17. Versions](#versions)


# Introduction

...

## ¿What is it?

...

## What is it for?

...

## Why?

...

## To what?

...


## Alternatives

...


# Requirements

# Installation

# Dependencies

# Structure

# APIs

# Deployment

# Commands

# Fluxes of work

# Debugging and tracing

# Hooks

### ¿Por qué `hooks`?

Los `hooks`:
  - son eventos que una misma API de [`Plantomium CMS`](#) llamará si pasa por ciertos puntos del código.
  - son un método de extender la ejecución sin alterar el código fuente de la misma.
  - son un mecanismo de desacoplamiento de código muy eficiente.

Por estas razones principalmente, los `hooks` son un mecanismo nativo de la API de [`Plantomium CMS`](#).

De todos modos, no es la intención basar intensivamente el desarrollo de un proyecto a través de los `hooks`, como sí puede ocurrir a menudo en otros entornos.

Por esta última razón, la documentación de los `hooks` es bastante simple. Sin embargo, los `plugins`, por ejemplo, están pensados para que sí usen intensivamente esta API, pero quizá encuentren más conveniente añadir sus propios `hooks` personalizados en la aplicación.

### Lista de hooks

El proceso de [`Plantomium CMS`](#) comprende los siguientes hooks, llamados en este mismo orden en la ejecución natural de [`Plantomium CMS`](#):

- `project.on-create-app`: crea la `cms.app`, una aplicación de express.
- `project.on-create-server`: crea el `cms.server`, un servidor HTTPS de node.
- `project.on-mount-rest-to-router`: antes de montar las rutas del servicio rest en `src/cms/router/rest.js`.
  - `router:Object`: un enrutador de express.
- `project.on-mounted-rest-to-router`: después de montarlas.
- `project.on-load-api`
- `project.on-mount-router`
- `project.on-mount-auth-to-router`
- `project.on-mounted-auth-to-router`
- `project.on-mount-json`
- `project.on-mounted-json`
- `project.on-mount-process-to-router`
- `project.on-mounted-process-to-router`
- `project.on-mounted-router`
- `project.on-mount-sockets`
- `project.on-mounted-sockets`
- `project.on-regenerate-db`
  - `outputPath:String`: ruta de salida del `schema` de la base de datos original.
- `project.on-regenerated-db`
  - `outputPath:String`: ruta de salida del `schema` de la base de datos original.
  - `data:Object`: datos generados en el análisis de la base de datos.
- `project.on-regenerate-rest`
- `project.on-regenerated-rest`
  - `output:Object`:
- `project.on-start-server`
- `project.on-started-server`
  - `result:Object`
- `project.on-stop-server`
- `project.on-stopped-server`

Más o menos, se intuye lo que está haciendo la API en cada caso, pero pueden buscar en los códigos fuente para más información.

Nótese que algunos de estos `hooks` reciben parámetros.

# Plugins and markets

# Reference

# Kernel overwrittings

# Acknowledgement

# License

# Versions

