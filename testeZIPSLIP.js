const fs = require('fs');
const AdmZip = require('adm-zip'); // Biblioteca para manipular arquivos zip

function extrairArquivoZip(arquivoZip, pastaDestino) {
    const zip = new AdmZip(arquivoZip);
    zip.extractAllTo(pastaDestino, true);
}

// Exemplo de uso
extrairArquivoZip('arquivo.zip', 'pasta_destino');
