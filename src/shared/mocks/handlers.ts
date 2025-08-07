import { delay, http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/pages/home", async () => {
    await delay();

    return HttpResponse.json({
      hero: {
        id: "home",
        title: "Продуктовый дизайн и\u00A0разработка для\u00A0вашего бизнеса",
        actionButton: {
          type: "link",
          label: "Связаться с\u00A0нами",
          action: "#",
        },
      },
      services: {
        id: "services",
        headerBlock: {
          title: "Чем мы\u00A0занимаемся",
        },
        items: [
          {
            title: "Web-дизайн",
            text: "От концепции до\u00A0запуска мы\u00A0создаём впечатляющие, ориентированные на\u00A0пользователя сайты.",
            variant: "default",
            iconImage: {
              src: "icons/sun.svg",
              width: 24,
              height: 24,
              alt: "",
            },
          },
          {
            title: "UI/UX-дизайн",
            text: "От концепции до\u00A0запуска мы\u00A0создаём впечатляющие, ориентированные на\u00A0пользователя сайты.",
            variant: "default",
            iconImage: {
              src: "icons/star.svg",
              width: 24,
              height: 24,
              alt: "",
            },
          },
          {
            title: "Адаптивный дизайн",
            text: "От концепции до\u00A0запуска мы\u00A0создаём впечатляющие, ориентированные на\u00A0пользователя сайты.",
            variant: "default",
            iconImage: {
              src: "icons/screen.svg",
              width: 24,
              height: 24,
              alt: "",
            },
          },
          {
            title: "E-commerce",
            text: "От концепции до\u00A0запуска мы\u00A0создаём впечатляющие, ориентированные на\u00A0пользователя сайты.",
            variant: "image",
            iconImage: {
              src: "icons/bag.svg",
              width: 24,
              height: 24,
              alt: "",
            },
            appImage: {
              src: "img/about/custom-dev.jpg",
              width: 476,
              height: 514,
              alt: "",
              sources: [
                {
                  srcSet: "img/about/custom-dev.webp",
                  type: "webp",
                },
              ],
            },
          },
          {
            title: "Webflow",
            text: "От концепции до\u00A0запуска мы\u00A0создаём впечатляющие, ориентированные на\u00A0пользователя сайты.",
            variant: "logo",
            isMobileLast: true,
            iconImage: {
              src: "icons/webflow-logo.svg",
              width: 24,
              height: 24,
              alt: "",
            },
            mainLogo: {
              src: "icons/webflow-logo-white.svg",
              alt: "",
            },
            mainLogoBackground: "#5B54FF",
          },
          {
            title: "Разработка",
            text: "От концепции до\u00A0запуска мы\u00A0создаём впечатляющие, ориентированные на\u00A0пользователя сайты.",
            variant: "default",
            iconImage: {
              src: "icons/development.svg",
              width: 24,
              height: 24,
              alt: "",
            },
          },
        ],
      },
      cases: {
        id: "cases",
        headerBlock: {
          title: "Наши работы",
          subtitle:
            "Взгляните на\u00A0некоторые из\u00A0наших последних проектов, чтобы\u00A0увидеть, как\u00A0мы\u00A0помогли таким компаниям, как\u00A0ваша, добиться успеха в\u00A0Интернете.",
        },
        slides: [
          {
            actionButton: {
              type: "link",
              action: "#",
            },
            appImage: {
              src: "img/cases/bord.jpg",
              width: 1464,
              height: 1098,
              alt: "",
              sources: [
                {
                  srcSet: "img/cases/bord-xs.webp",
                  type: "webp",
                  media: "md",
                },
                {
                  srcSet: "img/cases/bord.webp",
                  type: "webp",
                },
              ],
            },
          },
          {
            actionButton: {
              type: "link",
              action: "#",
            },
            appImage: {
              src: "img/cases/broadlume.jpg",
              width: 1464,
              height: 1098,
              alt: "",
              sources: [
                {
                  srcSet: "img/cases/broadlume-xs.webp",
                  type: "webp",
                  media: "md",
                },
                {
                  srcSet: "img/cases/broadlume.webp",
                  type: "webp",
                },
              ],
            },
          },
          {
            actionButton: {
              type: "link",
              action: "#",
            },
            appImage: {
              src: "img/cases/justix.jpg",
              width: 1464,
              height: 1098,
              alt: "",
              sources: [
                {
                  srcSet: "img/cases/justix-xs.webp",
                  type: "webp",
                  media: "md",
                },
                {
                  srcSet: "img/cases/justix.webp",
                  type: "webp",
                },
              ],
            },
          },
          {
            actionButton: {
              type: "link",
              action: "#",
            },
            appImage: {
              src: "img/cases/icons.jpg",
              width: 1464,
              height: 1098,
              alt: "",
              sources: [
                {
                  srcSet: "img/cases/icons-xs.webp",
                  type: "webp",
                  media: "md",
                },
                {
                  srcSet: "img/cases/icons.webp",
                  type: "webp",
                },
              ],
            },
          },
          {
            actionButton: {
              type: "link",
              action: "#",
            },
            appImage: {
              src: "img/cases/sayyes.jpg",
              width: 1464,
              height: 1098,
              alt: "",
              sources: [
                {
                  srcSet: "img/cases/sayyes-xs.webp",
                  type: "webp",
                  media: "md",
                },
                {
                  srcSet: "img/cases/sayyes.webp",
                  type: "webp",
                },
              ],
            },
          },
          {
            actionButton: {
              type: "link",
              action: "#",
            },
            appImage: {
              src: "img/cases/bord.jpg",
              width: 1464,
              height: 1098,
              alt: "",
              sources: [
                {
                  srcSet: "img/cases/bord-xs.webp",
                  type: "webp",
                  media: "md",
                },
                {
                  srcSet: "img/cases/bord.webp",
                  type: "webp",
                },
              ],
            },
          },
          {
            actionButton: {
              type: "link",
              action: "#",
            },
            appImage: {
              src: "img/cases/broadlume.jpg",
              width: 1464,
              height: 1098,
              alt: "",
              sources: [
                {
                  srcSet: "img/cases/broadlume-xs.webp",
                  type: "webp",
                  media: "md",
                },
                {
                  srcSet: "img/cases/broadlume.webp",
                  type: "webp",
                },
              ],
            },
          },
          {
            actionButton: {
              type: "link",
              action: "#",
            },
            appImage: {
              src: "img/cases/justix.jpg",
              width: 1464,
              height: 1098,
              alt: "",
              sources: [
                {
                  srcSet: "img/cases/justix-xs.webp",
                  type: "webp",
                  media: "md",
                },
                {
                  srcSet: "img/cases/justix.webp",
                  type: "webp",
                },
              ],
            },
          },
          {
            actionButton: {
              type: "link",
              action: "#",
            },
            appImage: {
              src: "img/cases/icons.jpg",
              width: 1464,
              height: 1098,
              alt: "",
              sources: [
                {
                  srcSet: "img/cases/icons-xs.webp",
                  type: "webp",
                  media: "md",
                },
                {
                  srcSet: "img/cases/icons.webp",
                  type: "webp",
                },
              ],
            },
          },
          {
            actionButton: {
              type: "link",
              action: "#",
            },
            appImage: {
              src: "img/cases/sayyes.jpg",
              width: 1464,
              height: 1098,
              alt: "",
              sources: [
                {
                  srcSet: "img/cases/sayyes-xs.webp",
                  type: "webp",
                  media: "md",
                },
                {
                  srcSet: "img/cases/sayyes.webp",
                  type: "webp",
                },
              ],
            },
          },
        ],
      },
      reviews: {
        id: "reviews",
        headerBlock: {
          title: "Нам доверяют",
          subtitle: "Мы гордимся тем, что\u00A0наши\u00A0усилия получают стабильно высокие отзывы.",
        },
        rating: 5,
        ratingText: "на основании",
        reviewsCount: 145,
        reviewsText: "отзывов",
        avatars: [
          {
            src: "img/reviews/author1.jpg",
            width: 100,
            height: 100,
            alt: "",
            sources: [
              {
                srcSet: "img/reviews/author1.webp",
                type: "webp",
              },
            ],
          },
          {
            src: "img/reviews/author2.jpg",
            width: 100,
            height: 100,
            alt: "",
            sources: [
              {
                srcSet: "img/reviews/author2.webp",
                type: "webp",
              },
            ],
          },
          {
            src: "img/reviews/author3.jpg",
            width: 100,
            height: 100,
            alt: "",
            sources: [
              {
                srcSet: "img/reviews/author3.webp",
                type: "webp",
              },
            ],
          },
          {
            src: "img/reviews/author4.jpg",
            width: 100,
            height: 100,
            alt: "",
            sources: [
              {
                srcSet: "img/reviews/author4.webp",
                type: "webp",
              },
            ],
          },
          {
            src: "img/reviews/author5.jpg",
            width: 100,
            height: 100,
            alt: "",
            sources: [
              {
                srcSet: "img/reviews/author5.webp",
                type: "webp",
              },
            ],
          },
        ],
      },
      pricing: {
        id: "pricing",
        headerBlock: {
          title: "Стоимость",
          subtitle:
            "Посмотрите доступные форматы работы — от\u00A0разовых проектов до\u00A0полного сопровождения.",
        },
        titleButton: "Давайте запланируем встречу",
        actionButton: {
          type: "link",
          action: "#",
          label: "Связаться с нами",
        },
        items: [
          {
            headerBlock: {
              title: "Безлимитный сервис",
              subtitle:
                "Работаем как\u00A0ваша внешняя команда, без\u00A0ограничений на\u00A0количество правок и\u00A0запросов. Подходит для\u00A0тех, кому нужен постоянный поток дизайна, обновлений и\u00A0внимания к\u00A0деталям.",
            },
            actionButton: {
              type: "link",
              action: "#",
              ariaLabel: "Подробнее",
            },
            currencySymbol: "RUB",
            price: 49000,
            hasFromLabel: true,
            includes: [
              "Безлимитные задачи и\u00A0правки",
              "Два активных запроса за\u00A0раз",
              "Устранение багов",
              "Обновления каждый будний день",
              "Приоритет по\u00A0мере поступления",
              "Общение в\u00A0чате",
            ],
          },
          {
            headerBlock: {
              title: "Поддержка и\u00A0доработки",
              subtitle:
                "Работаем как\u00A0ваша внешняя команда. Подходит для\u00A0тех, кому нужен постоянный поток дизайна, обновлений и\u00A0внимания к\u00A0деталям.",
            },
            actionButton: {
              type: "link",
              action: "#",
              ariaLabel: "Подробнее",
            },
            currencySymbol: "RUB",
            price: 29000,
            hasFromLabel: true,
            includes: [
              "Добавление новых разделов",
              "Устранение багов",
              "Правки по дизайну и\u00A0текстам",
              "Один активный запрос за\u00A0раз",
              "Обновления каждый будний день",
              "Общение в\u00A0чате",
            ],
          },
          {
            headerBlock: {
              title: "Проект под\u00A0ключ",
              subtitle:
                "Разработка сайта от\u00A0концепции до\u00A0запуска — с\u00A0индивидуальным подходом, проработанным дизайном и\u00A0реализацией на\u00A0Webflow.",
            },
            actionButton: {
              type: "link",
              action: "#",
              ariaLabel: "Подробнее",
            },
            currencySymbol: "RUB",
            price: 85000,
            hasFromLabel: true,
            includes: [
              "Индивидуальный дизайн",
              "Тестирование и\u00A0адаптив",
              "Наполнение и\u00A0базовая работа с\u00A0контентом",
              "Анимации и\u00A0микроинтерактив",
              "Cборка на\u00A0Webflow",
            ],
          },
        ],
      },
      faq: {
        id: "faq",
        headerBlock: {
          title: "Часто задаваемые вопросы",
          subtitle: "",
        },
        items: [
          {
            title: "Как я могу связаться с\u00A0вашей командой?",
            text: "Вы можете связаться с\u00A0нами через\u00A0контактную форму на\u00A0нашем веб-сайте или\u00A0по\u00A0электронной почте. Обычно мы\u00A0отвечаем в\u00A0течение 24 часов.",
          },
          {
            title: "Какие услуги вы предоставляете?",
            text: "Вы можете связаться с\u00A0нами через\u00A0контактную форму на\u00A0нашем веб-сайте или\u00A0по\u00A0электронной почте. Обычно мы\u00A0отвечаем в\u00A0течение 24 часов.",
          },
          {
            title: "Вы занимаетесь поддержкой сайтов?",
            text: "Вы можете связаться с\u00A0нами через\u00A0контактную форму на\u00A0нашем веб-сайте или\u00A0по\u00A0электронной почте. Обычно мы\u00A0отвечаем в\u00A0течение 24 часов.",
          },
          {
            title: "Сколько времени занимает разработка дизайна веб-сайта?",
            text: "Вы можете связаться с\u00A0нами через\u00A0контактную форму на\u00A0нашем веб-сайте или\u00A0по\u00A0электронной почте. Обычно мы\u00A0отвечаем в\u00A0течение 24 часов.",
          },
          {
            title: "Требуется ли предоплата за проекты?",
            text: "Вы можете связаться с\u00A0нами через\u00A0контактную форму на\u00A0нашем веб-сайте или\u00A0по\u00A0электронной почте. Обычно мы\u00A0отвечаем в\u00A0течение 24 часов.",
          },
        ],
      },
    });
  }),

  http.get("/api/pages/layout", async () => {
    await delay();

    return HttpResponse.json({
      siteSettings: {
        logo: {
          actionButton: {
            type: "link",
            action: "#",
          },
          image: {
            src: "img/logo.svg",
            width: 160,
            height: 38,
          },
        },
      },
      header: {
        actionButtonPrimary: {
          type: "link",
          label: "Вход",
          action: "#",
        },
        actionButtonSecondary: {
          type: "link",
          action: "#",
          label: "Регистрация",
        },
        menu: [
          {
            type: "link",
            label: "Главная",
            action: "#home",
          },
          {
            type: "link",
            label: "Услуги",
            action: "#services",
          },
          {
            type: "link",
            label: "Работы",
            action: "#cases",
          },
          {
            type: "link",
            label: "Стоимость",
            action: "#pricing",
          },
        ],
      },
      footer: {
        callActionText:
          "Свяжитесь с\u00A0нами\u00A0сегодня, чтобы обсудить ваш\u00A0проект и\u00A0узнать, как\u00A0мы\u00A0можем воплотить вашу идею в\u00A0жизнь.",
        developer: "Создано командой PixelUX",
        menu: [
          {
            type: "link",
            label: "Главная",
            action: "#home",
          },
          {
            type: "link",
            label: "Услуги",
            action: "#services",
          },
          {
            type: "link",
            label: "Работы",
            action: "#cases",
          },
          {
            type: "link",
            label: "Стоимость",
            action: "#pricing",
          },
          {
            type: "link",
            label: "FAQ",
            action: "#faq",
          },
        ],
        socials: [
          {
            logo: {
              src: "icons/linkedin-logo.svg",
              width: 24,
              height: 24,
            },
            actionButton: {
              type: "link",
              target: "_blank",
              action: "#",
            },
          },
          {
            logo: {
              src: "icons/tiktok-logo.svg",
              width: 24,
              height: 24,
            },
            actionButton: {
              type: "link",
              target: "_blank",
              action: "#",
            },
          },
          {
            logo: {
              src: "icons/dribbble-logo.svg",
              width: 24,
              height: 24,
            },
            actionButton: {
              type: "link",
              target: "_blank",
              action: "#",
            },
          },
        ],
      },
    });
  }),
];
