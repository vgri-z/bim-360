let imgDialogEl = document.getElementById("img-dialog");
let dialogImgEl = document.getElementsByClassName("img")[0];
let num = 0;
const hotspot = (hotSpotDom, args) => {
  num++;
  const data = args;

  hotSpotDom.classList.add(data.cssClass);
  hotSpotDom.id = data.id;
  // hotSpotDom.setAttribute("data-url", data.imgUrl);
  hotSpotDom.setAttribute("data-scale", "scale");
  // hotSpotDom.setAttribute("data-name", data.imgName);
  // hotSpotDom.setAttribute("data-className", data.bgClassName);
  if (num === 6) {
    setIconScale();
    setBubbleEvents();
  }
};

// 视角
const angels = [
  {
    title: "垃圾坑",
    hfov: 30,
    pitch: 5,
    yaw: 45,
  },
  {
    title: "垃圾吊抓斗",
    hfov: 40,
    pitch: 0,
    yaw: -40,
  },
  {
    title: "垃圾运输车",
    hfov: 40,
    pitch: 0,
    yaw: 70,
  },
  {
    title: "快速卷帘门",
    hfov: 40,
    pitch: 10,
    yaw: -175,
  },
  {
    title: "卸料大厅",
    hfov: 200,
    pitch: 0,
    yaw: 90,
  },
  {
    title: "卸料门",
    hfov: 40,
    pitch: 10,
    yaw: 20,
  },
];

const panoramaObj = pannellum.viewer("panorama", {
  type: "equirectangular",
  panorama: "./assets/360-2.png",
  autoLoad: true,
  autoRotate: 0, // 为0停止自动旋转
  stopAutoRotate: true,
  // hfov: 200,
  // pitch: 0,
  // yaw: 90,
  hotSpots: [
    {
      pitch: 12,
      yaw: 44,
      cssClass: "hotspot",
      createTooltipFunc: hotspot,
      createTooltipArgs: {
        id: "bubble1",
        title: "垃圾坑",
        cssClass: "tooltip",
        imgUrl: "./assets/xieliao-warn.png",
      },
    },
    {
      pitch: 6,
      yaw: 320,
      cssClass: "hotspot",
      createTooltipFunc: hotspot,
      createTooltipArgs: {
        id: "bubble2",
        title: "垃圾吊抓斗",
        cssClass: "tooltip",
        imgUrl: "./assets/ljdz-warn.png",
      },
    },
    {
      pitch: 2,
      yaw: 50,
      cssClass: "hotspot",
      createTooltipFunc: hotspot,
      createTooltipArgs: {
        id: "bubble3",
        title: "垃圾运输车",
        cssClass: "tooltip",
        imgUrl: "./assets/ydqt-warn.png",
      },
    },
    {
      pitch: 20,
      yaw: 195,
      cssClass: "hotspot",
      createTooltipFunc: hotspot,
      createTooltipArgs: {
        id: "bubble4",
        title: "快速卷帘门",
        cssClass: "tooltip",
        imgUrl: "./assets/ydqt-warn.png",
      },
    },
    {
      pitch: 9,
      yaw: 280,
      cssClass: "hotspot",
      createTooltipFunc: hotspot,
      createTooltipArgs: {
        id: "bubble5",
        title: "卸料大厅",
        cssClass: "tooltip",
        imgUrl: "./assets/xlmzh-warn.png",
      },
    },
    {
      pitch: 10,
      yaw: 383,
      cssClass: "hotspot",
      createTooltipFunc: hotspot,
      createTooltipArgs: {
        id: "bubble6",
        title: "卸料门",
        cssClass: "tooltip",
        imgUrl: "./assets/xlmzh-warn.png",
      },
    },
  ],
});

// 设置视角
function setViewport(viewport) {
  panoramaObj.setYaw(viewport.yaw);
  panoramaObj.setHfov(viewport.hfov);
  panoramaObj.setPitch(viewport.pitch);
}

// 气泡动画
function setIconScale() {
  const hotSpotDoms = document.getElementsByClassName("hotspot");
  Array.from(hotSpotDoms).forEach((item, index) => {
    setInterval(() => {
      let flag = item.getAttribute("data-flag");
      if (flag === "scale") {
        item.style.width = "176px";
        item.style.height = "46px";
        // item.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        hotSpotDoms[index].setAttribute("data-flag", "");
      } else {
        item.style.width = "186px";
        item.style.height = "49px";
        // item.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        hotSpotDoms[index].setAttribute("data-flag", "scale");
      }
    }, 1000);
  });
}

