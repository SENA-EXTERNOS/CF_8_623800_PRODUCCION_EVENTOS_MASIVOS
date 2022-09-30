<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-8.mb-5.mb-lg-0
        .bloque-texto-tema1.color-primario.p-4
          .bloque-texto-tema1__texto
            p Bienvenido a este componente formativo. Al establecer la estructura de un evento, se deben considerar los posibles imprevistos que puedan surgir, con el fin de establecer cómo se debe actuar frente a cualquier inconveniente; por esto se debe tener presente que  el mejor plan de contingencia siempre será la buena planeación.

        p Es por esto, que en este componente se abordan y explican las diferentes causas, soluciones, entrenamiento y guías para que usted pueda administrar estos imprevistos y desarrollar todas sus  actividades sin mayores problemas, cumpliendo con los objetivos planteados. El siguiente video le dará una visión más amplia de los temas a tratar y la importancia de estos.
         
        p Éxitos en este proceso de aprendizaje.

      .col-lg-4
        figure
          img(src='@/assets/curso/temas/introduccion/img1.png', alt='Texto que describa la imagen')

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video  


        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
