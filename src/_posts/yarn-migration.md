---
title: yarn berry 마이그레이션 과정에서 마주한 문제
excerpt: 최근에 팀에서 관리하는 레포들 대부분을 yarn berry로 마이그레이션하는 작업을 진행했습니다. 그 과정에서 겪은 문제와 해결 방법에 대한 기록을 남겨봅니다.
date: '2024-07-03'
---

최근에 팀에서 관리하는 레포 대부분을 yarn berry로 마이그레이션하는 작업을 진행했습니다. 그 과정에서 겪은 문제와 해결 방법에 대한 기록을 남겨봅니다. yarn berry에 대한 설명 및 마이그레이션 방법은 공식 홈페이지에 자세히 나와있기 때문에 발생한 문제와 해결 과정에 초점을 맞춰 작성하겠습니다.

## yarn classic => yarn berry 마이그레이션 결과

먼저 yarn berry 마이그레이션으로 개선된 부분에 대해 설명하려고 합니다.

Zero-Install을 활용하여 CI에서 의존성을 설치할 필요가 없어지면서 빌드 속도가 50% 가까이 개선됐습니다.
![build result](/assets/blog/yarn_migration/result.png)

## 마이그레이션을 하게 된 이유

사실 다른 팀에서 프로젝트 전반적으로 yarn 버전을 통일하자는 의견이 나왔습니다. 프로젝트에서 사용되는 사내 라이브러리들과 yarn 버전이 맞지 않아 도커에서 빌드에 실패하는 경우가 생긴다는게 이유였습니다.

위의 이유와는 별개로 yarn berry로 마이그레이션 함으로써 얻을 수 있는 장점들이 있습니다.

### Plug'n'Play(PnP)
yarn berry를 사용하면 PnP 전략을 활용할 수 있습니다. 간단하게 설명하면 .pnp.cjs 파일에 프로젝트의 모든 의존성 트리와 의존성의 위치를 기록해두고, node_modules 대신 해당 파일을 활용합니다.
이를 통해 얻을 수 있는 이점들은 다음과 같습니다.

#### 비효율적인 의존성 설치 개선
node_modules를 생성하는데 많은 I/O작업이 필요한데 반해 yarn PnP를 활용하면 lock 파일을 기반으로 .pnp.cjs 파일만 생성해주면 되기 때문에 빠른 설치가 가능합니다.

#### 엄격한 의존성 관리
node_modules를 사용할 때 처럼 의존성이 호이스팅되지 않기 때문에 유령 의존성으로 인한 의도치 않은 버그를 방지하고, 엄격하게 의존성을 관리할 수 있습니다.

### Zero-Install
Zero-Install이란 패키지 의존성에 대한 정보가 기록된 .pnp.cjs와 실제 의존성 파일들이 담긴 .yarn/cache 폴더를 함께 버전 관리에 포함하는걸 의미합니다.
버전 관리에 포함시킴으로써 브랜치를 변경할 때나 저장소를 clone할 때 yarn install을 호출하지 않아도 됩니다. CI에서도 의존성 설치 과정이 생략되기 때문에 빌드 시간을 크게 줄일 수 있습니다.


## 발생한 문제와 해결 과정

### 유령 의존성

마이그레이션 과정을 거쳐서 로컬 서버를 실행하니 아래와 같은 에러가 발생합니다.
![phantom-dependency](/assets/blog/yarn_migration/phantom-dependency.png)
yarn classic은 패키지의 중복 설치를 방지하기 위해 호이스팅을 사용합니다. 이로 인해 직접 설치하지 않은 패키지도 사용이 가능합니다. 하지만 yarn berry의 경우 기본적으로 호이스팅을 방지하기 때문에 직접 의존하고 있지 않은 라이브러리를 사용할 경우 에러가 발생합니다.

해당 패키지를 직접 설치해주면 문제는 해결됩니다.

### 패키지 의존성 누락

유령 의존성 문제를 해결하니 또 다른 에러가 보입니다.
![package-dependency](/assets/blog/yarn_migration/package-dependency.png)
yarn pnp를 적용할 때 종종 서드파티 패키지의 의존성이 누락되는 경우가 있습니다. 에러 메시지를 보면 `react-csv` 패키지에서 `prop-types`를 의존하는 걸로 보입니다. 하지만 해당 패키지가 의존성 목록에 빠져 있어 에러가 발생합니다.

