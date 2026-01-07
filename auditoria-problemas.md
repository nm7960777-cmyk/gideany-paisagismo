# Auditoria Completa - Problemas Encontrados

Data: 07/01/2026

---

## PÁGINA INICIAL (HOME)

### PROBLEMAS DE PORTUGUÊS/ORTOGRAFIA

1. **Seção Sobre**: "Atuo em São Roque, Cotia, Sorocaba e todo o Estado de São Paulo, região," - frase truncada/redundante. Deveria ser apenas "Atuo em São Roque, Cotia, Sorocaba e todo o Estado de São Paulo,"

### PROBLEMAS DE CONVERSÃO/ENGAJAMENTO

1. **Depoimentos genéricos**: Os depoimentos são muito curtos e genéricos ("Excelente trabalho! O projeto foi entregue no prazo"). Não transmitem emoção nem detalhes específicos que gerem confiança.

2. **Falta de prova social**: Não há número de projetos realizados, anos de experiência ou certificações além do CREA.

3. **CTA do formulário**: O botão "Enviar pelo WhatsApp" poderia ter texto mais persuasivo como "Quero Meu Orçamento Grátis".

### PROBLEMAS VISUAIS/ESTRUTURAIS

1. **OK** - Hero visualmente impactante
2. **OK** - Cores consistentes (verde esmeralda + dourado)
3. **OK** - Tipografia legível
4. **OK** - Imagens carregando corretamente

### PROBLEMAS DE SEO

1. **OK** - Título com 51 caracteres
2. **OK** - 5 palavras-chave focadas
3. **OK** - Alt text nas imagens principais

---

## PÁGINA FAQ

### PROBLEMAS DE PORTUGUÊS

1. **Link aninhado detectado**: `<Link href="/"><a className="...">` - Link dentro de Link causa erro no React

### CONTEÚDO

1. **OK** - Perguntas relevantes e completas
2. **OK** - Respostas detalhadas
3. **OK** - Categorização por tema

---

## ARTIGO JARDIM PEQUENO

### PROBLEMAS AGRONÔMICOS

1. **OK** - Nomes de plantas corretos
2. **OK** - Alertas sobre bambu e hortelã invasivos
3. **OK** - Recomendações de luz/rega adequadas
4. **Verificar**: "Pennisetum 'Little Bunny'" - confirmar se é o nome correto da cultivar

### PORTUGUÊS

1. **OK** - Linguagem envolvente e conversacional
2. **OK** - Ortografia correta

---

## ARTIGO JARDIM VERTICAL

### PROBLEMAS AGRONÔMICOS

1. **OK** - Plantas corretas para cada nível de luz
2. **OK** - Substrato adequado (50% terra vegetal, 30% húmus, 20% perlita)
3. **OK** - Frequências de rega corretas

### PORTUGUÊS

1. **OK** - Linguagem envolvente
2. **OK** - Ortografia correta

---

## ARTIGO HORTA EM APARTAMENTO

### PROBLEMAS DETECTADOS

1. **Link aninhado**: `<Link href="/"><a className="...">` no header - causa erro React
2. **Link aninhado**: Breadcrumbs com `<Link><a>` aninhados
3. **Estilo menos envolvente**: Comparado aos outros artigos, este está mais "seco" e técnico

### PROBLEMAS AGRONÔMICOS

1. **OK** - Orientações de luz por face (Norte, Leste, Oeste) corretas para hemisfério Sul
2. **OK** - Ciclos de cultivo corretos (alface 45-60 dias, rúcula 30 dias)
3. **OK** - Alerta sobre hortelã invasiva
4. **OK** - Dica sobre coentro "subir" no calor

---

## PROBLEMAS TÉCNICOS GERAIS

1. **Links aninhados em múltiplas páginas**: FAQ e Horta em Apartamento têm `<Link><a>` que causam erros no console

2. **Consistência de estilo**: Artigo de Horta em Apartamento não foi reescrito no estilo envolvente dos outros

---

## CORREÇÕES PRIORITÁRIAS

### CRÍTICAS (Erros que quebram o site)
- [ ] Corrigir links aninhados em FAQ.tsx
- [ ] Corrigir links aninhados em BlogHortaApartamento.tsx

### ALTAS (Impactam conversão)
- [ ] Corrigir frase truncada na seção Sobre da Home
- [ ] Melhorar depoimentos com mais detalhes e emoção
- [ ] Adicionar prova social (número de projetos, anos de experiência)

### MÉDIAS (Melhorias de qualidade)
- [ ] Reescrever artigo Horta em Apartamento no estilo envolvente
- [ ] Adicionar mais CTAs ao longo das páginas

### BAIXAS (Nice to have)
- [ ] Adicionar Schema.org LocalBusiness
- [ ] Adicionar mais depoimentos reais

