# Farmácia VR — Sistema de inspeção virtual

Protótipo educacional 3D de inspeção de uma farmácia e laboratório, feito com Three.js, Vite e JavaScript ES Modules. Não usa backend nem serviços externos em tempo de execução.

## Executar

- Requer Node.js 20.19+ ou 22.12+.
- `npm install`
- `npm run dev`
- `npm run build` para gerar `dist/`.

## Como jogar

Leia a missão, explore a sala com WASD/setas e mouse (arraste para olhar). Mire em um item para ver seu nome e escolha **Inspecionar** ou pressione E/Enter. Leia os dados do objeto e decida se confirma uma irregularidade. Uma resposta errada custa pontos e vida; uma certa premia, aumenta combo e avança a missão. Pistas custam pontos e dão orientação geral sem apontar um objeto.

No celular, use o joystick virtual e arraste a tela para olhar. A API de orientação é ativada pelo botão de movimento quando suportada e após autorização do navegador. O botão VR inicia uma sessão WebXR imersiva quando o navegador e o dispositivo oferecem suporte; o jogo continua jogável em modo desktop/mobile quando não oferecem.

## Publicação no GitHub Pages

O Vite está configurado com `base: './'`, para que o build funcione em subpastas. Gere `dist/` com `npm run build` e publique o conteúdo dessa pasta usando GitHub Pages (ou configure uma action para publicar o artefato `dist`). HTTPS é necessário para APIs de movimento e WebXR.

## Estrutura

- `src/main.js`: inicialização, controles e loop de jogo.
- `src/world/PharmacyScene.js`: cenário 3D, objetos e iluminação.
- `src/game/MissionManager.js`: dados, validação, pontuação e progressão.
- `src/ui/interface.js`: HUD e painéis.

Os metadados de irregularidade existem somente nos objetos internos do jogo. Nenhum marcador revela alvos.
