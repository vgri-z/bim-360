const imgConfigInfos = [
  [
    {
      name: "垃圾坑",
      imgUrl: "./assets/ydqt-warn.png",
      imgName: "消防水炮故障、火焰、气体探测器故障",
      bgClassName: "yellow",
      videoUrl: "./assets/video.mp4",
      pdfUrl: "",
      content: {
        possibleAccident: "中毒窒息、高空坠落、火灾", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "消防水炮、气体检测仪正常运行且满足防爆要求", // 工程控制措施
          manageWays:
            "1.定期对消防水炮检测； 2.定期对气体检测仪校准与维护； 3.垃圾坑内的各防护栏、盖板等定期防腐刷漆", // 管理措施
          educationWays: "1.消防设施设备培训；2.有限空间操作规程培训", // 培训教育措施
          individualProtection: "安全帽、防毒口罩、防护服", // 个体防护
          emergencyWays: "正压式呼吸器，心肺复苏，应急电话", // 应急措施
        },
        canImproveWays:
          "加强消防设施设备维护使用培训，加强生产事故应急演练培训", // 建议新增改进措施
      },
    },
    {
      name: "垃圾坑",
      imgUrl: "",
      imgName: "新鲜垃圾中混有火种",
      bgClassName: "blue",
      videoUrl: "./assets/video.mp4",
      pdfUrl: "./assets/事故演示.pdf",
      content: {
        possibleAccident: "火灾", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "设置灭火器，消防水炮，火焰探测器等消防设施", // 工程控制措施
          manageWays:
            "1.加强垃圾进场监管，避免易燃物进入垃圾储坑；2.将新垃圾直接抓入喂料斗燃烧，烧烬后再铺一层新垃圾覆盖", // 管理措施
          educationWays: "加强垃圾进场及打堆安全教育培训", // 培训教育措施
          individualProtection: "无", // 个体防护
          emergencyWays: "消防水炮", // 应急措施
        },
        canImproveWays: "无", // 建议新增改进措施
      },
    },
  ],
  [
    {
      name: "垃圾吊抓斗",
      imgUrl: "./assets/ljdz-warn.png",
      imgName: "垃圾吊例检、垃圾取样",
      bgClassName: "blue",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "触电，中毒窒息，高处坠落，物体打击，起重伤害", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays:
            "垃圾吊抓斗安装漏电保护，检修平台装置安装有毒有害气体检测仪器及通风换气设施，检修平台加装防护栏杆", // 工程控制措施
          manageWays:
            "严格执行有限空间作业审批制度，禁止携带火种，长时间作业则作业人员轮换进行，禁止倚靠栏杆，配戴安全帽，执行停送电制度，配戴防毒面具，必要时使用正压式呼吸器", // 管理措施
          educationWays: "加强垃圾吊例检例检安全教育培训", // 培训教育措施
          individualProtection:
            "防毒面罩，防护服，有毒有害气体检测仪，防爆对讲机，安全帽等", // 个体防护
          emergencyWays: "正压式呼吸器，急救电话，应急药箱，心肺复苏", // 应急措施
        },
        canImproveWays: "加强呼吸器使用培训，检查工作人员劳动防护用品穿戴情况", // 建议新增改进措施
      },
    },
    {
      name: "垃圾吊抓斗",
      imgUrl: "",
      imgName: "垃圾吊抓斗掩埋抢修",
      bgClassName: "yellow",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "触电，中毒窒息，高处坠落，物体打击，起重伤害", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "垃圾吊钢丝绳使用高规格", // 工程控制措施
          manageWays:
            "定期检查更换垃圾吊钢丝绳，避免钢丝绳断裂猪都掩埋事故发生。垃圾吊抓斗掩埋抢修，必须使用正压式呼吸器或长管呼吸器，作业人员配戴安全带及安全绳，专人监护专人指挥，严格执行有限空间及停送电手续，公司领导及安环人员全程现场安全监护", // 管理措施
          educationWays:
            "加强例检质量培训，避免垃圾吊断绳事故发生，加强有限空间安全教育培训", // 培训教育措施
          individualProtection: "正压式呼吸器，防护服，安全带，安全绳", // 个体防护
          emergencyWays: "正压式呼吸器，急救电话，应急药箱，心肺复苏", // 应急措施
        },
        canImproveWays: "气体检测人员配戴正压式呼吸器", // 建议新增改进措施
      },
    },
    {
      name: "垃圾吊抓斗",
      imgUrl: "",
      imgName: "操作设备断电控制柜未断电",
      bgClassName: "blue",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "触电，中毒窒息，高处坠落，物体打击，起重伤害", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "垃圾吊钢丝绳使用高规格", // 工程控制措施
          manageWays:
            "定期检查更换垃圾吊钢丝绳，避免钢丝绳断裂猪都掩埋事故发生。垃圾吊抓斗掩埋抢修，必须使用正压式呼吸器或长管呼吸器，作业人员配戴安全带及安全绳，专人监护专人指挥，严格执行有限空间及停送电手续，公司领导及安环人员全程现场安全监护", // 管理措施
          educationWays:
            "加强例检质量培训，避免垃圾吊断绳事故发生，加强有限空间安全教育培训", // 培训教育措施
          individualProtection: "正压式呼吸器，防护服，安全带，安全绳", // 个体防护
          emergencyWays: "正压式呼吸器，急救电话，应急药箱，心肺复苏", // 应急措施
        },
        canImproveWays: "气体检测人员配戴正压式呼吸器", // 建议新增改进措施
      },
    },
    {
      name: "垃圾吊抓斗",
      imgUrl: "",
      imgName: "抓斗检修盖板揭盖导致坠落",
      bgClassName: "blue forbid",
      videoUrl: "",
      pdfUrl: "",
      content: "",
    },
  ],
  [
    {
      name: "垃圾运输车",
      imgUrl: "",
      imgName: "垃圾运输车辆、车斗跌入垃圾坑救援",
      bgClassName: "blue",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "触电，中毒窒息，高处坠落，物体打击，起重伤害", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays:
            "运输车辆资质和驾驶人员资质审核（应为管理措施）", // 工程控制措施
          manageWays:
            "定期检查车辆与车斗连接部位，保证连接部位牢固。垃圾卸车时保证垃圾车卸料门正常打开，避免垃圾积聚车辆尾部导致车辆（斗）被拖入垃圾坑。使用起重车辆抓取垃圾车（斗）时，规范起重作业，专人监护和指挥其中作业。配合人员佩戴好劳保用品。进入垃圾坑固定起重钢丝绳时使用正压式呼吸器，严格执行有限空间作业审批，且垃圾吊抓斗应远离作业人员及作业区域，垃圾吊操作台打到停止位置。", // 管理措施
          educationWays: "加强有限空间及起重作业安全教育培训", // 培训教育措施
          individualProtection: "正压式呼吸器，防护服，安全带，安全绳", // 个体防护
          emergencyWays: "正压式呼吸器，急救电话，应急药箱，心肺复苏", // 应急措施
        },
        canImproveWays: "气体检测人员配戴正压式呼吸器", // 建议新增改进措施
      },
    },
    {
      name: "垃圾运输车",
      imgUrl: "",
      imgName: "大车小车翻越作业、高处坠落",
      bgClassName: "blue",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "高处坠落", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "增高加固防护栏及轨道", // 工程控制措施
          manageWays: "作业人员需佩戴安全绳作业", // 管理措施
          educationWays: "有限空间相关安全知识教育培训", // 培训教育措施
          individualProtection:
            "穿戴好劳保防护用品（防化服、防毒面罩、安全绳安全带等）", // 个体防护
          emergencyWays: "监护人员备好相关用品，随时救援或拔打电话", // 应急措施
        },
        canImproveWays: "无", // 建议新增改进措施
      },
    },
  ],
  [
    {
      name: "快速卷帘门",
      imgUrl: "",
      imgName: "车辆进出过快车载过高，撞坏卷帘门",
      bgClassName: "blue2",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "车辆伤害", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "安装限高杆和限高、限速标识及减速带", // 工程控制措施
          manageWays: "对垃圾车驾驶员进行安全教育，并签订入场安全告知书", // 管理措施
          educationWays: "岗位员工必须通过三级安全教育，进行安全教育培训", // 培训教育措施
          individualProtection: "正确穿戴劳保用品，如佩戴安全帽、防护服等", // 个体防护
          emergencyWays: "无", // 应急措施
        },
        canImproveWays: "无", // 建议新增改进措施
      },
    },
    {
      name: "快速卷帘门",
      imgUrl: "",
      imgName: "卷帘门突然下降、感应器失效",
      bgClassName: "blue2",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "物体打击", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "限位器", // 工程控制措施
          manageWays: "定期检查运行情况", // 管理措施
          educationWays: "岗位员工必须通过三级安全教育，进行安全教育培训", // 培训教育措施
          individualProtection: "正确穿戴劳保用品，如佩戴安全帽、防护服等", // 个体防护
          emergencyWays: "对受伤人员进行简单处理后立即送往医院", // 应急措施
        },
        canImproveWays: "无", // 建议新增改进措施
      },
    },
    {
      name: "快速卷帘门",
      imgUrl: "",
      imgName: "高处作业、带电作业",
      bgClassName: "blue2",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "高处坠落、触电", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "无", // 工程控制措施
          manageWays: "严格执行危险作业审批制度和停送电申请", // 管理措施
          educationWays: "危险作业培训，严格要求安全交底手续", // 培训教育措施
          individualProtection: "正确使用安全带、安全绳等", // 个体防护
          emergencyWays: "对受伤人员进行简单处理后立即送往医院", // 应急措施
        },
        canImproveWays: "无", // 建议新增改进措施
      },
    },
  ],
  [
    {
      name: "卸料大厅",
      imgUrl: "",
      imgName: "垃圾运输车辆伤害",
      bgClassName: "blue2",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "车辆伤害", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "安装限速警示牌、限高限宽门", // 工程控制措施
          manageWays:
            "1、厂区内规定行车路线，设置隔离措施；2、厂内车辆速度不超过5公里/小时；3、严格执行一出一进规定执行；4、卸料平台定期清理渗滤液，并采取防滑技术措施", // 管理措施
          educationWays: "危险源辨识培训，作业前做好安全交底", // 培训教育措施
          individualProtection: "正确穿戴好劳动保护用品", // 个体防护
          emergencyWays: "作业前准备好应急器材，专人监护；", // 应急措施
        },
        canImproveWays: "加强交通安全管理制度培训", // 建议新增改进措施
      },
    },
    {
      name: "卸料大厅",
      imgUrl: "",
      imgName: "未开展可燃浓度检测或未通风",
      bgClassName: "blue2",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "中毒窒息", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "无", // 工程控制措施
          manageWays: "严格落实“先通风、再检测、后作业”检测合格再作业", // 管理措施
          educationWays: "做好动火作业安全注意事项培训", // 培训教育措施
          individualProtection: "正确穿戴劳保用品", // 个体防护
          emergencyWays: "无", // 应急措施
        },
        canImproveWays: "加强动火作业作业管理制度培训", // 建议新增改进措施
      },
    },
    {
      name: "卸料大厅",
      imgUrl: "",
      imgName: "未办理动火作业票",
      bgClassName: "blue2",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "其他伤害", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "无", // 工程控制措施
          manageWays: "严格要求危险作业审批手续", // 管理措施
          educationWays: "做好动火作业安全注意事项培训", // 培训教育措施
          individualProtection: "无", // 个体防护
          emergencyWays: "无", // 应急措施
        },
        canImproveWays: "加强动火作业作业管理制度培训", // 建议新增改进措施
      },
    },
    // {
    //   name: "卸料大厅",
    //   imgUrl: "",
    //   imgName: "未准备灭火器材",
    //   bgClassName: "blue2",
    //   videoUrl: "",
    // },
    // {
    //   name: "卸料大厅",
    //   imgUrl: "",
    //   imgName: "未进行安全技术交底",
    //   bgClassName: "blue2 forbid",
    //   videoUrl: "",
    // },
    // {
    //   name: "卸料大厅",
    //   imgUrl: "",
    //   imgName: "作业前未对车间活性炭粉尘进行清扫",
    //   bgClassName: "blue2 forbid",
    //   videoUrl: "",
    // },
    // {
    //   name: "卸料大厅",
    //   imgUrl: "",
    //   imgName: "工器具使用、放置不当",
    //   bgClassName: "yellow forbid",
    //   videoUrl: "",
    // },
    // {
    //   name: "卸料大厅",
    //   imgUrl: "",
    //   imgName: "周边物体引燃",
    //   bgClassName: "yellow forbid",
    //   videoUrl: "",
    // },
    // {
    //   name: "卸料大厅",
    //   imgUrl: "",
    //   imgName: "作业过程中，未进行火星隔离",
    //   bgClassName: "yellow forbid",
    //   videoUrl: "",
    // },
    // {
    //   name: "卸料大厅",
    //   imgUrl: "",
    //   imgName: "作业过程中可燃气体浓度不合格",
    //   bgClassName: "yellow forbid",
    //   videoUrl: "",
    // },
    // {
    //   name: "卸料大厅",
    //   imgUrl: "",
    //   imgName: "未进行人员清点或工具器清点",
    //   bgClassName: "blue2 forbid",
    //   videoUrl: "",
    // },
    // {
    //   name: "卸料大厅",
    //   imgUrl: "",
    //   imgName: "作业结束火种残留",
    //   bgClassName: "blue2 forbid",
    //   videoUrl: "",
    // },
    // {
    //   name: "卸料大厅",
    //   imgUrl: "",
    //   imgName: "未办理动火作业票，未配备灭火器材，设备漏电",
    //   bgClassName: "blue forbid",
    //   videoUrl: "",
    // },
  ],
  [
    {
      name: "卸料门",
      imgUrl: "./assets/xieliao-warn.png",
      imgName: "液压站检修",
      bgClassName: "blue2",
      videoUrl: "",
      pdfUrl: "",
      content: {
        possibleAccident: "触电、机械伤害、中毒窒息、火灾", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "安装气体检测装置", // 工程控制措施
          manageWays:
            "1、正确办理液压装置停电手续；2、正确使用工器具；3、正确穿戴劳动防护用品；4、检修需要动火作业时做好隔离，办理动火作业票，防止火灾。", // 管理措施
          educationWays: "危险源辨识培训，作业前做好安全交底", // 培训教育措施
          individualProtection: "正确穿戴好劳动保护用品", // 个体防护
          emergencyWays: "作业前准备好应急器材，专人监护；", // 应急措施
        },
        canImproveWays: "无", // 建议新增改进措施
      },
    },
    {
      name: "卸料门",
      imgUrl: "",
      imgName: "卸料门清理",
      bgClassName: "blue2",
      videoUrl: "",
      pdfUrl: "./assets/事故演示.pdf",
      content: {
        possibleAccident: "机械伤害、中毒窒息、火灾", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "安装气体检测装置", // 工程控制措施
          manageWays:
            "1、正确办理液压装置停电手续；2、正确使用工器具；3、正确穿戴好劳动防护用品。", // 管理措施
          educationWays: "危险源辨识培训，作业前做好安全交底", // 培训教育措施
          individualProtection: "正确穿戴好劳动保护用品", // 个体防护
          emergencyWays: "作业前准备好应急器材，专人监护；", // 应急措施
        },
        canImproveWays: "无", // 建议新增改进措施
      },
    },
    {
      name: "卸料门",
      imgUrl: "",
      imgName: "卸料门检维修",
      bgClassName: "blue2",
      videoUrl: "",
      pdfUrl: "./assets/事故演示.pdf",
      content: {
        possibleAccident: "高空坠落、机械伤害、触电、火灾", // 可能发生的事故类型及后果
        existingControlWays: {
          // 现有控制措施
          engineeringControlWays: "安装气体检测装置", // 工程控制措施
          manageWays:
            "1、正确办理液压装置停电手续；2、正确使用工器具；3、卸料门检修或需要动火作业时做好隔离，办理动火作业票，防止高空坠落、火灾及爆炸；4、定期对卸料门联锁保护检查。", // 管理措施
          educationWays: "危险源辨识培训，作业前做好安全交底", // 培训教育措施
          individualProtection: "正确穿戴好劳动保护用品", // 个体防护
          emergencyWays: "作业前准备好应急器材，专人监护；", // 应急措施
        },
        canImproveWays: "无", // 建议新增改进措施
      },
    },
  ],
];
