<template>
  <div class="home">
      <main class="main-content">
        <section class="hero">
          <h1>Bienvenido a Skyline Software Ventures</h1>
          <p>Tu socio confiable en el mundo del desarrollo de software</p>
        </section>
        <section class="about-us">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos una empresa dedicada al desarrollo de software avanzado y 
            soluciones tecnológicas innovadoras. Nuestro equipo de profesionales 
            está comprometido con la excelencia en la satisfacción del cliente.          </p>
        </section>
        <section class="services">
          <h2>Nuestros Servicios:</h2>
          <ul>
            <li>Desarrollo de aplicaciones web y moviles.</li>
            <li>Consultoria en tecnologia de la informacion.</li>
            <li>Integracion de sistemas y soluciones empresariales.</li>
            <li>Optimizacion y seguridad de bases de datos.</li>
          </ul>
        </section>
        <section class="contact">
          <h2>Contacto:</h2>
          <p>¿Tienes alguna pregunta o proyecto en mente? 
            ¡Estamos aqui para ayudarte! Contactanos hoy en mismo.
          </p>
          <a href="mailto:contacto@skylinesoftwareventures.com">contacto@skylinesoftwareventures.com</a>
        </section>
      </main>
  </div>
</template>

<script>
</script>

<style>

.home{
  width: 100%;
  text-align: center;
  align-items: center;
}

.header{
  color: #fff;
  text-align: center;
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  top: 0;
}

.main-content{
  margin-top: 100px;
  padding: 2rem;
  margin-top: 0px;
}

.main-content h1{
  font-size: 45px;
  color: black;
  padding: 20px;
}

.main-content p{
  font-size: 1rem
}

.services li, h2{
  color: black;
}
</style>