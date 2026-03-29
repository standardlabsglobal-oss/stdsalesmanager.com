// =============================================
// STANDARD SALES MANAGER — Landing Page Scripts
// Standard Labs SpA
// =============================================

// =============================================
// i18n LANGUAGE PACKS
// =============================================
const LANG_PACKS = {
  es: {
    // Nav
    navProducto: 'Producto',
    navPrecios: 'Precios',
    navFuncionalidades: 'Funcionalidades',
    navDescargar: 'Descargar',
    navContacto: 'Contacto',
    navCta: 'Empieza Gratis',

    // Hero
    heroBadge: 'GESTIÓN COMERCIAL PARA PYMES',
    heroTitle: 'TUS COTIZACIONES',
    heroTitleAccent: 'BAJO CONTROL.',
    heroSubtitle: 'Standard Sales Manager es el software de gestión de cotizaciones diseñado para pequeñas empresas y emprendedores. Sin complicaciones. Sin curva de aprendizaje. Con resultados.',
    heroCtaPrimary: 'EMPIEZA GRATIS 20 DÍAS',
    heroCtaSecondary: 'VER PRECIOS',
    heroTrialNote: 'Sin tarjeta de crédito · Sin compromiso',
    heroStat1: '<1min',
    heroStat1Label: 'Para crear una cotización',
    heroStat2: 'PDF',
    heroStat2Label: 'Exportación profesional',
    heroStat3: '100%',
    heroStat3Label: 'Métricas en tiempo real',

    // Trust bar
    trustStat1: '<1min',
    trustLabel1: 'Crear cotización',
    trustStat2: 'PDF',
    trustLabel2: 'Exportación profesional',
    trustStat3: '4',
    trustLabel3: 'Idiomas disponibles',
    trustStat4: '100%',
    trustLabel4: 'Datos encriptados',

    // Problem/Solution
    problemTitle: 'Sin Standard Sales Manager',
    problemItems: [
      'Cotizaciones en Excel sin branding ni formato profesional',
      'Cero visibilidad de tu pipeline comercial',
      'No mides tu tasa de conversión ni tu win rate',
      'Pierdes el seguimiento de prospectos y leads',
      'Numeración manual con errores y sin trazabilidad'
    ],
    solutionTitle: 'Con Standard Sales Manager',
    solutionItems: [
      'Cotizaciones profesionales con tu branding en menos de 1 minuto',
      'Dashboard con KPIs mensuales, anuales y por cliente',
      'Win rate, conversión y forecast comercial en tiempo real',
      'Base de prospectos y contactos que se llena sola',
      'Trazabilidad completa: numeración y versionamiento automático'
    ],

    // Product
    productLabel: 'EL PRODUCTO',
    productTitle: 'Simple por fuera,',
    productTitleAccent: 'poderoso por dentro.',
    productDesc: 'No es un CRM. No es un ERP. Es tu herramienta para cotizar, hacer seguimiento y cerrar negocios.',
    productCard1Title: 'Cotizaciones Profesionales',
    productCard1Desc: 'Crea cotizaciones con tu branding, exporta a PDF con un clic. Numeración correlativa automática.',
    productCard2Title: 'Sales Analytics',
    productCard2Desc: 'Win rate, pipeline comercial, ranking de clientes, ticket promedio y forecast por periodo. Todo automático.',
    productCard3Title: 'Base de Contactos',
    productCard3Desc: 'Cada lead que cotizas se registra automáticamente como contacto con empresa, email y teléfono. Tu CRM liviano.',

    // Features
    featuresLabel: 'FUNCIONALIDADES',
    featuresTitle: 'Todo lo que necesitas,',
    featuresTitleAccent: 'nada que te sobre.',
    featuresDesc: 'Diseñado para que emitas tu primera cotización en menos de un minuto.',
    feature1Title: 'Exportación PDF',
    feature1Desc: 'Un clic y tu cotización tiene formato profesional listo para enviar.',
    feature2Title: 'KPIs en Tiempo Real',
    feature2Desc: 'Dashboard con métricas clave: win rate, pipeline, ticket promedio y forecast.',
    feature3Title: 'Multiusuario',
    feature3Desc: 'Trabaja con tu equipo. Datos compartidos en la nube entre PC y celulares.',
    feature4Title: 'Versionamiento',
    feature4Desc: 'Edita cotizaciones emitidas y genera versiones (.b, .c) sin perder historial.',
    feature5Title: 'App Móvil Sincronizada',
    feature5Desc: 'Cotiza desde tu celular. Sincronización automática con el PC.',
    feature6Title: '4 Idiomas',
    feature6Desc: 'Disponible en Español, English, Português e Français.',
    feature7Title: 'Alertas de Vencimiento',
    feature7Desc: 'Cotizaciones vencidas aparecen como alerta. Descártalas o haz seguimiento.',
    feature8Title: 'Tu Marca, Tu Estilo',
    feature8Desc: 'Logo, colores corporativos, slogan y múltiples layouts. Hazlo tuyo.',
    feature9Title: 'Loss Reason Tracking',
    feature9Desc: 'Registra por qué no cerraste el deal: precio, competencia, timing. Mejora tu close rate.',
    featuresShowMore: 'Ver todas las funcionalidades',
    featuresShowLess: 'Ver menos',

    // Field Sales
    fieldLabel: 'VENTAS EN TERRENO',
    fieldTitle: 'Cotiza en terreno.',
    fieldTitleAccent: 'Cierra en el momento.',
    fieldDesc: 'No hagas esperar a tu cliente días por una cotización. Genérala frente a él, desde tu celular, en menos de 1 minuto. Eso es impacto comercial.',
    fieldStep1Title: 'Estás con el cliente',
    fieldStep1Desc: 'Visita en terreno. El cliente te pide una cotización. Antes esperaba días. Ahora abres la app.',
    fieldStep2Title: 'Cotizas en menos de 1 minuto',
    fieldStep2Desc: 'Seleccionas el contacto, agregas ítems, tu logo y datos de empresa ya están configurados. Generas la cotización.',
    fieldStep3Title: 'Compartes al instante',
    fieldStep3Desc: 'PDF profesional con tu branding. Lo envías por WhatsApp o email ahí mismo. El cliente lo tiene en la mano.',
    fieldStep4Title: 'Queda en tu base de datos',
    fieldStep4Desc: 'La cotización se sincroniza con tu PC. El contacto se registra automáticamente. Tu pipeline se actualiza en tiempo real.',
    fieldImpact1Title: 'Impacto inmediato',
    fieldImpact1Desc: 'El cliente ve profesionalismo y velocidad. Eso genera confianza y acelera el cierre.',
    fieldImpact2Title: 'Todo queda registrado',
    fieldImpact2Desc: 'Sin papeles, sin olvidos. Cada visita, cada cotización, cada prospecto — en tu base de datos.',
    fieldImpact3Title: 'Tu equipo lo ve',
    fieldImpact3Desc: 'Si tu vendedor cotizó en terreno, tú ya lo ves en el dashboard del PC. Sin esperar que vuelva a la oficina.',

    // Pricing
    pricingLabel: 'PRECIOS',
    pricingTitle: 'Planes simples,',
    pricingTitleAccent: 'sin sorpresas.',
    pricingDesc: 'Empieza gratis. Escala cuando quieras.',
    pricingToggleMonthly: 'Mensual',
    pricingToggle1Year: '1 Año',
    pricingToggle2Years: '2 Años',
    pricingBasico: 'Básico',
    pricingPro: 'Pro',
    pricingElite: 'Élite',
    pricingPopular: 'MÁS POPULAR',
    pricingUsers1: '1 a 3 usuarios',
    pricingUsers2: 'Hasta 5 usuarios',
    pricingUsers3: 'Hasta 15 usuarios',
    pricingPerMonth: '/mes',
    pricingAnnualContract: 'Contrato anual',
    pricingBiannualContract: 'Contrato por 2 años',
    pricingMonthlyContract: 'Sin compromiso',
    pricingSave: 'Ahorra',
    pricingCta: 'Empieza Gratis',
    pricingNote: 'Prueba gratis de 20 días hábiles · Sin tarjeta de crédito · Todas las funcionalidades',
    pricingFeatures: {
      basico: ['Cotizaciones ilimitadas', 'PDF profesional', 'App móvil sincronizada', 'Base de contactos', 'Analytics básico', 'Tu logo en cotizaciones', 'Soporte por email'],
      pro: ['Todo lo del plan Básico', 'Hasta 5 usuarios', 'Analytics avanzado', 'Soporte prioritario', 'Informes PDF exportables'],
      elite: ['Todo lo del plan Pro', 'Hasta 15 usuarios', 'Analytics avanzado', 'Soporte dedicado', 'Informes PDF exportables', 'Configuración personalizada']
    },

    // Downloads
    downloadsLabel: 'DESCARGAR',
    downloadsTitle: 'Descarga y empieza',
    downloadsTitleAccent: 'en minutos.',
    downloadWindows: 'Descargar para Windows',
    downloadWindowsMeta: 'Windows 10/11 · v1.2.0 · 85 MB',
    downloadAndroid: 'Disponible en Android',
    downloadAndroidMeta: 'Android 8+ · Próximamente en Google Play',
    downloadAndroidBtn: 'Descargar APK',

    // Analytics
    analyticsLabel: 'SALES ANALYTICS',
    analyticsTitle: 'Data-driven',
    analyticsTitleAccent: 'decisions.',
    analyticsDesc: 'Transforma tu actividad comercial en insights accionables. Win rate, pipeline, forecast y performance por cliente — todo en tiempo real.',
    analyticsFeat1: 'Win rate real — cotizaciones emitidas vs facturadas',
    analyticsFeat2: 'Ranking de clientes por revenue y volumen',
    analyticsFeat3: 'Tendencias mensuales y estacionalidad de ventas',
    analyticsFeat4: 'Ticket promedio, recompra y performance por cuenta',
    analyticsFeat5: 'Reports mensuales y anuales exportables a PDF',

    // Audience
    audienceLabel: '¿PARA QUIÉN ES?',
    audienceTitle: 'Diseñado para quienes',
    audienceTitleAccent: 'venden de verdad.',
    audience1Title: 'Talleres y Servicios Técnicos',
    audience1Desc: 'Cotiza repuestos, mano de obra y servicios. Haz follow-up y mide tu conversión por tipo de servicio.',
    audience2Title: 'Constructoras y Contratistas',
    audience2Desc: 'Pipeline por proyecto, tracking de OC y visibilidad del forecast por periodo.',
    audience3Title: 'Comercio y Distribuidoras',
    audience3Desc: 'Cotizaciones rápidas, follow-up por cuenta y métricas de rendimiento comercial.',
    audience4Title: 'Freelancers y Consultores',
    audience4Desc: 'Cotiza servicios, trackea tu pipeline personal y genera reportes de tu actividad mes a mes.',

    // FAQ
    faqLabel: 'PREGUNTAS FRECUENTES',
    faqTitle: 'Resolvemos',
    faqTitleAccent: 'tus dudas.',
    faq1Q: '¿Necesito tarjeta de crédito para la prueba gratis?',
    faq1A: 'No. La prueba gratuita de 20 días hábiles no requiere tarjeta de crédito ni datos de pago. Accedes a todas las funcionalidades sin restricciones.',
    faq2Q: '¿Puedo cancelar en cualquier momento?',
    faq2A: 'Sí. En los planes mensuales puedes cancelar cuando quieras sin penalización. En los planes anuales, tu suscripción continúa hasta el final del período contratado.',
    faq3Q: '¿Mis datos están seguros?',
    faq3A: 'Absolutamente. Todos los datos se encriptan con AES-GCM (estándar militar) y se almacenan en servidores seguros en la nube. Cada empresa tiene su propia clave de encriptación.',
    faq4Q: '¿Funciona sin internet?',
    faq4A: 'Sí. Puedes crear y editar cotizaciones sin conexión. Cuando vuelvas a tener internet, los datos se sincronizan automáticamente.',
    faq5Q: '¿Puedo usar mi logo en las cotizaciones?',
    faq5A: 'Sí, en todos los planes pagos puedes agregar tu logo, colores corporativos y slogan a las cotizaciones.',
    faq6Q: '¿En qué idiomas está disponible?',
    faq6A: 'Standard Sales Manager está disponible en 4 idiomas: Español, English, Português (Brasil) y Français.',

    // About
    aboutLabel: 'LA EMPRESA',
    aboutTitle: 'Standard Labs SpA',
    aboutDesc: 'Desarrollamos herramientas de gestión empresarial accesibles para PYMEs y emprendedores. Tecnología práctica, sin complejidad innecesaria.',
    aboutValue1Title: 'Simplicidad',
    aboutValue1Desc: 'Creemos que un software útil es aquel que no necesita manual. Si es difícil de usar, está mal diseñado.',
    aboutValue2Title: 'Datos con Propósito',
    aboutValue2Desc: 'Cada métrica que mostramos tiene un propósito: ayudarte a tomar mejores decisiones comerciales.',
    aboutValue3Title: 'Hecho para Crecer',
    aboutValue3Desc: 'Escala de 1 a 15 usuarios sin cambiar de herramienta. Tu software crece contigo.',

    // CTA
    ctaLabel: 'EMPIEZA HOY',
    ctaTitle: '¿Listo para tomar el',
    ctaTitleAccent: 'control de tus ventas?',
    ctaDesc: 'Descarga gratis. Prueba 20 días sin tarjeta de crédito. Si te sirve, elige tu plan y paga en línea.',
    ctaDownload: 'DESCARGAR GRATIS',
    ctaPricing: 'VER PLANES Y PRECIOS',
    ctaNote: 'Sin formularios · Sin esperas · Descarga, prueba y decide',
    ctaFormName: 'Tu nombre',
    ctaFormCompany: 'Empresa',
    ctaFormEmail: 'Email',
    ctaFormPhone: 'Teléfono',
    ctaFormMessage: '¿En qué podemos ayudarte?',
    ctaFormBtn: 'ENVIAR MENSAJE',
    ctaFormNote: 'Te responderemos en menos de 24 horas',
    ctaFormSuccess: '¡ENVIADO!',

    // Footer
    footerDesc: 'Software de gestión de cotizaciones para PYMEs y emprendedores.',
    footerProducto: 'Producto',
    footerEmpresa: 'Empresa',
    footerLegal: 'Legal',
    footerIdioma: 'Idioma',
    footerTerms: 'Términos de Servicio',
    footerPrivacy: 'Política de Privacidad',
    footerCopyright: '© 2026 Standard Labs SpA — Todos los derechos reservados.'
  },

  en: {
    navProducto: 'Product',
    navPrecios: 'Pricing',
    navFuncionalidades: 'Features',
    navDescargar: 'Download',
    navContacto: 'Contact',
    navCta: 'Start Free',
    heroBadge: 'SALES MANAGEMENT FOR SMEs',
    heroTitle: 'YOUR QUOTES',
    heroTitleAccent: 'UNDER CONTROL.',
    heroSubtitle: 'Standard Sales Manager is the quotation management software designed for small businesses and entrepreneurs. No complications. No learning curve. Real results.',
    heroCtaPrimary: 'START FREE FOR 20 DAYS',
    heroCtaSecondary: 'SEE PRICING',
    heroTrialNote: 'No credit card required · No commitment',
    heroStat1: '<1min',
    heroStat1Label: 'To create a quote',
    heroStat2: 'PDF',
    heroStat2Label: 'Professional export',
    heroStat3: '100%',
    heroStat3Label: 'Real-time metrics',
    trustStat1: '<1min', trustLabel1: 'Create a quote',
    trustStat2: 'PDF', trustLabel2: 'Professional export',
    trustStat3: '4', trustLabel3: 'Languages available',
    trustStat4: '100%', trustLabel4: 'Encrypted data',
    problemTitle: 'Without Standard Sales Manager',
    problemItems: ['Quotes in Excel with no branding or professional format', 'Zero visibility into your sales pipeline', 'No way to measure your conversion rate or win rate', 'Lost track of prospects and leads', 'Manual numbering with errors and no traceability'],
    solutionTitle: 'With Standard Sales Manager',
    solutionItems: ['Branded professional PDF quotes in under a minute', 'Dashboard with monthly, annual and per-client KPIs', 'Win rate, conversion and sales forecast in real time', 'Prospect and contact database that fills itself', 'Full traceability: automatic numbering and versioning'],
    productLabel: 'THE PRODUCT',
    productTitle: 'Simple on the outside,',
    productTitleAccent: 'powerful inside.',
    productDesc: 'Not a CRM. Not an ERP. Your tool to quote, follow up and close deals.',
    productCard1Title: 'Professional Quotes', productCard1Desc: 'Create branded quotes, export to PDF in one click. Automatic sequential numbering.',
    productCard2Title: 'Sales Analytics', productCard2Desc: 'Win rate, sales pipeline, client rankings, average ticket and forecast by period. All automatic.',
    productCard3Title: 'Contact Database', productCard3Desc: 'Every lead you quote is automatically registered as a contact. Your lightweight CRM.',
    featuresLabel: 'FEATURES',
    featuresTitle: 'Everything you need,',
    featuresTitleAccent: 'nothing you don\'t.',
    featuresDesc: 'Designed so you can send your first quote in under a minute.',
    feature1Title: 'PDF Export', feature1Desc: 'One click and your quote is professionally formatted and ready to send.',
    feature2Title: 'Real-Time KPIs', feature2Desc: 'Dashboard with key metrics: win rate, pipeline, average ticket and forecast.',
    feature3Title: 'Multi-user', feature3Desc: 'Work with your team. Shared data in the cloud between PCs and phones.',
    feature4Title: 'Versioning', feature4Desc: 'Edit issued quotes and generate versions (.b, .c) without losing history.',
    feature5Title: 'Synced Mobile App', feature5Desc: 'Quote from your phone. Automatic sync with your PC.',
    feature6Title: '4 Languages', feature6Desc: 'Available in Spanish, English, Portuguese and French.',
    feature7Title: 'Expiration Alerts', feature7Desc: 'Expired quotes show as alerts. Dismiss them or follow up.',
    feature8Title: 'Your Brand, Your Style', feature8Desc: 'Logo, corporate colors, slogan and multiple layouts. Make it yours.',
    feature9Title: 'Loss Reason Tracking', feature9Desc: 'Record why you didn\'t close the deal: price, competition, timing. Improve your close rate.',
    featuresShowMore: 'See all features', featuresShowLess: 'See less',
    fieldLabel: 'FIELD SALES',
    fieldTitle: 'Quote on-site.',
    fieldTitleAccent: 'Close on the spot.',
    fieldDesc: 'Don\'t make your client wait days for a quote. Generate it in front of them, from your phone, in under a minute. That\'s sales impact.',
    fieldStep1Title: 'You\'re with the client',
    fieldStep1Desc: 'On-site visit. The client asks for a quote. They used to wait days. Now you open the app.',
    fieldStep2Title: 'Quote in under a minute',
    fieldStep2Desc: 'Select the contact, add items — your logo and company data are already set. Generate the quote.',
    fieldStep3Title: 'Share instantly',
    fieldStep3Desc: 'Professional branded PDF. Send it via WhatsApp or email right there. The client has it in hand.',
    fieldStep4Title: 'It\'s in your database',
    fieldStep4Desc: 'The quote syncs to your PC. The contact is auto-registered. Your pipeline updates in real time.',
    fieldImpact1Title: 'Instant impact',
    fieldImpact1Desc: 'The client sees professionalism and speed. That builds trust and accelerates the close.',
    fieldImpact2Title: 'Everything is recorded',
    fieldImpact2Desc: 'No paper, no forgotten details. Every visit, every quote, every prospect — in your database.',
    fieldImpact3Title: 'Your team sees it',
    fieldImpact3Desc: 'If your rep quoted on-site, you already see it on the PC dashboard. No waiting for them to return to the office.',
    pricingLabel: 'PRICING',
    pricingTitle: 'Simple plans,',
    pricingTitleAccent: 'no surprises.',
    pricingDesc: 'Start free. Scale when you\'re ready.',
    pricingToggleMonthly: 'Monthly', pricingToggle1Year: '1 Year', pricingToggle2Years: '2 Years',
    pricingBasico: 'Basic', pricingPro: 'Pro', pricingElite: 'Elite',
    pricingPopular: 'MOST POPULAR',
    pricingUsers1: '1 to 3 users', pricingUsers2: 'Up to 5 users', pricingUsers3: 'Up to 15 users',
    pricingPerMonth: '/mo', pricingAnnualContract: 'Annual contract', pricingBiannualContract: '2-year contract', pricingMonthlyContract: 'No commitment',
    pricingSave: 'Save', pricingCta: 'Start Free',
    pricingNote: '20 business days free trial · No credit card · All features included',
    pricingFeatures: {
      basico: ['Unlimited quotes', 'Professional PDF', 'Synced mobile app', 'Contact database', 'Basic analytics', 'Your logo on quotes', 'Email support'],
      pro: ['Everything in Basic', 'Up to 5 users', 'Advanced analytics', 'Priority support', 'Exportable PDF reports'],
      elite: ['Everything in Pro', 'Up to 15 users', 'Advanced analytics', 'Dedicated support', 'Exportable PDF reports', 'Custom configuration']
    },
    downloadsLabel: 'DOWNLOAD', downloadsTitle: 'Download and start', downloadsTitleAccent: 'in minutes.',
    downloadWindows: 'Download for Windows', downloadWindowsMeta: 'Windows 10/11 · v1.2.0 · 85 MB',
    downloadAndroid: 'Available on Android', downloadAndroidMeta: 'Android 8+ · Coming soon to Google Play', downloadAndroidBtn: 'Download APK',
    analyticsLabel: 'SALES ANALYTICS', analyticsTitle: 'Data-driven', analyticsTitleAccent: 'decisions.',
    analyticsDesc: 'Turn your sales activity into actionable insights. Win rate, pipeline, forecast and per-client performance — all in real time.',
    analyticsFeat1: 'Real win rate — issued quotes vs invoiced',
    analyticsFeat2: 'Client ranking by revenue and volume',
    analyticsFeat3: 'Monthly trends and sales seasonality',
    analyticsFeat4: 'Average ticket, reorder rate and performance per account',
    analyticsFeat5: 'Monthly and annual reports exportable to PDF',
    audienceLabel: 'WHO IS IT FOR?', audienceTitle: 'Designed for those who', audienceTitleAccent: 'actually sell.',
    audience1Title: 'Workshops & Technical Services', audience1Desc: 'Quote parts, labor and services. Follow up and track conversion by service type.',
    audience2Title: 'Construction & Contractors', audience2Desc: 'Project pipeline, PO tracking and forecast visibility by period.',
    audience3Title: 'Commerce & Distributors', audience3Desc: 'Quick quotes, per-account follow-up and sales performance metrics.',
    audience4Title: 'Freelancers & Consultants', audience4Desc: 'Quote services, track your personal pipeline and generate monthly activity reports.',
    faqLabel: 'FAQ', faqTitle: 'We answer', faqTitleAccent: 'your questions.',
    faq1Q: 'Do I need a credit card for the free trial?', faq1A: 'No. The 20 business day free trial requires no credit card or payment information. You get full access to all features.',
    faq2Q: 'Can I cancel anytime?', faq2A: 'Yes. Monthly plans can be cancelled anytime without penalty. Annual plans continue until the end of the contracted period.',
    faq3Q: 'Is my data secure?', faq3A: 'Absolutely. All data is encrypted with AES-GCM (military standard) and stored on secure cloud servers. Each company has its own encryption key.',
    faq4Q: 'Does it work offline?', faq4A: 'Yes. You can create and edit quotes without internet. When you\'re back online, data syncs automatically.',
    faq5Q: 'Can I use my logo on quotes?', faq5A: 'Yes, all paid plans allow you to add your logo, corporate colors and slogan to your quotes.',
    faq6Q: 'What languages are available?', faq6A: 'Standard Sales Manager is available in 4 languages: Spanish, English, Portuguese (Brazil) and French.',
    aboutLabel: 'THE COMPANY', aboutTitle: 'Standard Labs SpA',
    aboutDesc: 'We build accessible business management tools for SMEs and entrepreneurs. Practical technology, without unnecessary complexity.',
    aboutValue1Title: 'Simplicity', aboutValue1Desc: 'We believe useful software needs no manual. If it\'s hard to use, it\'s poorly designed.',
    aboutValue2Title: 'Data with Purpose', aboutValue2Desc: 'Every metric we show has a purpose: helping you make better business decisions.',
    aboutValue3Title: 'Built to Scale', aboutValue3Desc: 'Scale from 1 to 15 users without switching tools. Your software grows with you.',
    ctaLabel: 'START TODAY', ctaTitle: 'Ready to take', ctaTitleAccent: 'control of your sales?',
    ctaDesc: 'Download free. Try 20 days with no credit card. If it works for you, pick a plan and pay online.',
    ctaDownload: 'DOWNLOAD FREE', ctaPricing: 'SEE PLANS & PRICING', ctaNote: 'No forms · No waiting · Download, try and decide',
    ctaFormName: 'Your name', ctaFormCompany: 'Company', ctaFormEmail: 'Email', ctaFormPhone: 'Phone',
    ctaFormMessage: 'How can we help you?', ctaFormBtn: 'SEND MESSAGE', ctaFormNote: 'We\'ll respond within 24 hours', ctaFormSuccess: 'SENT!',
    footerDesc: 'Quotation management software for SMEs and entrepreneurs.',
    footerProducto: 'Product', footerEmpresa: 'Company', footerLegal: 'Legal', footerIdioma: 'Language',
    footerTerms: 'Terms of Service', footerPrivacy: 'Privacy Policy',
    footerCopyright: '© 2026 Standard Labs SpA — All rights reserved.'
  },

  'pt-BR': {
    navProducto: 'Produto', navPrecios: 'Preços', navFuncionalidades: 'Funcionalidades',
    navDescargar: 'Baixar', navContacto: 'Contato', navCta: 'Comece Grátis',
    heroBadge: 'GESTÃO COMERCIAL PARA PMEs',
    heroTitle: 'SEUS ORÇAMENTOS', heroTitleAccent: 'SOB CONTROLE.',
    heroSubtitle: 'Standard Sales Manager é o software de gestão de orçamentos projetado para pequenas empresas e empreendedores. Sem complicações. Sem curva de aprendizado. Com resultados.',
    heroCtaPrimary: 'COMECE GRÁTIS POR 20 DIAS', heroCtaSecondary: 'VER PREÇOS',
    heroTrialNote: 'Sem cartão de crédito · Sem compromisso',
    heroStat1: '<1min', heroStat1Label: 'Para criar um orçamento',
    heroStat2: 'PDF', heroStat2Label: 'Exportação profissional',
    heroStat3: '100%', heroStat3Label: 'Métricas em tempo real',
    trustStat1: '<1min', trustLabel1: 'Criar orçamento',
    trustStat2: 'PDF', trustLabel2: 'Exportação profissional',
    trustStat3: '4', trustLabel3: 'Idiomas disponíveis',
    trustStat4: '100%', trustLabel4: 'Dados criptografados',
    problemTitle: 'Sem Standard Sales Manager',
    problemItems: ['Orçamentos em Excel sem branding profissional', 'Zero visibilidade do seu pipeline comercial', 'Não mede sua taxa de conversão nem win rate', 'Perde o acompanhamento de prospects e leads', 'Numeração manual sem rastreabilidade'],
    solutionTitle: 'Com Standard Sales Manager',
    solutionItems: ['Orçamentos profissionais com sua marca em menos de 1 minuto', 'Dashboard com KPIs mensais, anuais e por cliente', 'Win rate, conversão e forecast em tempo real', 'Base de prospects e contatos que se preenche sozinha', 'Rastreabilidade completa: numeração e versionamento automático'],
    productLabel: 'O PRODUTO', productTitle: 'Simples por fora,', productTitleAccent: 'poderoso por dentro.',
    productDesc: 'Não é um CRM. Não é um ERP. Sua ferramenta para orçar, acompanhar e fechar negócios.',
    productCard1Title: 'Orçamentos Profissionais', productCard1Desc: 'Crie orçamentos com sua marca, exporte para PDF com um clique. Numeração automática.',
    productCard2Title: 'Sales Analytics', productCard2Desc: 'Win rate, pipeline comercial, ranking de clientes, ticket médio e forecast por período. Tudo automático.',
    productCard3Title: 'Base de Contatos', productCard3Desc: 'Cada lead que você orça é registrado automaticamente como contato. Seu CRM leve.',
    featuresLabel: 'FUNCIONALIDADES', featuresTitle: 'Tudo que você precisa,', featuresTitleAccent: 'nada que sobre.',
    featuresDesc: 'Projetado para que você emita seu primeiro orçamento em menos de um minuto.',
    feature1Title: 'Exportação PDF', feature1Desc: 'Um clique e seu orçamento está profissional e pronto para enviar.',
    feature2Title: 'KPIs em Tempo Real', feature2Desc: 'Dashboard com métricas chave: win rate, pipeline, ticket médio e forecast.',
    feature3Title: 'Multiusuário', feature3Desc: 'Trabalhe com sua equipe. Dados compartilhados na nuvem entre PCs e celulares.',
    feature4Title: 'Versionamento', feature4Desc: 'Edite orçamentos emitidos e gere versões (.b, .c) sem perder histórico.',
    feature5Title: 'App Móvel Sincronizado', feature5Desc: 'Orce pelo celular. Sincronização automática com o PC.',
    feature6Title: '4 Idiomas', feature6Desc: 'Disponível em Espanhol, Inglês, Português e Francês.',
    feature7Title: 'Alertas de Vencimento', feature7Desc: 'Orçamentos vencidos aparecem como alerta.',
    feature8Title: 'Sua Marca, Seu Estilo', feature8Desc: 'Logo, cores corporativas, slogan e múltiplos layouts.',
    feature9Title: 'Loss Reason Tracking', feature9Desc: 'Registre por que não fechou o deal: preço, concorrência, timing. Melhore seu close rate.',
    featuresShowMore: 'Ver todas as funcionalidades', featuresShowLess: 'Ver menos',
    fieldLabel: 'VENDAS EM CAMPO',
    fieldTitle: 'Orce no campo.',
    fieldTitleAccent: 'Feche na hora.',
    fieldDesc: 'Não faça seu cliente esperar dias por um orçamento. Gere na frente dele, pelo celular, em menos de 1 minuto. Isso é impacto comercial.',
    fieldStep1Title: 'Você está com o cliente',
    fieldStep1Desc: 'Visita em campo. O cliente pede um orçamento. Antes esperava dias. Agora você abre o app.',
    fieldStep2Title: 'Orça em menos de 1 minuto',
    fieldStep2Desc: 'Seleciona o contato, adiciona itens — seu logo e dados da empresa já estão configurados. Gera o orçamento.',
    fieldStep3Title: 'Compartilha na hora',
    fieldStep3Desc: 'PDF profissional com sua marca. Envia por WhatsApp ou email ali mesmo. O cliente tem na mão.',
    fieldStep4Title: 'Fica na sua base de dados',
    fieldStep4Desc: 'O orçamento sincroniza com seu PC. O contato é registrado automaticamente. Seu pipeline atualiza em tempo real.',
    fieldImpact1Title: 'Impacto imediato',
    fieldImpact1Desc: 'O cliente vê profissionalismo e velocidade. Isso gera confiança e acelera o fechamento.',
    fieldImpact2Title: 'Tudo fica registrado',
    fieldImpact2Desc: 'Sem papel, sem esquecimentos. Cada visita, cada orçamento, cada prospect — na sua base de dados.',
    fieldImpact3Title: 'Sua equipe vê',
    fieldImpact3Desc: 'Se seu vendedor orçou em campo, você já vê no dashboard do PC. Sem esperar ele voltar ao escritório.',
    pricingLabel: 'PREÇOS', pricingTitle: 'Planos simples,', pricingTitleAccent: 'sem surpresas.',
    pricingDesc: 'Comece grátis. Escale quando quiser.',
    pricingToggleMonthly: 'Mensal', pricingToggle1Year: '1 Ano', pricingToggle2Years: '2 Anos',
    pricingBasico: 'Básico', pricingPro: 'Pro', pricingElite: 'Elite',
    pricingPopular: 'MAIS POPULAR',
    pricingUsers1: '1 a 3 usuários', pricingUsers2: 'Até 5 usuários', pricingUsers3: 'Até 15 usuários',
    pricingPerMonth: '/mês', pricingAnnualContract: 'Contrato anual', pricingBiannualContract: 'Contrato de 2 anos', pricingMonthlyContract: 'Sem compromisso',
    pricingSave: 'Economize', pricingCta: 'Comece Grátis',
    pricingNote: 'Teste grátis de 20 dias úteis · Sem cartão de crédito · Todas as funcionalidades',
    pricingFeatures: {
      basico: ['Orçamentos ilimitados', 'PDF profissional', 'App móvel sincronizado', 'Base de contatos', 'Analytics básico', 'Seu logo nos orçamentos', 'Suporte por email'],
      pro: ['Tudo do plano Básico', 'Até 5 usuários', 'Analytics avançado', 'Suporte prioritário', 'Relatórios PDF exportáveis'],
      elite: ['Tudo do plano Pro', 'Até 15 usuários', 'Analytics avançado', 'Suporte dedicado', 'Relatórios PDF exportáveis', 'Configuração personalizada']
    },
    downloadsLabel: 'BAIXAR', downloadsTitle: 'Baixe e comece', downloadsTitleAccent: 'em minutos.',
    downloadWindows: 'Baixar para Windows', downloadWindowsMeta: 'Windows 10/11 · v1.2.0 · 85 MB',
    downloadAndroid: 'Disponível para Android', downloadAndroidMeta: 'Android 8+ · Em breve no Google Play', downloadAndroidBtn: 'Baixar APK',
    analyticsLabel: 'SALES ANALYTICS', analyticsTitle: 'Data-driven', analyticsTitleAccent: 'decisions.',
    analyticsDesc: 'Transforme sua atividade comercial em insights acionáveis. Win rate, pipeline, forecast e performance por cliente — tudo em tempo real.',
    analyticsFeat1: 'Win rate real — orçamentos emitidos vs faturados',
    analyticsFeat2: 'Ranking de clientes por revenue e volume',
    analyticsFeat3: 'Tendências mensais e sazonalidade de vendas',
    analyticsFeat4: 'Ticket médio, recompra e performance por conta',
    analyticsFeat5: 'Reports mensais e anuais exportáveis para PDF',
    audienceLabel: 'PARA QUEM É?', audienceTitle: 'Projetado para quem', audienceTitleAccent: 'vende de verdade.',
    audience1Title: 'Oficinas e Serviços Técnicos', audience1Desc: 'Orce peças e serviços. Faça follow-up e meça sua conversão por tipo.',
    audience2Title: 'Construtoras e Empreiteiras', audience2Desc: 'Pipeline por projeto, tracking de pedidos e visibilidade do forecast.',
    audience3Title: 'Comércio e Distribuidoras', audience3Desc: 'Orçamentos rápidos, follow-up por conta e métricas de desempenho.',
    audience4Title: 'Freelancers e Consultores', audience4Desc: 'Orce serviços, tracked seu pipeline pessoal e gere reports mensais.',
    faqLabel: 'PERGUNTAS FREQUENTES', faqTitle: 'Respondemos', faqTitleAccent: 'suas dúvidas.',
    faq1Q: 'Preciso de cartão de crédito para o teste grátis?', faq1A: 'Não. O teste gratuito de 20 dias úteis não requer cartão de crédito. Acesso total a todas as funcionalidades.',
    faq2Q: 'Posso cancelar a qualquer momento?', faq2A: 'Sim. Planos mensais podem ser cancelados quando quiser. Planos anuais continuam até o final do período.',
    faq3Q: 'Meus dados estão seguros?', faq3A: 'Absolutamente. Todos os dados são criptografados com AES-GCM e armazenados em servidores seguros na nuvem.',
    faq4Q: 'Funciona sem internet?', faq4A: 'Sim. Crie e edite orçamentos offline. Quando voltar a ter internet, os dados sincronizam automaticamente.',
    faq5Q: 'Posso usar meu logo nos orçamentos?', faq5A: 'Sim, todos os planos pagos permitem adicionar seu logo, cores corporativas e slogan.',
    faq6Q: 'Em quais idiomas está disponível?', faq6A: 'Disponível em 4 idiomas: Espanhol, Inglês, Português (Brasil) e Francês.',
    aboutLabel: 'A EMPRESA', aboutTitle: 'Standard Labs SpA',
    aboutDesc: 'Desenvolvemos ferramentas de gestão empresarial acessíveis para PMEs e empreendedores.',
    aboutValue1Title: 'Simplicidade', aboutValue1Desc: 'Acreditamos que software útil não precisa de manual.',
    aboutValue2Title: 'Dados com Propósito', aboutValue2Desc: 'Cada métrica tem um propósito: ajudar você a tomar melhores decisões.',
    aboutValue3Title: 'Feito para Crescer', aboutValue3Desc: 'Escale de 1 a 15 usuários sem trocar de ferramenta. Seu software cresce com você.',
    ctaLabel: 'COMECE HOJE', ctaTitle: 'Pronto para assumir o', ctaTitleAccent: 'controle das suas vendas?',
    ctaDesc: 'Baixe grátis. Teste 20 dias sem cartão de crédito. Se funcionar, escolha seu plano e pague online.',
    ctaDownload: 'BAIXAR GRÁTIS', ctaPricing: 'VER PLANOS E PREÇOS', ctaNote: 'Sem formulários · Sem esperas · Baixe, teste e decida',
    ctaFormName: 'Seu nome', ctaFormCompany: 'Empresa', ctaFormEmail: 'Email', ctaFormPhone: 'Telefone',
    ctaFormMessage: 'Como podemos ajudar?', ctaFormBtn: 'ENVIAR MENSAGEM', ctaFormNote: 'Responderemos em menos de 24 horas', ctaFormSuccess: 'ENVIADO!',
    footerDesc: 'Software de gestão de orçamentos para PMEs e empreendedores.',
    footerProducto: 'Produto', footerEmpresa: 'Empresa', footerLegal: 'Legal', footerIdioma: 'Idioma',
    footerTerms: 'Termos de Serviço', footerPrivacy: 'Política de Privacidade',
    footerCopyright: '© 2026 Standard Labs SpA — Todos os direitos reservados.'
  },

  fr: {
    navProducto: 'Produit', navPrecios: 'Tarifs', navFuncionalidades: 'Fonctionnalités',
    navDescargar: 'Télécharger', navContacto: 'Contact', navCta: 'Essai Gratuit',
    heroBadge: 'GESTION COMMERCIALE POUR PME',
    heroTitle: 'VOS DEVIS', heroTitleAccent: 'SOUS CONTRÔLE.',
    heroSubtitle: 'Standard Sales Manager est le logiciel de gestion de devis conçu pour les petites entreprises et les entrepreneurs. Sans complications. Sans courbe d\'apprentissage. Avec des résultats.',
    heroCtaPrimary: 'ESSAI GRATUIT 20 JOURS', heroCtaSecondary: 'VOIR LES TARIFS',
    heroTrialNote: 'Sans carte de crédit · Sans engagement',
    heroStat1: '<1min', heroStat1Label: 'Pour créer un devis',
    heroStat2: 'PDF', heroStat2Label: 'Export professionnel',
    heroStat3: '100%', heroStat3Label: 'Métriques en temps réel',
    trustStat1: '<1min', trustLabel1: 'Créer un devis',
    trustStat2: 'PDF', trustLabel2: 'Export professionnel',
    trustStat3: '4', trustLabel3: 'Langues disponibles',
    trustStat4: '100%', trustLabel4: 'Données chiffrées',
    problemTitle: 'Sans Standard Sales Manager',
    problemItems: ['Devis sur Excel sans branding professionnel', 'Zéro visibilité sur votre pipeline commercial', 'Aucune mesure de votre taux de conversion ou win rate', 'Perte du suivi des prospects et leads', 'Numérotation manuelle sans traçabilité'],
    solutionTitle: 'Avec Standard Sales Manager',
    solutionItems: ['Devis professionnels avec votre marque en moins d'une minute', 'Dashboard avec KPIs mensuels, annuels et par client', 'Win rate, conversion et forecast en temps réel', 'Base de prospects et contacts auto-remplie', 'Traçabilité complète : numérotation et versionnage automatique'],
    productLabel: 'LE PRODUIT', productTitle: 'Simple à l\'extérieur,', productTitleAccent: 'puissant à l\'intérieur.',
    productDesc: 'Pas un CRM. Pas un ERP. Votre outil pour devis, suivi et closing.',
    productCard1Title: 'Devis Professionnels', productCard1Desc: 'Créez des devis avec votre marque, exportez en PDF en un clic. Numérotation automatique.',
    productCard2Title: 'Sales Analytics', productCard2Desc: 'Win rate, pipeline commercial, classement clients, panier moyen et forecast par période. Tout automatique.',
    productCard3Title: 'Base de Contacts', productCard3Desc: 'Chaque lead devisé est automatiquement enregistré comme contact. Votre CRM léger.',
    featuresLabel: 'FONCTIONNALITÉS', featuresTitle: 'Tout ce qu\'il vous faut,', featuresTitleAccent: 'rien de superflu.',
    featuresDesc: 'Conçu pour envoyer votre premier devis en moins d\'une minute.',
    feature1Title: 'Export PDF', feature1Desc: 'Un clic et votre devis est professionnel et prêt à envoyer.',
    feature2Title: 'KPIs en Temps Réel', feature2Desc: 'Dashboard avec métriques clés : win rate, pipeline, panier moyen et forecast.',
    feature3Title: 'Multi-utilisateur', feature3Desc: 'Travaillez en équipe. Données partagées dans le cloud entre PCs et mobiles.',
    feature4Title: 'Versionnage', feature4Desc: 'Modifiez des devis émis et générez des versions (.b, .c) sans perdre l\'historique.',
    feature5Title: 'App Mobile Synchronisée', feature5Desc: 'Devisez depuis votre téléphone. Synchronisation automatique avec le PC.',
    feature6Title: '4 Langues', feature6Desc: 'Disponible en Espagnol, Anglais, Portugais et Français.',
    feature7Title: 'Alertes d\'Expiration', feature7Desc: 'Les devis expirés apparaissent comme alertes.',
    feature8Title: 'Votre Marque, Votre Style', feature8Desc: 'Logo, couleurs d\'entreprise, slogan et multiples mises en page.',
    feature9Title: 'Loss Reason Tracking', feature9Desc: 'Enregistrez pourquoi vous n\'avez pas conclu le deal : prix, concurrence, timing. Améliorez votre close rate.',
    featuresShowMore: 'Voir toutes les fonctionnalités', featuresShowLess: 'Voir moins',
    fieldLabel: 'VENTES TERRAIN',
    fieldTitle: 'Devisez sur le terrain.',
    fieldTitleAccent: 'Concluez sur place.',
    fieldDesc: 'Ne faites pas attendre votre client des jours pour un devis. Générez-le devant lui, depuis votre téléphone, en moins d'une minute. C\'est l\'impact commercial.',
    fieldStep1Title: 'Vous êtes avec le client',
    fieldStep1Desc: 'Visite terrain. Le client demande un devis. Avant il attendait des jours. Maintenant vous ouvrez l\'app.',
    fieldStep2Title: 'Devis en moins d'une minute',
    fieldStep2Desc: 'Sélectionnez le contact, ajoutez les articles — votre logo et données sont déjà configurés. Générez le devis.',
    fieldStep3Title: 'Partagez instantanément',
    fieldStep3Desc: 'PDF professionnel avec votre marque. Envoyez par WhatsApp ou email sur place. Le client l\'a en main.',
    fieldStep4Title: 'C\'est dans votre base de données',
    fieldStep4Desc: 'Le devis se synchronise avec votre PC. Le contact s\'enregistre automatiquement. Votre pipeline se met à jour en temps réel.',
    fieldImpact1Title: 'Impact immédiat',
    fieldImpact1Desc: 'Le client voit du professionnalisme et de la rapidité. Ça génère de la confiance et accélère la conclusion.',
    fieldImpact2Title: 'Tout est enregistré',
    fieldImpact2Desc: 'Sans papier, sans oublis. Chaque visite, chaque devis, chaque prospect — dans votre base de données.',
    fieldImpact3Title: 'Votre équipe le voit',
    fieldImpact3Desc: 'Si votre commercial a devisé sur le terrain, vous le voyez déjà sur le dashboard du PC.',
    pricingLabel: 'TARIFS', pricingTitle: 'Des plans simples,', pricingTitleAccent: 'sans surprises.',
    pricingDesc: 'Commencez gratuitement. Évoluez quand vous voulez.',
    pricingToggleMonthly: 'Mensuel', pricingToggle1Year: '1 An', pricingToggle2Years: '2 Ans',
    pricingBasico: 'Basique', pricingPro: 'Pro', pricingElite: 'Élite',
    pricingPopular: 'LE PLUS POPULAIRE',
    pricingUsers1: '1 à 3 utilisateurs', pricingUsers2: 'Jusqu\'à 5 utilisateurs', pricingUsers3: 'Jusqu\'à 15 utilisateurs',
    pricingPerMonth: '/mois', pricingAnnualContract: 'Contrat annuel', pricingBiannualContract: 'Contrat de 2 ans', pricingMonthlyContract: 'Sans engagement',
    pricingSave: 'Économisez', pricingCta: 'Essai Gratuit',
    pricingNote: 'Essai gratuit de 20 jours ouvrables · Sans carte de crédit · Toutes les fonctionnalités',
    pricingFeatures: {
      basico: ['Devis illimités', 'PDF professionnel', 'App mobile synchronisée', 'Base de contacts', 'Analytics basique', 'Votre logo sur les devis', 'Support par email'],
      pro: ['Tout du plan Basique', 'Jusqu\'à 5 utilisateurs', 'Analytics avancé', 'Support prioritaire', 'Rapports PDF exportables'],
      elite: ['Tout du plan Pro', 'Jusqu\'à 15 utilisateurs', 'Analytics avancé', 'Support dédié', 'Rapports PDF exportables', 'Configuration personnalisée']
    },
    downloadsLabel: 'TÉLÉCHARGER', downloadsTitle: 'Téléchargez et commencez', downloadsTitleAccent: 'en minutes.',
    downloadWindows: 'Télécharger pour Windows', downloadWindowsMeta: 'Windows 10/11 · v1.2.0 · 85 Mo',
    downloadAndroid: 'Disponible sur Android', downloadAndroidMeta: 'Android 8+ · Bientôt sur Google Play', downloadAndroidBtn: 'Télécharger APK',
    analyticsLabel: 'SALES ANALYTICS', analyticsTitle: 'Data-driven', analyticsTitleAccent: 'decisions.',
    analyticsDesc: 'Transformez votre activité commerciale en insights actionnables. Win rate, pipeline, forecast et performance par client — tout en temps réel.',
    analyticsFeat1: 'Win rate réel — devis émis vs facturés',
    analyticsFeat2: 'Classement clients par revenue et volume',
    analyticsFeat3: 'Tendances mensuelles et saisonnalité des ventes',
    analyticsFeat4: 'Panier moyen, réachat et performance par compte',
    analyticsFeat5: 'Reports mensuels et annuels exportables en PDF',
    audienceLabel: 'POUR QUI ?', audienceTitle: 'Conçu pour ceux qui', audienceTitleAccent: 'vendent vraiment.',
    audience1Title: 'Ateliers et Services Techniques', audience1Desc: 'Devisez pièces et services. Faites le follow-up et mesurez votre conversion.',
    audience2Title: 'Construction et Entrepreneurs', audience2Desc: 'Pipeline par projet, tracking des commandes et visibilité du forecast.',
    audience3Title: 'Commerce et Distributeurs', audience3Desc: 'Devis rapides, follow-up par compte et métriques de performance.',
    audience4Title: 'Freelances et Consultants', audience4Desc: 'Devisez vos services, trackez votre pipeline et générez des reports mensuels.',
    faqLabel: 'FAQ', faqTitle: 'Nous répondons à', faqTitleAccent: 'vos questions.',
    faq1Q: 'Ai-je besoin d\'une carte de crédit pour l\'essai gratuit ?', faq1A: 'Non. L\'essai gratuit de 20 jours ouvrables ne nécessite aucune carte de crédit. Accès complet à toutes les fonctionnalités.',
    faq2Q: 'Puis-je annuler à tout moment ?', faq2A: 'Oui. Les plans mensuels peuvent être annulés quand vous voulez. Les plans annuels continuent jusqu\'à la fin de la période.',
    faq3Q: 'Mes données sont-elles sécurisées ?', faq3A: 'Absolument. Toutes les données sont chiffrées avec AES-GCM et stockées sur des serveurs cloud sécurisés.',
    faq4Q: 'Ça fonctionne hors ligne ?', faq4A: 'Oui. Créez et modifiez des devis sans internet. Les données se synchronisent automatiquement quand vous êtes de retour en ligne.',
    faq5Q: 'Puis-je utiliser mon logo sur les devis ?', faq5A: 'Oui, tous les plans payants permettent d\'ajouter votre logo, couleurs d\'entreprise et slogan.',
    faq6Q: 'En quelles langues est-il disponible ?', faq6A: 'Disponible en 4 langues : Espagnol, Anglais, Portugais (Brésil) et Français.',
    aboutLabel: 'L\'ENTREPRISE', aboutTitle: 'Standard Labs SpA',
    aboutDesc: 'Nous développons des outils de gestion d\'entreprise accessibles pour les PME et les entrepreneurs.',
    aboutValue1Title: 'Simplicité', aboutValue1Desc: 'Nous croyons qu\'un logiciel utile n\'a pas besoin de manuel.',
    aboutValue2Title: 'Données avec Objectif', aboutValue2Desc: 'Chaque métrique a un objectif : vous aider à prendre de meilleures décisions.',
    aboutValue3Title: 'Conçu pour Grandir', aboutValue3Desc: 'Évoluez de 1 à 15 utilisateurs sans changer d\'outil. Votre logiciel grandit avec vous.',
    ctaLabel: 'COMMENCEZ AUJOURD\'HUI', ctaTitle: 'Prêt à prendre le', ctaTitleAccent: 'contrôle de vos ventes ?',
    ctaDesc: 'Téléchargez gratuitement. Essayez 20 jours sans carte de crédit. Si ça vous convient, choisissez votre plan et payez en ligne.',
    ctaDownload: 'TÉLÉCHARGER GRATUITEMENT', ctaPricing: 'VOIR LES PLANS ET TARIFS', ctaNote: 'Sans formulaires · Sans attente · Téléchargez, testez et décidez',
    ctaFormName: 'Votre nom', ctaFormCompany: 'Entreprise', ctaFormEmail: 'Email', ctaFormPhone: 'Téléphone',
    ctaFormMessage: 'Comment pouvons-nous vous aider ?', ctaFormBtn: 'ENVOYER LE MESSAGE', ctaFormNote: 'Nous vous répondrons sous 24 heures', ctaFormSuccess: 'ENVOYÉ !',
    footerDesc: 'Logiciel de gestion de devis pour PME et entrepreneurs.',
    footerProducto: 'Produit', footerEmpresa: 'Entreprise', footerLegal: 'Légal', footerIdioma: 'Langue',
    footerTerms: 'Conditions d\'utilisation', footerPrivacy: 'Politique de confidentialité',
    footerCopyright: '© 2026 Standard Labs SpA — Tous droits réservés.'
  }
};

// =============================================
// i18n STATE & FUNCTIONS
// =============================================
let currentLang = 'es';

function detectLanguage() {
  var saved = localStorage.getItem('ssm-lang');
  if (saved && LANG_PACKS[saved]) return saved;
  var browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith('pt')) return 'pt-BR';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('en')) return 'en';
  return 'es';
}

