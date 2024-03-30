const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip'); // Biblioteca para manipular arquivos zip

function extrairArquivoZip(arquivoZip, pastaDestino) {
    const zip = new AdmZip(arquivoZip);
    zip.getEntries().forEach(entry => {
        const caminhoCompleto = path.resolve(pastaDestino, entry.entryName);
        fs.writeFileSync(caminhoCompleto, entry.getData());
    });
}

// Exemplo de uso
extrairArquivoZip('arquivo.zip', 'pasta_destino');
