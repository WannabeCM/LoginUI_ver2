##  로그인 화면 UI

시연 영상
![enter image description here](https://blog.kakaocdn.net/dn/WWDWE/btrzdM14j6k/zAktNmDkTyLbyl8RD636gK/img.gif)
[사이트 바로가기](https://wannabecm.github.io/LoginUI_ver2/)

## TIL
### button을 활용하여 모듈창 구현하기
기존에 앵커테그로 페이지 이동하는 방법이 아니라, 모듈창을 통하여 로그인 창이 팝업창처럼 나타나도록 구현해 보았다.

## 궁금한점
### 1. 화면을 확대하면 회색 배경이 짤리고, 흰 배경이 드러난다.
기존에 모듈창 배경에 height: 100vh를 주었으나 화면을 확대하면 바로 흰 배경이 드러났다. 그래서 임시방편으로 height: 150vh를 주어 조금 확대를 할 경우 흰 배경이 드러나지 않지만, 크게 확대할 경우 여전히 흰 배경이 드러난다. 어떻게 해결할 수 있을까? 
### 2. 모듈창 닫기를 누르면 required 경고문이 뜬다.
모듈창 닫기를 누르는데 왜 ID를 입력하지 않았다는 경고문이 뜨는것일까? 어떻게 해결할 수 있을까?
