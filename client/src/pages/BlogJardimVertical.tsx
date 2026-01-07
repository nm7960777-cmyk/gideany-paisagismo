/**
 * DESIGN SYSTEM: Tropical Luxe
 * Artigo: Como Fazer um Jardim Vertical em Casa
 * Estilo: Conversacional e envolvente
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogJardimVertical() {
  useEffect(() => {
    document.title = "Jardim Vertical: Guia Completo para Iniciantes | Gideany Rezende";
  }, []);

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
            <span className="text-gold">Jardim Vertical</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="bg-gold text-emerald-dark px-4 py-1 rounded-full text-sm font-medium">
              Jardim Vertical
            </span>
            <h1 className="text-3xl md:text-5xl font-cinzel text-white mt-6 mb-6 leading-tight">
              Jardim Vertical em Casa: O Guia Que Eu Queria Ter Lido Antes de Começar
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Gideany Rezende
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                10 de Janeiro de 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                5 min de leitura
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
            src="/images/blog-jardim-vertical-correto.jpg"
            alt="Jardim Vertical em Casa - Projeto de Paisagismo"
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
            {/* Introdução Envolvente */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              <strong>"Quero um jardim vertical, mas não sei por onde começar."</strong> Se você já disse isso, 
              este artigo é pra você. Vou te contar tudo que aprendi em anos projetando jardins verticais — 
              incluindo os erros que eu mesma já vi (e ajudei a corrigir).
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              A boa notícia? <strong>Jardim vertical não é difícil.</strong> A má notícia? Tem muita informação 
              errada por aí que faz as pessoas desistirem ou matarem as plantas em poucas semanas. 
              Vamos resolver isso juntos.
            </p>

            {/* Seção: O que é */}
            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Afinal, o Que é um Jardim Vertical?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              É simples: plantas cultivadas na vertical, aproveitando paredes, muros ou estruturas suspensas. 
              Pode ser desde um painel de feltro sofisticado até garrafas PET penduradas com barbante.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O que importa não é o material, é <strong>entender o que suas plantas precisam</strong>. 
              E é exatamente isso que vou te ensinar.
            </p>

            {/* Box de Benefícios */}
            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-emerald-dark mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Por que ter um jardim vertical?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>Espaço:</strong> Perfeito para apartamentos e varandas pequenas</li>
                <li>✓ <strong>Ar puro:</strong> Plantas filtram toxinas e liberam oxigênio</li>
                <li>✓ <strong>Temperatura:</strong> Ajuda a refrescar o ambiente naturalmente</li>
                <li>✓ <strong>Barulho:</strong> Absorve parte dos ruídos externos</li>
                <li>✓ <strong>Bem-estar:</strong> Reduz estresse (comprovado cientificamente!)</li>
              </ul>
            </div>

            {/* Seção: Passo a Passo */}
            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Passo a Passo: Do Zero ao Jardim Pronto
            </h2>

            {/* Passo 1 */}
            <div className="border-l-4 border-gold pl-6 mb-8">
              <h3 className="text-xl font-semibold text-emerald-dark mb-4">
                1. Escolha o Local (e seja honesto sobre a luz)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Esse é o passo que mais gente erra. Você olha pra parede e pensa: "Aqui tem luz". 
                Mas será que tem <strong>luz suficiente</strong>?
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A maioria das plantas precisa de pelo menos <strong>4 horas de luz indireta por dia</strong>. 
                Varandas, sacadas e paredes perto de janelas grandes são ótimas opções.
              </p>
            </div>

            {/* Alerta */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-800">Cuidado com corredores e banheiros!</p>
                  <p className="text-amber-700 text-sm mt-1">
                    Esses ambientes geralmente têm pouca luz. Se insistir, use apenas espada-de-são-jorge 
                    ou zamioculca — as únicas que sobrevivem quase no escuro.
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="border-l-4 border-gold pl-6 mb-8">
              <h3 className="text-xl font-semibold text-emerald-dark mb-4">
                2. Escolha a Estrutura (não precisa ser cara)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Esqueça aqueles painéis caríssimos que você viu no Pinterest. 
                Dá pra fazer jardim vertical bonito com:
              </p>
            </div>

            {/* Imagem de Pallet */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jv-pallet-parede.jpg"
                alt="Jardim vertical feito com pallet de madeira"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                <strong>Pallet:</strong> Econômico e rústico. Custo: R$ 30-50
              </p>
            </div>

            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jv-vasos-parede.jpg"
                alt="Vasos de barro com suportes metálicos na parede"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                <strong>Vasos com suportes:</strong> Clássico e acessível. Custo: R$ 15-30 por vaso
              </p>
            </div>

            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jv-garrafas-pet.jpg"
                alt="Jardim vertical feito com garrafas PET"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                <strong>Garrafas PET:</strong> Sustentável e gratuito. Ótimo para hortas!
              </p>
            </div>

            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jv-vasos-modulares2.jpg"
                alt="Vasos modulares para jardim vertical"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                <strong>Vasos modulares:</strong> Práticos e modernos. Custo: R$ 50-150 o kit
              </p>
            </div>

            {/* Passo 3 */}
            <div className="border-l-4 border-gold pl-6 mb-8">
              <h3 className="text-xl font-semibold text-emerald-dark mb-4">
                3. Impermeabilize (se for parede interna)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Esse passo é <strong>obrigatório</strong> se o jardim for em parede interna. 
                Use manta impermeabilizante ou plástico grosso entre a estrutura e a parede.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Já vi gente gastar R$ 2.000 em plantas e estragar a parede por economia de R$ 50 em impermeabilização. 
                Não seja essa pessoa.
              </p>
            </div>

            {/* Passo 4 - Plantas */}
            <div className="border-l-4 border-gold pl-6 mb-8">
              <h3 className="text-xl font-semibold text-emerald-dark mb-4">
                4. Escolha as Plantas Certas (a parte mais importante!)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aqui está o segredo: <strong>combine plantas com necessidades parecidas</strong>. 
                Não adianta colocar samambaia (que ama água) do lado de suculenta (que odeia).
              </p>
            </div>

            {/* Imagem de Plantas */}
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/blog-jv-plantas-pendentes.jpg"
                alt="Plantas pendentes ideais para jardim vertical"
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-gray-500 text-center py-2 bg-gray-50">
                Samambaias, jiboias e tradescantias: as queridinhas dos jardins verticais
              </p>
            </div>

            {/* Tabela de Plantas por Luminosidade */}
            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-dark mb-3">🌑 Pouca luz (sombra):</h4>
              <p className="text-gray-700">
                <strong>Jiboia</strong> (a mais fácil de todas!), Samambaia, Lírio-da-paz, 
                Espada-de-são-jorge, Zamioculca, Filodendro-brasil
              </p>
            </div>
            
            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-dark mb-3">🌤️ Luz média (meia-sombra):</h4>
              <p className="text-gray-700">
                Singônio, Antúrio, Begônia, Clorofito, Pilea, Asplênio, Renda-portuguesa
              </p>
            </div>
            
            <div className="bg-emerald-dark/5 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-emerald-dark mb-3">☀️ Bastante luz (sol indireto):</h4>
              <p className="text-gray-700">
                Suculentas, Cactos, Hera, Lambari (Tradescantia), Ripsális, Kalanchoe
              </p>
            </div>

            {/* Dica de Paisagista */}
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-emerald-dark">Dica de paisagista:</p>
                  <p className="text-gray-700 mt-1">
                    Comece com <strong>jiboia</strong>. É praticamente indestrutível, cresce rápido, 
                    fica linda pendente e perdoa seus erros de rega. Se você matar uma jiboia, 
                    talvez jardinagem não seja pra você (brincadeira... mas nem tanto).
                  </p>
                </div>
              </div>
            </div>

            {/* Passo 5 */}
            <div className="border-l-4 border-gold pl-6 mb-8">
              <h3 className="text-xl font-semibold text-emerald-dark mb-4">
                5. Prepare o Substrato
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Use uma mistura leve que drene bem:
              </p>
              <ul className="text-gray-700 space-y-1 mb-4">
                <li>• 50% terra vegetal</li>
                <li>• 30% húmus de minhoca</li>
                <li>• 20% perlita ou vermiculita</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Essa combinação garante nutrientes e evita que a água fique empoçada nas raízes 
                (a causa número 1 de morte de plantas em jardins verticais).
              </p>
            </div>

            {/* Passo 6 */}
            <div className="border-l-4 border-gold pl-6 mb-8">
              <h3 className="text-xl font-semibold text-emerald-dark mb-4">
                6. Cuide da Irrigação (sem neura)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Você não precisa de sistema automatizado.</strong> Para jardins pequenos e médios, 
                rega manual funciona perfeitamente — e ainda te força a observar suas plantas de perto.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A regra de ouro: <strong>coloque o dedo no substrato</strong>. Se estiver úmido, não regue. 
                Se estiver seco, regue. Simples assim.
              </p>
            </div>

            {/* Frequência de Rega */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-blue-800 mb-3">Frequência de rega por tipo de planta:</h4>
              <ul className="space-y-2 text-blue-900">
                <li><strong>Samambaias e marantas:</strong> Substrato sempre úmido (2-3x por semana)</li>
                <li><strong>Jiboias e filodendros:</strong> Deixe secar levemente (1-2x por semana)</li>
                <li><strong>Suculentas e cactos:</strong> Só quando estiver bem seco (1x a cada 10-15 dias)</li>
              </ul>
            </div>

            {/* Seção: Manutenção */}
            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              Manutenção: O Que Fazer Depois de Pronto
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <span className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">1</span>
                <div>
                  <p className="font-semibold text-emerald-dark">Rega</p>
                  <p className="text-gray-600 text-sm">2-3x por semana no verão, 1x no inverno</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <span className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">2</span>
                <div>
                  <p className="font-semibold text-emerald-dark">Adubação</p>
                  <p className="text-gray-600 text-sm">A cada 2 meses com adubo orgânico ou NPK 10-10-10</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <span className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">3</span>
                <div>
                  <p className="font-semibold text-emerald-dark">Poda</p>
                  <p className="text-gray-600 text-sm">Remova folhas secas e faça podas de formação quando necessário</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <span className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">4</span>
                <div>
                  <p className="font-semibold text-emerald-dark">Pragas</p>
                  <p className="text-gray-600 text-sm">Inspecione semanalmente. Óleo de neem resolve 90% dos problemas</p>
                </div>
              </div>
            </div>

            {/* Erros Comuns */}
            <h2 className="text-2xl font-cinzel text-emerald-dark mt-12 mb-6">
              3 Erros Que Eu Vejo Todo Dia (e como evitar)
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="font-semibold text-red-800">❌ Erro 1: Regar demais</p>
                <p className="text-red-700 text-sm mt-1">
                  Mais plantas morrem por excesso de água do que por falta. Na dúvida, espere mais um dia.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="font-semibold text-red-800">❌ Erro 2: Misturar plantas incompatíveis</p>
                <p className="text-red-700 text-sm mt-1">
                  Suculenta com samambaia = uma vai morrer. Agrupe plantas com necessidades parecidas.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="font-semibold text-red-800">❌ Erro 3: Ignorar a luz</p>
                <p className="text-red-700 text-sm mt-1">
                  "Achei que tinha luz suficiente" é a frase mais comum que ouço. Observe o local por alguns dias antes de instalar.
                </p>
              </div>
            </div>

            {/* CTA Final */}
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-12">
              <h3 className="text-xl font-cinzel text-emerald-dark mb-4">
                Quer um Jardim Vertical Sob Medida?
              </h3>
              <p className="text-gray-700 mb-4">
                Se você quer um projeto personalizado — com as plantas certas pro seu espaço, 
                estrutura adequada e garantia de que vai dar certo — me chama no WhatsApp. 
                Atendo São Roque, Cotia, Sorocaba e todo Estado de SP.
              </p>
              <a
                href="https://wa.me/5511950583364?text=Olá! Vi o artigo sobre jardim vertical e gostaria de um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gold hover:bg-gold/90 text-emerald-dark font-semibold">
                  Solicitar Orçamento pelo WhatsApp
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
            Leia Também
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/blog/horta-apartamento" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                Horta em Apartamento: O Guia Completo
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Aprenda a cultivar temperos e hortaliças mesmo em espaços pequenos.
              </p>
            </Link>
            <Link href="/blog/jardim-pequeno" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">
                Jardim Pequeno: 10 Ideias de Canteiros
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Transforme qualquer cantinho em um refúgio verde e relaxante.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-dark py-8 border-t border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="text-white/60 hover:text-gold transition-colors">
            Voltar ao Site
          </Link>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/5511950583364"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
