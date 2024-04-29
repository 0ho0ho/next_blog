---
title: Vite 마이그레이션 실전편
excerpt: 팀 주요 프로젝트 번들러를 Vite로 마이그레이션 하는 작업을 진행했습니다. 어떻게 작업을 진행했고, 어떤 문제들을 마주하고 해결해나갔는지 기록하기 위한 글입니다.
date: '2024-04-05'
---

팀 주요 프로젝트 번들러를 Vite로 마이그레이션 하는 작업을 진행했습니다. 어떻게 작업을 진행했고, 어떤 문제들을 마주하고 해결해나갔는지 기록하기 위한 글입니다.

## Vite 마이그레이션 결과

먼저 Vite 마이그레이션으로 더 나아진 부분에 대해 설명하려고 합니다.

빌드 속도, 개발 서버 실행 속도, HMR 등 개발 생산성 측면에서 많이 개선됐습니다.

### 빌드 속도

**webpack** ![webpack-build](/assets/blog/vite_migration/webpack-build.png)

**vite** ![vite-build](/assets/blog/vite_migration/vite-build.png)

### 개발 서버 실행 속도

**webpack** ![webpack-server-start](/assets/blog/vite_migration/webpack-server-start.png)

**vite** ![vite-server-start](/assets/blog/vite_migration/vite-server-start.png)

### HMR

**webpack** ![webpack-hmr](/assets/blog/vite_migration/webpack-hmr.png)

**vite** ![vite-hmr](/assets/blog/vite_migration/vite-hmr.png)

## Vite로 마이그레이션을 하게 된 이유

PR에 달린 작은 코멘트로부터 시작됐습니다.

![pr-comment](/assets/blog/vite_migration/comment.png)
코드 리뷰를 하다가 위 코멘트를 봤는데 시간이 되면 한번 해보려고 생각하고 있었습니다.

기존에 특별히 문제가 있었던 건 아니었습니다. 다만, 팀에서 관리하는 프로젝트 중 Vite를 사용하는 것도 있었는데 빌드 속도도 빠르고, 개발 서버 실행이나 HMR도 빨라서 이미 좋은 경험을 하고 있었기 때문에 주요 프로젝트에도 적용하면 좋을거라 생각했습니다.

## Vite 특징

### Dependency Pre-Bundling

Vite는 **의존성(Dependencies)**과 **소스코드(Source code)**를 분리해서 처리합니다.

일반적으로 변경되지 않는 **의존성**의 경우 사전 번들링을 수행합니다. 사전 번들링을 통해 CommonJS나 UMD 모듈을 ESM 형태로 변환하고, 그 과정에서 여러 내부 모듈을 가진 패키지를 하나의 단일 모듈로 변환합니다. 사전 번들링 된 의존성들은 HTTP 헤더 `Cache-Control`을 통해 캐싱되어 페이지 새로고침 시에도 빠르게 불러올 수 있습니다.
이와 같은 사전 번들링은 Go 언어로 작성된 esbuild를 통해 이루어지는데 Go 언어의 특성으로 인해 javascript 기반 번들러와 비교해 매우 빠른 속도로 수행됩니다.

**소스코드**는 말그대로 우리가 작성하는 코드들을 의미합니다. Vite는 브라우저의 요청에 따라 소스 코드 변환하여 제공합니다. 기존에는 번들러가 모듈화를 통해 필요한 모듈을 다운 받을 수 있게 해줬다면, Vite는 브라우저에게 번들러의 역할을 위임하고, 필요한 모듈을 변환해서 제공한다고 볼 수 있습니다. 이와 같은 방식은 [Native ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)을 통해 이루어집니다.
![alt text](/assets/blog/vite_migration/comparison.png)
출처 - Vite 공식 홈페이지

### HMR(Hot Module Replacement)

