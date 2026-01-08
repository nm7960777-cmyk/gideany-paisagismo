/**
 * DESIGN SYSTEM: Tropical Luxe
 * Artigo: Jardim Pequeno em Casa - 10 Ideias Simples de Canteiros
 * Estilo: Storytelling + Conversacional - Elegante mas acessível
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Lightbulb, AlertTriangle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogJardimPequeno() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-dark/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                <span className="text-gold font-cinzel font-bold text-lg">GR</span>
              </div>
              <span className="text-white font-cinzel text-lg tracking-wide hidden sm:block">
                Gideany Rezende <span className="text-gold">Paisagismo</span>
              </span>
            </Link>
          <Link href="/blog">
            <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero do Artigo */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-emerald-dark to-emerald-dark/90">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-gold">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-gold">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gold">Jardim Pequeno</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="bg-gold text-emerald-dark px-4 py-1 rounded-full text-sm font-medium">
              Jardim Pequeno
            </span>
            <h1 className="text-3xl md:text-5xl font-cinzel text-white mt-6 mb-6 leading-tight">
              Seu Quintal é Pequeno? Veja 10 Ideias que Vão Mudar Sua Visão
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Gideany Rezende
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                15 de Dezembro de 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 min de leitura
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Imagem Principal */}
      <div className="container mx-auto px-4 -mt-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <img
            src="/images/blog-jardim-pequeno-novo.jpg"
            alt="Jardim Pequeno em Casa"
            className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* Conteúdo do Artigo */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introdução envolvente */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>"Ah, mas meu quintal é muito pequeno..."</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Essa é a frase que mais ouço quando visito clientes pela primeira vez. E sabe o que 
              eu sempre respondo? <em>"Pequeno é relativo. O que falta é visão."</em>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Já transformei canteiros de 1 metro quadrado em verdadeiros refúgios. Já vi varandas 
              de apartamento que pareciam mais jardim do que muita casa com quintal enorme. O segredo? 
              Não é o tamanho do espaço — é o que você faz com ele.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Neste artigo, vou te mostrar <strong>10 ideias práticas</strong> que uso nos meus projetos. 
              Algumas você pode fazer sozinho neste fim de semana. Outras vão precisar de um pouco mais 
              de planejamento. Mas todas têm uma coisa em comum: funcionam de verdade.
            </p>

            {/* Seção de Benefícios */}
            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-10 border-l-4 border-emerald-dark">
              <h3 className="text-lg font-semibold text-emerald-dark mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-gold" />
                Por que vale a pena investir em um jardim pequeno?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-0">
                Além de valorizar seu imóvel (sim, compradores pagam mais por casas com jardim bem cuidado), 
                plantas purificam o ar, reduzem estresse e criam aquela sensação de "lar" que nenhuma 
                decoração de loja consegue reproduzir. Estudos mostram que apenas 20 minutos por dia 
                em contato com plantas já melhora humor e qualidade do sono.
              </p>
            </div>

            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              As 10 Ideias (com as plantas certas para cada uma)
            </h2>

            {/* Ideia 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                1. Canteiro Linear — O Clássico que Sempre Funciona
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sabe aquele espaço entre o muro e a calçada? Ou aquela faixa de terra que sobrou 
                do lado da garagem? É ali que a mágica acontece.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Com apenas 30 a 50cm de largura, você cria um canteiro que parece muito maior do que é. 
                O truque é usar <strong>três alturas diferentes</strong>: plantas baixas na frente, 
                médias no meio, e arbustos compactos no fundo. Isso cria profundidade visual.
              </p>
              <div className="bg-gold/10 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-emerald-dark mb-2">🌿 Plantas que funcionam:</p>
                <p className="text-sm text-gray-700">
                  <strong>Fundo:</strong> Moréia, Tuia-limão anã, Buxinho<br/>
                  <strong>Meio:</strong> Liriope, Agapanto anão<br/>
                  <strong>Frente:</strong> Grama-preta, Ripsális
                </p>
              </div>
            </div>

            {/* Ideia 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                2. Jardim de Pedras — Para Quem Não Tem Tempo
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vou ser honesta: nem todo mundo tem tempo (ou paciência) para cuidar de jardim toda semana. 
                E tudo bem. Existe solução.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Suculentas e cactos praticamente se cuidam sozinhos. Combine com seixos brancos ou 
                pedriscos escuros, e você tem um jardim moderno que pede água uma vez por semana 
                (às vezes menos).
              </p>
              <div className="bg-gold/10 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-emerald-dark mb-2">🌵 Plantas que funcionam:</p>
                <p className="text-sm text-gray-700">
                  Echeveria, Sedum, Agave-dragão (porte pequeno), Cactos-bola, Kalanchoe
                </p>
              </div>
            </div>
            
            {/* Imagem */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jp-canteiro-pedras.jpg"
                alt="Jardim de pedras com suculentas"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                Jardim de pedras: visual moderno e manutenção quase zero
              </p>
            </div>

            {/* Ideia 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                3. Canteiro Elevado — Quando o Chão Não Colabora
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Piso cimentado? Solo muito duro? Raízes de árvore vizinha? Nada disso é desculpa.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Canteiros elevados resolvem tudo. Use madeira tratada, blocos de concreto ou até 
                pallets reciclados. Com 40 a 60cm de altura, você tem espaço suficiente para raízes 
                e ainda facilita o cuidado (nada de ficar agachado!).
              </p>
              <div className="bg-gold/10 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-emerald-dark mb-2">🌱 Ideal para:</p>
                <p className="text-sm text-gray-700">
                  Temperos (manjericão, alecrim, hortelã), hortaliças de ciclo curto, flores anuais
                </p>
              </div>
            </div>
            
            {/* Imagem */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jp-canteiro-flores.jpg"
                alt="Canteiro elevado com flores ornamentais"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                Canteiro elevado: solução prática para qualquer piso
              </p>
            </div>

            {/* Ideia 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                4. Cantinho Tropical — Mesmo em 2m²
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Esse é meu favorito. Com as plantas certas, você cria aquela sensação de 
                "mini-floresta" que todo mundo ama.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                O segredo é misturar <strong>texturas e tons de verde</strong>. Folhas grandes com 
                folhas finas. Verde escuro com verde claro. E um toque de cor com bromélias ou 
                antúrios.
              </p>
              <div className="bg-gold/10 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-emerald-dark mb-2">🌴 Plantas que funcionam:</p>
                <p className="text-sm text-gray-700">
                  Filodendro-xanadu (compacto!), Maranta, Calatéia, Samambaia-paulista, Bromélias, Antúrio
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 mt-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">
                  <strong>Evite:</strong> Costela-de-adão e palmeiras grandes — crescem demais e vão dominar o espaço em poucos anos.
                </p>
              </div>
            </div>
            
            {/* Imagem */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jp-tropical-compacto.jpg"
                alt="Jardim tropical compacto"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                Tropical compacto: sensação de floresta em espaço mínimo
              </p>
            </div>

            {/* Ideia 5 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                5. Ilha Verde — O Ponto Focal do Quintal
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se você tem um quintal pequeno mas "quadrado", crie uma ilha no centro. Pode ser 
                redonda, oval ou com formato orgânico (mais natural).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Coloque um arbusto ornamental como ponto focal e forrações ao redor. Funciona 
                como uma "âncora visual" que organiza todo o espaço.
              </p>
              <div className="bg-gold/10 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-emerald-dark mb-2">🌺 Plantas que funcionam:</p>
                <p className="text-sm text-gray-700">
                  <strong>Centro:</strong> Azaléia anã, Gardênia, Hibisco compacto<br/>
                  <strong>Bordas:</strong> Agapanto, Liriope, Grama-preta
                </p>
              </div>
            </div>

            {/* Ideia 6 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                6. Jardim Vertical — Quando o Chão Acabou
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zero espaço no chão? Vá para cima. Muros feios viram paredes vivas. Grades de 
                janela viram suportes para vasos.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Existem várias opções: treliças com trepadeiras, vasos de parede, painéis modulares 
                ou até garrafas PET (sim, funciona e fica bonito se bem feito).
              </p>
              <div className="bg-gold/10 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-emerald-dark mb-2">🌿 Plantas que funcionam:</p>
                <p className="text-sm text-gray-700">
                  Jiboia, Samambaia, Peperômia, Lambari, Ripsális, Hera
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                → Quer saber mais? Tenho um artigo completo sobre <Link href="/blog/jardim-vertical" className="text-gold hover:underline">jardim vertical</Link>.
              </p>
            </div>

            {/* Ideia 7 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                7. Gramíneas Ornamentais — Movimento e Leveza
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gramíneas balançam com o vento e trazem uma sensação de movimento que outras plantas 
                não conseguem. Parecem "vivas" de um jeito diferente.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mas atenção: algumas crescem MUITO. Capim-do-texas, por exemplo, vira um monstro de 
                1,5m. Para espaços pequenos, escolha variedades anãs.
              </p>
              <div className="bg-gold/10 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-emerald-dark mb-2">🌾 Plantas que funcionam:</p>
                <p className="text-sm text-gray-700">
                  Festuca-azul (30cm), Carex (40cm), Pennisetum 'Little Bunny' (50cm), Capim-chorona anão
                </p>
              </div>
            </div>
            
            {/* Imagem */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jp-gramineas-pequeno.jpg"
                alt="Canteiro com gramíneas ornamentais"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                Gramíneas: movimento natural que transforma qualquer canteiro
              </p>
            </div>

            {/* Ideia 8 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                8. Jardim Sensorial — Perfume + Sabor
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Imagine sair de casa e sentir cheiro de lavanda. Ou colher manjericão fresco para 
                o jantar. Esse é o jardim sensorial.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Combine aromáticas e temperos em um canteiro só. Além do perfume, você atrai 
                borboletas e abelhas (polinizadores que ajudam todo o jardim).
              </p>
              <div className="bg-gold/10 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-emerald-dark mb-2">🌸 Plantas que funcionam:</p>
                <p className="text-sm text-gray-700">
                  Lavanda, Alecrim, Manjericão, Sálvia, Tomilho, Orégano
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 mt-4 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>Dica de paisagista:</strong> Hortelã é invasiva! Plante sempre em vaso separado, 
                  nunca direto no canteiro — ela vai dominar tudo.
                </p>
              </div>
            </div>

            {/* Ideia 9 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                9. Estilo Zen/Japonês — Menos é Mais
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se você gosta de minimalismo, o estilo japonês é perfeito. Poucas plantas, bem 
                escolhidas, com pedras e areia.
              </p>
              <div className="bg-red-50 rounded-lg p-4 mb-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">
                  <strong>NUNCA plante bambu direto no solo!</strong> Ele é extremamente invasivo — 
                  os rizomas destroem muros, calçadas e até fundações. Se quiser bambu, mantenha 
                  SEMPRE em vasos grandes.
                </p>
              </div>
              <div className="bg-gold/10 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-emerald-dark mb-2">🎋 Plantas que funcionam:</p>
                <p className="text-sm text-gray-700">
                  Nandina (bambu-celeste), Junípero-rasteiro, Grama-preta, Azaléia anã, Buxinho podado
                </p>
              </div>
            </div>

            {/* Ideia 10 */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8 border-l-4 border-gold">
              <h3 className="text-xl font-semibold text-emerald-dark mb-3">
                10. Canteiro de Flores — Cor o Ano Todo
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para quem ama cor, o segredo é combinar plantas com <strong>épocas de floração 
                diferentes</strong>. Assim você tem flores o ano inteiro.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Misture perenes (voltam todo ano) com anuais (precisam ser replantadas). As anuais 
                dão trabalho, mas compensam com floração intensa.
              </p>
              <div className="bg-gold/10 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-emerald-dark mb-2">🌷 Plantas que funcionam:</p>
                <p className="text-sm text-gray-700">
                  <strong>Perenes:</strong> Lavanda, Agapanto, Lírio-do-brejo<br/>
                  <strong>Anuais:</strong> Petúnia, Tagete, Begônia, Impatiens, Gazânia
                </p>
              </div>
            </div>

            {/* Dicas Rápidas */}
            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Checklist Rápido (Salva no Celular!)
            </h2>
            <div className="bg-emerald-dark text-white rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold text-emerald-dark rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span><strong>Solo:</strong> Adicione terra vegetal + húmus antes de plantar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold text-emerald-dark rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span><strong>Drenagem:</strong> Evite áreas onde água empoça</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold text-emerald-dark rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span><strong>Espaçamento:</strong> Plantas apertadas competem por nutrientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold text-emerald-dark rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span><strong>Bordas:</strong> Pedras ou madeira delimitam e organizam</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold text-emerald-dark rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                  <span><strong>Cobertura:</strong> Casca de pinus evita ervas daninhas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold text-emerald-dark rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                  <span><strong>Realismo:</strong> Escolha plantas pro tempo que você TEM</span>
                </li>
              </ul>
            </div>

            {/* Erros Comuns */}
            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Erros que Vejo Todo Dia (Evite!)
            </h2>
            <div className="space-y-4 mb-8">
              <div className="bg-red-50 rounded-lg p-4 flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span className="text-gray-700"><strong>Plantar árvores grandes:</strong> Raízes destroem calçadas e muros. Jabuticabeira e pitangueira são lindas, mas precisam de MUITO espaço.</span>
              </div>
              <div className="bg-red-50 rounded-lg p-4 flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span className="text-gray-700"><strong>Ignorar a luz:</strong> Planta de sol em sombra = planta morta. Observe seu quintal em diferentes horários antes de escolher.</span>
              </div>
              <div className="bg-red-50 rounded-lg p-4 flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span className="text-gray-700"><strong>Misturar estilos demais:</strong> Tropical + zen + mediterrâneo = bagunça visual. Escolha UM estilo e siga.</span>
              </div>
              <div className="bg-red-50 rounded-lg p-4 flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span className="text-gray-700"><strong>Subestimar manutenção:</strong> Todo jardim precisa de cuidado. Se você viaja muito, escolha plantas resistentes.</span>
              </div>
            </div>

            {/* CTA Final */}
            <div className="bg-gradient-to-r from-emerald-dark to-emerald-dark/90 rounded-xl p-8 mt-12 text-white">
              <h3 className="text-2xl font-cinzel mb-4">
                Quer um Projeto Feito pra Você?
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Cada espaço é único. O que funciona no quintal do vizinho pode não funcionar no seu. 
                Se você quer um projeto pensado especialmente para o SEU espaço, com as plantas 
                certas para a SUA rotina, vamos conversar.
              </p>
              <p className="text-white/80 mb-6 text-sm">
                Atendo São Roque, Cotia, Sorocaba, Alphaville, Barueri e todo Estado de SP.
              </p>
              <a
                href="https://wa.me/5511950583364?text=Olá! Vi o artigo sobre jardim pequeno e quero transformar meu espaço. Pode me ajudar?"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gold hover:bg-gold/90 text-emerald-dark font-semibold text-lg px-8 py-6">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Artigos Relacionados */}
      <section className="py-16 bg-emerald-dark/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-cinzel text-emerald-dark text-center mb-8">
            Continue Lendo
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/blog/jardim-vertical" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group block">
                <span className="text-sm text-gold">Jardim Vertical</span>
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors mt-2">
                  Como Fazer um Jardim Vertical em Casa
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Passo a passo completo para criar seu jardim vertical, mesmo em espaços pequenos.
                </p>
            </Link>
            <Link href="/blog/horta-apartamento" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group block">
                <span className="text-sm text-gold">Horta em Apartamento</span>
                <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors mt-2">
                  Horta em Apartamento: O Guia Completo
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Tudo que você precisa saber para cultivar temperos e hortaliças em casa.
                </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-dark py-8">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="text-white font-cinzel hover:text-gold transition-colors">
              Gideany Rezende <span className="text-gold">Paisagismo</span>
            </Link>
          <p className="text-white/60 text-sm mt-2">
            © 2026 Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