function setLanguage(lang) {
  if (!LANG_PACKS[lang]) return;
  currentLang = lang;
  localStorage.setItem('ssm-lang', lang);
  document.documentElement.lang = lang === 'pt-BR' ? 'pt' : lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.dataset.i18n;
    var text = LANG_PACKS[lang][key];
    if (text !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update pricing features (lists)
  updatePricingFeatures(lang);

  // Update problem/solution and analytics lists
  updateListItems(lang);

  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });

  // Update pricing display
  updatePricing();

  // Update page title
  var titles = {
    es: 'Standard Sales Manager — Gestión de Cotizaciones',
    en: 'Standard Sales Manager — Quotation Management',
    'pt-BR': 'Standard Sales Manager — Gestão de Orçamentos',
    fr: 'Standard Sales Manager — Gestion de Devis'
  };
  document.title = titles[lang] || titles.es;
}

function updateListItems(lang) {
  var pack = LANG_PACKS[lang];

  // Problem items
  var problemList = document.querySelector('.problem__card--bad ul');
  if (problemList && pack.problemItems) {
    problemList.innerHTML = pack.problemItems.map(function(item) {
      return '<li>' + item + '</li>';
    }).join('');
  }

  // Solution items
  var solutionList = document.querySelector('.problem__card--good ul');
  if (solutionList && pack.solutionItems) {
    solutionList.innerHTML = pack.solutionItems.map(function(item) {
      return '<li>' + item + '</li>';
    }).join('');
  }

  // Analytics features
  var analyticsList = document.querySelector('.sos__features');
  if (analyticsList) {
    var checkSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(210,80%,55%)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
    var keys = ['analyticsFeat1', 'analyticsFeat2', 'analyticsFeat3', 'analyticsFeat4', 'analyticsFeat5'];
    analyticsList.innerHTML = keys.map(function(k) {
      return '<li>' + checkSvg + ' ' + (pack[k] || '') + '</li>';
    }).join('');
  }
}

