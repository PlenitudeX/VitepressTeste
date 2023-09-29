<template>
    <div class="oficina-mecanica">
        <Banner />
        <Servicos />
        <VPTeamMembers size="small" :members="members" />
    </div>
    <Footer />
</template>

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import Banner from './componente/Banner.vue'
import Servicos from './componente/Servicos.vue'
import Footer from './componente/Footer.vue'

const members = [
    {
        avatar: 'https://www.github.com/yyx990803.png',
        name: 'Evan You',
        title: 'CEO',
    },
    {
        avatar: 'https://www.github.com/yyx990803.png',
        name: 'Joseph Smith',
        title: 'Diretor Executivo',
    },
]

</script>

<style scoped>
.oficina-mecanica {
    font-family: Arial, sans-serif;
    margin: 0 2rem;
}
</style>