HMR의 경우 보통 어플리케이션의 사이즈가 커질수록 변경 사항을 적용하는데 시간이 오래걸립니다. Vite의 경우 변경된 코드가 포함된 모듈만 다시 요청함으로써 거의 실시간에 가까운 속도로 변경 사항을 확인할 수 있습니다.

### Transpile Only

Vite는 타입스크립트 파일을 js로 트랜스파일링만 할 뿐 타입체킹은 하지 않습니다. 필요한 모듈을 브라우저가 실행할 수 있는 형태로 최대한 빠르게 제공하는데 초점을 맞춘걸로 보입니다.

타입 체킹을 위해서 production 환경의 경우 build 명령어에 `tsc --noEmit`을 추가하거나 개발 환경에서는 `vite-plugin-checker`같은 플러그인을 사용할 수도 있다.

## 마이그레이션 과정과 마주한 이슈

공식 홈페이지에서 안내하는대로 기본 설정을 추가한 후 개발 서버 실행을 했는데 모듈을 찾을 수 없다는 에러가 발생했습니다.

![import-error](/assets/blog/vite_migration/import-error.png)

프로젝트에서는 절대 경로로 모듈을 import 하고 있었고, alias를 설정이 따로 없었기 때문에 발생하는 문제였습니다.

`resolve.alias` 옵션을 통해 설정이 가능합니다.

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '',
        replacement: '',
      },
    ],
  },
});
```

`vite-tsconfig-paths` 플러그인을 사용하면 `resolve.alias` 옵션을 사용하는 것보다 편리하게 설정이 가능합니다. tsconfig의 `paths` 속성에 따라 매핑을 해주기 때문에 `vite-tsconfig-paths` 플러그인을 사용했습니다.

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
```

플러그인을 추가한 후에 다시 보니 이번엔 `process is not defined` 에러가 나타났습니다.

![process-error](/assets/blog/vite_migration/process-error.png)

Vite는 환경 변수를 사용할 때 env 파일에 환경 변수를 `VITE_*` 형태로 정의하고, `import.meta.env.VITE_*` 형태로 사용이 가능합니다. 하지만 프로젝트에 존재하는 모든 환경 변수를 수정하기에는 사이드 이펙트가 신경쓰여서 다른 방법을 찾아봤습니다.

`vite-plugin-env-compatible` 플러그인을 사용하면 `process.env.*` 형태로 환경 변수에 접근이 가능하고, prefix 설정을 통해 기존 환경 변수명을 그대로 가져갈 수 있습니다. 앞으로 추가되는 환경 변수나 작업하는 페이지 내에 환경 변수가 있을경우 `VITE_*` 형태로 선언하고, `import.meta.env.*` 형태로 사용하도록 점진적으로 변경해 나가기로 했습니다.

```typescript
// vite.config.ts
const ENV_PREFIX = 'REACT_APP_';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), envCompatible({ prefix: ENV_PREFIX })],
});
```

플러그인을 추가하고 보니 또 다른 에러가 튀어나왔습니다.

![global-error](/assets/blog/vite_migration/global-error.png)

프로젝트에서 사용하는 사내 패키지 모듈에서 발생하고 있었습니다. 해당 패키지는 umd 모듈 형태로 export 되고 있는데 그 과정에서 아래 코드와 같이 global 변수가 사용됩니다.

```typescript
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['MyLibrary'] = factory();
  else root['MyLibrary'] = factory();
})(global, function () {
  return _entry_return_;
});
```

하지만 Vite는 global과 같은 노드 변수 관련 shims를 제공하지 않기 때문에 global이 정의되어 있지 않다고 에러가 발생하고 있었습니다.

아래와 같이 define 속성을 사용해서 해결이 가능합니다.

```typescript
// vite.config.ts
const ENV_PREFIX = 'REACT_APP_';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), envCompatible({ prefix: ENV_PREFIX })],
  define: {
    global: 'globalThis',
  },
});
```

드디어 정상적인 화면을 확인할 수 있었고, 빌드를 돌려보니 기존에 비해 빌드 시간이 절반으로 줄어든걸 확인할 수 있었습니다.

