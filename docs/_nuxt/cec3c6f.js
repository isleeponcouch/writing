(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{260:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(40),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles").only(["title","slug","bg","decoration","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),o=n(47),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-1 md:m-12"},[t._m(0),t._v(" "),n("ul",{staticClass:"my-10"},t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"p-4 md:p-12 text-white font-thin my-1 md:my-3"},[n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[n("div",{staticClass:"text-center"},[n("h4",{staticClass:"max-w-4xl mx-auto text-lg md:text-2xl text-thin inline-block p-2 mb-2 rounded underline",class:article.decoration},[t._v(t._s(article.title))]),t._v(" "),n("p",[t._v(t._s(t.formatDate(article.createdAt)))])])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("p",{staticClass:"my-2 text-lg text-gray-300 font-medium"},[t._v("👋 Hi, I'm Tobias and this is my blog where I write mostly about software development.")]),t._v(" "),n("p",{staticClass:"my-2 text-lg text-gray-300 font-medium"},[t._v("🇦🇺 I'm based in Brisbane Australia")]),t._v(" "),n("p",{staticClass:"my-2 text-lg text-gray-300 font-medium"},[t._v("✉️ If you would like to talk to me about anything I've written here, please email tobias at sensortree dot au")])])}],!1,null,null,null);e.default=component.exports}}]);