(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(e,r,a){"use strict";a.r(r);var t=a(44),n=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"server-error-faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-error-faq"}},[e._v("#")]),e._v(" Server Error FaQ")]),e._v(" "),a("p",[e._v("마인크래프트 서버 실행 시 나오는 오류 메시지들에 대한 자주 묻는 질문 모음입니다.")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("h1",{attrs:{id:"질문-하기-전에"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#질문-하기-전에"}},[e._v("#")]),e._v(" 질문 하기 전에")]),e._v(" "),a("p",[e._v("Google과 같은 검색 사이트에서 직접 검색하여 먼저 문제를 찾아 보시는 것을 추천 드립니다.")]),e._v(" "),a("p",[e._v('관련된 내용을 무조건 이슈에 작성하지 말고, "오류내용이 이 플러그인과 관련해서밖에 나올 수 없다" 라고 생각하는 경우에 이슈를 달아 주시길 바라겠습니다.')]),e._v(" "),a("hr"),e._v(" "),a("h1",{attrs:{id:"java-version-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-version-error"}},[e._v("#")]),e._v(" Java Version Error")]),e._v(" "),a("h2",{attrs:{id:"시작하기-전에"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시작하기-전에"}},[e._v("#")]),e._v(" 시작하기 전에")]),e._v(" "),a("p",[e._v("Java Version 관련 오류는 여러가지가 있습니다. 이 글에서는 대표적인 오류 내용으로 설명을합니다.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("org.bukkit.plugin.InvalidPluginException: java.lang.UnsupportedClassVersionError: ~~~ has been compiled by a more recent version of the Java Runtime (class file version 55.0), this version of the Java Runtime only recognizes class file versions up to 52.0\n")])])]),a("p",[e._v("와 같은 오류가 나올 경우 이 글을 확인해주세요.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("최근 "),a("a",{attrs:{href:"https://papermc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PaperMC"),a("OutboundLink")],1),e._v(" 에서 Minecraft 1.17이 출시 될 시 Java 8에 대한 지원을 중단한다는 소식이 나왔습니다. 이로 인하여 개발자들이 Java(JDK) 11로 버전을 올려서 코드를 작성하게 되었습니다.")]),e._v(" "),a("p",[e._v("이 과정에서 JDK 11을 이용해 플러그인이 컴파일 되고, 현재로써는 PaperMC가 계속 Java 8을 지원하지만 JDK 11을 이용해 컴파일 된 플러그인이 로딩이 되고 있지 않습니다.")]),e._v(" "),a("h2",{attrs:{id:"해결-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#해결-방법"}},[e._v("#")]),e._v(" 해결 방법")]),e._v(" "),a("p",[e._v("Java 11이하의 Java를 제거하고 Java 11을 설치하는 방법입니다.")]),e._v(" "),a("p",[e._v("설치하는 방법은 다양합니다. "),a("RouterLink",{attrs:{to:"/Java-Installation.html"}},[e._v("여기")]),e._v("에서 확인해주시길 바랍니다.")],1),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n")])])]),a("p",[e._v("와 같은 오류가 나올 경우 이 글을 확인해주세요.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("32비트의 Java를 설치하여서 나오는 오류 내용입니다.")]),e._v(" "),a("p",[e._v("64비트의 Java를 설치하고 시도해 보시길 바랍니다. OpenJDK11이 권장됩니다.")]),e._v(" "),a("p",[e._v("설치 문서는 "),a("RouterLink",{attrs:{to:"/Java-Installation.html"}},[e._v("여기")]),e._v("에서 확인해주시길 바랍니다.\n"),a("br"),e._v(" "),a("br")],1),e._v(" "),a("h1",{attrs:{id:"unknown-dependency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unknown-dependency"}},[e._v("#")]),e._v(" Unknown Dependency")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("org.bukkit.plugin.UnknownDependencyException: Unknown dependency ~~~. Please download and install ~~~ to run this plugin.\n")])])]),a("p",[e._v("와 같은 오류가 나올 경우 이 글을 확인해주세요.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("의존성 플러그인이 없어서 나오는 오류 내용입니다. 의존성 플러그인을 다운받아 주세요.")]),e._v(" "),a("p",[e._v("제가 제작한 의존 가능한 플러그인들은 "),a("a",{attrs:{href:"https://github.com/monun/tap/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tap"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/monun/kotlin-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kotlin"),a("OutboundLink")],1),e._v("등이 있으며, 다른이들이 만든 의존성 플러그인들은 "),a("a",{attrs:{href:"https://dev.bukkit.org/projects/worldedit/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("WorldEdit"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/dmulloy2/ProtocolLib/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProtocolLib"),a("OutboundLink")],1),e._v(" 등이 있습니다.")]),e._v(" "),a("p",[e._v("다운로드 하실 때, "),a("code",[e._v("src/main/resources/")]),e._v(" 에 위치한 plugin.yml을 확인하여 depend가 무엇이 있는지 확인하시고, 루트 디렉터리의 "),a("code",[e._v("build.gradle.kts")]),e._v("의 dependencies 를 확인하여 "),a("strong",[e._v("정확한 버전")]),e._v("을 확인해주십시오. 그렇지 않을 경우 오류가 발생 할 수 있습니다.")])])}),[],!1,null,null,null);r.default=n.exports}}]);