에러메시지가 안내하는 `.pnp.cjs` 파일을 보면 아래와 같습니다.

```javascript
// .pnp.cjs

["react-csv", [\
  ["npm:2.2.2", {\
    "packageLocation": "./.yarn/cache/react-csv-npm-2.2.2-b5548c3e54-287e7ba208.zip/node_modules/react-csv/",\
    "packageDependencies": [\
      ["react-csv", "npm:2.2.2"]\
    ],\
    "linkType": "HARD"\
  }]\
]],\
```

`packageDependencies`에 `react-csv`가 의존하는 패키지들이 작성되는데 `prop-types`가 없습니다.
이렇게 누락된 의존성들은 `.yarnrc.yml` 파일 `packageExtensions`에 명시해주면 됩니다.

```yaml
# .yarnrc.yml

packageExtensions:
  "react-csv@*":
    dependencies:
      "prop-types": "*"
```

`packageExtensions`를 추가하고, 다시 `yarn install`을 호출하면 아래와 같이 `prop-types`가 `packageDependencies`에 추가됩니다.

```javascript
// .pnp.cjs

["react-csv", [\
  ["npm:2.2.2", {\
    "packageLocation": "./.yarn/cache/react-csv-npm-2.2.2-b5548c3e54-287e7ba208.zip/node_modules/react-csv/",\
    "packageDependencies": [\
      ["react-csv", "npm:2.2.2"],\
      ["prop-types", "npm:15.8.1"]\
    ],\
    "linkType": "HARD"\
  }]\
]],\
```

### 패키지 버전 불일치로 인한 타입 이슈

위에서 발생한 에러들의 경우 마이그레이션 과정에서 일반적으로 발생할 수 있는 케이스라서 yarn 공식 홈페이지의 마이그레이션 문서를 보면 관련 내용을 확인할 수 있습니다. 하지만 프로젝트에 따라 다양한 에러를 마주할 수도 있습니다. 저는 뜬금없이 타입 에러가 발생했습니다.
![type-error](/assets/blog/yarn_migration/type-error.png)


에러 메시지를 보면 `useMutation`의 overload 중에 일치하는게 없다고 나옵니다.
`useMutation`의 타입을 한번 확인해봅니다.

```typescript
export declare function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext>;
export declare function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>
): UseMutationResult<TData, TError, TVariables, TContext>;
export declare function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  mutationKey: MutationKey,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey'>
): UseMutationResult<TData, TError, TVariables, TContext>;
export declare function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  mutationKey: MutationKey,
  mutationFn?: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey' | 'mutationFn'>
): UseMutationResult<TData, TError, TVariables, TContext>;
```

아래의 프로젝트 코드를 보면 `mutationFn`을 포함해서 `UseMutationOptions` 타입의 `options`를 인자로 전달하고 있기 때문에 가장 첫번째 overload와 일치해야합니다.
```typescript
const useTestMutation = (options?: UseMutationOptions<AxiosResponse, AxiosError, ProductModelOptionPatchPayload>) => {
  return useMutation({ mutationFn: testRequest, ...options });
};
```

하지만 일치하는 overload가 없다고 하는걸 보면 `useMutation`에 전달하는 인자의 프로퍼티 중 뭔가 잘못된걸로 보입니다.

`useMutationOptions`의 타입을 한번 확인해봅니다.

```typescript
export interface UseMutationOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> extends ContextOptions, Omit<MutationObserverOptions<TData, TError, TVariables, TContext>, '_defaulted' | 'variables'> {

```

`ContextOptions`와 `MutationObserverOptions` 타입을 확장해서 사용하고 있습니다.

`ContextOptions`은 별게 없기 때문에 `MutationObserverOptions` 타입을 확인합니다.

```typescript
export interface MutationObserverOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>
  extends MutationOptions<TData, TError, TVariables, TContext> {
  useErrorBoundary?: boolean | ((error: TError) => boolean);
}
```

`MutationOptions`를 확장해서 사용하고 있네요.

이제 익숙한 옵션들이 보입니다.

