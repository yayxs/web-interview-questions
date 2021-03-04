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
        children: ["/guides/", "/guides/contact"],
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
          "/guides/css/bfc",
          "/guides/css/center",
          "/guides/css/selector",
          "/guides/css/clearfix",
          "/guides/css/hide",
          "/guides/css/position",
          "/guides/css/display",
          "/guides/css/float",
          "/guides/css/normalize",
          "/guides/css/link_import",
          "/guides/css/triangle",
          "/guides/css/z_index",
          "/guides/css/unit",
          "/guides/css/font",
          "/guides/css/vertical_align",
          "/guides/css/img",
          "/guides/css/base64",
          "/guides/css/pseudo_classes_elements",
          "/guides/css/flex",
          "/guides/css/responsive",
          "/guides/css/animation",
        ],
      },
      {
        title: "JavaScript/ES6",
        collapsable: false,
        children: [
          "/guides/js/0.3",

          "/guides/js/bibao",
          "/guides/js/context",
          "/guides/js/create_obj",
          "/guides/js/cycle",
          "/guides/js/emporal_dead_zone",
          "/guides/js/equalityOperator",
          "/guides/js/es6",
          "/guides/js/for_var",
          "/guides/js/func_args",
          "/guides/js/garbage_collection",
          "/guides/js/hoisting",
          "/guides/js/iife",
          "/guides/js/null_undefined",
          "/guides/js/performance",
          "/guides/js/prototype",
          "/guides/js/ram",
          "/guides/js/scope",
          "/guides/js/set_map",
          "/guides/js/this",
          "/guides/js/type_of_data",
          "/guides/js/typeof_instanceof",
          "/guides/js/use_strict",
          "/guides/js/var_let_const",
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
          "/guides/written/promise",
          "/guides/written/promise_all",
          "/guides/written/promise_finally",
          "/guides/written/triangle",
        ],
      },
      {
        title: "计算机网络",
        collapsable: false,
        children: [],
      },

      {
        title: "设计模式",
        collapsable: false,
        children: ["/guides/design_patterns/"],
      },
      {
        title: "Vue.js",
        collapsable: false,
        children: [
          "/guides/vue/vue",
          "/guides/vue/v_model",
          "/guides/vue/v_show_if",
          "/guides/vue/v_if_for",
          "/guides/vue/props",
          "/guides/vue/defineProperty_proxy",
          "/guides/vue/computed_methods_watch",
          "/guides/vue/set",
          "/guides/vue/key",
          "/guides/vue/newVue",
          "/guides/vue/nextTick",
        ],
      },
      {
        title: "WebPack",
        collapsable: true,
        children: ["/guides/webpack/outline"],
      },
      {
        title: "前端安全",
        collapsable: false,
        children: ["/guides/safety/"],
      },
    ],
  },
};
