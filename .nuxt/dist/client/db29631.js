(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{260:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(40),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles").only(["title","slug","bg"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()}}),l=n(47),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-1 md:m-12"},[t._m(0),t._v(" "),n("ul",{staticClass:"my-10"},t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"p-4 md:p-12 text-white font-thin my-1 md:my-3",class:article.bg},[n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[n("div",[n("h4",{staticClass:"max-w-4xl mx-auto text-xl md:text-4xl text-thin text-center"},[t._v(t._s(article.title))])])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("p",{staticClass:"my-2 text-lg font-medium"},[t._v("👋 Hi, I'm Tobias and this is my blog where I write mostly about my adventures as an iOS engineer.")])])}],!1,null,null,null);e.default=component.exports}}]);