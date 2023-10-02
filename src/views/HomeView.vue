<template>
  <!-- Contenedor principal de la página de inicio -->
  <div class="home">
    <!-- Encabezado de la página -->
    <header class="header">
      <!-- Contenido del encabezado -->
    </header>
    <!-- Contenido principal de la página -->
    <main class="main-content">
      <!-- Sección de héroe -->
      <section class="hero">
        <h1>Bienvenido a Skyline Software Ventures</h1>
        <p>Tu socio confiable en el mundo del desarrollo de software</p>
      </section>

      <!-- Sección "Sobre Nosotros" -->
      <section class="about-us">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos una empresa dedicada al desarrollo de software avanzado y
          soluciones tecnológicas innovadoras. Nuestro equipo de profesionales
          está comprometido con la excelencia en la satisfacción del cliente.
        </p>
      </section>

      <!-- Sección "Nuestros Servicios" -->
      <section class="services">
        <h2>Nuestros Servicios:</h2>
        <ul>
          <li>Desarrollo de aplicaciones web y móviles.</li>
          <li>Consultoría en tecnología de la información.</li>
          <li>Integración de sistemas y soluciones empresariales.</li>
          <li>Optimización y seguridad de bases de datos.</li>
        </ul>
      </section>

      <!-- Sección de contacto -->
      <section class="contact">
        <h2>Contacto:</h2>
        <p>
          ¿Tienes alguna pregunta o proyecto en mente?
          ¡Estamos aquí para ayudarte! Contáctanos hoy mismo.
        </p>
        <a href="mailto:contacto@skylinesoftwareventures.com"
          >contacto@skylinesoftwareventures.com</a
        >
      </section>
    </main>
  </div>
</template>

<script>
// En esta sección podrías agregar la lógica si es necesaria para esta vista.
</script>

<style>
/* Estilos para el contenedor principal de la página */
.home {
  width: 100%;
  text-align: center;
  align-items: center;
}

/* Estilos para el encabezado de la página */
.header {
  color: #fff;
  text-align: center;
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  top: 0;
}

/* Estilos para el contenido principal */
.main-content {
  margin-top: 100px; /* Margen superior para evitar que el contenido se solape con el encabezado */
  padding: 2rem;
  margin-top: 0px;
}

/* Estilos para el título principal */
.main-content h1 {
  font-size: 45px;
  color: black;
  padding: 20px;
}

/* Estilos para los párrafos dentro del contenido principal */
.main-content p {
  font-size: 1rem;
}

/* Estilos para las listas y encabezados secundarios */
.services li,
h2 {
  color: black;
}
</style>