```typescript
export interface MutationOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> {
  mutationFn?: MutationFunction<TData, TVariables>;
  mutationKey?: MutationKey;
  variables?: TVariables;
  onMutate?: (variables: TVariables) => Promise<TContext | undefined> | TContext | undefined;
  onSuccess?: (data: TData, variables: TVariables, context: TContext | undefined) => Promise<unknown> | unknown;
  onError?: (error: TError, variables: TVariables, context: TContext | undefined) => Promise<unknown> | unknown;
  onSettled?: (
    data: TData | undefined,
    error: TError | null,
    variables: TVariables,
    context: TContext | undefined
  ) => Promise<unknown> | unknown;
  retry?: RetryValue<TError>;
  retryDelay?: RetryDelayValue<TError>;
  networkMode?: NetworkMode;
  cacheTime?: number;
  _defaulted?: boolean;
  meta?: MutationMeta;
}
```

먼저 코드에서 사용하는 `mutationFn`의 타입이 `MutationFunction`타입과 일치하는지 확인해봅니다.
`MutationFunction` 타입은 아래와 같습니다.

```typescript
export declare type MutationFunction<TData = unknown, TVariables = unknown> = (variables: TVariables) => Promise<TData>;
```

`TVariables` 타입의 `variables`를 매개변수로 받고, `Promise<TData>` 타입을 리턴합니다.

다시 한 번 작성된 코드를 확인해봅니다.

```typescript
const useTestMutation = (options?: UseMutationOptions<AxiosResponse, AxiosError, ProductModelOptionPatchPayload>) => {
  return useMutation({ mutationFn: testRequest, ...options });
};
```

작성된 코드에 따르면 `MutationFunction`의 타입은 아래와 같습니다.

```typescript
MutationFunction<AxiosResponse<any>, ProductModelOptionPatchPayload>;
```

그리고 `MutationFunction`의 첫번째 타입 파라미터가 `AxiosResponse<any>`기 때문에 리턴 타입은 `Promise<AxiosResponse<any>>` 가 됩니다.

그럼 `MutationFunction`의 타입을 알았으니 `testRequest`의 타입과 일치하는지 한번 확인해봅니다.
![test-request-type](/assets/blog/yarn_migration/test-request-type.png)

매개변수의 타입은 일치하는데 리턴타입이 다릅니다.
`options`타입에 의하면 리턴 타입은 `Promise<AxiosResponse<any>>` 형태여야 합니다. 하지만 실제 `testRequest`의 리턴 타입은 `Promise<AxiosResponse<any, any>>` 형태입니다.

**결국 일치하는 overload가 없다는 에러가 발생한 이유는 `useMutation` 훅에 인자로 전달하는 `options` 의 타입인 `UseMutationOptions`에 정의된 `mutationFn`의 리턴 타입과 실제 `mutationFn`으로 사용하는 `testRequest` 함수의 리턴 타입이 다르기 때문입니다. **

이를 해결하기 위해서 두 타입을 동일하게 맞춰주면 됩니다. 하지만 그 전에 문제가 발생한 근본적인 원인을 찾아야 합니다. 왜 AxiosResponse 타입이 서로 달라졌는지 확인해봅니다.

`mutationFn`에 전달하는 함수는 대충 이런식으로 되어있습니다.

```typescript
const testRequest = (payload: ProductModelOptionPatchPayload) => {
  return patchAPI({ url: `/url`, data: payload });
};
```

`testRequest`에서 리턴하는 `patchAPI`를 확인해봅니다.

```typescript
export function patchAPI<T>({ url, params, data }: AsyncProps<T>) {
  return API.patch(url, data, { params });
}
```

프로젝트에서 API 호출 시 사내 패키지에 있는 `AxiosInstance`를 활용합니다. 위 코드에서 `API`의 타입은 `AxiosInstance`이고, 사내 패키지의 `AxiosInstance` 타입으로부터 `AxiosResponse` 타입을 확인해보면 아래와 같습니다.

```typescript
export interface AxiosResponse<T = any, D = any> {
  data: T;
  status: number;
  statusText: string;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  config: InternalAxiosRequestConfig<D>;
  request?: any;
}
```

그리고 `UseMutationOptions`의 첫번째 타입 파라미터인 `AxiosResponse`의 타입은 아래와 같습니다.

