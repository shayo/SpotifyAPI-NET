(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{197:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("This API provides full access to the new SpotifyWebAPI introduced "),s("a",{attrs:{href:"https://developer.spotify.com/web-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".\nWith it, you can search for Tracks/Albums/Artists and also get User-based information.\nIt's also possible to create new playlists and add tracks to it.")]),t._v(" "),s("h2",{attrs:{id:"first-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-steps","aria-hidden":"true"}},[t._v("#")]),t._v(" First steps")]),t._v(" "),s("h3",{attrs:{id:"imports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#imports","aria-hidden":"true"}},[t._v("#")]),t._v(" Imports")]),t._v(" "),s("p",[t._v("So after you added the API to your project, you may want to add following imports to your files:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" SpotifyAPI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Base Namespace")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" SpotifyAPI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Enums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Enums")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" SpotifyAPI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Models for the JSON-responses")]),t._v("\n")])])]),s("h3",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic-Usage")]),t._v(" "),s("p",[t._v("Now you can actually start doing calls to the SpotifyAPI, just create a new Instance of SpotifyWebAPI:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpotifyWebAPI")]),t._v(" _spotify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    _spotify "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpotifyWebAPI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        AccessToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXXXXXXXXXXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        TokenType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FullTrack")]),t._v(" track "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _spotify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetTrack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3Hvu1pq89D4R0lyPBoujSv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("track"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Yeay! We just printed a tracks name.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You may note that we used "),s("code",[t._v("AccessToken")]),t._v(" and "),s("code",[t._v("TokenType")]),t._v(". Spotify does not allow un-authorized access to their API. You will need to implement one of the auth flows. Luckily, "),s("code",[t._v("SpotifyAPI.Web.Auth")]),t._v(" exists for this reason. A simple way to receive a "),s("code",[t._v("AccessToken")]),t._v(" is via "),s("code",[t._v("CredentialAuth")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CredentialsAuth")]),t._v(" auth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CredentialsAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourClientID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YourClientSecret"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Token")]),t._v(" token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n_spotify "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpotifyWebAPI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  AccessToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  TokenType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TokenType\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("For more info, visit the "),s("router-link",{attrs:{to:"/auth/getting_started/"}},[t._v("Getting Started of SpotifyAPI.Web.Auth")])],1),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("A list of small examples can be found "),s("router-link",{attrs:{to:"/web/examples/"}},[t._v("here")]),t._v(". Do you think a specific example is missing? Feel free to open a PR.mdIssue!")],1),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"error-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-handling","aria-hidden":"true"}},[t._v("#")]),t._v(" Error-Handling")]),t._v(" "),s("p",[t._v("Every API-Call returns a reponse-model which consists of base-error model. To check if a specific API-Call was successful, use the following approach:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PrivateProfile")]),t._v(" profile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _spotify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetPrivateProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("profile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HasError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error Status: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" profile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error Msg: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" profile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("In case some or all of the returned values are null, consult error status and message, they can lead to an explanation!")]),t._v(" "),s("h2",{attrs:{id:"sync-vs-asynchronous"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sync-vs-asynchronous","aria-hidden":"true"}},[t._v("#")]),t._v(" Sync vs Asynchronous")]),t._v(" "),s("p",[t._v("Every API-Call has an "),s("code",[t._v("asynchronous")]),t._v(" and "),s("code",[t._v("synchronous")]),t._v(" method.")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" asyncProfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" _spotify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetPrivateProfileAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" syncProfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _spotify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetPrivateProfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Note that the "),s("code",[t._v("synchronous")]),t._v(" call will block the current Thread!")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"api-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[t._v("#")]),t._v(" API-Reference")]),t._v(" "),s("h3",{attrs:{id:"albums"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#albums","aria-hidden":"true"}},[t._v("#")]),t._v(" Albums")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/albums.html#getalbumtracks"}},[t._v("GetAlbumTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/albums.html#getalbum"}},[t._v("GetAlbum")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/albums.html#getseveralalbums"}},[t._v("GetSeveralAlbums")])],1)]),t._v(" "),s("h3",{attrs:{id:"artists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#artists","aria-hidden":"true"}},[t._v("#")]),t._v(" Artists")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/artists.html#getartist"}},[t._v("GetArtist")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/artists.html#getrelatedartists"}},[t._v("GetRelatedArtists")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/artists.html#getartiststoptracks"}},[t._v("GetArtistsTopTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/artists.html#getartistsalbums"}},[t._v("GetArtistsAlbums")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/artists.html#getseveralartists"}},[t._v("GetSeveralArtists")])],1)]),t._v(" "),s("h3",{attrs:{id:"browse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browse","aria-hidden":"true"}},[t._v("#")]),t._v(" Browse")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/browse.html#getfeaturedplaylists"}},[t._v("GetFeaturedPlaylists")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/browse.html#getnewalbumreleases"}},[t._v("GetNewAlbumReleases")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/browse.html#getcategories"}},[t._v("GetCategories")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/browse.html#getcategory"}},[t._v("GetCategory")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/browse.html#getcategoryplaylists"}},[t._v("GetCategoryPlaylists")])],1)]),t._v(" "),s("h3",{attrs:{id:"follow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#follow","aria-hidden":"true"}},[t._v("#")]),t._v(" Follow")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/follow.html#follow"}},[t._v("Follow")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/follow.html#unfollow"}},[t._v("Unfollow")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/follow.html#isfollowing"}},[t._v("IsFollowing")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/follow.html#followplaylist"}},[t._v("FollowPlaylist")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/follow.html#unfollowplaylist"}},[t._v("UnfollowPlaylist")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/follow.html#isfollowingplaylist"}},[t._v("IsFollowingPlaylist")])],1)]),t._v(" "),s("h3",{attrs:{id:"library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#library","aria-hidden":"true"}},[t._v("#")]),t._v(" Library")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/library.html#savetracks"}},[t._v("SaveTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/library.html#savetrack"}},[t._v("SaveTrack")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/library.html#getsavedtracks"}},[t._v("GetSavedTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/library.html#removesavedtracks"}},[t._v("RemoveSavedTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/library.html#checksavedtracks"}},[t._v("CheckSavedTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/library.html#savealbums"}},[t._v("SaveAlbums")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/library.html#savealbum"}},[t._v("SaveAlbum")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/library.html#getsavedalbums"}},[t._v("GetSavedAlbums")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/library.html#removesavedalbums"}},[t._v("RemoveSavedAlbums")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/library.html#checksavedalbums"}},[t._v("CheckSavedAlbums")])],1)]),t._v(" "),s("h3",{attrs:{id:"personalization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#personalization","aria-hidden":"true"}},[t._v("#")]),t._v(" Personalization")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/personalization.html#getuserstoptracks"}},[t._v("GetUsersTopTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/personalization.html#getuserstopartists"}},[t._v("GetUsersTopArtists")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/personalization.html#getusersrecentlyplayedtracks"}},[t._v("GetUsersRecentlyPlayedTracks")])],1)]),t._v(" "),s("h3",{attrs:{id:"player"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#player","aria-hidden":"true"}},[t._v("#")]),t._v(" Player")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/player.html#getdevices"}},[t._v("GetDevices")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/player.html#getplayback"}},[t._v("GetPlayback")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/player.html#getplayingtrack"}},[t._v("GetPlayingTrack")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/player.html#transferplayback"}},[t._v("TransferPlayback")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/player.html#resumeplayback"}},[t._v("ResumePlayback")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/player.html#pauseplayback"}},[t._v("PausePlayback")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/player.html#skipplaybacktonext"}},[t._v("SkipPlaybackToNext")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/player.html#skipplaybacktoprevious"}},[t._v("SkipPlaybackToPrevious")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/player.html#setrepeatmode"}},[t._v("SetRepeatMode")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/player.html#setvolume"}},[t._v("SetVolume")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/player.html#setshuffle"}},[t._v("SetShuffle")])],1)]),t._v(" "),s("h3",{attrs:{id:"playlists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playlists","aria-hidden":"true"}},[t._v("#")]),t._v(" Playlists")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/playlists.html#getuserplaylists"}},[t._v("GetUserPlaylists")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/playlists.html#getplaylist"}},[t._v("GetPlaylist")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/playlists.html#getplaylisttracks"}},[t._v("GetPlaylistTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/playlists.html#createplaylist"}},[t._v("CreatePlaylist")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/playlists.html#updateplaylist"}},[t._v("UpdatePlaylist")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/playlists.html#replaceplaylisttracks"}},[t._v("ReplacePlaylistTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/playlists.html#removeplaylisttracks"}},[t._v("RemovePlaylistTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/playlists.html#removeplaylisttrack"}},[t._v("RemovePlaylistTrack")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/playlists.html#addplaylisttracks"}},[t._v("AddPlaylistTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/playlists.html#addplaylisttrack"}},[t._v("AddPlaylistTrack")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/playlists.html#reorderplaylist"}},[t._v("ReorderPlaylist")])],1)]),t._v(" "),s("h3",{attrs:{id:"profiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#profiles","aria-hidden":"true"}},[t._v("#")]),t._v(" Profiles")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/profiles.html#getpublicprofile"}},[t._v("GetPublicProfile")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/profiles.html#getprivateprofile"}},[t._v("GetPrivateProfile")])],1)]),t._v(" "),s("h3",{attrs:{id:"search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search","aria-hidden":"true"}},[t._v("#")]),t._v(" Search")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/search.html#searchitems"}},[t._v("SearchItems")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/search.html#searchitemsescaped"}},[t._v("SearchItemsEscaped")])],1)]),t._v(" "),s("h3",{attrs:{id:"tracks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tracks","aria-hidden":"true"}},[t._v("#")]),t._v(" Tracks")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/tracks.html#getseveraltracks"}},[t._v("GetSeveralTracks")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/tracks.html#gettrack"}},[t._v("GetTrack")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/web/tracks.html#getaudioanalysis"}},[t._v("GetAudioAnalysis")])],1)]),t._v(" "),s("h3",{attrs:{id:"util"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#util","aria-hidden":"true"}},[t._v("#")]),t._v(" Util")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/web/utils.html"}},[t._v("Utility-Functions")])],1)])])},[],!1,null,null,null);a.default=r.exports}}]);