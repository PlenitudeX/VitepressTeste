<template>
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
</template>

<style>
.footer {
    background-color: #333;
    color: #fff;
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
    background-color: #222;
    padding: 10px 0;
}

.footer-bottom a {
    color: #fff;
}

.footer-bottom a:hover {
    color: #aaa;
}

@media screen and (max-width: 700px) {
    .footer-content {
        flex-direction: column;
    }
    
}

</style>