```typescript
export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
}
```

두 `AxiosResponse` 타입이 다릅니다.

마이그레이션 작업을 하기 전 코드를 확인해보면 두 타입은 동일한데 yarn berry 마이그레이션 과정에서 달라진걸로 보입니다.
각 `AxiosResponse` 타입이 참조하는 패키지를 살펴보면 `axios` 버전이 서로 다른걸 확인할 수 있습니다.

![current-axios-path](/assets/blog/yarn_migration/current-axios-path.png)

```typescript
// .yarn/cache/axios-npm-1.7.2
interface AxiosResponse<T = any, D = any>
```

![prev-axios-path](/assets/blog/yarn_migration/prev-axios-path.png)

```typescript
// .yarn/cache/axios-npm-0.21.4
interface AxiosResponse<T = any>
```

프로젝트에 설치된 axios 버전은 변경된게 없기 때문에 사내 패키지에서 의존하는 axios 버전이 변경됐을 가능성이 있습니다. 

변경 전 yarn.lock 파일을 확인해보면 ^0.21.1 버전을 의존하고 있습니다.



```
// 변경 전
"packageName":
  ...
  resolved "packageName#402702668c6d1cb44289cfec6217df388f843579"
  dependencies:
    axios "^0.21.1"
```

하지만 변경된 yarn.lock 파일을 보면 ^1.4.0 버전을 의존하고 있습니다.

```
// 변경 후
"package":
  ...
  resolution: "package#commit=72ec6214ea7e897c55d3dbb9deb887ffe8cbcbe9"
  dependencies:
    axios: "npm:^1.4.0"
```

두 `AxiosResponse` 타입이 달라진 원인이 명확해졌습니다. 사내 패키지의 axios 타입이 달라진 이유는 yarn.lock 파일의 `resolved` 부분을 보면 알 수 있습니다. lock 파일에 대한 자세한 내용은 여기서 다루진 않겠습니다. 패키지를 최초로 설치할 때 lock 파일에 당시에 설치된 정확한 패키지 버전이 기록됩니다.

위의 변경 전 코드를 보면 `resolved`의 #뒤에 커밋 해시값이 붙어있습니다. 변경 후 lock 파일의 `resolution`과 비교하면 커밋 해시값이 다릅니다. package.json 파일을 보면 아래와 같이 패키지가 명시되어있습니다.

```json
// package.json
...
"dependencies": {
  "package": "git+ssh://git@bitbucket.org/package",
}
...
```

이전에 최초로 패키지를 설치할 때 `402702668c6d1cb44289cfec6217df388f843579`가 최신 커밋 해시로 lock 파일에 기록됐을겁니다. 하지만 yarn berry로 마이그레이션 하며 다시 패키지를 설치하는 과정에서 최신 커밋을 바라보고 설치된걸로 보입니다. 직접 해당 레포지토리를 확인해보니 최신 커밋에 axios 버전 업그레이드 작업이 포함되어 있었습니다.

변경된 axios 버전에 맞춰서 타입을 수정할 수도 있습니다. 하지만 다른 변경 사항은 최소화하고, yarn berry로의 전환이 이번 작업의 목적이었기 때문에 일단 사내 패키지 버전을 전과 동일하게 맞춰주기로 했습니다.

```json
// package.json
...
"dependencies": {
  "package": "git+ssh://git@bitbucket.org/package#402702668c6d1cb44289cfec6217df388f843579",
}
...
```

위와 같이 변경 전 lock 파일과 동일한 커밋 해시를 바라보게 하고, 다시 설치하면 사내 패키지가 의존하는 axios 버전이 전과 동일해져 타입 에러가 사라집니다.

```json
// yarn.lock
"package":
  ...
  dependencies:
    axios: "npm:^0.21.1"
  ...
```

## 마무리

사내 프로젝트 전반적으로 yarn berry를 적용하기로 한 상황이라 팀에서 관리하는 여러 프로젝트에서 작업을 진행했습니다.
기존의 문제 해결과 함께 빌드 속도도 개선할 수 있었습니다.
패키지 매니저를 다루는 작업은 처음 해본 듯 해서 개인적으로도 만족스러운 작업이었습니다.