<template>
  <div class="card-inner" id="skills-card">
    <div class="card-wrap">
      <div class="content skills">
        <div class="title">Mis Habilidades</div>

        <div class="row flex flex-wrap">
          <div class="col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="ion ion-md-code"></i></div>
                <div class="name">Backend</div>
              </div>
              <ul>
                <li v-for="skill in backendSkills" :key="skill.name" class="border-line-h">
                  <div class="name">{{ skill.name }}</div>
                  <div class="progress">
                    <div class="percentage" :style="{ width: skill.percentage + '%' }"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-d-6 col-t-6 col-m-12 border-line-v">
            <div class="skills-list">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="ion ion-md-easel"></i></div>
                <div class="name">Frontend</div>
              </div>
              <ul>
                <li v-for="skill in frontendSkills" :key="skill.name" class="border-line-h">
                  <div class="name">{{ skill.name }}</div>
                  <div class="progress">
                    <div class="percentage" :style="{ width: skill.percentage + '%' }"></div>
                  </div>
                </li>
                <li v-for="skill in otherSkills" :key="skill.name">
                  <div class="name">{{ skill.name }}</div>
                  <div class="progress">
                    <div class="percentage" :style="{ width: skill.percentage + '%' }"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const backendSkills = [
  { name: 'Java', percentage: 90 },
  { name: 'C#', percentage: 65 },
  { name: 'PHP / MYSQL', percentage: 65 },
  { name: 'Pentaho Data Integration', percentage: 80 },
  { name: 'Database', percentage: 80 }
]

const frontendSkills = [
  { name: 'Angular v6+ / JavaScript', percentage: 75 },
  { name: 'HTML / CSS', percentage: 90 },
  { name: 'Vue JS', percentage: 70 }
]

const otherSkills = [
  { name: 'WordPress', percentage: 50 }
]
</script>
