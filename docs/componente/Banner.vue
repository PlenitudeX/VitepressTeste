<template>
    <section class="banner">
        <div class="fundo">
            <h1 :style="{ color }">Bem-vindo à Oficina Mecânica</h1>
            <p :style="{color: colorText}">Serviços de Qualidade para o seu Veículo</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import tema from '../../tema.json'

const props = defineProps<{
    tema: string
}>()

const style = props.tema || 0

const color = tema[style].$schema.Primary
const colorText = tema[style].$schema.Text
</script>

<style>
.banner {
    background-image: url('https://picsum.photos/1000/1000');
    text-align: center;
    height: 60vh;
}

.banner .fundo {
    background-color: rgba(183, 183, 183, 0.5);
    height: 100%;
}

.banner h1 {
    font-size: 50px;
    position: absolute;
    top: 7rem;
    left: 50%;
    transform: translate(-50%, -50%);
}

.banner p {
    font-size: 24px;
    position: absolute;
    top: 17rem;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
    .banner {
        height: 40vh;
    }

    .banner h1 {
        font-size: 30px;
        top: 5rem;
    }

    .banner p {
        font-size: 18px;
        top: 12rem;
    }
}
</style>
