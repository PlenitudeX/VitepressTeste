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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    text-align: center;
}

.banner .fundo {
    background-image: url('https://picsum.photos/1000/1000');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.banner h1 {
    font-size: 50px;
    margin: 0;
    line-height: 5rem;
}

.banner p {
    font-size: 24px;
    padding: 0 10%;
}

.banner button {
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 24px;
    margin-top: 20px;
}

.banner button:hover {
    cursor: pointer;
}

@media (max-width: 768px) {
    .banner {
        height: 100%;
    }

    .banner .fundo {
        padding-bottom: 20px;
    }

    .banner h1 {
        font-size: 45px;
        padding-top: 8vh;
        line-height: 3rem;
    }

    .banner p {
        font-size: 18px;
    }

    .banner button {
        font-size: 18px;
    }
}

@media (max-width: 425px) {
    .banner h1 {
        font-size: 36px;
        padding-top: 8vh;
        line-height: 2rem;
    }

    .banner p {
        font-size: 16px;
    }

    .banner button {
        font-size: 16px;
    }
}

</style>
