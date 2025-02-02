**# Câmera Funcional com React Native e Expo**

## Descrição do Projeto

Este é um aplicativo de câmera funcional desenvolvido com  React Native utilizando Expo. O projeto permite ao usuário tirar fotos e gravar vídeos de forma intuitiva, com a troca dinâmica entre os modos de câmera e vídeo conforme a ação selecionada. Foram utilizadas diversas bibliotecas do Expo para manipulação de mídia, garantindo uma experiência fluida e livre de erros comuns, como tentar tirar uma foto enquanto um vídeo está sendo gravado.

### Funcionalidades Principais:

- **Captura de Foto**: Botão dedicado para tirar fotos.
- **Gravação de Vídeo**: Botão para iniciar e parar a gravação de vídeo.
- **Troca Dinâmica de Modos**: Se o usuário estiver no modo de foto e clicar para gravar, o modo muda automaticamente para vídeo, e vice-versa.
- **Correção de Erros**: Prevenção de erros como a tentativa de capturar uma foto enquanto um vídeo está sendo gravado.
- **Compartilhamento e Armazenamento**: Integração com a biblioteca de mídia do dispositivo e opção para compartilhamento.

## Tecnologias Utilizadas

- **React Native**
- **Expo**
- **expo-camera** (para acesso à câmera)
- **expo-av** (para manipulação de vídeos e áudio)
- **expo-media-library** (para salvar mídias no dispositivo)
- **expo-sharing** (para compartilhamento de arquivos)

---

# Instalação e Uso do Projeto

## Requisitos

Antes de iniciar, certifique-se de ter:

- **Node.js** instalado
- **Expo CLI** instalado globalmente

### Instalação do Expo CLI

```bash
npm install -g expo-cli
```

### Clonando o Repositório

```bash
git clone https://github.com/ThiagoMarquees/cameraProject.git
cd https://github.com/ThiagoMarquees/cameraProject.git
```

### Instalando as Dependências

```bash
npm install
```

### Executando o Projeto

```bash
npx expo start
```

Scaneie o QR Code com o aplicativo Expo Go no seu dispositivo para rodar a aplicação.

## Como Usar

1. **Tirar Foto**: Pressione o botão de foto para capturar uma imagem.
2. **Gravar Vídeo**: Pressione o botão de gravação para iniciar/parar a gravação de vídeo.
3. **Trocar Modos**: Ao clicar em um botão incompatível com o modo atual, ele será alterado automaticamente.
4. **Compartilhar ou Salvar**: Acesse a galeria do dispositivo para salvar ou compartilhar a mídia capturada.

## Contribuição

Fique à vontade para abrir issues e pull requests para melhorias!

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e modificá-lo como quiser.

