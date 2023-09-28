<template>
    <div>
        <div class="oficina-mecanica">
            <section class="banner">
                <h1>Bem-vindo à Oficina Mecânica</h1>
                <p>Serviços de Qualidade para o seu Veículo</p>
            </section>
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
            <VPTeamMembers size="small" :members="members" />
        </div>
        <footer class="footer">
            <div>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Contato</h3>
                        <p>Endereço: Rua da Oficina, 123</p>
                        <p>Telefone: (11) 1234-5678</p>
                        <p>Email: contato@oficinamecanica.com</p>
                    </div>
                    <div class="footer-section">
                        <h3>Horário de Funcionamento</h3>
                        <p>Segunda a Sexta: 8h - 18h</p>
                        <p>Sábado: 9h - 12h</p>
                        <p>Domingo: Fechado</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    &copy; 2023 Oficina Mecânica. Feito por <a href="https://www.instagram.com/plenitude_x/">Plenitudex</a>.
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { VPTeamMembers } from 'vitepress/theme'

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

const servicos = ref([
    {
        id: 1,
        titulo: "Troca de Óleo",
        descricao: "Troca de óleo e filtro para manter seu motor funcionando suavemente.",
        // imagem: "@/assets/servico1.jpg",
    },
    {
        id: 2,
        titulo: "Reparação de Freios",
        descricao: "Reparo e manutenção de sistemas de freios para garantir a segurança.",
        // imagem: "@/assets/servico2.jpg",
    },
    {
        id: 3,
        titulo: "Alinhamento e Balanceamento",
        descricao: "Alinhamento e balanceamento para prolongar a vida útil dos pneus.",
        // imagem: "@/assets/servico3.jpg",
    },
]);
</script>


<style scoped>
.oficina-mecanica {
    font-family: Arial, sans-serif;
    margin: 0 2rem;
}

.banner {
    /* background-image: url("@/assets/banner.jpg"); */
    background-color: red;
    background-size: cover;
    color: #333;
    text-align: center;
    padding: 100px 0;
}

.banner h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

.banner p {
    font-size: 18px;
}

.servicos {
    background-color: #f2f2f2;
    padding: 50px 0;
    text-align: center;
}

.servicos h2 {
    font-size: 30px;
    margin-bottom: 20px;
}

.servicos p {
    font-size: 18px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card {
    width: 300px;
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card img {
    max-width: 100%;
    height: auto;
}

.card h3 {
    font-size: 24px;
    margin-top: 20px;
}

.card p {
    font-size: 18px;
}

.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.footer-section {
    flex: 1;
    padding: 10px;
    max-width: 300px;
}

.footer h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.footer p {
    margin: 5px 0;
}

.footer-bottom {
    margin-top: 20px;
}
</style>
