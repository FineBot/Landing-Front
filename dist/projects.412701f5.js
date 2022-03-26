parcelRequire=function(e,t,i,r){var o,n="function"==typeof parcelRequire&&parcelRequire,s="function"==typeof require&&require;function a(i,r){if(!t[i]){if(!e[i]){var o="function"==typeof parcelRequire&&parcelRequire;if(!r&&o)return o(i,!0);if(n)return n(i,!0);if(s&&"string"==typeof i)return s(i);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}d.resolve=function(t){return e[i][1][t]||t},d.cache={};var c=t[i]=new a.Module(i);e[i][0].call(c.exports,d,c,c.exports,this)}return t[i].exports;function d(e){return a(d.resolve(e))}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=t,a.parent=n,a.register=function(t,i){e[t]=[function(e,t){t.exports=i},{}]};for(var l=0;l<i.length;l++)try{a(i[l])}catch(e){o||(o=e)}if(i.length){var c=a(i[i.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}if(parcelRequire=a,o)throw o;return a}({rSus:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=[{"#":"",title:"ARtillery","---":"",description:"``` Игровое приложение в дополненной реальности для Android (ранее Android, iOS). Задача игрока – продержаться как можно дольше, отстреливаясь от противников, появляющихся в пространстве вокруг него. Для защиты игрок может перемещать и наклонять телефон, а также сбивать летящие в него снаряды. Для стрельбы нужно коснуться экрана. Со временем сложность увеличивается. Существует три типа противников с разными моделями поведения и сложностью, каждый из которых появляется реже или чаще других. Приложение реализовано с использованием ARCore, что позволяет ему работать без привязки к печатной метке. Ранняя версия приложения была реализована с использованием Vuforia, для работы требуется распечатать метку.",images:["/images/projects/ARtillery/resized_ARtillery_Moment3.webp","/images/projects/ARtillery/resized_ARtillery_Moment-min.webp","/images/projects/ARtillery/resized_ARtillery_Moment2-min.webp","/images/projects/ARtillery/ARtilleryAction.gif"],videos:["https://youtu.be/BIoWlE25bD4"],tags:["AR","Unity"],tech:["Unity"],developers:["Поздняков Д.В."],sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/ARtillery"}],link:"ARtillery"},{"#":"",title:"Многопользовательская сборка ракетного двигателя","---":"",description:"``` Приложение дает пользователям возможность осуществлять процесс сборки предоставленной модели в формате виртуальной реальности. Люди могут собирать ракетный двигатель как самостоятельно, так и в многопользовательской комнате, объединившись с напарниками. Процесс сопровождают различные подсказки и тексты с описаниями деталей. Все это, вкупе с глубоким погружением, способствует быстрому усвоению материала. При окончании сборки модель становится анимированной и демонстрирует свой принцип работы.",images:["/images/projects/Engine-VR/resized_141160470-a31d20dd-86bd-4be8-9308-a631227b5ba0.webp","/images/projects/Engine-VR/resized_141155619-bb28a0e8-fd3b-4359-97e5-36f3d1cf71c3.webp","/images/projects/Engine-VR/resized_141155697-f247130d-e9a9-4f7d-812c-7a328e3022af.webp","/images/projects/Engine-VR/resized_141155722-2e5c8eab-dfef-42f7-ae67-daf43e1756d6.webp"],videos:["https://youtu.be/6FTMDRp5fN4"],tags:["VR","Game"],tech:["Unity","C#"],developers:["Сиротенко М.Р.","Корчиков М.Д.","Смирнов М.А","Лысаков И.А.","Смирнов Я.А."],site:"",sourcecode:[{name:"Исходный код",link:"https://github.com/RTUITLab/Engine-VR"}],link:"Engine-VR"},{"#":"",title:"GameCenter (система рекордов)","---":"",description:"Система предназначена для формирования очереди на выставочные стенды, для контроля посещаемости проектов лаборатории ИТ и предоставления игровой статистики пользователей. Также предусмотрено администрирование рекордов пользователей, игр, очередей.",images:["/images/projects/GameCenter-Front/resized_1.webp","/images/projects/GameCenter-Front/resized_2.webp","/images/projects/GameCenter-Front/resized_3.webp","/images/projects/GameCenter-Front/resized_4.webp"],videos:[],tags:["Frontend"],tech:["Angular","Asp.net core"],developers:["Китанин С.C.","Южаков В.Е."],site:"",sourcecode:[{name:"Фронтенд",link:"https://github.com/RTUITLab/GameCenter-Front"},{name:"Бэкенд",link:"https://github.com/RTUITLab/GameCenter-Backend"}],link:"GameCenter-Front"},{"#":"",title:"GeoHelper","---":"",description:"``` Проект для реализации AR-слоя мира, в котором отображаются объекты дополненной реальности в зависимости от заданного географического положения. Проект состоит из сайта и приложений для платформ Android и IOS. Сайт предназначен для менеджмента данными, представляемых в AR-слое. Мобильное приложение служит для отображения AR-слоя мира на экране используемого устройства.",images:["/images/projects/GeoHelperUnity/resized_1.webp","/images/projects/GeoHelperUnity/resized_2.webp","/images/projects/GeoHelperUnity/resized_3.webp","/images/projects/GeoHelperUnity/resized_4.webp"],videos:[],tags:["Frontend","Backend","Mobile","AR"],tech:["Vue","Node.js","Unity","AR Foundation","C#"],developers:["Лаптев И.А.","Китанин С.С.","Быковская О.C.","Смирнов Я.А."],site:"",sourcecode:[{name:"Фронтенд",link:"https://github.com/RTUITLab/GeoHelper-Front"},{name:"Бэкенд",link:"https://github.com/RTUITLab/GeoHelper-Back"},{name:"Unity проект (приложение для Android или Ios)",link:"https://github.com/RTUITLab/GeoHelperUnity"}],link:"GeoHelperUnity"},{"#":"",title:"GyroBall","---":"",description:"Мобильное приложение – игра для проверки удобства использования механики акселерометра.\nИспользование поворотов телефона для управления шариком. У шарика предполагается 4 состояния, соответствующих стихиям, каждое состояние несёт в себе определённую соответствующую механику. Локации к игре будут соответствовать стихийной тематике.",images:["/images/projects/GyroBall/resized_23.webp","/images/projects/GyroBall/resized_21.webp","/images/projects/GyroBall/resized_1.webp","/images/projects/GyroBall/resized_2.webp","/images/projects/GyroBall/resized_3.webp"],videos:[],tags:["Mobile"],tech:["C#","3D modeling","Unity 3D"],developers:["Баканова М.В.","Новаков Н.Ю."],site:"",sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/GyroBall"}],link:"GyroBall"},{"#":"",title:"ITLab (система управления лабораторией)","---":"",description:"Для организации работы людей в лаборатории создана система, учитывающая активность людей, участие в мероприятиях, оплату работы сотрудников. Система позволяет распределять нагрузку, обеспечивать прозрачность выполняемых действий и мероприятий. Сайт создан для внутреннего использования и доступ к имеют только сотрудники лаборатории. Проект состоит из нескольких бекендов, написанный на разных языках программирования, таких как C#, GO, Kotlin. Фронтенд реализован на фреймворке Vue.JS. Мобильное приложение для iOS реализовано на языке Swift с использованием фреймворка SwiftUI. Так же система имеет возможность уведомлять людей о изменениях, при помощи бота вконтакте или почты.",images:["/images/projects/ITLab/resized_1.webp","/images/projects/ITLab/resized_2.webp","/images/projects/ITLab/resized_ios_1.webp","/images/projects/ITLab/resized_ios_2.webp"],videos:[],tags:["Frontend","Backend","Mobile"],tech:["Vue","ASP","Ktor","Swift"],developers:["Макущенко М.А.","Романов Д.Е.","Комар Б.Г.","Кузнецов А.А.","Иванов М.Е."],site:"",sourcecode:[{name:"Фронтенд",link:"https://github.com/RTUITLab/ITLab-Front"},{name:"Система событий/оборудования",link:"https://github.com/RTUITLab/ITLab-Back"},{name:"Система уведомлений",link:"https://github.com/RTUITLab/ITLab-Notify"},{name:"Система записей о работе",link:"https://github.com/RTUITLab/ITLab-Reports"},{name:"Система учета зарплат",link:"https://github.com/RTUITLab/ITLab-Salary"},{name:"Приложение для iOS",link:"https://github.com/RTUITLab/ITLab-iOS"}],link:"ITLab"},{"#":"",title:"Сервис проектов RTUITLab","---":"",description:"Сервис позволяет отслеживать проекты лаборатории, мониторить их прогресс\nВозможность хранить файлы, относящиеся к проекту, оставлять новости\nА также распределение ролей",tags:["Backend","Golang"],tech:["Go","MongoDB"],developers:["Демин Д.Д.","Миронов Н.М.","Лаптев И.А.","Корольков А.Д.","Баикин К.Е."],images:["/images/projects/ITLab-Projects/resized_list.webp","/images/projects/ITLab-Projects/resized_show_ArtWay.webp","/images/projects/ITLab-Projects/resized_show_ArtWay2.webp","/images/projects/ITLab-Projects/resized_show_VIKA.webp","/images/projects/ITLab-Projects/resized_edit_VIKA.webp"],videos:[],site:"https://manage.rtuitlab.dev/projects",sourcecode:[{name:"Бекенд",link:"https://github.com/RTUITLab/ITLab-Projects"},{name:"Фронтенд",link:"https://github.com/RTUITLab/ITLab-Projects-Front"}],link:"ITLab-Projects"},{"#":"",title:"Owl Cabin - Летай - созерцай - собирай - улучшай","---":"",description:"Приложение представляет собой казуальную мобильную игру. Описание игрового процесса: пользователь заходит в приложение, выбирает локацию, собирает звёздочки и параллельно улучшает свой самолёт, после сбора определенного количества звёзд — игра завершается и можно выбрать локацию снова.\nИгра сделана простой как в логике, так и в управлении, потому что заточена под вовлечение пользователя не в процесс игры, а расслабление и наслаждение от полёта.\nНа фоне играет успокаивающая музыка, управление только голой.",images:["/images/projects/OwlCabin/resized_1.webp","/images/projects/OwlCabin/resized_2.webp","/images/projects/OwlCabin/resized_3.webp","/images/projects/OwlCabin/resized_4.webp","/images/projects/OwlCabin/resized_5.webp","/images/projects/OwlCabin/resized_6.webp","/images/projects/OwlCabin/resized_7.webp"],videos:[],tags:["VR","Game","Aircraft","Relax","Easy play"],tech:["Unity","Google Cardboard"],developers:["Миронов Н. М.","Иерусалимов И. Д.","Корчиков М. Д.","Валяев Д. А.","Шошников И. К."],site:"",sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/OwlCabin"}],link:"OwlCabin"},{"#":"",title:"Plane crash simulator","---":"",description:"Симулятор, помещающий пользователя в ситуацию, когда он находится в падающем самолете",images:["/images/projects/PlaneCrashSimulator/resized_1.webp","/images/projects/PlaneCrashSimulator/resized_2.webp","/images/projects/PlaneCrashSimulator/resized_3.webp"],videos:[],tags:["VR"],tech:["Unity","Steam VR","C#"],developers:["Валяев Д.А.","Шорин И.А."],site:"",sourcecode:[{name:"Source code",link:"https://github.com/RTUITLab/PlainCrashSimulator"}],link:"PlaneCrashSimulator"},{"#":"",title:"ЗИЛ","---":"",description:"Проект для futurift кресла, который помещает игрока в зону боевых действий, где необходимо оторваться от преследования.",images:["/images/projects/Project-3IL/resized_0.webp","/images/projects/Project-3IL/resized_1.webp","/images/projects/Project-3IL/resized_2.webp","/images/projects/Project-3IL/resized_3.webp"],videos:[],tags:["VR"],tech:["Unity","Steam VR","C#"],developers:["Смирнов М.А.","Новаков Н.Ю.","Егоркин Н.Е.","Валяев Д.А.","Макаров Д.В.","Макущенко М.А.","Баканова М.В.","Шорин И.А.","Иерусалимов И.Д."],site:"",sourcecode:[{name:"Source code",link:"https://github.com/RTUITLab/Project-3IL"}],link:"Project-3IL"},{"#":"",title:"Виртуальный ситуационный центр","---":"",description:"Виртуальный ситуационный центр позволяет множеству людей в любой точке планеты взаимодействовать между собой в единой среде виртуальной реальности. При этом возможно использование любого доступного на данный момент шлема виртуальной реальности. Также сервисом можно пользоваться без шлема, используя клавиатуру и мышь. В сервисе реализована концепция комнат, к которым подключаются люди, и их общение происходит только внутри данного пространства. Разговоры и обмен файлами не выйдут за пределы выделенного пространства, что обеспечивает конфиденциальность приватного общения. Внутри выделенного виртуального пространства люди могут общаться при помощи голосового чата, могут обмениваться документами из облачных хранилищ (OneDrive, Google drive…), просматривать их, комментировать и обсуждать. В данный момент сервис находится на стадии открытого тестирования.",images:["/images/projects/SC/resized_1.webp","/images/projects/SC/resized_2.webp"],videos:["https://youtu.be/HRFRQa3tMcI"],tags:["VR","Social"],tech:["NodeJS","ASP. net core","Unreal Engine"],developers:["Макущенко М.А.","Иванов И.Е."],site:"",sourcecode:[],link:"SC"},{"#":"",title:"StuDo","---":"",description:"Сервис предназначен для людей, кто желает найти себе партнёров или команду для осуществления своей мечты! В чём заключается задача сервиса: это платформа для поиска людей или команды. Как происходит поиск команды: Вы выкладываете объявление, в котором кратко сообщаете о том, что хотите сделать, что собираетесь сделать именно Вы, и какие люди нужны вам в команды. Другие же просматривают ленту объявлений (или ищут по тегам) и видят ваше объявление и сообщают вам, что готовы принять участие в вашем проекте. На данный момент проект находится в разработке, в скором времени будет доступен для публичного тестирования. Данный сервис реализован на мобильных устройствах и разрабатывается под браузер.",images:["/images/projects/StuDo/resized_1.webp","/images/projects/StuDo/resized_2.webp","/images/projects/StuDo/resized_3.webp"],videos:["https://youtu.be/WyLDHwuZedc"],tags:["Web","Mobile","Tool"],tech:["Vue","ASP.NET core"],developers:["Миронов Н. М.","Цуканов Д. М.","Яковлев А. А.","Алексеев Н. Е.","Лаптев И. А."],site:"",sourcecode:[{name:"Бэкенд",link:"https://github.com/RTUITLab/StuDo-Back"},{name:"Фронтэнд",link:"https://github.com/RTUITLab/StuDo-Front"},{name:"IOS",link:"https://github.com/MrFoggz/StuDo-iOS"},{name:"Android",link:"https://github.com/Suput/StuDo-Android"}],link:"StuDo"},{"#":"",title:"Шутер в виртуальной реальности","---":"",description:"Шутер в формате виртуальной реальности, позволяющий оттачивать стрельбу из оружия разных видов и уворачиваться от вражеских пуль. В игре можно бросить вызов сразу нескольким противникам, либо сначала потренироваться в спокойной обстановке. В таком режиме у пользователя есть возможность стрелять по бутылкам в баре и мишеням в тире. На выбор представлено 5 моделей оружия, 4 локации и 3 уровня сложности.",images:["/images/projects/VRDuel/resized_148579235-a4f9e25e-dc3c-49d8-b1a6-7dbabfa52a99.webp","/images/projects/VRDuel/resized_148580147-297f79e2-15e3-4b34-8108-9550982b0fe2.webp","/images/projects/VRDuel/resized_148580160-84ee7b40-83f9-439c-a37e-4e1184bd4dd5.webp","/images/projects/VRDuel/resized_148580059-71f366be-9f6c-44bf-a662-abf7e3e00003.webp"],videos:[],tags:["VR","Game"],tech:["Unity","C#"],developers:["Егоркин Н.Е.","Шорин И.А."],site:"",sourcecode:[{name:"Исходный код",link:"https://github.com/RTUITLab/VRDuel"}],link:"VRDuel"},{"#":"",title:"VRTherapy - Приложение для релаксации в VR со множеством разнообразных активностей","---":"",description:"В VRTherapy вы можете погрузиться в захватывающую и успокаивающую виртуальную реальность с приятным звуковым сопровождением. Отдохните у виртуального костра, прогуляйтесь по летнему лесу, послушайте шум прибоя или же сыграйте в мини-игру, где вам предстоит управлять бумажным самолётиком на ветру. Данная игра предназначена исключительно для запуска в портативном VR-шлеме для Android, например, Google Cardboard.",images:["/images/projects/VRTherapy/resized_screenshot1.webp","/images/projects/VRTherapy/resized_screenshot2.webp","/images/projects/VRTherapy/resized_screenshot3.webp","/images/projects/VRTherapy/resized_screenshot4.webp"],videos:[],tags:["VR","Game","Simulator","Arcade"],tech:["Unity","Android","Google VR","Google Cardboard"],developers:["Баканова М.","Левандровский А.","Матчин А.","Новаков Н."],site:"",sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/VRTherapy"}],"разработчики":"",link:"VRTherapy"},{"#":"",title:"BunnyHuntVR - Web VR шутер","---":"",description:"VR игра, обороняйте грядки от проворных и назойливых зайцев. Узнайте сколько морковки вы сможете сохранить.",images:["/images/projects/WebVRShoot/resized_BunnyHuntVR.webp","/images/projects/WebVRShoot/resized_BunnyHuntVR2.webp"],videos:[],tags:["VR","Game","Shooter"],tech:["A-Frame","Javascript","Html"],developers:["Соколов А.В","Иерусалимов И.Д."],site:"https://webvrshoot.rtuitlab.dev/",sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/WebVRShoot"}],link:"WebVRShoot"}];i.default=r},{}],jM7F:[function(e,t,i){},{}],Z6W6:[function(e,t,i){"use strict";function r(){return!!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=850)}function o(e,t,i,o){var n=0,s=200,a=0,l=0,c=function(t,i){return 0==n&&l-a>0&&void 0!==i?1-.2*Math.abs(i):n==e.children.length-1&&l-a<0&&void 0!==i?1-.2*i:1-.2*Math.abs(t)/s},d=function(t,i){return 0==n&&l-a>0&&void 0!==i?Math.pow(t/1.2,2/3)+(s*Math.abs(i)-Math.pow(s*Math.abs(i),2/3))/1.2:n==e.children.length-1&&l-a<0&&void 0!==i?-Math.pow(-t/1.2,2/3)-(s*i-Math.pow(s*i,2/3))/1.2:t/1.2},p=function(t){var i=Number(t),r=e.children[i];if(r){r.style.zIndex=5;var o=Array.from(e.children);i-1>=0&&(o[i-1].style.zIndex=4,i-2>=0&&(o[i-2].style.zIndex=3)),i+1<o.length&&(o[i+1].style.zIndex=4,i+2<o.length&&(o[i+2].style.zIndex=3))}},u=function(t){var i=Number(t),r=e.querySelectorAll(".gallery__parent > *"),o=Array.from(r);o.forEach((function(e){e.style.opacity="0"}));var n=e.children[i];n&&(n.style.opacity=1),i-1>=0&&(o[i-1].style.opacity=1,i-2>=0&&(o[i-2].style.opacity=1)),i+1<o.length&&(o[i+1].style.opacity=1,i+2<o.length&&(o[i+2].style.opacity=1))},m=function(t){var i=Number(t),r=e.children;if(0!==r.length){n=i,function(t){var i=e.children;Array.from(i).forEach((function(e,i){e.style.opacity="0",e.style.transform=i<t?"translate(".concat(d(2*-s-20),"px,0px) scale(").concat(c(-2*s-20),")"):"translate(".concat(d(2*s+20),"px,0px) scale(").concat(c(2*s+20),")")}))}(i),p(i),u(i),r[i].style.transform="",r[i].style.filter="";for(var o=Array.from(e.children),a=0,l=i-1;l>=0;l--)a--,o[Number(l)].style.transform="translate(".concat(d(s*a),"px,0px) scale(").concat(c(s*a),")");a=0;for(var m=i+1;m<o.length;m++)a++,o[Number(m)].style.transform="translate(".concat(d(s*a),"px,0px) scale(").concat(c(s*a),")")}},g=function(){var t=n+Math.round((a-l)/s);t>=0&&e.children.length>t&&(p(t),u(t),o(t)),e.children[n].style.transform="translate(".concat(d(l-a,0),"px,0px) scale(").concat(c(l-a,0),")"),function(t){for(var i=Array.from(e.children),r=0,o=t-1;o>=0;o--)r++,i[o].style.transform="translate(".concat(d(l-a-s*r,r),"px,0px) scale(").concat(c(l-a-s*r,r),")");r=0;for(var n=t+1;n<i.length;n++)r--,i[n].style.transform="translate(".concat(d(l-a-s*r,r),"px,0px) scale(").concat(c(l-a-s*r,r),")")}(n)};function b(t){e.ontouchmove=null,e.onmousemove=null,function(){e.ontouchmove=null,e.classList.add("gallery__anim");var t=n+Math.round((a-l)/s);t>=0&&e.children.length>t?(m(t),o(t)):t<0?(m(0),o(0)):(m(e.children.length-1),o(e.children.length-1)),setTimeout((function(){e.classList.remove("gallery__anim")}),250)}(),r()?window.removeEventListener("touchend",b):window.removeEventListener("mouseup",b),i(t)}function h(){var e=window.innerWidth;return e>1150?200:e>1020?150:e>820?130:e>640?100:e>520?80:e>370?60:50}return e.classList.add("gallery__anim"),s=h(),m(0),window.addEventListener("resize",(function(){s=h(),m(n)})),r()?e.ontouchstart=function(i){e.classList.remove("gallery__anim"),window.addEventListener("touchend",b,{passive:!0}),a=i.touches[0].clientX,t(i),e.ontouchmove=function(e){l=e.touches[0].clientX,g()}}:e.onmousedown=function(i){e.classList.remove("gallery__anim"),window.addEventListener("mouseup",b,{passive:!0}),a=i.clientX,t(i),e.onmousemove=function(e){l=e.clientX,g()}},{setActiveView:function(t){if(e.children.length<=t)return!1;n=t,e.classList.add("gallery__anim"),m(t),setTimeout((function(){e.classList.remove("gallery__anim")}),250)},galleryDestroy:function(){e.onmousedown=null,e.onmouseup=null,e.ontouchstart=null,e.ontouchmove=null,e.ontouchend=null,e.onmousemove=null,b()}}}function n(){}Object.defineProperty(i,"__esModule",{value:!0}),i.GalleryConstrucor=n,i.GalleryItem=function(e){var t=e.children,i=e.hide,r=void 0!==i&&i;return React.createElement("div",{className:"gallery__galleryItem noselect",hide:r.toString(),draggable:!1},t)},i.default=o,i.isMobile=r,e("./gallery.scss"),n.prototype.init=function(e,t,i,r){var n=o(e,t,i,r),s=n.setActiveView,a=n.galleryDestroy;return this.setActiveView=s,this.galleryDestroy=a,this},n.prototype.destroy=function(){return this.galleryDestroy(),this}},{"./gallery.scss":"jM7F"}],TB2l:[function(e,t,i){"use strict";var r,o=(r=e("../data/projectsData"))&&r.__esModule?r:{default:r},n=e("../gallery/gallery");var s=0,a=document.getElementById("projectsStatusBar"),l=document.getElementById("projectInfoContent"),c=document.getElementById("GalleryParent"),d=document.getElementById("currentProjectTitle"),p=document.getElementById("currentProjectLink"),u=o.default;function m(e){l.classList.add("projects__hide")}function g(e){b()}function b(){0!==u.length&&(l.classList.remove("projects__hide"),d.innerText=u[s].title,p.href="projects/"+u[s].link,p.style.display="block")}function h(e){f(e)}function f(e){0!==Array.from(a.children).length&&(a.children[s].setAttribute("active","false"),a.children[e].setAttribute("active","true"),s=e)}function y(e){a.innerHTML="";for(var t=0;t<e;t++)a.appendChild(document.createElement("div"))}function v(){var e=function(e){a.children[e].onclick=function(){w.setActiveView(e),f(e),b()}};for(var t in Array.from(a.children))e(t)}window.generateProjects=function(e){w.destroy();var t=o.default;"all"!==e&&(t=o.default.filter((function(t){return-1!==t.tags.indexOf(e)||-1!==t.tech.indexOf(e)}))),c.innerHTML="",0===t.length?(s=0,y(0),c.append("Тут пусто :("),d.innerHTML="",p.style.display="none"):(t.forEach((function(e){var t=document.createElement("div");t.className="gallery__galleryItem noselect";var i=document.createElement("img",{draggable:"false",src:"."+e.images[0]});i.draggable="false",i.src="."+e.images[0],t.appendChild(i),c.appendChild(t)})),u=t,y(t.length),f(s=Math.floor(t.length/2)),w.init(document.getElementById("GalleryParent"),m,g,h),w.setActiveView(s),b()),v()},v();var w=(new n.GalleryConstrucor).init(document.getElementById("GalleryParent"),m,g,h);f(Math.floor(o.default.length/2)),w.setActiveView(Math.floor(o.default.length/2)),b(),window.addEventListener("load",(function(){document.getElementById("projects__tags__all").checked=!0}),{passive:!0})},{"../data/projectsData":"rSus","../gallery/gallery":"Z6W6"}]},{},["TB2l"]);