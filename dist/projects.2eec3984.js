// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"rSus":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var data = [{
  "#": "",
  "title": "ARtillery",
  "---": "",
  "description": "``` Игровое приложение в дополненной реальности для Android (ранее Android, iOS). Задача игрока – продержаться как можно дольше, отстреливаясь от противников, появляющихся в пространстве вокруг него. Для защиты игрок может перемещать и наклонять телефон, а также сбивать летящие в него снаряды. Для стрельбы нужно коснуться экрана. Со временем сложность увеличивается. Существует три типа противников с разными моделями поведения и сложностью, каждый из которых появляется реже или чаще других. Приложение реализовано с использованием ARCore, что позволяет ему работать без привязки к печатной метке. Ранняя версия приложения была реализована с использованием Vuforia, для работы требуется распечатать метку.",
  "images": ["/images/projects/ARtillery/resized_ARtillery_Moment3.webp", "/images/projects/ARtillery/resized_ARtillery_Moment-min.webp", "/images/projects/ARtillery/resized_ARtillery_Moment2-min.webp", "/images/projects/ARtillery/ARtilleryAction.gif"],
  "videos": ["https://youtu.be/BIoWlE25bD4"],
  "tags": ["AR", "Unity"],
  "tech": ["Unity"],
  "developers": ["Поздняков Д.В."],
  "sourcecode": [{
    "name": "Проект",
    "link": "https://github.com/RTUITLab/ARtillery"
  }],
  "link": "ARtillery"
}, {
  "#": "",
  "title": "Многопользовательская сборка ракетного двигателя",
  "---": "",
  "description": "``` Приложение дает пользователям возможность осуществлять процесс сборки предоставленной модели в формате виртуальной реальности. Люди могут собирать ракетный двигатель как самостоятельно, так и в многопользовательской комнате, объединившись с напарниками. Процесс сопровождают различные подсказки и тексты с описаниями деталей. Все это, вкупе с глубоким погружением, способствует быстрому усвоению материала. При окончании сборки модель становится анимированной и демонстрирует свой принцип работы.",
  "images": ["/images/projects/Engine-VR/resized_141160470-a31d20dd-86bd-4be8-9308-a631227b5ba0.webp", "/images/projects/Engine-VR/resized_141155619-bb28a0e8-fd3b-4359-97e5-36f3d1cf71c3.webp", "/images/projects/Engine-VR/resized_141155697-f247130d-e9a9-4f7d-812c-7a328e3022af.webp", "/images/projects/Engine-VR/resized_141155722-2e5c8eab-dfef-42f7-ae67-daf43e1756d6.webp"],
  "videos": ["https://youtu.be/6FTMDRp5fN4"],
  "tags": ["VR", "Game"],
  "tech": ["Unity", "C#"],
  "developers": ["Сиротенко М.Р.", "Корчиков М.Д.", "Смирнов М.А", "Лысаков И.А.", "Смирнов Я.А."],
  "site": "",
  "sourcecode": [{
    "name": "Исходный код",
    "link": "https://github.com/RTUITLab/Engine-VR"
  }],
  "link": "Engine-VR"
}, {
  "#": "",
  "title": "GameCenter (система рекордов)",
  "---": "",
  "description": "Система предназначена для формирования очереди на выставочные стенды, для контроля посещаемости проектов лаборатории ИТ и предоставления игровой статистики пользователей. Также предусмотрено администрирование рекордов пользователей, игр, очередей.",
  "images": ["/images/projects/GameCenter-Front/resized_1.webp", "/images/projects/GameCenter-Front/resized_2.webp", "/images/projects/GameCenter-Front/resized_3.webp", "/images/projects/GameCenter-Front/resized_4.webp"],
  "videos": [],
  "tags": ["Frontend"],
  "tech": ["Angular", "Asp.net core"],
  "developers": ["Китанин С.C.", "Южаков В.Е."],
  "site": "",
  "sourcecode": [{
    "name": "Фронтенд",
    "link": "https://github.com/RTUITLab/GameCenter-Front"
  }, {
    "name": "Бэкенд",
    "link": "https://github.com/RTUITLab/GameCenter-Backend"
  }],
  "link": "GameCenter-Front"
}, {
  "#": "",
  "title": "GeoHelper",
  "---": "",
  "description": "``` Проект для реализации AR-слоя мира, в котором отображаются объекты дополненной реальности в зависимости от заданного географического положения. Проект состоит из сайта и приложений для платформ Android и IOS. Сайт предназначен для менеджмента данными, представляемых в AR-слое. Мобильное приложение служит для отображения AR-слоя мира на экране используемого устройства.",
  "images": ["/images/projects/GeoHelperUnity/resized_1.webp", "/images/projects/GeoHelperUnity/resized_2.webp", "/images/projects/GeoHelperUnity/resized_3.webp", "/images/projects/GeoHelperUnity/resized_4.webp"],
  "videos": [],
  "tags": ["Frontend", "Backend", "Mobile", "AR"],
  "tech": ["Vue", "Node.js", "Unity", "AR Foundation", "C#"],
  "developers": ["Лаптев И.А.", "Китанин С.С.", "Быковская О.C.", "Смирнов Я.А."],
  "site": "",
  "sourcecode": [{
    "name": "Фронтенд",
    "link": "https://github.com/RTUITLab/GeoHelper-Front"
  }, {
    "name": "Бэкенд",
    "link": "https://github.com/RTUITLab/GeoHelper-Back"
  }, {
    "name": "Unity проект (приложение для Android или Ios)",
    "link": "https://github.com/RTUITLab/GeoHelperUnity"
  }],
  "link": "GeoHelperUnity"
}, {
  "#": "",
  "title": "GyroBall",
  "---": "",
  "description": "Мобильное приложение – игра для проверки удобства использования механики акселерометра.\nИспользование поворотов телефона для управления шариком. У шарика предполагается 4 состояния, соответствующих стихиям, каждое состояние несёт в себе определённую соответствующую механику. Локации к игре будут соответствовать стихийной тематике.",
  "images": ["/images/projects/GyroBall/resized_23.webp", "/images/projects/GyroBall/resized_21.webp", "/images/projects/GyroBall/resized_1.webp", "/images/projects/GyroBall/resized_2.webp", "/images/projects/GyroBall/resized_3.webp"],
  "videos": [],
  "tags": ["Mobile"],
  "tech": ["C#", "3D modeling", "Unity 3D"],
  "developers": ["Баканова М.В.", "Новаков Н.Ю."],
  "site": "",
  "sourcecode": [{
    "name": "Проект",
    "link": "https://github.com/RTUITLab/GyroBall"
  }],
  "link": "GyroBall"
}, {
  "#": "",
  "title": "ITLab (система управления лабораторией)",
  "---": "",
  "description": "Для организации работы людей в лаборатории создана система, учитывающая активность людей, участие в мероприятиях, оплату работы сотрудников. Система позволяет распределять нагрузку, обеспечивать прозрачность выполняемых действий и мероприятий. Сайт создан для внутреннего использования и доступ к имеют только сотрудники лаборатории. Проект состоит из нескольких бекендов, написанный на разных языках программирования, таких как C#, GO, Kotlin. Фронтенд реализован на фреймворке Vue.JS. Мобильное приложение для iOS реализовано на языке Swift с использованием фреймворка SwiftUI. Так же система имеет возможность уведомлять людей о изменениях, при помощи бота вконтакте или почты.",
  "images": ["/images/projects/ITLab/resized_1.webp", "/images/projects/ITLab/resized_2.webp", "/images/projects/ITLab/resized_ios_1.webp", "/images/projects/ITLab/resized_ios_2.webp"],
  "videos": [],
  "tags": ["Frontend", "Backend", "Mobile"],
  "tech": ["Vue", "ASP", "Ktor", "Swift"],
  "developers": ["Макущенко М.А.", "Романов Д.Е.", "Комар Б.Г.", "Кузнецов А.А.", "Иванов М.Е."],
  "site": "",
  "sourcecode": [{
    "name": "Фронтенд",
    "link": "https://github.com/RTUITLab/ITLab-Front"
  }, {
    "name": "Система событий/оборудования",
    "link": "https://github.com/RTUITLab/ITLab-Back"
  }, {
    "name": "Система уведомлений",
    "link": "https://github.com/RTUITLab/ITLab-Notify"
  }, {
    "name": "Система записей о работе",
    "link": "https://github.com/RTUITLab/ITLab-Reports"
  }, {
    "name": "Система учета зарплат",
    "link": "https://github.com/RTUITLab/ITLab-Salary"
  }, {
    "name": "Приложение для iOS",
    "link": "https://github.com/RTUITLab/ITLab-iOS"
  }],
  "link": "ITLab"
}, {
  "#": "",
  "title": "Сервис проектов RTUITLab",
  "---": "",
  "description": "Сервис позволяет отслеживать проекты лаборатории, мониторить их прогресс\nВозможность хранить файлы, относящиеся к проекту, оставлять новости\nА также распределение ролей",
  "tags": ["Backend", "Golang"],
  "tech": ["Go", "MongoDB"],
  "developers": ["Демин Д.Д.", "Миронов Н.М.", "Лаптев И.А.", "Корольков А.Д.", "Баикин К.Е."],
  "images": ["/images/projects/ITLab-Projects/resized_list.webp", "/images/projects/ITLab-Projects/resized_show_ArtWay.webp", "/images/projects/ITLab-Projects/resized_show_ArtWay2.webp", "/images/projects/ITLab-Projects/resized_show_VIKA.webp", "/images/projects/ITLab-Projects/resized_edit_VIKA.webp"],
  "videos": [],
  "site": "https://manage.rtuitlab.dev/projects",
  "sourcecode": [{
    "name": "Бекенд",
    "link": "https://github.com/RTUITLab/ITLab-Projects"
  }, {
    "name": "Фронтенд",
    "link": "https://github.com/RTUITLab/ITLab-Projects-Front"
  }],
  "link": "ITLab-Projects"
}, {
  "#": "",
  "title": "Owl Cabin - Летай - созерцай - собирай - улучшай",
  "---": "",
  "description": "Приложение представляет собой казуальную мобильную игру. Описание игрового процесса: пользователь заходит в приложение, выбирает локацию, собирает звёздочки и параллельно улучшает свой самолёт, после сбора определенного количества звёзд — игра завершается и можно выбрать локацию снова.\nИгра сделана простой как в логике, так и в управлении, потому что заточена под вовлечение пользователя не в процесс игры, а расслабление и наслаждение от полёта.\nНа фоне играет успокаивающая музыка, управление только голой.",
  "images": ["/images/projects/OwlCabin/resized_1.webp", "/images/projects/OwlCabin/resized_2.webp", "/images/projects/OwlCabin/resized_3.webp", "/images/projects/OwlCabin/resized_4.webp", "/images/projects/OwlCabin/resized_5.webp", "/images/projects/OwlCabin/resized_6.webp", "/images/projects/OwlCabin/resized_7.webp"],
  "videos": [],
  "tags": ["VR", "Game", "Aircraft", "Relax", "Easy play"],
  "tech": ["Unity", "Google Cardboard"],
  "developers": ["Миронов Н. М.", "Иерусалимов И. Д.", "Корчиков М. Д.", "Валяев Д. А.", "Шошников И. К."],
  "site": "",
  "sourcecode": [{
    "name": "Проект",
    "link": "https://github.com/RTUITLab/OwlCabin"
  }],
  "link": "OwlCabin"
}, {
  "#": "",
  "title": "Plane crash simulator",
  "---": "",
  "description": "Симулятор, помещающий пользователя в ситуацию, когда он находится в падающем самолете",
  "images": ["/images/projects/PlaneCrashSimulator/resized_1.webp", "/images/projects/PlaneCrashSimulator/resized_2.webp", "/images/projects/PlaneCrashSimulator/resized_3.webp"],
  "videos": [],
  "tags": ["VR"],
  "tech": ["Unity", "Steam VR", "C#"],
  "developers": ["Валяев Д.А.", "Шорин И.А."],
  "site": "",
  "sourcecode": [{
    "name": "Source code",
    "link": "https://github.com/RTUITLab/PlainCrashSimulator"
  }],
  "link": "PlaneCrashSimulator"
}, {
  "#": "",
  "title": "ЗИЛ",
  "---": "",
  "description": "Проект для futurift кресла, который помещает игрока в зону боевых действий, где необходимо оторваться от преследования.",
  "images": ["/images/projects/Project-3IL/resized_0.webp", "/images/projects/Project-3IL/resized_1.webp", "/images/projects/Project-3IL/resized_2.webp", "/images/projects/Project-3IL/resized_3.webp"],
  "videos": [],
  "tags": ["VR"],
  "tech": ["Unity", "Steam VR", "C#"],
  "developers": ["Смирнов М.А.", "Новаков Н.Ю.", "Егоркин Н.Е.", "Валяев Д.А.", "Макаров Д.В.", "Макущенко М.А.", "Баканова М.В.", "Шорин И.А.", "Иерусалимов И.Д."],
  "site": "",
  "sourcecode": [{
    "name": "Source code",
    "link": "https://github.com/RTUITLab/Project-3IL"
  }],
  "link": "Project-3IL"
}, {
  "#": "",
  "title": "Виртуальный ситуационный центр",
  "---": "",
  "description": "Виртуальный ситуационный центр позволяет множеству людей в любой точке планеты взаимодействовать между собой в единой среде виртуальной реальности. При этом возможно использование любого доступного на данный момент шлема виртуальной реальности. Также сервисом можно пользоваться без шлема, используя клавиатуру и мышь. В сервисе реализована концепция комнат, к которым подключаются люди, и их общение происходит только внутри данного пространства. Разговоры и обмен файлами не выйдут за пределы выделенного пространства, что обеспечивает конфиденциальность приватного общения. Внутри выделенного виртуального пространства люди могут общаться при помощи голосового чата, могут обмениваться документами из облачных хранилищ (OneDrive, Google drive…), просматривать их, комментировать и обсуждать. В данный момент сервис находится на стадии открытого тестирования.",
  "images": ["/images/projects/SC/resized_1.webp", "/images/projects/SC/resized_2.webp"],
  "videos": ["https://youtu.be/HRFRQa3tMcI"],
  "tags": ["VR", "Social"],
  "tech": ["NodeJS", "ASP. net core", "Unreal Engine"],
  "developers": ["Макущенко М.А.", "Иванов И.Е."],
  "site": "",
  "sourcecode": [],
  "link": "SC"
}, {
  "#": "",
  "title": "StuDo",
  "---": "",
  "description": "Сервис предназначен для людей, кто желает найти себе партнёров или команду для осуществления своей мечты! В чём заключается задача сервиса: это платформа для поиска людей или команды. Как происходит поиск команды: Вы выкладываете объявление, в котором кратко сообщаете о том, что хотите сделать, что собираетесь сделать именно Вы, и какие люди нужны вам в команды. Другие же просматривают ленту объявлений (или ищут по тегам) и видят ваше объявление и сообщают вам, что готовы принять участие в вашем проекте. На данный момент проект находится в разработке, в скором времени будет доступен для публичного тестирования. Данный сервис реализован на мобильных устройствах и разрабатывается под браузер.",
  "images": ["/images/projects/StuDo/resized_1.webp", "/images/projects/StuDo/resized_2.webp", "/images/projects/StuDo/resized_3.webp"],
  "videos": ["https://youtu.be/WyLDHwuZedc"],
  "tags": ["Web", "Mobile", "Tool"],
  "tech": ["Vue", "ASP.NET core"],
  "developers": ["Миронов Н. М.", "Цуканов Д. М.", "Яковлев А. А.", "Алексеев Н. Е.", "Лаптев И. А."],
  "site": "",
  "sourcecode": [{
    "name": "Бэкенд",
    "link": "https://github.com/RTUITLab/StuDo-Back"
  }, {
    "name": "Фронтэнд",
    "link": "https://github.com/RTUITLab/StuDo-Front"
  }, {
    "name": "IOS",
    "link": "https://github.com/MrFoggz/StuDo-iOS"
  }, {
    "name": "Android",
    "link": "https://github.com/Suput/StuDo-Android"
  }],
  "link": "StuDo"
}, {
  "#": "",
  "title": "Шутер в виртуальной реальности",
  "---": "",
  "description": "Шутер в формате виртуальной реальности, позволяющий оттачивать стрельбу из оружия разных видов и уворачиваться от вражеских пуль. В игре можно бросить вызов сразу нескольким противникам, либо сначала потренироваться в спокойной обстановке. В таком режиме у пользователя есть возможность стрелять по бутылкам в баре и мишеням в тире. На выбор представлено 5 моделей оружия, 4 локации и 3 уровня сложности.",
  "images": ["/images/projects/VRDuel/resized_148579235-a4f9e25e-dc3c-49d8-b1a6-7dbabfa52a99.webp", "/images/projects/VRDuel/resized_148580147-297f79e2-15e3-4b34-8108-9550982b0fe2.webp", "/images/projects/VRDuel/resized_148580160-84ee7b40-83f9-439c-a37e-4e1184bd4dd5.webp", "/images/projects/VRDuel/resized_148580059-71f366be-9f6c-44bf-a662-abf7e3e00003.webp"],
  "videos": [],
  "tags": ["VR", "Game"],
  "tech": ["Unity", "C#"],
  "developers": ["Егоркин Н.Е.", "Шорин И.А."],
  "site": "",
  "sourcecode": [{
    "name": "Исходный код",
    "link": "https://github.com/RTUITLab/VRDuel"
  }],
  "link": "VRDuel"
}, {
  "#": "",
  "title": "VRTherapy - Приложение для релаксации в VR со множеством разнообразных активностей",
  "---": "",
  "description": "В VRTherapy вы можете погрузиться в захватывающую и успокаивающую виртуальную реальность с приятным звуковым сопровождением. Отдохните у виртуального костра, прогуляйтесь по летнему лесу, послушайте шум прибоя или же сыграйте в мини-игру, где вам предстоит управлять бумажным самолётиком на ветру. Данная игра предназначена исключительно для запуска в портативном VR-шлеме для Android, например, Google Cardboard.",
  "images": ["/images/projects/VRTherapy/resized_screenshot1.webp", "/images/projects/VRTherapy/resized_screenshot2.webp", "/images/projects/VRTherapy/resized_screenshot3.webp", "/images/projects/VRTherapy/resized_screenshot4.webp"],
  "videos": [],
  "tags": ["VR", "Game", "Simulator", "Arcade"],
  "tech": ["Unity", "Android", "Google VR", "Google Cardboard"],
  "developers": ["Баканова М.", "Левандровский А.", "Матчин А.", "Новаков Н."],
  "site": "",
  "sourcecode": [{
    "name": "Проект",
    "link": "https://github.com/RTUITLab/VRTherapy"
  }],
  "разработчики": "",
  "link": "VRTherapy"
}, {
  "#": "",
  "title": "BunnyHuntVR - Web VR шутер",
  "---": "",
  "description": "VR игра, обороняйте грядки от проворных и назойливых зайцев. Узнайте сколько морковки вы сможете сохранить.",
  "images": ["/images/projects/WebVRShoot/resized_BunnyHuntVR.webp", "/images/projects/WebVRShoot/resized_BunnyHuntVR2.webp"],
  "videos": [],
  "tags": ["VR", "Game", "Shooter"],
  "tech": ["A-Frame", "Javascript", "Html"],
  "developers": ["Соколов А.В", "Иерусалимов И.Д."],
  "site": "https://webvrshoot.rtuitlab.dev/",
  "sourcecode": [{
    "name": "Проект",
    "link": "https://github.com/RTUITLab/WebVRShoot"
  }],
  "link": "WebVRShoot"
}];
var _default = data;
exports.default = _default;
},{}],"jM7F":[function(require,module,exports) {

},{}],"Z6W6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GalleryConstrucor = GalleryConstrucor;
exports.GalleryItem = GalleryItem;
exports.default = gallery;
exports.isMobile = isMobile;

