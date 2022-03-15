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
  "title": "Многопользовательская сборка ракетного двигателя",
  "description": "Приложение дает пользователям возможность осуществлять процесс сборки предоставленной модели в формате виртуальной реальности. Люди могут собирать ракетный двигатель как самостоятельно, так и в многопользовательской комнате, объединившись с напарниками. Процесс сопровождают различные подсказки и тексты с описаниями деталей. Все это, вкупе с глубоким погружением, способствует быстрому усвоению материала. При окончании сборки модель становится анимированной и демонстрирует свой принцип работы.",
  "images": ["/images/projects/Engine-VR/141160470-a31d20dd-86bd-4be8-9308-a631227b5ba0.png", "/images/projects/Engine-VR/141155619-bb28a0e8-fd3b-4359-97e5-36f3d1cf71c3.png", "/images/projects/Engine-VR/141155697-f247130d-e9a9-4f7d-812c-7a328e3022af.png", "/images/projects/Engine-VR/141155722-2e5c8eab-dfef-42f7-ae67-daf43e1756d6.png"],
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
  "title": "ITLab (система управления лабораторией)",
  "description": "Для организации работы людей в лаборатории создана система, учитывающая активность людей, участие в мероприятиях, оплату работы сотрудников. Система позволяет распределять нагрузку, обеспечивать прозрачность выполняемых действий и мероприятий. Сайт создан для внутреннего использования и доступ к имеют только сотрудники лаборатории. Проект состоит из нескольких бекендов, написанный на разных языках программирования, таких как C#, GO, Kotlin. Фронтенд реализован на фреймворке Vue.JS. Мобильное приложение для iOS реализовано на языке Swift с использованием фреймворка SwiftUI. Так же система имеет возможность уведомлять людей о изменениях, при помощи бота вконтакте или почты.",
  "images": ["/images/projects/ITLab/1.png", "/images/projects/ITLab/2.png", "/images/projects/ITLab/ios_1.png", "/images/projects/ITLab/ios_2.png"],
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
  "title": "Клавиатура с отслеживанием рук",
  "description": "Проект с механической клавиатурой в формате виртуальной реальности для шлемов Oculus Quest и Oculus Quest 2. Нажатия на клавиши осуществляются при помощи трекинга рук с камер шлема, никаких контроллеров! Текст, вводимый с клавиатуры, выводится на экран монитора. Клавиатура позволяет печатать на русском и английском языках.",
  "images": ["/images/projects/Oculus-HandTracking-Keyboard/1.png", "/images/projects/Oculus-HandTracking-Keyboard/2.png", "/images/projects/Oculus-HandTracking-Keyboard/3.png"],
  "videos": ["https://youtu.be/V3ekuwMH8WU"],
  "tags": ["VR", "Game"],
  "tech": ["Unity", "C#"],
  "developers": ["Смирнов Я.А."],
  "site": "",
  "sourcecode": [{
    "name": "Исходный код",
    "link": "https://github.com/RTUITLab/Oculus-HandTracking-Keyboard"
  }],
  "link": "Oculus-HandTracking-Keyboard"
}, {
  "title": "Шутер в виртуальной реальности",
  "description": "Шутер в формате виртуальной реальности, позволяющий оттачивать стрельбу из оружия разных видов и уворачиваться от вражеских пуль. В игре можно бросить вызов сразу нескольким противникам, либо сначала потренироваться в спокойной обстановке. В таком режиме у пользователя есть возможность стрелять по бутылкам в баре и мишеням в тире. На выбор представлено 5 моделей оружия, 4 локации и 3 уровня сложности.",
  "images": ["/images/projects/VRDuel/148579235-a4f9e25e-dc3c-49d8-b1a6-7dbabfa52a99.jpg", "/images/projects/VRDuel/148580147-297f79e2-15e3-4b34-8108-9550982b0fe2.jpg", "/images/projects/VRDuel/148580160-84ee7b40-83f9-439c-a37e-4e1184bd4dd5.jpg", "/images/projects/VRDuel/148580059-71f366be-9f6c-44bf-a662-abf7e3e00003.jpg"],
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
  "title": "BunnyHuntVR - Web VR шутер",
  "description": "VR игра, обороняйте грядки от проворных и назойливых зайцев. Узнайте сколько морковки вы сможете сохранить.",
  "images": ["/images/projects/WebVRShoot/BunnyHuntVR.png", "/images/projects/WebVRShoot/BunnyHuntVR2.png"],
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
    className: "gallery__galleryItem noselect",
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
      e.style.opacity = "0";

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
    var children = elem.querySelectorAll(".gallery__parent > *");
    var childrenArr = Array.from(children);
    childrenArr.forEach(function (e) {
      e.style.opacity = "0";
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
    current[i].style.transform = "";
    current[i].style.filter = "";
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
    elem.classList.add("gallery__anim");
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
      elem.classList.remove("gallery__anim");
    }, 250);
  };

  function deleteEventListener(e) {
    elem.ontouchmove = null;
    elem.onmousemove = null;
    onTouchEnd();

    if (isMobile()) {
      window.removeEventListener("touchend", deleteEventListener);
    } else {
      window.removeEventListener("mouseup", deleteEventListener);
    }

    onMouseUp(e);
  }

  function calculateRatio() {
    var wd = window.innerWidth;
    if (wd > 1150) return 200;else if (wd > 1020) return 150;else if (wd > 820) return 130;else if (wd > 640) return 100;else if (wd > 520) return 80;else if (wd > 370) return 60;else return 50;
  }

  elem.classList.add("gallery__anim");
  ratio = calculateRatio();
  setCurrentActivePanel(0);
  window.addEventListener("resize", function () {
    ratio = calculateRatio();
    setCurrentActivePanel(localActiveView);
  });

  if (isMobile()) {
    elem.ontouchstart = function (e) {
      elem.classList.remove("gallery__anim");
      window.addEventListener("touchend", deleteEventListener, {
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
      elem.classList.remove("gallery__anim");
      window.addEventListener("mouseup", deleteEventListener, {
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
      elem.classList.add("gallery__anim");
      setCurrentActivePanel(i);
      setTimeout(function () {
        elem.classList.remove("gallery__anim");
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
//# sourceMappingURL=projects.1553388d.js.map