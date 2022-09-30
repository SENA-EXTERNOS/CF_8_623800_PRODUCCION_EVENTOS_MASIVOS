export default {
  global: {
    componenteFormativo: 'Entrenamiento y gestión de imprevistos',
    descripcionCurso:
      'Así como en cualquier proceso que desarrollen, en los eventos comerciales también existirán inconvenientes o percances que se irán presentando en las diferentes fases de su ejecución, sin embargo, como se trata de una actividad previamente planeada, El organizador de eventos debe enfocarse en prever y minimizar los posibles riesgos para cumplir con los objetivos definidos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Imprevistos en los eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El clima y la región',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sedes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Alimentos y bebidas',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Protocolos de atención de imprevistos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Guión del evento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Organización de eventos',
      referencia: 'Town Hall Broadmeadows. Event Setup (Timelapse). (video).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uFBw6eZRjBs',
    },
    {
      tema: 'Organización de eventos',
      referencia:
        'Collarte. G. (2017). Cómo organizar eventos exitosos. (video).',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=NstNYEYbZ-Y',
    },

    {
      tema: 'Organización de eventos',
      referencia:
        'Santander Argentina Oficial.(2018) Cómo organizar un evento.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=vyEfoTSYyvo',
    },

    {
      tema: 'Organización de eventos',
      referencia:
        'Martinez, S.A y Campillo, H. C. (2021) El papel de los eventos en las estrategias de marketing y comunicación comercial. GIGAPP Estudios Working Papers, 8(190-212), 113-127.',
      tipo: 'Artículo',
      descarga:
        'https://www.gigapp.org/ewp/index.php/GIGAPP-EWP/article/view/245',
    },
  ],
  glosario: [
    {
      termino: 'Cliente interno',
      significado:
        'Persona u organización que mantiene una relación con una empresa puede tener o no un vínculo contractual y no necesariamente está asociado de forma directa al ambiente interno de la empresa. Los proveedores y colaboradores son ejemplos de tipos de clientes internos.',
    },
    {
      termino: 'COVID 19',
      significado:
        'Es la enfermedad causada por el nuevo coronavirus conocido como SARS-CoV-2.',
    },
    {
      termino: 'Crudiveganos',
      significado:
        'Se basa en la comida cruda preparada sin ningún producto de origen animal, ya sea carne, pescado, lácteos o huevos.',
    },
    {
      termino: 'Endémicos',
      significado:
        'Significa que una enfermedad siempre se presenta en una población dentro de un área geográfica. (MedlainePlus, 2021)',
    },
    {
      termino: 'Epidemiológicos',
      significado:
        'De la epidemiología o relacionado con esta parte de la medicina. Estudio de los patrones, las causas y el control de las enfermedades en los grupos de personas.',
    },

    {
      termino: '<em>Inbound</em>',
      significado:
        'Término en el idioma inglés que es utilizado en el mundo empresarial referente a las estrategias realizadas para recibir llamadas de los clientes de servicio o ventas  ',
    },

    {
      termino: '<em>Landing page</em>',
      significado:
        'En español, se refiere a la página de inicio, es decir la página web a la que se dirige a un usuario de Internet.',
    },
    {
      termino: 'Omnívoros',
      significado:
        'Aquellos seres vivos que se alimentan tanto de plantas como de carne de otros animales.',
    },
    {
      termino: 'Orgánicos',
      significado:
        'Se refiere a la forma en que los agricultores cultivan y procesan productos agrícolas, entre ellos frutas, verduras, cereales, lácteos como leche y queso, y carne. Las prácticas agrícolas orgánicas están diseñadas para cumplir con los siguientes objetivos: mejorar la calidad del suelo y del agua.',
    },
    {
      termino: '<em>Outbound</em>',
      significado:
        'Término en el idioma inglés que es utilizado en el mundo empresarial referente a las estrategias realizadas para realizar llamadas de los clientes de servicio o ventas.',
    },
    {
      termino: 'Vegetarianos',
      significado:
        'Persona o individuo que basa su alimentación diaria únicamente en el consumo de frutas y verduras.',
    },
    {
      termino: 'Veganos',
      significado:
        'Persona o individuo que no ingiere productos alimenticios de origen animal.',
    },
  ],
  referencias: [
    {
      referencia:
        'García Prado, E. (2017). Organización de eventos y <em>marketing</em> de comunicación. Ediciones Paraninfo S.A.',
      link: '',
    },
    {
      referencia:
        'Jijena Sánchez, R. (2019). Cómo organizar eventos con éxito. Alfaomega Ugerman.',
      link: '',
    },
    {
      referencia: 'MedlinePLus, (mayo 28, 2021) Enciclopedia Médica',
      link: 'https://medlineplus.gov/spanish/ency/article/002362.html',
    },
    {
      referencia:
        'Martínez Altamirano, U.(2017) Organización De Eventos.Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'García Prado, E. (2017). Protocolo en eventos de <em>marketing</em> y comunicación UF2397. Ediciones Paraninfo.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