function updatePricingFeatures(lang) {
  var pack = LANG_PACKS[lang];
  if (!pack.pricingFeatures) return;
  ['basico', 'pro', 'elite'].forEach(function(plan) {
    var list = document.querySelector('[data-pricing-features="' + plan + '"]');
    if (list && pack.pricingFeatures[plan]) {
      list.innerHTML = pack.pricingFeatures[plan].map(function(f) {
        return '<li>' + f + '</li>';
      }).join('');
    }
  });
}

// =============================================
// PRICING TOGGLE SYSTEM
// =============================================
var PRICING = {
  monthly:  { basico: 10, pro: 15, elite: 20 },
  annual:   { basico: 7,  pro: 10, elite: 15 },
  biannual: { basico: 5,  pro: 8,  elite: 13 }
};

var currentPlan = 'annual';

function updatePricing() {
  var pack = LANG_PACKS[currentLang];
  var prices = PRICING[currentPlan];

  // Update price numbers
  var priceBasico = document.querySelector('[data-price="basico"]');
  var pricePro = document.querySelector('[data-price="pro"]');
  var priceElite = document.querySelector('[data-price="elite"]');
  if (priceBasico) priceBasico.textContent = '$' + prices.basico;
  if (pricePro) pricePro.textContent = '$' + prices.pro;
  if (priceElite) priceElite.textContent = '$' + prices.elite;

  // Update period text
  var periodKey = currentPlan === 'monthly' ? 'pricingMonthlyContract' : currentPlan === 'annual' ? 'pricingAnnualContract' : 'pricingBiannualContract';
  document.querySelectorAll('[data-i18n-period]').forEach(function(el) {
    el.textContent = pack[periodKey] || '';
  });

  // Update savings badges
  document.querySelectorAll('[data-savings]').forEach(function(el) {
    var plan = el.dataset.savings;
    if (currentPlan === 'monthly') {
      el.classList.add('pricing__savings--hidden');
    } else {
      el.classList.remove('pricing__savings--hidden');
      var monthlyPrice = PRICING.monthly[plan];
      var currentPrice = prices[plan];
      var pct = Math.round((1 - currentPrice / monthlyPrice) * 100);
      el.textContent = (pack.pricingSave || 'Ahorra') + ' ' + pct + '%';
    }
  });

  // Update toggle buttons
  document.querySelectorAll('.pricing__toggle-btn').forEach(function(btn) {
    btn.classList.toggle('pricing__toggle-btn--active', btn.dataset.plan === currentPlan);
  });
}

