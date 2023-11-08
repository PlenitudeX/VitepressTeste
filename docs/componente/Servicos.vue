<template>
    <section :style="{ background }" class="servicos">
        <div>
            <h2 :style="{ color: white }">Nossos Serviços</h2>
            <p :style="{ color: white }">Oferecemos uma variedade de serviços de qualidade para o seu veículo.</p>
        </div>
        <div class="container">
            <div v-if="data" :style="{background: body}" class="card" v-for="servicos in data">
                <h3 :style="{color: title}">{{ servicos.titulo || servicos.Título || servicos.title || servicos.título }}</h3>
                <p :style="{color}">{{ servicos.legenda || servicos.Legenda || servicos.text }}</p>
                <button :style="{background: white, color}">{{ servicos.botao || servicos.Botão || servicos.button || servicos.botão }}</button>
            </div>
            <div v-else :style="{background: body}" class="card" v-for="servico in servicos" :key="servico.id">
                <h3 :style="{color: title}">{{ servico.titulo }}</h3>
                <p :style="{color}">{{ servico.descricao }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import tema from '../../tema.json';

const props = defineProps<{
    tema: string
    email: string
}>()

import { mongoFind } from '../mongo'

const data = ref('');
const email = props.email

async function buscarDados() {
  try {
    const alldata = await mongoFind(email);
    data.value = alldata[0].resposta.beneficios || alldata[0].resposta.Benefícios || alldata[0].resposta.benefícios || alldata[0].resposta.Beneficios;

    return data.value
  } catch (erro) {
    console.error('Erro ao buscar dados:', erro);
  }
}

onMounted(() => {
  buscarDados()
})

const servicos = ref([
    {
        id: 1,
        titulo: 'Troca de Óleo',
        descricao: 'Troca de óleo com os melhores produtos do mercado.',
    },
    {
        id: 2,
        titulo: 'Alinhamento',
        descricao: 'Alinhamento 3D e balanceamento computadorizado.',
    },
    {
        id: 3,
        titulo: 'Revisão',
        descricao: 'Revisão completa do seu veículo.',
    },
    {
        id: 4,
        titulo: 'Suspensão',
        descricao: 'Serviços de suspensão em geral.',
    },
    {
        id: 5,
        titulo: 'Freios',
        descricao: 'Serviços de freios em geral.',
    },
    {
        id: 6,
        titulo: 'Motor',
        descricao: 'Serviços de motor em geral.',
    },
])



const style = props.tema

const background = tema[style].$schema.Secondary;
const white = tema[style].$schema.White;
const gradiant = tema[style].$schema
const body = `linear-gradient(90deg, ${gradiant.Body} 0%, ${gradiant.White} 50%, ${gradiant.Body} 100%)`
const title = tema[style].$schema.Primary;
const color = tema[style].$schema.Text;
</script>

<style>
.servicos {
    padding: 50px 0;
    text-align: center;
}

.servicos h2 {
    font-size: 36px;
    margin-bottom: 20px;
}

.servicos p {
    font-size: 18px;
    margin-bottom: 40px;
}

.servicos .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.servicos .card {
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 0 20px 40px;
    padding: 20px;
    width: 300px;
}

.servicos .card h3 {
    font-size: 24px;
    margin-bottom: 20px;
}

.servicos .card p {
    font-size: 18px;
}

.servicos .card:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.servicos .card button {
    /* background-color: #fff; */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 18px;
}
</style>