// 弹窗交互(气泡点击)
const dialogEl = document.getElementById("dialog");
const warnUlEl = document.querySelector(".warn-images > .list > ul");
const videoUlEl = document.querySelector(".files .list .videos");
const warnTitleEl = document.querySelector(".warn-images > .title");
const contentEl = document.querySelector(".summary .list"); // 具体内容
const fileItemEl = document.querySelector(".files .list .cases .list-item"); //
let warnItemEls = null;
function setBubbleEvents() {
  const hotSpotDoms = document.getElementById("panorama").getElementsByClassName("hotspot");
  Array.from(hotSpotDoms).forEach((item, index) => {
    item.addEventListener("click", function () {
      let htmlStr = "";
      fileItemEl.style.display = "none";
      imgConfigInfos[index].forEach((item, indey) => {
        let content;

        if (item.content) {
          content = JSON.stringify(item.content).replace(/\"/g, "'");
        } else {
          content = "''";
        }

        // 默认展示第一个菜单的具体内容
        htmlStr += `
          <li class="list-item ${item.bgClassName} ${
          indey === 0 ? "active" : ""
        }" onclick="listItemClick(${content})" data-pdfUrl="${item.pdfUrl}">
            <img src="${indey === 0 ? "./assets/warn5.png" : "./assets/warn3.png"}" alt="" />
            <span class="name">${item.imgName}</span>
          </li>
        `;

        // 添加具体内容
        if (indey === 0) {
          appendContent(item.content);
          if (item.pdfUrl) {
            fileItemEl.style.display = "block";
          }
        }

        // 判断是否添加视频
        if (item.videoUrl) {
          // console.log(item.videoUrl);
          videoUlEl.innerHTML = `<li class="list-item">
            <video src="${item.videoUrl}" controls muted></video>
          </li>`;
        } else {
          videoUlEl.innerHTML = `<li class="list-item" style='color: #fff; text-align: center'> <h3>暂无视频</h3> </li>`;
        }
      });
      warnUlEl.innerHTML = htmlStr;
      warnItemEls = warnUlEl.getElementsByClassName("list-item");
      warnTitleEl.innerHTML = imgConfigInfos[index][0].name;
      setViewport(angels[index]);
      dialogEl.style.display = "block";
    });
  });
}

// 关闭弹窗
function closeDialog() {
  dialogEl.style.display = "none";
}

// 关闭图片弹窗
function closeImgDialog() {
  imgDialogEl.style.display = "none";
}

// 菜单交互
const navsEl = document.getElementsByClassName("navs")[0];
const navItemEl = navsEl.getElementsByClassName("nav")[0];
const menuItemEls = navsEl.getElementsByClassName("item");
let flag = true;
navItemEl.addEventListener("click", function () {
  const imgEl = this.getElementsByClassName("arrow-img")[0];
  if (flag) {
    imgEl.setAttribute("src", "./assets/arrow_up.png");
    this.style.backgroundImage = 'url("./assets/menu_active.png")';
    const menuEL = this.getElementsByClassName("items")[0];
    menuEL.style.display = "block";
    flag = false;
  } else {
    imgEl.setAttribute("src", "./assets/arrow_down.png");
    this.style.backgroundImage = 'url("./assets/menu_item.png")';
    const menuEL = this.getElementsByClassName("items")[0];
    menuEL.style.display = "none";
    flag = true;
  }
});

Array.from(menuItemEls).forEach((item, index) => {
  const imgEl = item.getElementsByClassName("warn-img")[0];
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    fileItemEl.style.display = "none";
    let htmlStr = "";
    imgConfigInfos[index].forEach((item, indey) => {
      let content;

      if (item.content) {
        content = JSON.stringify(item.content).replace(/\"/g, "'");
      } else {
        content = "''";
      }

      // 默认展示第一个菜单的具体内容
      htmlStr += `
        <li class="list-item ${item.bgClassName} ${
        indey === 0 ? "active" : ""
      }" onclick="listItemClick(${content})" data-pdfUrl="${item.pdfUrl}">
          <img src="${indey === 0 ? "./assets/warn5.png" : "./assets/warn3.png"}" alt="" />
          <span class="name">${item.imgName}</span>
        </li>
      `;

      // 添加具体内容
      if (indey === 0) {
        appendContent(item.content);
        if (item.pdfUrl) {
          fileItemEl.style.display = "block";
        }
      }

      if (item.videoUrl) {
        // console.log(item.videoUrl);
        videoUlEl.innerHTML = `<li class="list-item">
          <video src="${item.videoUrl}" controls muted></video>
        </li>`;
      } else {
        videoUlEl.innerHTML = `<li class="list-item" style='color: #fff; text-align: center'> <h3>暂无视频</h3> </li>`;
      }
    });
    warnUlEl.innerHTML = htmlStr;
    warnItemEls = warnUlEl.getElementsByClassName("list-item");
    warnTitleEl.innerHTML = imgConfigInfos[index][0].name;
    setViewport(angels[index]);
    dialogEl.style.display = "block";
  });
  item.addEventListener("mouseenter", function (e) {
    if (imgEl) {
      imgEl.setAttribute("src", "./assets/warn1.png");
    }
  });
  item.addEventListener("mouseleave", function (e) {
    if (imgEl) {
      imgEl.setAttribute("src", "./assets/warn2.png");
    }
  });
});

