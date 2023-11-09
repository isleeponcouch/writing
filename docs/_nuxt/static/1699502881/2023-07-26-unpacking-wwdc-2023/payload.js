__NUXT_JSONP__("/2023-07-26-unpacking-wwdc-2023", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:[{article:{slug:"2023-07-26-unpacking-wwdc-2023",title:"Unpacking WWDC 2023",bg:"bg-rose-300",createdAt:"2023-07-26T00:00:00.000Z",updatedAt:"2023-10-02T00:00:00.000Z",toc:[{id:t,depth:l,text:u},{id:v,depth:w,text:x},{id:y,depth:w,text:z},{id:A,depth:l,text:B},{id:C,depth:l,text:D},{id:E,depth:l,text:s},{id:F,depth:l,text:G},{id:H,depth:l,text:I}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"There was something about this year's WWDC that felt like arriving at a destination we've been en route to for years now."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The announcement of visionOS really unveiled the true importance of frameworks like ARKit, RealityKit, Reality Composer and even new additions of SwiftUI. Xcode 15 brought home the power of OSLog, SwiftData took features of Swift and SwiftUI to give us what will essentially be CoreData++, even SFSymbols in a new spatial computing world where symbols play an extremely important role made more sense as something that needed investing in to make all the pieces work and fit together."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In short, visionOS feels like the last stop in a long journey of Apple tech announcements that were great on their own but were ultimately necessary ground work to get us to visionOS."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With that said, these are my notes on some of the new tech that came out of WWDC this year."}]},{type:a,value:c},{type:b,tag:m,props:{id:t},children:[{type:b,tag:e,props:{href:"#structured-logging",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For a minute this one felt like deja vu because what I got from the announcement and subsequent chatter in the iOS community seemed more about how we can replace print statements with OSLog now. But of course, OSLog has been around a while; since iOS 14\u002FWWDC 2020 in its current Apple unified logging Swift APIs flavour."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"What has really been announced is an Xcode feature that takes all that unified logging goodness and uses it as the basis for a really solid debugging tool integrated right into Xcode 15."}]},{type:a,value:c},{type:b,tag:J,props:{id:v},children:[{type:b,tag:e,props:{href:"#stdio-is-for-command-line-ui-oslog-is-for-debugging",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I think Apple may have taken the opportunity of releasing this new Xcode debugging tool that's going to get a lot of attention from the community to really double down and drive home the message to use "},{type:b,tag:f,props:{},children:[{type:a,value:"OSLog"}]},{type:a,value:", not "},{type:b,tag:f,props:{},children:[{type:a,value:"print()"}]},{type:a,value:" and that's where the kind of confusing narrative that we have some new way of logging has come from."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"At this point users of CocoaLumberjack like me might be wondering if it is time to move to OSLog and for many the answer might be yes. But I found this great "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002FCocoaLumberjack\u002FCocoaLumberjack\u002Fissues\u002F1289",rel:[n,o,p],target:q},children:[{type:a,value:"discussion on a Github issue"}]},{type:a,value:" from CocoaLumberjack's repo that highlights some really good reasons why for some the answer might still be and will may remain, no."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Use cases where you want to collect logs from users or allow users to do something with logs or generally do something more than debug with your logs seems to be something OSLog doesn't lend itself to well, but CocoaLumberjack does do this really well."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That being said though, I think the reasons OSLog doesn't do this is by design. Apple's unified logging system has "},{type:b,tag:"em",props:{},children:[{type:a,value:"a lot"}]},{type:a,value:" of privacy preserving features built in. And we all know logs are a huge source of data leaks that can leave to privacy and security breaches. If in 2023 you're still saving logs to a text file on the user's device and possibly also sending that somewhere else from there, you might want to evaluate if the risk reward benefit is falling the way you want."}]},{type:a,value:c},{type:b,tag:J,props:{id:y},children:[{type:b,tag:e,props:{href:"#other-things-from-structured-debugging",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:r,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:K}]},{type:a,value:" or 'do what I mean print' that LLDB "},{type:b,tag:f,props:{},children:[{type:a,value:d}]},{type:a,value:" is now aliased to "},{type:b,tag:f,props:{},children:[{type:a,value:K}]}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Create separate log handles for different components of application"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Tracing with OSLog in Instruments"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Logging Profiling template, OSLog and Sign Posts"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:A},children:[{type:b,tag:e,props:{href:"#sfsymbols-gets-a-glow-up",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"SFSymbols 5 introduced new animations which are super high quality animations\u002Ftransitions that can be applied with the "},{type:b,tag:f,props:{},children:[{type:a,value:".symbolEffect()"}]},{type:a,value:" modifer in iOS 17. I've had a chance to have a play around with these and I've made a "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fisleeponcouch\u002Fsfsymbolthing",rel:[n,o,p],target:q},children:[{type:a,value:"demo app available on my Github"}]},{type:a,value:" for exploring what's possible."}]},{type:a,value:c},{type:b,tag:m,props:{id:C},children:[{type:b,tag:e,props:{href:"#swift-macros",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So this is kind of a big deal. Swift Macros are essentially like macros in any other language, but they're more advanced in that they go further than just replacing the macro call with the contents of the macro but actually parse code and dynamically change it before compilation. This is what's powering SwiftData, the new Observable protocol and the new SwiftUI preview syntax."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I need to dive deeper but for now I'm following "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fkrzysztofzablocki\u002FSwift-Macros",rel:[n,o,p],target:q},children:[{type:a,value:"A curated list of awesome Swift Macros"}]},{type:a,value:" to keep in the loop."}]},{type:a,value:c},{type:b,tag:m,props:{id:E},children:[{type:b,tag:e,props:{href:"#swiftdata",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The next phase of Core Data? At first glance, SwiftData feels really similar to ORMs in backend web frameworks like Doctrine and Hibernate. Use Macros to define entities (or models now I guess?) and their attributes by writing it directly above the class or member declaration."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Compatible with Core Data with some form of migration available for existing Core Data codebases."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This one is really exciting in terms of the simplicity it seems to offer and the better mental mapping to existing ORM type data layers."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Apple says that SwiftData uses the proven storage architecture of Core Data. "},{type:b,tag:"del",props:{},children:[{type:a,value:"I think this goes further than just using the underlying SQLite database and my first thought is that the macros are generating code similar to what generating the category\u002Fextension based Entities from the Model does in CoreData."}]},{type:a,value:" Yeah no, it's definitely Core Data."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Core Data even with its improvements over the years has always been a steep learning curve, I think having an easier to grok native persistence layer even if it's only a better API into CoreData is going to be a really big thing for the ecosystem overall. At least, if avoiding Core Data is the reason for why so many projects end up shoehorning in a 3rd party database."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I put a "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fisleeponcouch\u002Fpersistphotoswiftdata",rel:[n,o,p],target:q},children:[{type:a,value:"demo project on Github"}]},{type:a,value:" that persists photos picked from "},{type:b,tag:f,props:{},children:[{type:a,value:"PhotosUI"}]},{type:a,value:" with "},{type:b,tag:f,props:{},children:[{type:a,value:s}]},{type:a,value:","}]},{type:a,value:c},{type:b,tag:m,props:{id:F},children:[{type:b,tag:e,props:{href:"#observable",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Like SwiftData this is another feature bootstapped by Swift Macros. I think this will help to flatten the learning curve for new SwiftUI developers but for existing SwiftUI developers who already know their way around "},{type:b,tag:f,props:{},children:[{type:a,value:"@ObservedObject"}]},{type:a,value:", "},{type:b,tag:f,props:{},children:[{type:a,value:"@StateObject"}]},{type:a,value:" etc. there is a bit of mental re-mapping to do."}]},{type:a,value:c},{type:b,tag:m,props:{id:H},children:[{type:b,tag:e,props:{href:"#visionos-spatial-computing-realitykit-reality-composer-pro-arkit",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There's a lot to unpack here and I've started in on a demo project, so maybe I can write a stand-alone post about this soon. There's definitely enough here to warrant it."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Overall an especially exciting WWDC, with a lot more sent out into the world by Apple than what I've covered here. With visionOS and Vision Pro we're at the beginning of another generation of Apple tech and it's an exciting space to be."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2023-07-26-unpacking-wwdc-2023",extension:".md"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","code","true",-1,"span","icon","icon-link",2,"h2","nofollow","noopener","noreferrer","_blank","li","SwiftData","structured-logging","Structured Logging","stdio-is-for-command-line-ui-oslog-is-for-debugging",3,"stdio is for command line UI. OSLog is for debugging","other-things-from-structured-debugging","Other things from Structured Debugging","sfsymbols-gets-a-glow-up","SFSymbols gets a glow up","swift-macros","Swift Macros","swiftdata","observable","Observable","visionos-spatial-computing-realitykit-reality-composer-pro-arkit","visionOS, Spatial Computing, RealityKit, Reality Composer Pro, ARKit","h3","dwim-print")));