추가로 기존 webpack 설정에 폰트 preload 관련 코드가 있었고, 이 부분도 동일하게 적용을 해야했습니다.

```typescript
// 기존 설정
webpackConfig.plugins.unshift(
  new FontPreloadPlugin({
    extensions: ['woff2'],
  })
);
```

`vite-plugin-html` 패키지를 이용해서 아래와 같이 코드를 넣어주면 동일하게 구현이 가능합니다.

```typescript
// vite.config.ts
const fontsDirectory = path.resolve(__dirname, 'src/static/fonts');
const fontFiles = readdirSync(fontsDirectory).filter(file => file.endsWith('.woff2'));
const injectFontsToHead: HtmlTagDescriptor[] = fontFiles.map(fontFile => ({
  tag: 'link',
  attrs: {
    rel: 'preload',
    href: `/폰트파일경로/${fontFile}`,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
}));

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      // ...
      createHtmlPlugin({
        minify: true,
        inject: {
          tags: injectFontsToHead,
        },
      }),
      // ...
    ],
  };
});
```

여기에 몇 가지 옵션들을 입맛에 맞게 설정하면 마이그레이션 작업은 끝입니다.

하지만 거슬리는게 하나 있습니다. 빌드를 돌려보면 두 개의 청크 용량이 기준 용량인 500KB를 초과해서 경고가 나타나고 있었습니다.
![build-result](/assets/blog/vite_migration/build-result.png)

`build.chunkSizeWarningLimit` 옵션을 수정해서 경고를 안띄우게 해버릴 수도 있습니다. 하지만 하나의 js파일 용량이 클 경우 페이지 로드 시간에 안좋은 영향을 미칠 수 있기 때문에 최대한 줄여주는게 나을거라 생각했습니다.

자세히 확인해보기 위해 `rollup-plugin-visualizer`를 설치해서 확인해보니 크게 두가지 문제가 있었습니다.

**첫번째, index 파일에서 사용하는 패키지 중 lottie-web이라는 패키지가 너무 많은 용량을 차지하고 있음**  
**두번째, 용량이 2,000KB가 넘어가는 lottie json 파일이 번들 파일에 통채로 묶여있음**

먼저, 첫번째 원인을 해결하기 위해 lottie-web 파일을 별도의 청크로 분리하기로 했습니다.

Vite는 production 환경 빌드 시에는 rollup을 사용합니다. `build.rollupOptions.output.manualChunks` 옵션을 사용해서 lottie-web을 별도의 청크로 분리할 수 있습니다.

```typescript
// vite.config.ts
export default defineConfig(({ mode }) => {
  return {
    // ...
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'lottie-web': ['lottie-web'],
          },
        },
      },
    },
    // ...
  };
});
```

index 파일이 **899.27KB => 518.87KB**로 줄어들었지만 아직도 500KB가 넘어가기 떄문에 경고가 발생합니다.
![except-lottie](/assets/blog/vite_migration/except-lottie.png)

react와 react-dom도 같은 방식으로 하나의 청크로 묶어줍니다.

```typescript
// vite.config.ts
export default defineConfig(({ mode }) => {
  return {
    // ...
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            'lottie-web': ['lottie-web'],
          },
        },
      },
    },
    // ...
  };
});
```

이제야 좀 편안해졌습니다. 최종적으로 **899.27KB => 377.21KB**로 index 청크 사이즈가 줄어들었습니다.
![except-react](/assets/blog/vite_migration/except-react.png)

`rollup-plugin-visualizer`로 다시 확인해봤는데 lottie-web이 분리됐지만 아직도 많은 용량을 차지하고 있는게 신경쓰입니다.
![lottie-chunk](/assets/blog/vite_migration/lottie-chunk.png)