require("./gallery.scss");

function GalleryItem(_ref) {
  var children = _ref.children,
      _ref$hide = _ref.hide,
      hide = _ref$hide === void 0 ? false : _ref$hide;
  return /*#__PURE__*/React.createElement("div", {
    className: 'gallery__galleryItem noselect',
    hide: hide.toString(),
    draggable: false
  }, children);
}

function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 850) {
    return true;
  } else {
    return false;
  }
}

function gallery(elem, onMouseDown, onMouseUp, onChange) {
  var localActiveView = 0;
  var ratio = 200;
  var lastX = 0;
  var newX = 0;

  var calculateScale = function calculateScale(x, n) {
    if (localActiveView == 0 && newX - lastX > 0 && n !== undefined) {
      return 1 - 0.2 * Math.abs(n);
    } else if (localActiveView == elem.children.length - 1 && newX - lastX < 0 && n !== undefined) {
      return 1 - 0.2 * n;
    }

    return 1 - 0.2 * Math.abs(x) / ratio;
  };

  var calculateX = function calculateX(x, n) {
    if (localActiveView == 0 && newX - lastX > 0 && n !== undefined) {
      return Math.pow(x / 1.2, 2 / 3) + (ratio * Math.abs(n) - Math.pow(ratio * Math.abs(n), 2 / 3)) / 1.2;
    } else if (localActiveView == elem.children.length - 1 && newX - lastX < 0 && n !== undefined) {
      return -Math.pow(-x / 1.2, 2 / 3) - (ratio * n - Math.pow(ratio * n, 2 / 3)) / 1.2;
    }

    return x / 1.2;
  };

  var clearStyles = function clearStyles(i) {
    var children = elem.children;
    Array.from(children).forEach(function (e, index) {
      e.style.opacity = '0';

      if (index < i) {
        e.style.transform = "translate(".concat(calculateX(-ratio * 2 - 20), "px,0px) scale(").concat(calculateScale(-2 * ratio - 20), ")");
      } else {
        e.style.transform = "translate(".concat(calculateX(2 * ratio + 20), "px,0px) scale(").concat(calculateScale(2 * ratio + 20), ")");
      }
    });
  };

  var setZ = function setZ(x) {
    var i = Number(x);
    var current = elem.children[i];
    if (!current) return;
    current.style.zIndex = 5;
    var childrenArr = Array.from(elem.children);

    if (i - 1 >= 0) {
      childrenArr[i - 1].style.zIndex = 4;
      if (i - 2 >= 0) childrenArr[i - 2].style.zIndex = 3;
    }

    if (i + 1 < childrenArr.length) {
      childrenArr[i + 1].style.zIndex = 4;
      if (i + 2 < childrenArr.length) childrenArr[i + 2].style.zIndex = 3;
    }
  };

  var setTransform = function setTransform(i) {
    var current = Array.from(elem.children);
    var l = 0;

    for (var j = i - 1; j >= 0; j--) {
      l++;
      current[j].style.transform = "translate(".concat(calculateX(newX - lastX - ratio * l, l), "px,0px) scale(").concat(calculateScale(newX - lastX - ratio * l, l), ")");
    }

    l = 0;

    for (var k = i + 1; k < current.length; k++) {
      l--;
      current[k].style.transform = "translate(".concat(calculateX(newX - lastX - ratio * l, l), "px,0px) scale(").concat(calculateScale(newX - lastX - ratio * l, l), ")");
    }
  };

  var setOpacity = function setOpacity(x) {
    var i = Number(x);
    var children = elem.querySelectorAll('.gallery__parent > *');
    var childrenArr = Array.from(children);
    childrenArr.forEach(function (e) {
      e.style.opacity = '0';
    });
    var current = elem.children[i];
    if (current) current.style.opacity = 1;

    if (i - 1 >= 0) {
      childrenArr[i - 1].style.opacity = 1;
      if (i - 2 >= 0) childrenArr[i - 2].style.opacity = 1;
    }

    if (i + 1 < childrenArr.length) {
      childrenArr[i + 1].style.opacity = 1;
      if (i + 2 < childrenArr.length) childrenArr[i + 2].style.opacity = 1;
    }
  };

  var setCurrentActivePanel = function setCurrentActivePanel(x) {
    var i = Number(x);
    var current = elem.children;
    if (current.length === 0) return;
    localActiveView = i;
    clearStyles(i);
    setZ(i);
    setOpacity(i);
    current[i].style.transform = '';
    current[i].style.filter = '';
    var currentArr = Array.from(elem.children);
    var l = 0;

    for (var j = i - 1; j >= 0; j--) {
      l--;
      currentArr[Number(j)].style.transform = "translate(".concat(calculateX(ratio * l), "px,0px) scale(").concat(calculateScale(ratio * l), ")");
    }

    l = 0;

    for (var k = i + 1; k < currentArr.length; k++) {
      l++;
      currentArr[Number(k)].style.transform = "translate(".concat(calculateX(ratio * l), "px,0px) scale(").concat(calculateScale(ratio * l), ")");
    }
  };

  var onTouchMove = function onTouchMove() {
    var buff = localActiveView + Math.round((lastX - newX) / ratio);

    if (buff >= 0 && elem.children.length > buff) {
      setZ(buff);
      setOpacity(buff);
      onChange(buff);
    }

    var current = elem.children[localActiveView];
    current.style.transform = "translate(".concat(calculateX(newX - lastX, 0), "px,0px) scale(").concat(calculateScale(newX - lastX, 0), ")");
    setTransform(localActiveView);
  };

  var onTouchEnd = function onTouchEnd() {
    elem.ontouchmove = null;
    elem.classList.add('gallery__anim');
    var buff = localActiveView + Math.round((lastX - newX) / ratio);

    if (buff >= 0 && elem.children.length > buff) {
      setCurrentActivePanel(buff);
      onChange(buff);
    } else {
      if (buff < 0) {
        setCurrentActivePanel(0);
        onChange(0);
      } else {
        setCurrentActivePanel(elem.children.length - 1);
        onChange(elem.children.length - 1);
      }
    }

    setTimeout(function () {
      elem.classList.remove('gallery__anim');
    }, 250);
  };

  function deleteEventListener(e) {
    elem.ontouchmove = null;
    elem.onmousemove = null;
    onTouchEnd();

    if (isMobile()) {
      window.removeEventListener('touchend', deleteEventListener);
    } else {
      window.removeEventListener('mouseup', deleteEventListener);
    }

    onMouseUp(e);
  }

  function calculateRatio() {
    var wd = window.innerWidth;
    if (wd > 1150) return 200;else if (wd > 1020) return 150;else if (wd > 820) return 130;else if (wd > 640) return 100;else if (wd > 520) return 80;else if (wd > 370) return 60;else return 50;
  }

  elem.classList.add('gallery__anim');
  ratio = calculateRatio();
  setCurrentActivePanel(0);
  window.addEventListener('resize', function () {
    ratio = calculateRatio();
    setCurrentActivePanel(localActiveView);
  });

  if (isMobile()) {
    elem.ontouchstart = function (e) {
      elem.classList.remove('gallery__anim');
      window.addEventListener('touchend', deleteEventListener, {
        passive: true
      });
      lastX = e.touches[0].clientX;
      onMouseDown(e);

      elem.ontouchmove = function (e) {
        newX = e.touches[0].clientX;
        onTouchMove();
      };
    };
  } else {
    elem.onmousedown = function (e) {
      elem.classList.remove('gallery__anim');
      window.addEventListener('mouseup', deleteEventListener, {
        passive: true
      });
      lastX = e.clientX;
      onMouseDown(e);

      elem.onmousemove = function (e) {
        newX = e.clientX;
        onTouchMove();
      };
    };
  }

  return {
    setActiveView: function setActiveView(i) {
      if (elem.children.length <= i) return false;
      localActiveView = i;
      elem.classList.add('gallery__anim');
      setCurrentActivePanel(i);
      setTimeout(function () {
        elem.classList.remove('gallery__anim');
      }, 250);
    },
    galleryDestroy: function galleryDestroy() {
      elem.onmousedown = null;
      elem.onmouseup = null;
      elem.ontouchstart = null;
      elem.ontouchmove = null;
      elem.ontouchend = null;
      elem.onmousemove = null;
      deleteEventListener();
    }
  };
}

