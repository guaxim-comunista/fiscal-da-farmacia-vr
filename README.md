# Fiscal — inspeção farmacêutica 3D

Jogo de inspeção em primeira pessoa feito com Three.js, Vite, WebGL e WebXR. O cenário é montado proceduralmente e os itens de inspeção são meshes independentes. Não há realce de erros durante o jogo; os problemas são descobertos pela inspeção dos objetos.

## Executar

Requer Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

Para gerar e conferir o pacote de produção:

```sh
npm run build
npm run preview
```

## GitHub Pages

O `vite.config.js` usa `base: './'`, logo os recursos usam caminhos relativos em páginas raiz ou subdiretórios como `https://usuario.github.io/nome-do-repositorio/`. Gere `dist/` com `npm run build` e publique essa pasta pelo GitHub Pages ou por uma action de deploy estático.

## Controles e modos

- **Desktop:** clique no ambiente para capturar o mouse; WASD move; mouse olha; `F` examina o alvo; `C` recentraliza; `Esc` retorna ao menu; `F3` mostra estado de depuração. Clique em um item para selecioná-lo.
- **WebXR:** em navegador/dispositivo compatível e servido por HTTPS, use **ENTER WEBXR**. O tracking e o render loop vêm do WebXR/Three.js; DeviceOrientation não é aplicado durante a sessão XR.
- **Mobile VR:** em Configurações, toque **Ativar Mobile VR** para pedir permissão aos sensores por gesto explícito. O modo renderiza duas vistas com separação estereoscópica ajustável por IPD e máscara ocular. Requer HTTPS e DeviceOrientation.
- Sem XR/sensores, o modo desktop continua disponível. Qualquer GLB ausente tem geometria procedural equivalente; nenhum áudio externo é exigido.

## Conteúdo do jogo

Cinco níveis com duração e quantidade crescentes, quarenta registros de irregularidade em quatro graus de dificuldade, seleção aleatória por partida, inspeção com decisão Normal/Irregularidade, recompensa, penalidade, combo, três vidas, cronômetro, eventos de ambiente, diagnóstico (WebGL, WebXR, sensores, HTTPS, GPU e FPS), HUD e preferências/recordes persistidos em LocalStorage.

## Referência visual

O pedido mencionava `assets/reference/pharmacy-reference.png`, porém nenhum arquivo de imagem acompanhou o texto recebido. Portanto, o ambiente atual foi construído como cenário original procedural de farmácia/laboratório e não como reconstrução de uma foto não disponibilizada. A arquitetura de assets aceita GLTF/GLB; modelos podem ser adicionados sem tornar os fallbacks procedurais dependentes deles.

## Checklist de verificação manual

**Desktop:** abrir o site; iniciar inspeção; mover câmera; focar/examinar item; verificar pontuação, vidas, combo e timer; testar menu/resultado.

**Mobile:** servir por HTTPS; aceitar sensores; girar em retrato/paisagem; calibrar; testar duas vistas e IPD; conferir diagnóstico.

**WebXR:** iniciar/parar sessão em headset compatível; validar tracking, controllers e retorno à página. WebXR imersivo depende do navegador, headset e origem HTTPS; o diagnóstico exibe a disponibilidade real.

## Estrutura

```text
index.html
src/main.js             cena, loop, XR, interação e estado do jogo
src/data/errors.js      conteúdo e níveis
styles/main.css         menus, HUD, painéis e máscara Mobile VR
assets/models/          modelos opcionais GLTF/GLB
assets/audio/           sons opcionais
assets/reference/       imagem de referência quando fornecida
```