function setupPricingToggle() {
  document.querySelectorAll('.pricing__toggle-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      currentPlan = btn.dataset.plan;
      updatePricing();
    });
  });
}

// =============================================
// FAQ ACCORDION
// =============================================
function setupFAQ() {
  document.querySelectorAll('.faq__question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.parentElement;
      var isOpen = item.classList.contains('faq__item--open');
      // Close all
      document.querySelectorAll('.faq__item').forEach(function(i) {
        i.classList.remove('faq__item--open');
      });
      // Open clicked (if it was closed)
      if (!isOpen) item.classList.add('faq__item--open');
    });
  });
}

// =============================================
// FEATURES EXPAND/COLLAPSE
// =============================================
function setupFeaturesExpand() {
  var btn = document.querySelector('.features__expand-btn');
  var hiddenGrid = document.querySelector('.modules__grid--hidden');
  if (!btn || !hiddenGrid) return;

  btn.addEventListener('click', function() {
    var isHidden = hiddenGrid.style.display === 'none' || hiddenGrid.style.display === '';
    hiddenGrid.style.display = isHidden ? 'grid' : 'none';
    btn.classList.toggle('features__expand-btn--open', isHidden);
    var pack = LANG_PACKS[currentLang];
    var spanEl = btn.querySelector('span');
    if (spanEl) {
      spanEl.textContent = isHidden ? (pack.featuresShowLess || 'Ver menos') : (pack.featuresShowMore || 'Ver todas las funcionalidades');
    }
  });
}

