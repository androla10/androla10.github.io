<template>
  <div class="card-inner animated active" id="about-card">
    <div class="card-wrap">
      <div class="content about">
        <div class="title">Sobre Mi</div>

        <div class="row">
          <div class="col-d-12 col-t-12 col-m-12 border-line-v">
            <div class="text-box">
              <p>
                Con 10 años de experiencia en tecnología Java, he trabajado en diversas empresas como
                Bitacore SAC, Manpower SAC, Multiplica y NTTDATA. Mi trayectoria incluye roles como
                Analista Programador Java, Java Senior Developer, Full Stack Developer y Líder
                Técnico.
              </p>
              <p>
                He participado en proyectos significativos, desde el desarrollo de ERP monolito
                hasta la implementación de aplicaciones siguiendo una arquitectura de microservicios.
                Mi experiencia abarca integraciones de APIs, facturación electrónica, pasarelas de
                pago y tecnologías emergentes como Quarkus Framework y Temporal IO.
              </p>
              <p>
                He trabajado en entornos ágiles y me he adaptado a las necesidades específicas de cada
                cliente, siempre enfocado en crear soluciones robustas y eficientes.
              </p>
            </div>

            <div class="info-list">
              <ul>
                <li><strong>Edad:</strong> 32</li>
                <li><strong>Residencia:</strong> Lima, Perú</li>
                <li><strong>Freelance:</strong> Disponible</li>
                <li><strong>Dirección:</strong> Surquillo, Lima</li>
              </ul>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>

      <ServicesSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import ServicesSection from './ServicesSection.vue'
</script>
