# DECK.GL WITH REACT

# DESARROLLO SIN DOCKER

## Requerimientos:

- NODE Versión `16.14` (Fue con la que se desarrollo)

## Ejecución:

```
npm install
```

Instala todas las librerías Necesarias

```
npm start
```

Inicia la ejecución, por defecto en`localhost:3000`

---

# PRODUCCIÓN SIN DOCKER

## Requerimientos:

- NODE Versión `16.14` (Fue con la que se desarrollo)

## Ejecución:

```
npm install
```

Instala todas las librerías Necesarias

```
npm run build
```

Crea la carpeta `build` donde esta todo el proyecto.

---

# DOCKER DESARROLLO

1. Tener instalado `Docker` y `Docker-compose`
2. Build con `sudo docker-compose -f docker-compose-dev.yml build`
3. Correr contenedor con `sudo docker-compose -f docker-compose-dev.yml up`

---

# DOCKER PRODUCCIÓN

1. Tener instalado `Docker` y `Docker-compose`
2. Build con `sudo docker-compose build`
3. Correr contenedor con`sudo docker-compose up`

---

# VARIABLES DE ENTORNO GLOBALES

Las mismas se encuentran en el archivo `.env`

<aside>
⚠️ Para que una **env** sea leída por react tiene que empezar por `REACT_APP_`

</aside>

```
REACT_APP_KEY_MAPBOX=pk.abc
REACT_APP_STYLE_MAPBOX=mapbox://styles/mapbox/dark-v10
PORT_IN_HOST_MAP=1234
```

La variable de `REACT_APP_STYLE_MAPBOX` que aparece en `.env.example` es valida y es libre. colocando un puerto solo se necesita una `KEY` de `MAPBOX`

---

# LIBRERÍAS

### Mapas

- [@turf/turf](https://turfjs.org/)
- [deck.gl](https://deck.gl/)
- [mapbox-gl](https://docs.mapbox.com/mapbox-gl-js/api/)
- [react-map-gl](https://visgl.github.io/react-map-gl/)

<aside>
⚠️ Versión de react-map-gl compatible con Deck.gl: @5

</aside>