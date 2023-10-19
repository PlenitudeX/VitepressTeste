<template>
    <section class="banner">
        <div class="fundo">
            <h1 :style="{ color }">{{ data.titulo }}</h1>
            <p :style="{color: colorText}">{{ data.legenda }}</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import tema from '../../tema.json'
import { mongoFind } from '../mongo'
import { onMounted, ref } from 'vue'

const props = defineProps<{
    tema: string,
    email: string
}>()

const data = ref('')
const email = props.email

async function buscarDados() {
  try {
    const alldata = await mongoFind(email);
    data.value = alldata[0].resposta.banner;
    return data.value
  } catch (erro) {
    console.error('Erro ao buscar dados:', erro);
  }
}

onMounted(() => {
  buscarDados()
})




console.log("Todos dados do banner: ",props);


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

@media (max-width: 576px) {
    .banner {
        height: 30vh;
    }

    .banner h1 {
        top: 3rem;
    }

    .banner p {
        top: 8rem;
    }
}

@media (max-width: 400px) {
    .banner {
        height: 20vh;
    }

    .banner h1 {
        top: 2rem;
    }

    .banner p {
        top: 5rem;
    }
}
</style>
