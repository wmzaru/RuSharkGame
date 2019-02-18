SharkGame.Settings = {

    current: {},

    buyAmount: {
        defaultSetting: 1,
        show: false,
        options: [
            1,
            10,
            100,
            -3,
            -2,
            -1
        ]
    },

    showTabHelp: {
        defaultSetting: false,
        show: false,
        options: [
            true,
            false
        ]
    },

    groupResources: {
        defaultSetting: false,
        name: "Группировка Ресурсов",
        desc: "Сгруппируйте ресурсы в таблице по категориям для удобочитаемости.",
        show: true,
        options: [
            true,
            false
        ],
        onChange: function() {
            SharkGame.Resources.rebuildTable = true;
        }
    },

    buttonDisplayType: {
        defaultSetting: "list",
        name: "Упрощенный вид кнопок",
        desc: "Хотите вертикальный список кнопок или более компактную конфигурацию?",
        show: true,
        options: [
            "list",
            "pile"
        ],
        onChange: function() {
            SharkGame.Main.changeTab(SharkGame.Tabs.current);
        }
    },

    offlineModeActive: {
        defaultSetting: true,
        name: "Автономный Режим",
        desc: "Пусть ваши цифры увеличиваются даже при закрытой игре!",
        show: true,
        options: [
            true,
            false
        ]
    },

    autosaveFrequency: {
        // times given in minutes
        defaultSetting: 5,
        name: "Частота автосохранения",
        desc: "Количество минут между автосохранениями.",
        show: true,
        options: [
            1,
            2,
            5,
            10,
            30
        ],
        onChange: function() {
            clearInterval(SharkGame.Main.autosaveHandler);
            SharkGame.Main.autosaveHandler = setInterval(SharkGame.Main.autosave, SharkGame.Settings.current.autosaveFrequency * 60000);
            SharkGame.Log.addMessage("Now autosaving every " + SharkGame.Settings.current.autosaveFrequency + " minute" + SharkGame.plural(SharkGame.Settings.current.autosaveFrequency) + ".");
        }
    },

    logMessageMax: {
        defaultSetting: 20,
        name: "Количество сообщений в логе",
        desc: "Сколько сообщений показывать перед удалением старых.",
        show: true,
        options: [
            5,
            10,
            15,
            20,
            25,
            30,
            50
        ],
        onChange: function() {
            SharkGame.Log.correctLogLength();
        }
    },

    sidebarWidth: {
        defaultSetting: "25%",
        name: "Ширина боковой панели",
        desc: "Сколько экрана должно занимать боковая панель.",
        show: true,
        options: [
            "20%",
            "25%",
            "30%",
            "35%",
            "40%",
            "45%",
            "50%"
        ],
        onChange: function() {
            var sidebar = $('#sidebar');
            if(SharkGame.Settings.current.showAnimations) {
                sidebar.animate({width: SharkGame.Settings.current.sidebarWidth}, "100");
            } else {
                sidebar.width(SharkGame.Settings.current.sidebarWidth);
            }
        }
    },

    showAnimations: {
        defaultSetting: true,
        name: "Показывать Анимацию",
        desc: "Показать анимацию или нет. ВЫ РЕШАЕТЕ.",
        show: true,
        options: [
            true,
            false
        ]
    },

    colorCosts: {
        defaultSetting: true,
        name: "Цветные Имена Ресурсов",
        desc: "При отображении стоимости, названия цветов вещи.",
        show: true,
        options: [
            true,
            false
        ],
        onChange: function() {
            SharkGame.Resources.rebuildTable = true;
            SharkGame.Stats.recreateIncomeTable = true;
        }
    },

    iconPositions: {
        defaultSetting: "top",
        name: "Позиции Иконок",
        desc: "Где распологаются иконки на кнопках?",
        show: true,
        options: [
            "top",
            "side",
            "off"
        ]
    },

    showTabImages: {
        defaultSetting: true,
        name: "Show Tab Header Images",
        desc: "Показывать изображения заголовков, они занимают много места?",
        show: true,
        options: [
            true,
            false
        ],
        onChange: function() {
            SharkGame.Main.changeTab(SharkGame.Tabs.current);
        }
    }


};
