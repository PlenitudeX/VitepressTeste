<template>
    <footer :style="{background, color: white}" class="footer">
            <div>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3 :style="{color}">Contato</h3>
                        <p>Endereço: Rua da Oficina, 123</p>
                        <p>Telefone: (11) 1234-5678</p>
                        <p>Email: contato@oficinamecanica.com</p>
                    </div>
                    <div class="footer-section">
                        <h3 :style="{color}">Horário de Funcionamento</h3>
                        <p>Segunda a Sexta: 8h - 18h</p>
                        <p>Sábado: 9h - 12h</p>
                        <p>Domingo: Fechado</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    &copy; 2023 Oficina Mecânica. Feito por <a :style="{color: white}" href="https://www.instagram.com/plenitude_x/">Plenitudex</a>.
                </div>
            </div>
        </footer>
</template>

<script setup lang="ts">
import tema from '../../tema.json'

const color = tema[0].$schema.Primary
const background = tema[0].$schema.Footer
const white = tema[0].$schema.White
</script>

<style>
.footer {
    padding: 20px 0 0;
    text-align: center;
}

.footer h3 {
    font-size: 36px;
    margin-bottom: 20px;
}

.footer p {
    font-size: 18px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-section {
    flex: 1;
    margin: 0 20px;
}

.footer-bottom {
    padding: 10px 0;
}

@media screen and (max-width: 700px) {
    .footer-content {
        flex-direction: column;
    }

}

</style>