// 告示牌
// Array.from(warnItemEls).forEach((item, index) => {
//   item.addEventListener("click", function () {
//     console.log("======");
//     imgDialogEl.style.display = "block";
//   });
// });
function listItemClick(content) {
  // console.log(content)
  const e = window.event;
  let target = e.target;

  if (e.target.tagName !== "LI") {
    target = target.parentNode;
  }

  if (target.getAttribute("class").indexOf("forbid") !== -1) {
    // 禁止点击
    return;
  } else {
    // 移处所有菜单的active 样式类和警告图片
    for (let item of warnUlEl.getElementsByClassName("list-item")) {
      item.getElementsByTagName("img")[0].src = "./assets/warn3.png";
      item.classList.remove("active");
    }

    if (target.getAttribute("data-pdfUrl")) {
      fileItemEl.style.display = "block";
    } else {
      fileItemEl.style.display = "none";
    }
    // 为点击的菜单添加active样式类和选中警告图片
    target.classList.add("active");
    target.getElementsByTagName("img")[0].src = "./assets/warn5.png";
  }

  // 添加具体内容
  appendContent(content);
}

// 添加剧体内容
function appendContent(data) {
  // 单引号转双引号
  // console.log(typeof data)
  // data = data.split("'").join('"')
  // let content = JSON.parse(data)
  const content = data;
  let htmlStr = "";
  if (content) {
    htmlStr += `
    <!-- 可能发生的事故类型及结后果 -->
    <div class="possible list-item">
      <h4 class="item-title">可能发生的事故类型及结后果</h4>
      <div class="context">
        ${content.possibleAccident}
      </div>
    </div>
    <!-- 现场控制措施 -->
    <div class="ctrl-ways list-item">
      <h4 class="item-title">现场控制措施</h4>
      <div class="context">
        <div class="context-item"> <span class="way-title">工程控制措施：</span>  ${content.existingControlWays.engineeringControlWays}</div>
        <div class="context-item"> <span class="way-title">管理措施：</span>  ${content.existingControlWays.manageWays}</div>
        <div class="context-item"> <span class="way-title">培训教育措施：</span>  ${content.existingControlWays.educationWays}</div>
        <div class="context-item"> <span class="way-title">个体防护：</span>  ${content.existingControlWays.individualProtection}</div>
        <div class="context-item"> <span class="way-title">应急措施：</span>  ${content.existingControlWays.emergencyWays}</div>
      </div>
    </div>
    <!-- 建议新增（改进）措施 -->
    <div class="improve list-item">
      <h4 class="item-title">建议新增（改进）措施</h4>
      <div class="context">
      ${content.canImproveWays}
      </div>
    </div>
  `;
  }
  contentEl.innerHTML = htmlStr;
}

// 案例文件
const files = document.getElementsByClassName("files")[0];
const fileItemEls = files.getElementsByClassName("list-item");
Array.from(fileItemEls).forEach((item, index) => {
  // console.log(item);
  const imgEl = item.getElementsByTagName("img")[0];
  if (index === 0) {
    item.addEventListener("click", function (event) {
      event.stopPropagation();
      if (window.utils && window.utils.loadPdf) {
        window.utils.loadPdf("./assets/事故演示.pdf");
      } else {
        window.open("./assets/事故演示.pdf");
      }
    });
  }
  item.addEventListener("mouseenter", function () {
    item.style.color = "#1beaff";
    imgEl.setAttribute("src", "./assets/pdf-icon-active.png");
  });
  item.addEventListener("mouseleave", function () {
    item.style.color = "#fff";
    imgEl.setAttribute("src", "./assets/pdf-icon.png");
  });
});
