import{o as s,c as e,a}from"./app.0c83b2b0.js";const n='{"title":"css reset 和 normalize.css 有什么区别","description":"","frontmatter":{"title":"css reset 和 normalize.css 有什么区别"},"headers":[{"level":2,"title":"resrt","slug":"resrt"},{"level":2,"title":"normalize.css","slug":"normalize-css"}],"relativePath":"guide/css/normalize.md","lastUpdated":1615877423020}',r={},t=a('<h1 id="css-reset-和-normalize-css-有什么区别"><a class="header-anchor" href="#css-reset-和-normalize-css-有什么区别" aria-hidden="true">#</a> css reset 和 normalize.css 有什么区别</h1><p>默认样式是有一定的意义，比如下拉框，表单，和标题等等；<strong>但是</strong> 默认样式依然带来问题，定制的成本会比较高</p><ul><li>li 的 list-style</li></ul><p>在实践中总结的出很多套方案</p><h2 id="resrt"><a class="header-anchor" href="#resrt" aria-hidden="true">#</a> resrt</h2><p>是直接重置，例如我们在开发中使用的</p><div class="language-css"><pre><code><span class="token selector">*</span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span>0\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="normalize-css"><a class="header-anchor" href="#normalize-css" aria-hidden="true">#</a> normalize.css</h2><p>出发点并不是去掉浏览器默认样式 而是兼容不同的表现 保留一些元素的 padding margin</p>',9);r.render=function(a,n,r,l,i,c){return s(),e("div",null,[t])};export default r;export{n as __pageData};