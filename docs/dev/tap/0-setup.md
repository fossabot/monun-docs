---
sidebar_position: 2
---

# 0. Setup

## 개발 환경
    * JDK 16+
    * Kotlin
    * Paper 1.17+

## Tap의 기능 overview (Tap의 설명 中)
    - 패킷
    - 가상 개체
    - 가상 발사체
    - 개체별 이벤트 리스너
    - YamlConfiguration을 이용한 문자열 템플릿
    - 추가적인 인벤토리 함수
    - GitHub를 통한 업데이트 (BETA)
    - Tick 기반 태스크 스케쥴러 (Ticker)

## 사용
### Gradle
#### Groovy
```groovy
repositories {
    mavenCentral()
}

dependencies {
    implementation 'io.github.monun:tap-api:+'
}
```

#### Kotlin
```kotlin
repositories {
    mavenCentral()
}

dependencies {
    implementation("io.github.monun:tap-api:+")
}
```

### plugin.yml
```yaml
name: ...
author: ...
main: ...
version: ...
libraries:
    - io.github.monun:tap:+
```
> 주의! 여기에서는 tap-api 대신 tap을 넣어야한다

<!--
val heptagram = retrieveUser("Heptagram")
println(heptagram.fans.map { it.blackCowness }.sum())

-------------------------------------------------------
| C͟O͟N͟S͟O͟L͟E͟ | TERMINAL | PROBLEMS |
Exception in thread "main" java.lang.ArithmeticException: integer overflow
-->