function GalleryConstrucor() {}

GalleryConstrucor.prototype.init = function (elem, onMouseDown, onMouseUp, onChange) {
  var _gallery = gallery(elem, onMouseDown, onMouseUp, onChange),
      setActiveView = _gallery.setActiveView,
      galleryDestroy = _gallery.galleryDestroy;

  this.setActiveView = setActiveView;
  this.galleryDestroy = galleryDestroy;
  return this;
};

GalleryConstrucor.prototype.destroy = function () {
  this.galleryDestroy();
  return this;
};
},{"./gallery.scss":"jM7F"}],"TB2l":[function(require,module,exports) {
"use strict";

var _projectsData = _interopRequireDefault(require("../data/projectsData"));

var _gallery = require("../gallery/gallery");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentActiveTab = 0;
var statusBar = document.getElementById("projectsStatusBar");
var projectsInfo = document.getElementById("projectInfoContent");
var galleryParent = document.getElementById("GalleryParent");
var currentProjectTitle = document.getElementById("currentProjectTitle");
var currentProjectLink = document.getElementById("currentProjectLink");
var displayedProjects = _projectsData.default;

function onMouseDown(e) {
  projectsInfo.classList.add("projects__hide");
}

function onMouseUp(e) {
  updateProjectsInfo();
}

function updateProjectsInfo() {
  if (displayedProjects.length === 0) return;
  projectsInfo.classList.remove("projects__hide");
  currentProjectTitle.innerText = displayedProjects[currentActiveTab].title;
  currentProjectLink.href = "projects/" + displayedProjects[currentActiveTab].link;
  currentProjectLink.style.display = "block";
}

function onChange(e) {
  setActiveStatusBarPoint(e);
}

function setActiveStatusBarPoint(e) {
  if (Array.from(statusBar.children).length === 0) return;
  statusBar.children[currentActiveTab].setAttribute("active", "false");
  statusBar.children[e].setAttribute("active", "true");
  currentActiveTab = e;
}

var generateProjects = function generateProjects(e) {
  gallery.destroy();
  var projects = _projectsData.default;

  if (e !== "all") {
    projects = _projectsData.default.filter(function (k) {
      return k.tags.indexOf(e) !== -1 || k.tech.indexOf(e) !== -1;
    });
  }

  galleryParent.innerHTML = "";

  if (projects.length === 0) {
    currentActiveTab = 0;
    generateStatusBar(0);
    galleryParent.append("Тут пусто :(");
    currentProjectTitle.innerHTML = "";
    currentProjectLink.style.display = "none";
  } else {
    projects.forEach(function (e) {
      var newChild = document.createElement("div");
      newChild.className = "gallery__galleryItem noselect";
      var newImg = document.createElement("img", {
        draggable: "false",
        src: "." + e.images[0]
      });
      newImg.draggable = "false";
      newImg.src = "." + e.images[0];
      newChild.appendChild(newImg);
      galleryParent.appendChild(newChild);
    });
    displayedProjects = projects;
    generateStatusBar(projects.length);
    currentActiveTab = Math.floor(projects.length / 2);
    setActiveStatusBarPoint(currentActiveTab);
    gallery.init(document.getElementById("GalleryParent"), onMouseDown, onMouseUp, onChange);
    gallery.setActiveView(currentActiveTab);
    updateProjectsInfo();
  }

  setPointsAction();
};

window.generateProjects = generateProjects;

function generateStatusBar(count) {
  statusBar.innerHTML = "";

  for (var i = 0; i < count; i++) {
    statusBar.appendChild(document.createElement("div"));
  }
}

function setPointsAction() {
  var _loop = function _loop(i) {
    statusBar.children[i].onclick = function () {
      gallery.setActiveView(i);
      setActiveStatusBarPoint(i);
      updateProjectsInfo();
    };
  };

  for (var i in Array.from(statusBar.children)) {
    _loop(i);
  }
}

setPointsAction();
var gallery = new _gallery.GalleryConstrucor().init(document.getElementById("GalleryParent"), onMouseDown, onMouseUp, onChange);
setActiveStatusBarPoint(Math.floor(_projectsData.default.length / 2));
gallery.setActiveView(Math.floor(_projectsData.default.length / 2));
updateProjectsInfo();
document.getElementById("projects__tags__all").checked = true;
},{"../data/projectsData":"rSus","../gallery/gallery":"Z6W6"}]},{},["TB2l"], null)
//# sourceMappingURL=../dist/projects.2eec3984.js.map