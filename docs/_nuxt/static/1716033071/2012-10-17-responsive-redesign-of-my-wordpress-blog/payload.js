__NUXT_JSONP__("/2012-10-17-responsive-redesign-of-my-wordpress-blog", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O){return {data:[{article:{slug:"2012-10-17-responsive-redesign-of-my-wordpress-blog",title:"Responsive Redesign of my Wordpress Blog",bg:"bg-gray-600",decoration:"decoration-gray-600",archived:true,createdAt:q,updatedAt:q,toc:[{id:r,depth:s,text:t},{id:u,depth:k,text:v},{id:w,depth:k,text:x},{id:y,depth:k,text:z},{id:A,depth:k,text:B},{id:C,depth:s,text:D},{id:E,depth:k,text:F},{id:G,depth:k,text:H},{id:I,depth:k,text:J}],body:{type:"root",children:[{type:a,tag:d,props:{},children:[{type:b,value:"Over the past few weeks I've been spending some of my spare time slowly redesigning my blog. The main reason for the redesign was to create a responsive design. I was also a bit bored of my old one which I had even switched out for the default Wordpress theme in recent times."}]},{type:b,value:c},{type:a,tag:K,props:{id:r},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#some-notes-on-responsive-web-design",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:t}]},{type:b,value:c},{type:a,tag:l,props:{id:u},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#the-psd-design",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:v}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Ordinarily when I design a site in Photoshop it would be for a fixed-width site and what I create in Photoshop would be exactly what I expected to see on the page after coding. Of course things are a little different with Responsive Web Design, fixed-width is an incompatible concept; but the process of designing the PSD was pretty much the same for me in this instance (maybe that will change in time.) I started with a standard desktop design, then created a new project for the mobile design and copied in elements from the original and arranged it all into a logical design. The mobile version was simply used as a guide, there was no need for \"slicing\" from it and my tablet sized viewports breakpoint was just a logical rearranging between these 2 designs. I'd be interested to know how agencies with rigidly defined roles between designer and front end developer are handling this."}]},{type:b,value:c},{type:a,tag:l,props:{id:w},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#breakpoints",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:x}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"From what I read on the web before starting my responsive redesign, there were more or less 2 schools of thoughts on breakpoints. People who would design for a specific sets of viewport dimensions, and people who start at either very small or large dimensions and work in the other direction until the design breaks (which actually, really only happens going from large to small because small single column layouts won't usually break as such as they will just look silly.)"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"I sit firmly in the latter camp, and I worked from a design that worked comfortably on a massive 2560 and worked down to breakpoints of \u003C 1366, \u003C 1140, and \u003C 700 which were picked because this is roughly where the design started to work better with some adjustments."}]},{type:b,value:c},{type:a,tag:l,props:{id:y},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#protofluid--testing",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:z}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"ProtoFluid is a small JavaScript that allows you to quickly view what your responsive design looks at in some popular devices at various orientations. To use it you'll need jQuery and to reference the JavaScript file from your head section. To use it just add #protoFluid to the page you want to preview and you'll see something like this:"}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:n,props:{to:L},children:[{type:a,tag:o,props:{className:[p],title:m,src:L,alt:m},children:[]}]}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"ProtoFluid should only be used to get a rough idea of what your design looks at in various viewports. Don't rely on it for giving you an exact representation of what your design looks like on the device dimensions provided, it will look different, especially in regard to font sizes and line heights etc."}]},{type:b,value:c},{type:a,tag:l,props:{id:A},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#css-transitions",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:B}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:b,value:"Why not. If you don't know what CSS Transitions are, slowly start decreasing the width of your browser window to see them in action (providing you know you're on a browser that probably supports them.) CSS Transitions make the switching between breakpoints appear smooth and fluid like rather than everything just \"snapping\" to their new positions. Browsers that don't support Transitions will just ignore the property which to me seems acceptable, and sprinkling a few transition properties around your stylesheet only takes a few minutes."}]},{type:b,value:c},{type:a,tag:K,props:{id:C},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#the-finished-product",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:D}]},{type:b,value:c},{type:a,tag:l,props:{id:E},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#max-width-1366-slight-change-for--1366-but-mostly-looks-the-same-as-this",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:F}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:n,props:{to:M},children:[{type:a,tag:o,props:{className:[p],title:m,src:M,alt:"Screenshot of tobygundry.com responsive Wordpress redesign"},children:[]}]}]},{type:b,value:c},{type:a,tag:l,props:{id:G},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#max-width-1140",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:H}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:n,props:{to:N},children:[{type:a,tag:o,props:{className:[p],title:m,src:N,alt:m},children:[]}]}]},{type:b,value:c},{type:a,tag:l,props:{id:I},children:[{type:a,tag:e,props:{ariaHidden:f,href:"#max-width-700",tabIndex:g},children:[{type:a,tag:h,props:{className:[i,j]},children:[]}]},{type:b,value:J}]},{type:b,value:c},{type:a,tag:d,props:{},children:[{type:a,tag:n,props:{to:O},children:[{type:a,tag:o,props:{className:[p],title:"Screen Shot 2012-10-17 at 3.02.03 PM",src:O,alt:m},children:[]}]}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2012-10-17-responsive-redesign-of-my-wordpress-blog",extension:".md"}}],fetch:{},mutations:void 0}}("element","text","\n","p","a","true",-1,"span","icon","icon-link",3,"h3","Screenshot of tobygundry.com responsive redesign","nuxt-link","img","mx-auto","2012-10-17T00:00:00.000Z","some-notes-on-responsive-web-design",2,"Some notes on Responsive Web Design","the-psd-design","The PSD Design","breakpoints","Breakpoints","protofluid--testing","ProtoFluid & Testing","css-transitions","CSS Transitions","the-finished-product","The Finished Product","max-width-1366-slight-change-for--1366-but-mostly-looks-the-same-as-this","Max width 1366 (slight change for \u003E 1366 but mostly looks the same as this)","max-width-1140","Max width 1140","max-width-700","Max width 700","h2","\u002Fimages\u002Fposts\u002FScreen-Shot-2012-10-17-at-2.49.50-PM.png","\u002Fimages\u002Fposts\u002FScreen-Shot-2012-10-17-at-2.54.42-PM.png","\u002Fimages\u002Fposts\u002FScreen-Shot-2012-10-17-at-3.00.26-PM.png","\u002Fimages\u002Fposts\u002FScreen-Shot-2012-10-17-at-3.02.03-PM.png")));