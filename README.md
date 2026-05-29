# Explofit — Campañas de feed (@xplofit · Michelle Calderón)

Carruseles de Instagram 1080×1350 construidos sobre un sistema de marca compartido
(`colors_and_type.css`): paleta **ember** `#C5532B` / cream / gold / ink, tipografías
**TAN Meringue** + serif itálica + sans bold, y el claim **"Result per hour"**.

## Campañas

| # | Archivo | Tema | Slides |
|---|---------|------|--------|
| 1 | `Meet_Your_Coach.html` | Conoce a tu coach (presentación + métodos) | 6 |
| 2 | `mitos-que-te-frenan.html` | **Mitos que te frenan** (educativo) | 6 |

### Cómo ver / exportar un carrusel
1. Abre el `.html` en el navegador (doble clic). Navega con las flechas en pantalla o
   `←/→`.
2. Para exportar cada slide a imagen 1080×1350: con DevTools, selecciona el nodo
   `.canvas` de cada slide → *Capture node screenshot*. (O usa una extensión de captura
   por nodo.) Cada `.canvas` mide exactamente 1080×1350.
3. Sube las 6 imágenes en orden como carrusel en Instagram.

> La fuente **TAN Meringue** se carga desde `fonts/tan-meringue.woff2` (colócala ahí si
> la tienes). Si falta, cae a la serif de marca automáticamente — el diseño no se rompe.

---

## Campaña #2 · "Mitos que te frenan"

Carrusel educativo (alto valor → *saves* y compartidos) que desmonta 4 creencias que
frenan a quien quiere empezar, ancladas al método de Michelle. **Tono:** no se invita a
"entrenar menos" sino a **entrenar con estrategia / inteligente** — el esfuerzo se dirige
mejor, no se reduce.

**Estructura:** 01 Portada · 02–05 Mito vs. Verdad · 06 CTA (reserva por DM).

### Imágenes de fondo (IA, estética de marca)
Generadas en formato 4:5. **Guárdalas en `assets/` con estos nombres** para que el HTML
las tome (la red del entorno de build bloquea la descarga automática, por eso van a mano):

- `assets/cover-microformer.png` — estudio/Microformer en penumbra, tonos ember (slide 01).
- `assets/cta-silhouette.png` — silueta de entrenamiento a contraluz cálida (slide 06).

Si los archivos no están, los slides igual se ven bien: la capa de foto queda bajo un
velo (`.scrim`) sobre el color de marca.

### Copy del post (caption sugerido)

> **Entrenas más y ves menos. El problema no eres tú — es lo que nadie te explicó.** 👇
>
> Estos son los 4 mitos que mantienen a tanta gente estancada (guárdalo para recordarlo):
>
> 1️⃣ "Más tiempo en el gym = más resultados." → Lo que transforma es la **intensidad y el
> tiempo bajo tensión**, no los minutos. 50 min de Lagree bien hechos rinden más que 2 h
> sin rumbo.
> 2️⃣ "La fuerza me va a poner voluminosa." → Baja velocidad + alta tensión **esculpe
> fuerza sin volumen**. Defines, no abultas.
> 3️⃣ "Si no terminas destruida, no sirvió." → El mejor entrenamiento es **el que puedes
> repetir mañana**. Cero impacto, sin lesión, sin culpa.
> 4️⃣ "Tengo que entrenar todos los días." → **3 sesiones bien ejecutadas** le ganan a 6 a
> medias. Consistencia > intensidad sin estrategia.
>
> Entrenar **inteligente** sí da resultados. Eso es *Result per hour*. ✨
>
> ¿Lista para empezar bien? Escríbeme por DM y armamos tu plan según tu nivel y horario. 💬
>
> 📍 Lagree · Sculpt · Hot Sculpt — @xplofit

### Hashtags
```
#Lagree #Sculpt #HotSculpt #ResultPerHour #FitnessFemenino #EntrenarInteligente
#PilatesPrincipiantes #FitnessRD #MujeresQueEntrenan #Explofit #xplofit #FullBody
```

### Notas de estrategia
- **Objetivo:** saves + compartidos (señales que más empujan alcance hoy) y cohesión de
  marca en el grid, que hoy mezcla estilos.
- **Gancho:** la portada nombra el dolor ("entrenas más y ves menos") antes de prometer
  solución → maximiza retención en el slide 1.
- **CTA único:** todo conduce a un DM (baja fricción, conversación 1:1).
- **Cadencia sugerida:** publicar 1 carrusel educativo + 2 reels por semana; fijar este
  carrusel en el perfil como pieza de "por qué este método".
