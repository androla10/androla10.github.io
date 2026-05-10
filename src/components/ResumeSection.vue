<template>
  <div class="card-inner" id="resume-card">
    <div class="card-wrap">
      <div class="content resume">
        <div class="title">Resumen</div>

        <div class="row flex flex-wrap">
          <div class="col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="resume-title border-line-h">
              <div class="icon"><i class="ion ion-briefcase"></i></div>
              <div class="name">Experiencia</div>
            </div>
            <div class="resume-items">
              <div
                v-for="job in experience"
                :key="job.id"
                class="resume-item border-line-h"
                :class="{ active: job.id === 'current' }"
              >
                <div class="date">{{ job.date }}</div>
                <div class="name">{{ job.name }}</div>
                <div class="company">{{ job.company }}</div>
                <p>{{ job.description }}</p>
              </div>
            </div>
          </div>

          <div class="col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="resume-title border-line-h">
              <div class="icon"><i class="ion ion-university"></i></div>
              <div class="name">Educación</div>
            </div>
            <div class="resume-items">
              <div
                v-for="edu in education"
                :key="edu.id"
                class="resume-item border-line-h"
                :class="{ active: edu.id === 'current' }"
              >
                <div class="date">{{ edu.date }}</div>
                <div class="name">{{ edu.name }}</div>
                <div class="company">{{ edu.company }}</div>
                <p>{{ edu.description }}</p>
              </div>
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const experience = [
  {
    id: 'current',
    date: '2017 - Presente',
    name: 'Java Senior Developer / Full Stack Developer',
    company: 'NTTDATA',
    description:
      'Desarrollo de aplicaciones Java con arquitectura de microservicios. Implementación con Quarkus Framework y Temporal IO. Integraciones de APIs, facturación electrónica y pasarelas de pago.'
  },
  {
    id: 'ntt',
    date: '2016 - 2017',
    name: 'Java Developer',
    company: 'Multiplica',
    description:
      'Desarrollo de aplicaciones empresariales Java. Participación en proyectos de integración de sistemas.'
  },
  {
    id: 'bitacore',
    date: '2016 - 2017',
    name: 'Java Developer',
    company: 'Bitacore S.A.C',
    description:
      'Startup peruana dedicada a construir software de calidad. Desarrollo de ERP para la empresa droguería DROPESAC.'
  },
  {
    id: 'exact',
    date: '2014 - 2016',
    name: 'Junior Developer .NET',
    company: 'Exact S.A.C',
    description:
      'Nuevos desarrollos y mantenimiento del software SIMIH. Trazabilidad de documentos confidenciales en entidades financieras. Retos: Integración y detección de PDAs. Reducción de tiempos de carga de 12s a 2s.'
  }
]

const education = [
  {
    id: 'cibertec',
    date: '2014 - 2018',
    name: 'Computación e Informática',
    company: 'Instituto Tecnológico Cibertec',
    description: 'Técnico egresado de la carrera de Computación e Informática.'
  }
]
</script>
