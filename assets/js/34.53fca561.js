(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{286:function(t,s,a){"use strict";a.r(s);var n=a(38),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图层-layers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图层-layers","aria-hidden":"true"}},[t._v("#")]),t._v(" 图层 Layers")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("定义图层：地图图层 layers:[...]组定义映射中可用的图层组，用来盛放地图上的各种元素，其在地图上的显示顺序是按照数组中元素序列从下到上呈现的，可以直接在创建地图时定义图层，多个图层的时候可以单独定义。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" layer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里定义的是图层类型(Image/Title/Vector)")]),t._v("\n  source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//矢量图层源  源是用于获取映射块的协议【必须】")]),t._v("\n  style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//图层样式 【必须】")]),t._v("\n  feature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//图层元素 【必须】")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("添加指定图层：map.addLayer(layer)；")]),t._v(" "),a("li",[t._v("移除指定图层：map.removeLayer(layer)；")])]),t._v(" "),a("p",[t._v("图层是轻量级容器，从数据源 "),a("code",[t._v("Source")]),t._v(" 获取数据。\n"),a("code",[t._v("Source")]),t._v(" 子类分别有，分别对应不同图层类：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ol.source.VectorSource()")])]),t._v(" "),a("li",[a("code",[t._v("ol.source.ImageSource()")])]),t._v(" "),a("li",[a("code",[t._v("ol.source.TileSource()")])])]),t._v(" "),a("p",[a("code",[t._v("Source")]),t._v(" 主要有以下属性选项：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VectorSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    attributions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    attributionsCollapsible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//布尔值  默认为true")]),t._v("\n    projection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//投影系")]),t._v("\n    state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ready'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认为'ready'")]),t._v("\n    wrapX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认为false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("ol.layer.Tile()")]),t._v("和 "),a("code",[t._v("ol.layer.Image()")]),t._v("图层类都具有相同的属性如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//以下为图层的属性选项， 都可设置，所以皆有getter/setter")]),t._v("\n    opacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//透明度 区间范围为(0, 1) 默认为1")]),t._v("\n    visible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示属性 布尔值 默认为true")]),t._v("\n    extent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//图层渲染的边界范围。该层将不会在此范围之外呈现")]),t._v("\n    zIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//图层渲染的索引层级。在渲染时，图层将被排序，首先是z-idnex，然后是位置，当为undefined时，对于添加到映射的layers集合中的层，zIndex为0，或者当使用该层的setMap()方法时，zIndex为无穷大")]),t._v("\n    minResolution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该层可见的最小分辨率(包括在内)")]),t._v("\n    maxResolution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该层可见的最大分辨率（包括在内）")]),t._v("\n    repload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//预加载。将低分辨率瓦片加载到预加载级别。0表示没有预加载 默认为0")]),t._v("\n    source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TileSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ImageSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//图层源")]),t._v("\n    map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把图层覆盖在地图上，地图不会在它的图层集合中管理这个图层，这个图层将被呈现在顶部，这对于临时层非常有用。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("hr"),t._v(" "),a("p",[t._v("(1) "),a("code",[t._v("ol.layer.Tile()")]),t._v("\n平铺图层。")]),t._v(" "),a("p",[t._v("对于提供预呈现、平铺的网格图像的层源，这些网格按特定分辨率的缩放级别组织。")]),t._v(" "),a("p",[t._v("(2) "),a("code",[t._v("ol.layer.Image()")]),t._v("\n图像图层。")]),t._v(" "),a("p",[t._v("服务器呈现的映像，可用于任意范围和分辨率。")]),t._v(" "),a("p",[t._v("(3) "),a("code",[t._v("ol.layer.Vector()")]),t._v("\n矢量图层。")]),t._v(" "),a("p",[t._v("在客户端呈现矢量数据，其属性具备 "),a("strong",[t._v("getter")]),t._v(" 和 "),a("strong",[t._v("setter")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//以下为图层的属性选项， 都可设置，所以皆有getter/setter")]),t._v("\n    opacity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//透明度 区间范围为(0, 1) 默认为1")]),t._v("\n    visible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示属性 布尔值 默认为true")]),t._v("\n    extent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//图层渲染的边界范围。该层将不会在此范围之外呈现")]),t._v("\n    zIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//图层渲染的索引层级。在渲染时，图层将被排序，首先是z-idnex，然后是位置，当为undefined时，对于添加到映射的layers集合中的层，zIndex为0，或者当使用该层的setMap()方法时，zIndex为无穷大")]),t._v("\n    minResolution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该层可见的最小分辨率(包括在内)")]),t._v("\n    maxResolution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该层可见的最大分辨率（包括在内）")]),t._v("\n    renderOrder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//呈现顺序。函数用于在呈现前对特性进行排序。默认情况下，特性是按照创建它们的顺序绘制的。使用null来避免排序，但是得到一个未定义的绘制顺序")]),t._v("\n    renderBuffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认为100 缓冲区")]),t._v("\n    renderMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vector'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认为'vector' 矢量图层的渲染模式")]),t._v("\n    source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VectorSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//图层源")]),t._v("\n    map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//把图层覆盖在地图上，地图不会在它的图层集合中管理这个图层，这个图层将被呈现在顶部，这对于临时层非常有用")]),t._v("\n    declutter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认为false 整理图片和文字。清理应用于所有图像和文本样式，优先级由样式的z-index定义。z-index指数越低，优先级越高")]),t._v("\n    style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//图层样式")]),t._v("\n    updateWhileAnimating"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认为false")]),t._v("\n    updateWhileInteracting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认为false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("其中渲染模式有两种：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("image")]),t._v("：矢量图层被渲染为图像。性能很好，但是点符号和文本总是随着视图旋转，像素在缩放动画中缩放")]),t._v(" "),a("li",[a("code",[t._v("vector")]),t._v("：矢量图层被呈现为向量。即使在动画期间也有最准确的渲染，但性能较慢")])]),t._v(" "),a("h2",{attrs:{id:"feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature","aria-hidden":"true"}},[t._v("#")]),t._v(" Feature")]),t._v(" "),a("p",[t._v("用于地理特征的矢量元素，具有几何 geometry()和其他属性，类似于矢量文件格式(如 GeoJSON)中的特性。")]),t._v(" "),a("ul",[a("li",[t._v("添加矢量元素：通过 "),a("code",[t._v("vectorsource().addFeature(feature)")]),t._v("添加到矢量图层上。")]),t._v(" "),a("li",[t._v("移除图层所有的矢量元素："),a("code",[t._v("vectorsource().clear()")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" feature "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Feature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  geometry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Polygon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("polyCoords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  labelPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Point")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("labelCoords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Polygon"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("定义矢量元素:"),a("code",[t._v("new ol.Feature()")])])]),t._v(" "),a("li",[a("p",[t._v("矢量元素样式：")]),t._v(" "),a("ul",[a("li",[t._v("设置样式："),a("code",[t._v("new ol.style.Style()")]),t._v("，也可以使用 "),a("code",[t._v("feature.setStyle(style)")]),t._v("，未定义的话，可以使用它的盛放容器 "),a("code",[t._v("layer")]),t._v(" 的样式；")]),t._v(" "),a("li",[t._v("获取样式："),a("code",[t._v("feature.getStyle()")]),t._v("\n定义矢量元素：new ol.Feature()，；\n矢量元素样式：")])])]),t._v(" "),a("li",[a("p",[t._v("一个 feature 只有一个默认几何属性 geometry，可以有任意数量的命名几何图形：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("获取默认几何属性："),a("code",[t._v("feature.getGeometry()")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("设置几何属性："),a("code",[t._v("feature.setGeometry(geometry)")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("设置几何属性名："),a("code",[t._v("feature.setGeometryName(name)")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("矢量元素要呈现的几何图形的特征属性、几何图形或函数由 "),a("strong",[t._v("geometry")]),t._v(" 属性选项设定，主要有以下几种子类模块：")]),t._v(" "),a("ul",[a("li",[t._v("ol.geom.Circle()：圆形")]),t._v(" "),a("li",[t._v("ol.geom.Geometry()：几何图形")]),t._v(" "),a("li",[t._v("ol.geom.GeometryCollection()：")]),t._v(" "),a("li",[t._v("ol.geom.LinearRing()：环线")]),t._v(" "),a("li",[t._v("ol.geom.LineString()：线段")]),t._v(" "),a("li",[t._v("ol.geom.Point()：点")]),t._v(" "),a("li",[t._v("ol.geom.Polygon()：多边形")]),t._v(" "),a("li",[t._v("ol.geom.MultiLineString()")]),t._v(" "),a("li",[t._v("ol.geom.MultiPoint()")]),t._v(" "),a("li",[t._v("ol.geom.MultiPolygon()")]),t._v(" "),a("li",[t._v("ol.geom.SimpleGeometry()")])])])])]),t._v(" "),a("li",[a("p",[t._v("feature 的稳定标识符 ID：")]),t._v(" "),a("ul",[a("li",[t._v("设置 feature 的 id：feature.setId(id)，当 id 可能相同时，可以这样加以区分\n"),a("code",[t._v('feature.setId(id + "featureName")')])]),t._v(" "),a("li",[t._v("获取 feature 的 id："),a("code",[t._v("vector.getSource().getFeatureById()")]),t._v("或者 v"),a("code",[t._v("ectorsource().getFeatureById()")])])])]),t._v(" "),a("li",[a("p",[t._v("feature 的 set(key, value, opt_silent)：")]),t._v(" "),a("ul",[a("li",[t._v("设置 key："),a("code",[t._v('feature.set("keyName",name)')]),t._v("，keyName 是字符串，自己根据情况设置")]),t._v(" "),a("li",[t._v("获取 key：之前设置的什么，就获取什么，"),a("code",[t._v('feature.get("keyName")')]),t._v("，会得到设置的值")])])])])])},[],!1,null,null,null);s.default=e.exports}}]);