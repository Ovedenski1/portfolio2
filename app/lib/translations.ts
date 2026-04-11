export type Language = "en" | "bg" | "de" | "ja";

export const languageOrder: Language[] = ["en", "bg", "de", "ja"];

export const languageButtonLabels: Record<Language, string> = {
  en: "BG",
  bg: "DE",
  de: "日本語",
  ja: "EN",
};

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
    },
    hero: {
      firstName: "Lyuboslav",
      lastName: "Ovedenski",
      roleLeft: "Project Manager",
      roleRight: "Web Development",
      roleJoiner: "&",
      description:
        "I manage projects by balancing scope, time, and resources to consistently deliver stellar quality and performance. I specialize in translation and localization, ensuring that projects meet linguistic and cultural standards while maintaining efficiency and accuracy.",
      sayHello: "👋 Say hello!",
      downloadCv: "⬇ Download CV",
    },
    skillsSection: {
      title: "Skills",
      languages: "Languages",
      itSkills: "IT Skills",
      catTools: "CAT Tools",
      skills: "Skills",
      bulgarian: "Bulgarian",
      english: "English",
      german: "German",
      native: "Native",
      professional: "Professional",
      basic: "Basic",
      skillItems: [
        "Managing Teams",
        "Time Management",
        "Interacting with Multiple Stakeholders",
        "Multitasking",
        "Budgeting",
        "Risk Forecasting",
        "Excellent Customer Service",
        "Problem-solving",
        "Strong Organization",
        "High Degree of Independence and Ownership",
      ],
    },
    experienceSection: {
      title: "Work History",
      jobs: [
        {
          title: "Localization Project Manager",
          company: "BeConnected Bulgaria",
          period: "10.2023 – 09.2025",
          bullets: [
            "Oversaw localization projects throughout the entire project lifecycle.",
            "Led teams of up to 44 freelance linguists across multiple languages.",
            "Prepared projects using memoQ, SDL Trados, Memsource, XTM, Wordbee, Smartcat, Smartling, Across, GlobalLink, and GenTrans.",
            "Managed project budgets and monitored project progress.",
            "Maintained communication with clients and internal stakeholders.",
            "Negotiated budgets and deadlines when project requirements changed.",
            "Collected final deliverables, processed client feedback, and coordinated revisions.",
            "Participated in the transition from Plunet to a custom-built TMS, collaborating with external developers to implement a solution tailored to company needs.",
            "Managed 30–40 incoming projects daily, ensuring timely assignment, execution, and delivery under tight deadlines.",
          ],
        },
        {
          title: "Customer Support",
          company: "Sitel - Just Eat Project UK",
          period: "03.2021 – 09.2022",
          bullets: [
            "Assisted customers with order issues, payments, and delivery inquiries via chat and email using Zendesk.",
            "Resolved customer complaints and provided effective solutions to ensure high customer satisfaction.",
            "Documented customer interactions and updated support tickets according to company procedures.",
          ],
        },
        {
          title: "Receptionist",
          company: "International House of Journalists Hotel",
          period: "05.2019 – 09.2019",
          bullets: [
            "Welcomed guests, handled check-ins and check-outs, and provided general assistance.",
            "Answered phone calls and coordinated reservations and guest requests.",
          ],
        },
        {
          title: "Machine Operator",
          company: "MD Electronic",
          period: "05.2017 – 09.2017",
          location: "Czech Republic",
          bullets: [
            "Worked on the production of automotive cable components.",
            "Followed production procedures and quality requirements on the line.",
          ],
        },
        {
          title: "Sales Assistant",
          company: "Sunny Kid",
          period: "06.2015 – 08.2015",
          bullets: [
            "Assisted customers in choosing toys and bicycles.",
            "Handled product arrangement and supported day-to-day store tasks.",
          ],
        },
      ],
    },
    educationSection: {
      title: "Education",
      items: [
        {
          title: "IT Project Management Fundamentals",
          institution: "SoftUni",
          period: "2025",
          image: "/education/softuni.png",
        },
        {
          title: "Master's Degree – Mobile and Web Technologies",
          institution: "University of Economics Varna",
          period: "2022 – 2023",
          image: "/education/economics.png",
        },
        {
          title: "Bachelor's Degree – Tourism",
          institution: "University of Economics Varna",
          period: "2016 – 2022",
          image: "/education/economics.png",
        },
        {
          title: "Catering",
          institution: "PGRTO – Pleven",
          period: "2011 – 2016",
          image: "/education/pgrto.png",
        },
      ],
    },
    projectsSection: {
      title: "Projects",
      visit: "Visit website",
      downloadApk: "Download APK",
      github: "GitHub",
      private: "Private",
      items: {
        rithy:
          "A mobile app concept designed as a writing helper with a simple, focused user experience.",
        desisKitchen:
          "A recipe app built for my mom, made to organize and present homemade dishes in a clean way.",
        sheepGame:
          "A small game project about catching sheep, created as a fun experimental idea.",
        diceGame:
          "A demo dice game inspired by anime-style powers and simple browser gameplay.",
        pokemonGame:
          "A Bulgaria-inspired monster adventure project that is currently private.",
        tms:
          "A translation management system concept for organizing projects and workflows, currently private.",
        profilms:
          "An alternative website concept for Pro Films, created as a practice and redesign project.",
        poGenerator:
          "A simple tool for generating PO-style project files and structured translation content.",
        kizuna:
          "A Japanese learning platform concept focused on courses and accessible study content.",
        pokko:
          "A gaming website project with a modern interface and content-focused design.",
      },
    },
    contactSection: {
      title: "Contact",
      formTitle: "Get in touch",
      reachOut: "Reach out",
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      send: "Send message",
      sending: "Sending...",
      successMessage: "Your message was sent successfully.",
      errorMessage: "Something went wrong. Please try again.",
    },
  },

  bg: {
    nav: {
      projects: "Проекти",
      skills: "Умения",
      experience: "Опит",
    },
    hero: {
      firstName: "Любослав",
      lastName: "Оведенски",
      roleLeft: "Мениджър на проекти",
      roleRight: "Уеб разработка",
      roleJoiner: "и",
      description:
        "Управлявам проекти, като балансирам обхват, време и ресурси, за да постигам постоянно високо качество и отлични резултати. Специализирам в превод и локализация, като гарантирам, че проектите отговарят на езиковите и културните стандарти, при запазване на ефективност и точност.",
      sayHello: "👋 Свържи се с мен!",
      downloadCv: "⬇ Изтегли CV",
    },
    skillsSection: {
      title: "Умения",
      languages: "Езици",
      itSkills: "ИТ умения",
      catTools: "CAT инструменти",
      skills: "Умения",
      bulgarian: "Български",
      english: "Английски",
      german: "Немски",
      native: "Роден",
      professional: "Професионално",
      basic: "Базово",
      skillItems: [
        "Управление на екипи",
        "Управление на времето",
        "Работа с множество заинтересовани страни",
        "Многозадачност",
        "Бюджетиране",
        "Прогнозиране на рискове",
        "Отлично обслужване на клиенти",
        "Решаване на проблеми",
        "Добра организираност",
        "Висока степен на самостоятелност и отговорност",
      ],
    },
    experienceSection: {
      title: "Професионален опит",
      jobs: [
        {
          title: "Локализационен проектен мениджър",
          company: "BeConnected Bulgaria",
          period: "10.2023 – 09.2025",
          bullets: [
            "Управлявах локализационни проекти през целия им жизнен цикъл.",
            "Ръководех екипи от до 44 фрийланс лингвисти на различни езици.",
            "Подготвях проекти в memoQ, SDL Trados, Memsource, XTM, Wordbee, Smartcat, Smartling, Across, GlobalLink и GenTrans.",
            "Управлявах бюджети по проекти и проследявах напредъка им.",
            "Поддържах комуникация с клиенти и вътрешни заинтересовани страни.",
            "Договарях бюджети и срокове при промяна в изискванията по проектите.",
            "Събирах финалните файлове, обработвах клиентска обратна връзка и координирах корекции.",
            "Участвах в преминаването от Plunet към персонализирана TMS система, като работех с външни разработчици по внедряването на решение според нуждите на компанията.",
            "Управлявах 30–40 входящи проекта дневно, осигурявайки навременно разпределение, изпълнение и предаване при кратки срокове.",
          ],
        },
        {
          title: "Клиентска поддръжка",
          company: "Sitel - Just Eat Project UK",
          period: "03.2021 – 09.2022",
          bullets: [
            "Подпомагах клиенти при проблеми с поръчки, плащания и доставки чрез чат и имейл, използвайки Zendesk.",
            "Разрешавах клиентски оплаквания и предлагах ефективни решения за висока удовлетвореност.",
            "Документирах клиентските взаимодействия и актуализирах тикети според вътрешните процедури.",
          ],
        },
        {
          title: "Рецепционист",
          company: "International House of Journalists Hotel",
          period: "05.2019 – 09.2019",
          bullets: [
            "Посрещах гости, извършвах настаняване и освобождаване и оказвах съдействие при нужда.",
            "Отговарях на телефонни обаждания и координирах резервации и клиентски запитвания.",
          ],
        },
        {
          title: "Машинен оператор",
          company: "MD Electronic",
          period: "05.2017 – 09.2017",
          location: "Чехия",
          bullets: [
            "Участвах в производството на кабелни компоненти за автомобили.",
            "Спазвах производствените процедури и изискванията за качество на линията.",
          ],
        },
        {
          title: "Продавач-консултант",
          company: "Sunny Kid",
          period: "06.2015 – 08.2015",
          bullets: [
            "Помагах на клиенти при избора на играчки и велосипеди.",
            "Подреждах стоката и подпомагах ежедневните задачи в магазина.",
          ],
        },
      ],
    },
    educationSection: {
      title: "Образование",
      items: [
        {
          title: "Основи на ИТ проектния мениджмънт",
          institution: "SoftUni",
          period: "2025",
          image: "/education/softuni.png",
        },
        {
          title: "Магистър – Мобилни и уеб технологии",
          institution: "Икономически университет – Варна",
          period: "2022 – 2023",
          image: "/education/economics.png",
        },
        {
          title: "Бакалавър – Туризъм",
          institution: "Икономически университет – Варна",
          period: "2016 – 2022",
          image: "/education/economics.png",
        },
        {
          title: "Кетъринг",
          institution: "ПГРТО – Плевен",
          period: "2011 – 2016",
          image: "/education/pgrto.png",
        },
      ],
    },
    projectsSection: {
      title: "Проекти",
      visit: "Към сайта",
      downloadApk: "Изтегли APK",
      github: "GitHub",
      private: "Частен",
      items: {
        rithy:
          "Концепция за мобилно приложение, създадено като помощник за писане с изчистено и фокусирано изживяване.",
        desisKitchen:
          "Приложение за рецепти, създадено за майка ми, с цел подредено и приятно представяне на домашни ястия.",
        sheepGame:
          "Малък игрови проект за ловене на овце, създаден като забавна експериментална идея.",
        diceGame:
          "Демо игра със зарове, вдъхновена от аниме стил и опростен браузърен геймплей.",
        pokemonGame:
          "Приключенски проект, вдъхновен от България, който в момента е частен.",
        tms:
          "Концепция за система за управление на преводачески проекти и работни процеси, която в момента е частна.",
        profilms:
          "Алтернативна концепция за уебсайт на Pro Films, създадена като упражнение и дизайнерски експеримент.",
        poGenerator:
          "Лесен инструмент за генериране на PO файлове и структурирано преводаческо съдържание.",
        kizuna:
          "Концепция за платформа за изучаване на японски език с курсове и достъпно учебно съдържание.",
        pokko:
          "Проект за уебсайт за игри с модерен интерфейс и дизайн, насочен към съдържанието.",
      },
    },
    contactSection: {
      title: "Контакт",
      formTitle: "Свържи се с мен",
      reachOut: "Пиши ми",
      name: "Име",
      email: "Имейл",
      phone: "Телефон",
      message: "Съобщение",
      namePlaceholder: "Вашето име",
      emailPlaceholder: "Вашият имейл",
      messagePlaceholder: "Вашето съобщение",
      send: "Изпрати съобщение",
      sending: "Изпращане...",
      successMessage: "Съобщението беше изпратено успешно.",
      errorMessage: "Възникна проблем. Моля, опитайте отново.",
    },
  },

  de: {
    nav: {
      projects: "Projekte",
      skills: "Skills",
      experience: "Erfahrung",
    },
    hero: {
      firstName: "Lyuboslav",
      lastName: "Ovedenski",
      roleLeft: "Projektmanager",
      roleRight: "Webentwicklung",
      roleJoiner: "und",
      description:
        "Ich leite Projekte, indem ich Umfang, Zeit und Ressourcen ausbalanciere, um konstant hohe Qualität und starke Ergebnisse zu liefern. Ich bin auf Übersetzung und Lokalisierung spezialisiert und stelle sicher, dass Projekte sprachlichen und kulturellen Standards entsprechen, bei gleichbleibender Effizienz und Genauigkeit.",
      sayHello: "👋 Sag Hallo!",
      downloadCv: "⬇ Lebenslauf herunterladen",
    },
    skillsSection: {
      title: "Skills",
      languages: "Sprachen",
      itSkills: "IT-Kenntnisse",
      catTools: "CAT-Tools",
      skills: "Kompetenzen",
      bulgarian: "Bulgarisch",
      english: "Englisch",
      german: "Deutsch",
      native: "Muttersprache",
      professional: "Professionell",
      basic: "Grundkenntnisse",
      skillItems: [
        "Teamführung",
        "Zeitmanagement",
        "Zusammenarbeit mit mehreren Stakeholdern",
        "Multitasking",
        "Budgetplanung",
        "Risikoprognose",
        "Exzellenter Kundenservice",
        "Problemlösung",
        "Starke Organisation",
        "Hohes Maß an Selbstständigkeit und Verantwortungsbewusstsein",
      ],
    },
    experienceSection: {
      title: "Berufserfahrung",
      jobs: [
        {
          title: "Lokalisierungs-Projektmanager",
          company: "BeConnected Bulgaria",
          period: "10.2023 – 09.2025",
          bullets: [
            "Verantwortete Lokalisierungsprojekte über den gesamten Projektlebenszyklus.",
            "Leitete Teams von bis zu 44 freiberuflichen Linguisten in mehreren Sprachen.",
            "Bereitete Projekte in memoQ, SDL Trados, Memsource, XTM, Wordbee, Smartcat, Smartling, Across, GlobalLink und GenTrans vor.",
            "Verwaltete Projektbudgets und überwachte den Projektfortschritt.",
            "Pflegte die Kommunikation mit Kunden und internen Stakeholdern.",
            "Verhandelte Budgets und Fristen, wenn sich Projektanforderungen änderten.",
            "Sammelte Endlieferungen, verarbeitete Kundenfeedback und koordinierte Überarbeitungen.",
            "War am Übergang von Plunet zu einem maßgeschneiderten TMS beteiligt und arbeitete mit externen Entwicklern an einer auf die Unternehmensbedürfnisse zugeschnittenen Lösung.",
            "Bearbeitete täglich 30–40 eingehende Projekte und stellte eine termingerechte Zuweisung, Ausführung und Lieferung unter engen Deadlines sicher.",
          ],
        },
        {
          title: "Kundensupport",
          company: "Sitel - Just Eat Project UK",
          period: "03.2021 – 09.2022",
          bullets: [
            "Unterstützte Kunden bei Bestellproblemen, Zahlungen und Lieferanfragen per Chat und E-Mail mit Zendesk.",
            "Bearbeitete Kundenbeschwerden und bot wirksame Lösungen zur Sicherstellung hoher Kundenzufriedenheit.",
            "Dokumentierte Kundeninteraktionen und aktualisierte Support-Tickets gemäß den internen Verfahren.",
          ],
        },
        {
          title: "Rezeptionist",
          company: "International House of Journalists Hotel",
          period: "05.2019 – 09.2019",
          bullets: [
            "Empfing Gäste, führte Check-ins und Check-outs durch und half bei allgemeinen Anliegen.",
            "Beantwortete Anrufe und koordinierte Reservierungen sowie Gästewünsche.",
          ],
        },
        {
          title: "Maschinenbediener",
          company: "MD Electronic",
          period: "05.2017 – 09.2017",
          location: "Tschechien",
          bullets: [
            "Arbeitete an der Herstellung von Kabelkomponenten für die Automobilindustrie.",
            "Befolgte Produktionsabläufe und Qualitätsanforderungen an der Linie.",
          ],
        },
        {
          title: "Verkaufsberater",
          company: "Sunny Kid",
          period: "06.2015 – 08.2015",
          bullets: [
            "Unterstützte Kunden bei der Auswahl von Spielzeug und Fahrrädern.",
            "War für Warenordnung und tägliche Abläufe im Geschäft mitverantwortlich.",
          ],
        },
      ],
    },
    educationSection: {
      title: "Ausbildung",
      items: [
        {
          title: "Grundlagen des IT-Projektmanagements",
          institution: "SoftUni",
          period: "2025",
          image: "/education/softuni.png",
        },
        {
          title: "Master – Mobile und Webtechnologien",
          institution: "Wirtschaftsuniversität Varna",
          period: "2022 – 2023",
          image: "/education/economics.png",
        },
        {
          title: "Bachelor – Tourismus",
          institution: "Wirtschaftsuniversität Varna",
          period: "2016 – 2022",
          image: "/education/economics.png",
        },
        {
          title: "Catering",
          institution: "PGRTO – Pleven",
          period: "2011 – 2016",
          image: "/education/pgrto.png",
        },
      ],
    },
    projectsSection: {
      title: "Projekte",
      visit: "Website besuchen",
      downloadApk: "APK herunterladen",
      github: "GitHub",
      private: "Privat",
      items: {
        rithy:
          "Ein mobiles App-Konzept, das als Schreibassistent mit einer einfachen und fokussierten Nutzererfahrung entworfen wurde.",
        desisKitchen:
          "Eine Rezept-App für meine Mutter, erstellt zur übersichtlichen und schönen Darstellung hausgemachter Gerichte.",
        sheepGame:
          "Ein kleines Spielprojekt über das Einfangen von Schafen, entstanden als spielerische Experimentieridee.",
        diceGame:
          "Ein Demo-Würfelspiel, inspiriert von Anime-Elementen und einfachem Browser-Gameplay.",
        pokemonGame:
          "Ein von Bulgarien inspiriertes Abenteuerprojekt, das derzeit privat ist.",
        tms:
          "Ein Konzept für ein Translation-Management-System zur Organisation von Projekten und Workflows, derzeit privat.",
        profilms:
          "Ein alternatives Website-Konzept für Pro Films, erstellt als Übung und Redesign-Projekt.",
        poGenerator:
          "Ein einfaches Tool zur Erstellung von PO-Dateien und strukturierten Übersetzungsinhalten.",
        kizuna:
          "Ein Plattformkonzept zum Japanischlernen mit Kursen und leicht zugänglichen Lernmaterialien.",
        pokko:
          "Ein Gaming-Website-Projekt mit moderner Benutzeroberfläche und inhaltsorientiertem Design.",
      },
    },
    contactSection: {
      title: "Kontakt",
      formTitle: "Kontakt aufnehmen",
      reachOut: "Schreiben Sie mir",
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      message: "Nachricht",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "Ihre E-Mail",
      messagePlaceholder: "Ihre Nachricht",
      send: "Nachricht senden",
      sending: "Wird gesendet...",
      successMessage: "Ihre Nachricht wurde erfolgreich gesendet.",
      errorMessage: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    },
  },

  ja: {
    nav: {
      projects: "プロジェクト",
      skills: "スキル",
      experience: "経験",
    },
    hero: {
      firstName: "リュボスラフ",
      lastName: "オベデンスキー",
      roleLeft: "プロジェクトマネージャー",
      roleRight: "ウェブ開発",
      roleJoiner: "・",
      description:
        "私は、スコープ・時間・リソースのバランスを取りながらプロジェクトを管理し、常に高い品質と優れた成果を実現しています。翻訳およびローカリゼーションを専門としており、効率性と正確性を維持しつつ、プロジェクトが言語的および文化的な基準を満たすようにしています。",
      sayHello: "👋 こんにちは！",
      downloadCv: "⬇ 履歴書をダウンロード",
    },
    skillsSection: {
      title: "スキル",
      languages: "言語",
      itSkills: "ITスキル",
      catTools: "CATツール",
      skills: "スキル",
      bulgarian: "ブルガリア語",
      english: "英語",
      german: "ドイツ語",
      native: "母語",
      professional: "プロフェッショナル",
      basic: "初級",
      skillItems: [
        "チームマネジメント",
        "時間管理",
        "複数のステークホルダーとの連携",
        "マルチタスク",
        "予算管理",
        "リスク予測",
        "優れたカスタマーサービス",
        "問題解決",
        "高い組織力",
        "高い自立性とオーナーシップ",
      ],
    },
    experienceSection: {
      title: "職務経歴",
      jobs: [
        {
          title: "ローカリゼーション・プロジェクトマネージャー",
          company: "BeConnected Bulgaria",
          period: "10.2023 – 09.2025",
          bullets: [
            "ローカリゼーション案件をライフサイクル全体にわたって管理しました。",
            "複数言語にわたり最大44名のフリーランス言語担当者のチームを率いました。",
            "memoQ、SDL Trados、Memsource、XTM、Wordbee、Smartcat、Smartling、Across、GlobalLink、GenTrans を用いて案件準備を行いました。",
            "案件予算を管理し、進行状況を継続的に追跡しました。",
            "クライアントおよび社内関係者とのコミュニケーションを維持しました。",
            "要件変更時には予算と納期の調整を行いました。",
            "最終納品物の回収、クライアントフィードバックの処理、修正対応の調整を行いました。",
            "Plunet からカスタムTMSへの移行に参加し、外部開発者と連携して会社のニーズに合ったソリューション導入を支援しました。",
            "1日30〜40件の案件を管理し、厳しい納期の中でも適切な割り当て、実行、納品を実現しました。",
          ],
        },
        {
          title: "カスタマーサポート",
          company: "Sitel - Just Eat Project UK",
          period: "03.2021 – 09.2022",
          bullets: [
            "Zendesk を使用し、注文、支払い、配達に関する問い合わせへチャットとメールで対応しました。",
            "顧客からの苦情を解決し、高い顧客満足度につながる効果的な対応を行いました。",
            "社内手順に従って顧客対応内容を記録し、サポートチケットを更新しました。",
          ],
        },
        {
          title: "受付",
          company: "International House of Journalists Hotel",
          period: "05.2019 – 09.2019",
          bullets: [
            "ゲスト対応、チェックイン・チェックアウト、一般的な案内を担当しました。",
            "電話対応を行い、予約やゲストからの要望を調整しました。",
          ],
        },
        {
          title: "機械オペレーター",
          company: "MD Electronic",
          period: "05.2017 – 09.2017",
          location: "チェコ",
          bullets: [
            "自動車用ケーブル部品の製造に携わりました。",
            "製造手順と品質基準に従ってライン作業を行いました。",
          ],
        },
        {
          title: "販売アシスタント",
          company: "Sunny Kid",
          period: "06.2015 – 08.2015",
          bullets: [
            "おもちゃや自転車の購入を希望するお客様をサポートしました。",
            "商品整理や日常的な店舗業務を担当しました。",
          ],
        },
      ],
    },
    educationSection: {
      title: "学歴",
      items: [
        {
          title: "ITプロジェクトマネジメント基礎",
          institution: "SoftUni",
          period: "2025",
          image: "/education/softuni.png",
        },
        {
          title: "修士課程 – モバイルおよびウェブ技術",
          institution: "ヴァルナ経済大学",
          period: "2022 – 2023",
          image: "/education/economics.png",
        },
        {
          title: "学士課程 – 観光学",
          institution: "ヴァルナ経済大学",
          period: "2016 – 2022",
          image: "/education/economics.png",
        },
        {
          title: "ケータリング",
          institution: "PGRTO – Pleven",
          period: "2011 – 2016",
          image: "/education/pgrto.png",
        },
      ],
    },
    projectsSection: {
      title: "プロジェクト",
      visit: "サイトを見る",
      downloadApk: "APKをダウンロード",
      github: "GitHub",
      private: "非公開",
      items: {
        rithy:
          "シンプルで集中しやすい体験を目指して設計した、執筆支援用のモバイルアプリ構想です。",
        desisKitchen:
          "母のために作ったレシピアプリで、家庭料理を見やすく整理して紹介することを目的としています。",
        sheepGame:
          "羊を捕まえることをテーマにした、小さな実験的ゲームプロジェクトです。",
        diceGame:
          "アニメ風の要素とシンプルなブラウザゲームプレイに着想を得たデモ用ダイスゲームです。",
        pokemonGame:
          "ブルガリアをイメージして作った冒険プロジェクトで、現在は非公開です。",
        tms:
          "翻訳案件やワークフローを整理するための翻訳管理システム構想で、現在は非公開です。",
        profilms:
          "Pro Films 向けに試作した別案のウェブサイトで、練習とデザイン検証を目的に制作しました。",
        poGenerator:
          "PO形式のファイルや構造化された翻訳データを作成するためのシンプルなツールです。",
        kizuna:
          "コースと学習コンテンツをわかりやすく提供する日本語学習プラットフォームの構想です。",
        pokko:
          "モダンなUIとコンテンツ重視の設計を持つゲーム系ウェブサイトのプロジェクトです。",
      },
    },
    contactSection: {
      title: "連絡先",
      formTitle: "お問い合わせ",
      reachOut: "お気軽にご連絡ください",
      name: "お名前",
      email: "メール",
      phone: "電話番号",
      message: "メッセージ",
      namePlaceholder: "お名前",
      emailPlaceholder: "メールアドレス",
      messagePlaceholder: "メッセージをご入力ください",
      send: "送信する",
      sending: "送信中...",
      successMessage: "メッセージは正常に送信されました。",
      errorMessage: "問題が発生しました。もう一度お試しください。",
    },
  },
} as const;