구글링을 하다가 lottie-web github [Wiki](https://github.com/airbnb/lottie-web/wiki/Lottie-Light)에서 light 버전이 있다는걸 알게됐습니다.

lottie-web은 html, canvas, svg 렌더러를 사용할 수 있습니다. light 버전은 svg 렌더러만 지원했는데 현재 프로젝트는 svg 렌더러만으로도 충분한 상태였기 때문에 light 버전을 사용하기로 했습니다.

light 버전은 이런식으로 사용할 수 있습니다.

```typescript
import lottie from 'lottie-web/build/player/lottie_light';
```

lottie-web을 사용하는 모든 코드를 변경하는 대신 `resolve.alias` 옵션을 사용했다.

```typescript
// vite.config.ts
export default defineConfig(({ mode }) => {
  return {
    // ...
    resolve: {
      alias: [{ find: 'lottie-web', replacement: 'lottie-web/build/player/lottie_light' }],
    },
    // ...
  };
});
```

결과적으로 lottie-web 청크 용량을 **281.33KB => 172.53KB** 로 줄일 수 있었습니다.
![lottie-chunk-2](/assets/blog/vite_migration/lottie-chunk-2.png)

첫번째 문제는 해결됐고, 두번째 문제가 남았습니다.

기존에 lottie json 파일을 import해서 animationData에 해당 데이터를 넣어주는 방식으로 사용하고 있었습니다.
그러다보니 용량이 큰 json 파일 전체가 하나의 청크로 묶여있었고, 용량이 커질 수 밖에 없는 상황이었습니다.

```typescript
import lottieData from '로띠파일.json';
import lottie from 'lottie-web';

lottie.loadAnimation({
  animationData: lottieData,
});
```

lottie-web 깃헙을 둘러보니 `animationData`가 아닌 `path` 방식으로도 사용이 가능해 보였습니다.
`path`를 사용하면 json 파일을 스크립트에 포함하지 않고, 사용할 때 불러올 수 있습니다.

그래서 `animationData`에 json 파일을 import 해서 넣어주는 방식 대신 `path`에 경로를 넣어주는 방식으로 수정했습니다.

```typescript
import lottie from 'lottie-web';

lottie.loadAnimation({
  path: '/파일경로/로띠파일.json',
});
```

하나의 청크 용량이 2000KB가 넘어가던 이유가 lottie json 파일로 인한거라 수정 후에는 0.37KB로 소스코드와 관련된 부분만 남게 됐습니다. 전체 번들 사이즈 중에서 2000KB가 줄어들었다고도 볼 수 있습니다.
![buncare-lottie](/assets/blog/vite_migration/buncare-lottie.png)

이제 다 끝난줄 알았는데 production 환경에서는 lottie 애니메이션이 안나오는 문제가 있었습니다.
네트워크 탭에서 확인해보니 lottie json 파일을 받아올 때 응답 헤더의 `Content-Type`을 `html/text`로 받아오고 있었습니다.
이 부분은 배포할 때 실행되는 스크립트에서 `Content-Type`을 잘못 넣어주고 있던걸 확인하여 해당 스크립트에서 lottie json 파일에 대한 `Content-Type`을 설정해주는걸로 해결했습니다.

결과적으로 기존에 발생하던 청크 사이즈 관련 경고 메시지를 전부 없앨 수 있었습니다.

## 마무리

Webpack => Vite 마이그레이션만 생각하면 간단한 작업이었습니다. 하지만 작업 도중 신경쓰이는 부분들로 인해 추가로 여러가지 작업을 하게된 것 같습니다. 그동안 개발을 하면서 번들러 설정을 직접 해본 적이 없는 것 같은데 이번에 이것 저것 해볼 수 있어서 재밌었고, 결과적으로 개발 생산성 측면에서도 많이 개선할 수 있어서 좋은 경험이었다고 생각합니다. 이번 기회를 통해 Vite의 장점을 확실히 느꼈기 때문에 팀에서 관리하는 다른 레포들도 하나씩 적용을 해나갈 계획입니다.
