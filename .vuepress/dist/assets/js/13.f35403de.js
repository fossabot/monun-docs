(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{369:function(e,a,r){"use strict";r.r(a);var t=r(44),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"server-error-faq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-error-faq"}},[e._v("#")]),e._v(" Server Error FaQ")]),e._v(" "),r("p",[e._v("마인크래프트 서버 실행 시 나오는 오류 메시지들에 대한 자주 묻는 질문 모음입니다.")]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("h1",{attrs:{id:"질문-하기-전에"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#질문-하기-전에"}},[e._v("#")]),e._v(" 질문 하기 전에")]),e._v(" "),r("p",[e._v("Google과 같은 검색 사이트에서 직접 검색하여 먼저 문제를 찾아 보시는 것을 추천 드립니다.")]),e._v(" "),r("p",[e._v('관련된 내용을 무조건 이슈에 작성하지 말고, "오류내용이 이 플러그인과 관련해서밖에 나올 수 없다" 라고 생각하는 경우에 이슈를 달아 주시길 바라겠습니다.')]),e._v(" "),r("hr"),e._v(" "),r("h1",{attrs:{id:"java-version-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java-version-error"}},[e._v("#")]),e._v(" Java Version Error")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("org.bukkit.plugin.InvalidPluginException: java.lang.UnsupportedClassVersionError: ~~~ has been compiled by a more recent version of the Java Runtime (class file version 55.0), this version of the Java Runtime only recognizes class file versions up to 52.0\n")])])]),r("p",[e._v("와 같은 오류가 나올 경우 이 글을 확인해주세요.")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("최근 "),r("a",{attrs:{href:"https://papermc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PaperMC"),r("OutboundLink")],1),e._v(" 에서 Minecraft 1.17이 출시 될 시 Java 8에 대한 지원을 중단한다는 소식이 나왔습니다. 이로 인하여 개발자들이 Java(JDK) 11로 버전을 올려서 코드를 작성하게 되었습니다.")]),e._v(" "),r("p",[e._v("이 과정에서 JDK 11을 이용해 플러그인이 컴파일 되고, 현재로써는 PaperMC가 계속 Java 8을 지원하지만 JDK 11을 이용해 컴파일 된 플러그인이 로딩이 되고 있지 않습니다.")]),e._v(" "),r("h2",{attrs:{id:"해결-방법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#해결-방법"}},[e._v("#")]),e._v(" 해결 방법")]),e._v(" "),r("p",[e._v("Java 11이하의 Java를 제거하고 Java 11을 설치하는 방법입니다.")]),e._v(" "),r("p",[e._v("설치하는 방법은 다양합니다.")]),e._v(" "),r("p",[e._v("Oracle에서 직접 지원하는 안정적인 "),r("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-jdk11-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle JDK 11"),r("OutboundLink")],1),e._v("를 설치 하거나,")]),e._v(" "),r("p",[e._v("GPL 라이선스로 제공되는 OpenJDK를 다운로드 할 수도 있습니다.")]),e._v(" "),r("h4",{attrs:{id:"openjdk-설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#openjdk-설치"}},[e._v("#")]),e._v(" OpenJDK 설치")]),e._v(" "),r("p",[e._v("이 문서에서는 GPL 라이선스를 사용하는 OpenJDK를 기준으로 설명됩니다.")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows:")]),e._v(" "),r("blockquote",[r("p",[e._v("OJDKBuild에서 다운로드: "),r("a",{attrs:{href:"https://github.com/ojdkbuild/ojdkbuild/",target:"_blank",rel:"noopener noreferrer"}},[e._v("여기"),r("OutboundLink")],1),e._v("로 접속해 README.md에 있는 .msi를 실행하면 됩니다.")])]),e._v(" "),r("blockquote",[r("p",[e._v("AdoptOpenJDK에서 다운로드: "),r("a",{attrs:{href:"https://github.com/AdoptOpenJDK/openjdk11-binaries/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("여기"),r("OutboundLink")],1),e._v("로 접속해 Assets에 있는 .msi를 설치하시면 됩니다.")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"macos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" macOS:")]),e._v(" "),r("p",[e._v("HomeBrew를 사용하여 AdoptOpenJDK에서 다운로드 합니다.")]),e._v(" "),r("p",[r("code",[e._v("brew tap AdoptOpenJDK/openjdk")])]),e._v(" "),r("p",[r("code",[e._v("brew cask install adoptopenjdk11")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"linux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux:")]),e._v(" "),r("h4",{attrs:{id:"debian-계열-linux-환경-apt-사용"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#debian-계열-linux-환경-apt-사용"}},[e._v("#")]),e._v(" Debian 계열 Linux 환경 (apt 사용):")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y openjdk-11-jdk-headless\n")])])]),r("h4",{attrs:{id:"arch-계열-linux-환경-pacman-사용"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arch-계열-linux-환경-pacman-사용"}},[e._v("#")]),e._v(" Arch 계열 Linux 환경 (pacman 사용):")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pacman -Syu "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pacman -S jre11-openjdk-headless\n")])])]),r("hr"),e._v(" "),r("p",[e._v("이외의 바이너리 파일들은 https://jdk.java.net/ 에서 확인 가능합니다.")]),e._v(" "),r("hr"),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("h1",{attrs:{id:"unknown-dependency"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unknown-dependency"}},[e._v("#")]),e._v(" Unknown Dependency")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("org.bukkit.plugin.UnknownDependencyException: Unknown dependency ~~~. Please download and install ~~~ to run this plugin.\n")])])]),r("p",[e._v("와 같은 오류가 나올 경우 이 글을 확인해주세요.")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("의존성 플러그인이 없어서 나오는 오류 내용입니다. 의존성 플러그인을 다운받아 주세요.")]),e._v(" "),r("p",[e._v("제가 제작한 의존 가능한 플러그인들은 "),r("a",{attrs:{href:"https://github.com/monun/tap/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tap"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/monun/kotlin-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kotlin"),r("OutboundLink")],1),e._v("등이 있으며, 다른이들이 만든 의존성 플러그인들은 "),r("a",{attrs:{href:"https://dev.bukkit.org/projects/worldedit/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("WorldEdit"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/dmulloy2/ProtocolLib/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProtocolLib"),r("OutboundLink")],1),e._v(" 등이 있습니다.")]),e._v(" "),r("p",[e._v("다운로드 하실 때, "),r("code",[e._v("src/main/resources/")]),e._v(" 에 위치한 plugin.yml을 확인하여 depend가 무엇이 있는지 확인하시고, 루트 디렉터리의 "),r("code",[e._v("build.gradle.kts")]),e._v("의 dependencies 를 확인하여 "),r("strong",[e._v("정확한 버전")]),e._v("을 확인해주십시오. 그렇지 않을 경우 오류가 발생 할 수 있습니다.")])])}),[],!1,null,null,null);a.default=n.exports}}]);