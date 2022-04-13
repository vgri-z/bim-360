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

pannellum.viewer("panorama", {
  type: "equirectangular",
  panorama: "./assets/360.png",
  autoLoad: true,
  autoRotate: 0, // 为0停止自动旋转
  stopAutoRotate: true,
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
        imgName: "卸料门检修作业风险告知卡",
        bgClassName: "blue",
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
        imgName: "垃圾吊抓斗掩埋抢修安全风险点告知牌",
        bgClassName: "",
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
        imgName: "硫化氢职业危害警示标识和告知卡",
        bgClassName: "",
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
        imgName: "硫化氢职业危害警示标识和告知卡",
        bgClassName: "",
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
        imgName: "",
        bgClassName: "blue",
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
        imgName: "",
        bgClassName: "blue",
      },
    },
  ],
});

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
const warnTitleEl = document.querySelector(".warn-images > .title");
let warnItemEls = null;
function setBubbleEvents() {
  const hotSpotDoms = document.getElementById("panorama").getElementsByClassName("hotspot");
  Array.from(hotSpotDoms).forEach((item, index) => {
    item.addEventListener("click", function () {
      let htmlStr = "";
      for (let item of imgConfigInfos[index]) {
        htmlStr += `
        <li class="list-item ${item.bgClassName}" onclick="javascript:listItemClick('${item.imgUrl}')">
          <img src="./assets/warn3.png" alt="" />
          <span class="name">${item.imgName}</span>
        </li>
        `;
      }
      warnUlEl.innerHTML = htmlStr;
      warnItemEls = warnUlEl.getElementsByClassName("list-item");
      warnTitleEl.innerHTML = imgConfigInfos[index][0].name;
      dialogEl.style.display = "block";
    });
  });
}

// document.getElementById("panorama").addEventListener("click", function (e) {
//   const target = e.target;
//   if (Array.from(target.classList).indexOf("hotspot") !== -1) {
//     dialogEl.style.display = "block";
//     const imgUrl = target.getAttribute("data-url");
//     const warnName = target.getAttribute("data-name");
//     const bgClassName = target.getAttribute("data-className");
//     const imgEl = dialogEl.getElementsByClassName("content-img")[0];
//     // imgDialogEl.style.display = "block";
//     // imgEl.setAttribute("src", imgUrl);
//   }
// });

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
    let htmlStr = "";
    for (let item of imgConfigInfos[index]) {
      htmlStr += `
        <li class="list-item ${item.bgClassName}" onclick="javascript:listItemClick('${item.imgUrl}')">
          <img src="./assets/warn3.png" alt="" />
          <span class="name">${item.imgName}</span>
        </li>
        `;
    }
    warnUlEl.innerHTML = htmlStr;
    warnItemEls = warnUlEl.getElementsByClassName("list-item");
    warnTitleEl.innerHTML = imgConfigInfos[index][0].name;
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
function listItemClick(e) {
  if (e) {
    dialogImgEl.setAttribute("src", e);
    imgDialogEl.style.display = "block";
  }
}

// 案例文件
const files = document.getElementsByClassName("files")[0];
const fileItemEls = files.getElementsByClassName("list-item");
Array.from(fileItemEls).forEach((item) => {
  // console.log(item);
  const imgEl = item.getElementsByTagName("img")[0];
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    if (window.utils && window.utils.loadPdf) {
      window.utils.loadPdf("./assets/事故演示.pdf");
    } else {
      window.open("./assets/事故演示.pdf");
    }
  });
  item.addEventListener("mouseenter", function () {
    item.style.color = "#1beaff";
    imgEl.setAttribute("src", "./assets/pdf-icon-active.png");
  });
  item.addEventListener("mouseleave", function () {
    item.style.color = "#fff";
    imgEl.setAttribute("src", "./assets/pdf-icon.png");
  });
});