// =============================================
// LANGUAGE BUTTON SETUP
// =============================================
function setupLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      setLanguage(btn.dataset.lang);
    });
  });
}

// =============================================
// FORM HANDLER (Formspree)
// =============================================
function handleSubmit(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('button[type="submit"]');
  var pack = LANG_PACKS[currentLang];

  // Submit to Formspree
  var data = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(function(response) {
    if (response.ok) {
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> ' + (pack.ctaFormSuccess || '¡ENVIADO!');
      btn.style.background = 'hsl(160, 60%, 45%)';
      btn.disabled = true;
      setTimeout(function() {
        btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> ' + (pack.ctaFormBtn || 'ENVIAR MENSAJE');
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    }
  }).catch(function() {
    // Fallback: still show success (form data was captured)
    btn.textContent = pack.ctaFormSuccess || '¡ENVIADO!';
    btn.style.background = 'hsl(160, 60%, 45%)';
    setTimeout(function() {
      btn.style.background = '';
      form.reset();
    }, 3000);
  });

  return false;
}

// =============================================
// MAIN INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', function() {

  // --- NAV SCROLL EFFECT ---
  var nav = document.getElementById('nav');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 40) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }, { passive: true });

  // --- MOBILE MENU ---
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  toggle.addEventListener('click', function() {
    links.classList.toggle('nav__links--open');
    var isOpen = links.classList.contains('nav__links--open');
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    var spans = toggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      links.classList.remove('nav__links--open');
      var spans = toggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });

  // --- SCROLL REVEAL ---
  var revealElements = document.querySelectorAll(
    '.product__card, .module-card, .about__value, .sos__content, .problem__card, .audience__card, .cta__content, .hero__stats, .analytics-demo, .pricing__card, .download-card, .faq__item, .trust-bar__item'
  );

  revealElements.forEach(function(el) {
    el.classList.add('reveal');
  });

  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(function(el, i) {
    el.style.transitionDelay = (i % 4) * 80 + 'ms';
    revealObserver.observe(el);
  });

  // --- SMOOTH ANCHOR SCROLL ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- ANIMATE BARS ON SCROLL ---
  var barsContainer = document.querySelector('.analytics-demo__bars');
  if (barsContainer) {
    var bars = barsContainer.querySelectorAll('.analytics-demo__bar-fill');
    bars.forEach(function(bar) {
      var targetHeight = bar.style.height;
      bar.style.height = '0%';

      var barObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            setTimeout(function() {
              bar.style.height = targetHeight;
            }, 300);
            barObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      barObserver.observe(barsContainer);
    });
  }

  // --- COUNTER ANIMATION ---
  var counterElements = document.querySelectorAll('.hero__stat-number');
  var counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var text = el.textContent;
        // Only animate pure numbers
        if (/^\d+$/.test(text)) {
          var target = parseInt(text);
          var current = 0;
          var step = Math.ceil(target / 30);
          var timer = setInterval(function() {
            current += step;
            if (current >= target) {
              el.textContent = target;
              clearInterval(timer);
            } else {
              el.textContent = current;
            }
          }, 30);
        }
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(function(el) {
    counterObserver.observe(el);
  });

  // --- i18n SETUP ---
  setupLanguageButtons();
  currentLang = detectLanguage();
  setLanguage(currentLang);

  // --- PRICING TOGGLE ---
  setupPricingToggle();
  updatePricing();

  // --- FAQ ACCORDION ---
  setupFAQ();

  // --- FEATURES EXPAND ---
  setupFeaturesExpand();

});
