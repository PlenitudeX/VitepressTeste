<template>
    <section class="servicos">
        <div>
            <h2>Nossos Serviços</h2>
            <p>Oferecemos uma variedade de serviços de qualidade para o seu veículo.</p>
        </div>
        <div class="container">
            <div class="card" v-for="servico in servicos" :key="servico.id">
                <h3>{{ servico.titulo }}</h3>
                <p>{{ servico.descricao }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

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
</script>

<style>
.servicos {
    background-color: #f5f5f5;
    padding: 100px 0;
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
    background-color: #fff;
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
</style>
