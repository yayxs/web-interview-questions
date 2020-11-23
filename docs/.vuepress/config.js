module.exports = {
  title: "TOP-FE-IQA",
  description: "Top X Front-End  Interview Questions and Answers",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guides/" },
      {
        text: "GitHub",
        link: "https://github.com/yayxs/top-fe-iqa",
        target: "_blank",
      },
    ],
    sidebar: [
      {
        title: "前言",
        collapsable: false,
        children: ["/guides/"],
      },
      {
        title: "HTML/HTML5",
        collapsable: false,
        children: ["/guides/html/"],
      },
      {
        title: "CSS/CSS3",
        collapsable: false,
        children: [
          "/guides/css/box_model",
          "/guides/css/dom_w_h",
          "/guides/css/bfc",
          "/guides/css/center",
          "/guides/css/selector",
          "/guides/css/clearfix",
          "/guides/css/hide",
          "/guides/css/position",
          "/guides/css/display",
          "/guides/css/normalize",
          "/guides/css/link_import",
          "/guides/css/triangle",
          "/guides/css/z_index",
          "/guides/css/unit",
          "/guides/css/font",
          "/guides/css/vertical_align",
          "/guides/css/img",
          "/guides/css/base64",
        ],
      },
      {
        title: "JavaScript/ES6",
        collapsable: false,
        children: [
          "/guides/js/type_of_data",
          "/guides/js/0.3",
          "/guides/js/var_let_const",
          "/guides/js/null_undefined",
          "/guides/js/typeof_instanceof",
          "/guides/js/map",
          "/guides/js/scope",
          "/guides/js/es6",
          "/guides/js/for_in_of",
          "/guides/js/create_obj",
          "/guides/js/equalityOperator",
          "/guides/js/use_strict",
          "/guides/js/func_args",
          "/guides/js/context",
          "/guides/js/hoisting",
          "/guides/js/for_var",
          "/guides/js/garbage_collection",
          "/guides/js/performance",
          "/guides/js/ram",
          "/guides/js/is_arr",
          "/guides/js/arr",
        ],
      },
      {
        title: "专题系列",
        collapsable: false,
        children: ["/guides/js/array/", "/guides/optimization/"],
      },
      {
        title: "笔试手写",
        collapsable: false,
        children: [
          "/guides/written/debounce",
          "/guides/written/throttle",
          "/guides/written/clone",
          "/guides/written/new",
          "/guides/written/call",
          "/guides/written/bind",
          "/guides/written/instanceof",
          "/guides/written/trim",
          "/guides/written/event",
          "/guides/written/unique",
          "/guides/written/triangle",
        ],
      },
      {
        title: "框架VUE",
        collapsable: false,
        children: ["/guides/vue/communication"],
      },
      {
        title: "WebPack",
        collapsable: true,
        children: ["/guides/webpack/outline"],
      },

      {
        title: "数据结构与算法",
        collapsable: true,
        children: ["/guides/algorithm/outline"],
      },
      {
        title: "场景题目",
        collapsable: false,
        children: ["/guides/scene/00", "/guides/scene/01"],
      },
    ],
  },
};
