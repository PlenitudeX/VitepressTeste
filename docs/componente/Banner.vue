<template>
    <section class="banner">
        <div class="fundo">
            <h1 :style="{ color }">{{ data.titulo || 'Melhores serviços para você' }}</h1>
            <p :style="{color: colorText}">{{ data.legenda || 'Venha conhecer nossa oficina, entre no saiba mais' }}</p>
            <button :style="{background: white}">{{ data.botao }}</button>
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

const style = props.tema

const color = tema[style].$schema.Primary
const colorText = tema[style].$schema.Text
const white = tema[style].$schema.White
</script>

<style>
.banner {
    background-image: url('https://picsum.photos/1000/1000');
    text-align: center;
    height: 70vh;
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

.banner button {
    background-color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
    position: absolute;
    top: 25rem;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
    .banner {
        height: 50vh;
    }

    .banner h1 {
        font-size: 30px;
        top: 5rem;
    }

    .banner p {
        font-size: 18px;
        top: 12rem;
    }

    .banner button {
        font-size: 16px;
        top: 18rem;
    }
}

@media (max-width: 576px) {
    .banner {
        height: 40vh;
    }

    .banner h1 {
        font-size: 20px;
        top: 3rem;
    }

    .banner p {
        font-size: 14px;
        top: 8rem;
    }

    .banner button {
        font-size: 12px;
        top: 14rem;
        padding: 8px 15px;
    }
}

@media (max-width: 400px) {
    .banner {
        height: 30vh;
    }

    .banner h1 {
        font-size: 15px;
        top: 2rem;
        line-height: 15px;
    }

    .banner p {
        font-size: 12px;
        top: 5rem;
        line-height: 10px;
    }

    .banner button {
        font-size: 10px;
        top: 9rem;
        padding: 5px 10px;
    }
}
</style>
