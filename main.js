// Espera que o DOM esteja totalmente carregado antes de adicionar eventos
document.addEventListener('DOMContentLoaded', function() {
    // Captura o formulário de cadastro
    const formCadastro = document.getElementById('form-cadastro');
    
    // Captura o tbody da tabela para adicionar as novas linhas
    const tabelaBody = document.querySelector('table tbody');
    
    // Adiciona um evento de envio ao formulário
    formCadastro.addEventListener('submit', function(event) {
        // Impede que o formulário seja enviado para não recarregar a página
        event.preventDefault();
        
        // Captura os valores dos campos de entrada
        const nomePessoa = document.getElementById('nome-pessoa').value;
        const telefonePessoa = document.getElementById('telefone-pessoa').value;
        
        // Cria uma nova linha para adicionar à tabela
        const novaLinha = document.createElement('tr');
        
        // Cria as células da linha
        const nomeCelula = document.createElement('td');
        const telefoneCelula = document.createElement('td');
        
        // Define o conteúdo das células
        nomeCelula.textContent = nomePessoa;
        telefoneCelula.textContent = telefonePessoa;
        
        // Adiciona as células à linha
        novaLinha.appendChild(nomeCelula);
        novaLinha.appendChild(telefoneCelula);
        
        // Adiciona a nova linha ao corpo da tabela
        tabelaBody.appendChild(novaLinha);
        
        // Limpa os campos do formulário após adicionar o contato
        document.getElementById('nome-pessoa').value = '';
        document.getElementById('telefone-pessoa').value = '';
    });
});
