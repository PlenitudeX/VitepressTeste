<template>
    <section class="banner">
        <div v-if="data" class="fundo">
            <h1 :style="{ color }">{{ data.titulo || data.Título || data.title || 'Melhores serviços para você' }}</h1>
            <p :style="{color: colorText}">{{ data.legenda || data.Legenda || data.text || 'Venha conhecer nossa oficina, entre no saiba mais' }}</p>
            <button :style="{background: white}">{{ data.botao || data.Botão || data.button || 'Saiba Mais' }}</button>
        </div>
        <div v-else>
            <h1 :style="{ color }">Sua Oficina aqui</h1>
            <p :style="{color: colorText}">Venha conferir nossas promoções</p>
            <button :style="{background: white}">Saiba mais</button>
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
    data.value = alldata[0].resposta.banner || alldata[0].resposta.Banner;
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
    padding: 20px 70px 0;
}

.banner p {
    font-size: 24px;
    padding: 20px 50px 0;
}

.banner button {
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
}

@media (max-width: 768px) {
    .banner {
        height: 60vh;
    }

    .banner h1 {
        font-size: 30px;
        padding: 20px 50px 0;
    }

    .banner p {
        font-size: 18px;
        padding: 15px 30px 0;
    }
}

@media (max-width: 576px) {
    .banner {
        height: 40vh;
    }

    .banner h1 {
        font-size: 20px;
        padding: 10px 30px 0;
    }

    .banner p {
        font-size: 14px;
        padding: 0px 20px ;
    }

    .banner button {
        font-size: 12px;
        padding: 8px 15px;
    }
}

@media (max-width: 400px) {
    .banner {
        height: 30vh;
    }

    .banner h1 {
        font-size: 18px;
        line-height: 18px;
    }

    .banner p {
        font-size: 12px;
        line-height: 12px;
    }

    .banner button {
        font-size: 10px;
        padding: 5px 10px;
    }
}
</style>
