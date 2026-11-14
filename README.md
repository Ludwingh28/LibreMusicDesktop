<p align="center"><img src="assets/icon.png" alt="Logo de LibreMusic" width="112" /></p>

# LibreMusic Desktop

**LibreMusic** es una app de escritorio para Windows que envuelve YouTube Music en Electron, sin anuncios y con controles nativos del sistema. También existe para Android: [LibreMusic Mobile](https://github.com/Ludwingh28/LibreMusicMobile).

<p align="center">
  <a href="https://github.com/Ludwingh28/LibreMusicDesktop/releases/latest">Descargar para Windows</a> ·
  <a href="https://github.com/Ludwingh28/LibreMusicMobile">LibreMusic Mobile (Android)</a> ·
  <a href="LICENSE">Licencia MIT</a>
</p>

[![Release](https://github.com/Ludwingh28/LibreMusicDesktop/actions/workflows/release.yml/badge.svg)](https://github.com/Ludwingh28/LibreMusicDesktop/actions/workflows/release.yml)
[![Descargar última versión](https://img.shields.io/badge/descargar-%C3%BAltima%20versi%C3%B3n-blue)](https://github.com/Ludwingh28/LibreMusicDesktop/releases/latest)
[![Licencia MIT](https://img.shields.io/badge/licencia-MIT-green)](LICENSE)

> Proyecto personal, no oficial ni afiliado a Google ni a YouTube.

## Características

- **Sin anuncios**, en dos capas: listas de anuncios (EasyList) a nivel de red (bloquean la mayoría de anuncios antes de que carguen) y un script que salta o silencia lo que se cuele.
- **Inicio de sesión con Google funcional**, sin el aviso de "este navegador o app puede no ser seguro" que Google muestra en navegadores embebidos normales.
- **Actualizaciones automáticas**: la app revisa nuevas versiones sola (al abrir y cada 4 horas) y se actualiza sin que tengas que reinstalarla a mano.
- **Controles nativos de Windows**: botones de Anterior / Reproducir-Pausa / Siguiente al pasar el mouse sobre el ícono en la barra de tareas, además de un ícono en la bandeja del sistema con el mismo menú.
- Ventana **Acerca de** (menú Ayuda y bandeja) con la versión, enlaces al repositorio, a la versión para Android y a la licencia.
- Al cerrar la ventana te pregunta si quieres seguir escuchando en segundo plano o salir del todo, con opción de recordar tu elección.
- Pensada para no consumir de más: una sola instancia a la vez, sin sondeos constantes de CPU, límite de fotogramas en el compositor.

## Instalación

1. Ve a [Releases](https://github.com/Ludwingh28/LibreMusicDesktop/releases/latest) y descarga el instalador `LibreMusic Setup x.x.x.exe`.
2. Ejecútalo. El instalador no está firmado digitalmente, así que Windows SmartScreen puede mostrar un aviso de "editor desconocido" — dale a **Más información → Ejecutar de todas formas**.
3. Abre la app e inicia sesión con tu cuenta de Google si quieres tu biblioteca y tus recomendaciones.

Las siguientes versiones se instalan solas: no hace falta volver a descargar nada manualmente.

> **¿Venías de YTM Desktop?** La app se renombró a LibreMusic en la versión 1.2.0. Se actualiza sola como siempre y conserva tu sesión y tus ajustes: no tienes que hacer nada.

## LibreMusic en Android

[**LibreMusic Mobile**](https://github.com/Ludwingh28/LibreMusicMobile) es la versión para teléfonos, con el mismo logo y la misma idea: escuchar YouTube Music sin anuncios. Son dos apps distintas por dentro, cada una hecha para su plataforma:

| | LibreMusic Desktop | LibreMusic Mobile |
|---|---|---|
| Plataforma | Windows | Android 8.0 o superior |
| Cómo funciona | Carga la web oficial de YouTube Music y bloquea los anuncios | App nativa: usa la API interna de YouTube Music y obtiene solo el audio con NewPipeExtractor |
| Hecha con | Electron | Kotlin, Jetpack Compose y Media3 |
| Descarga | [Instalador `.exe`](https://github.com/Ludwingh28/LibreMusicDesktop/releases/latest) | [APK](https://github.com/Ludwingh28/LibreMusicMobile/releases/latest) |
| Licencia | MIT | GPLv3 |

Las dos se actualizan solas y guardan tu sesión de Google solo en tu dispositivo, sin servidores propios ni analíticas.

## Desarrollo

Requisitos: Node.js 18 o superior.

```bash
git clone https://github.com/Ludwingh28/LibreMusicDesktop.git
cd LibreMusicDesktop
npm install
npm start
```

### Generar el instalador localmente

```bash
npm run dist
```

El instalador queda en `dist/`.

## Stack técnico

- [Electron](https://www.electronjs.org/)
- [`@ghostery/adblocker-electron`](https://github.com/ghostery/adblocker) — listas de bloqueo de anuncios
- [`electron-updater`](https://www.electron.build/auto-update) + [`electron-builder`](https://www.electron.build/) — empaquetado y actualizaciones automáticas
- GitHub Actions — compilación y publicación automática de releases

## Licencia

[MIT](LICENSE) — puedes usar, copiar, modificar y redistribuir este código libremente, manteniendo el aviso de copyright. Esto cubre únicamente el código de este repositorio (LibreMusic Mobile tiene su propia licencia, [GPLv3](https://github.com/Ludwingh28/LibreMusicMobile/blob/main/LICENSE)): YouTube Music, sus marcas y su contenido siguen siendo propiedad de Google.
