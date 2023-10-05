---
title: useEffect 제대로 사용하기
excerpt: 이번 포스팅에서는 useEffect를 사용하며 놓칠 수 있는 부분과 올바르게 사용하는 방법에 대해 알아보겠습니다.
date: '2023-10-05'
---

이번 포스팅에서는 useEffect를 사용하며 놓칠 수 있는 부분과 올바르게 사용하는 방법에 대해 알아보겠습니다.

리액트를 사용하는 개발자라면 이미 알고 있는 내용일 수도 있겠지만 다시 한번 정리한다고 생각하고 편하게 봐주시면 좋을 것 같습니다.

## useEffect에서 사용하는 모든 값은 반드시 의존성 배열에 포함하기.

useEffect뿐만 아니라 useMemo나 useCallback 등을 사용할 때도 반드시 지켜야 하는 규칙입니다.

**의존성 배열에 들어가는 값은 선택하는 게 아니고, useEffect에서 사용하는 모든 값을 포함해야 합니다.**

여기서 이야기하는 값은 props, state, 컴포넌트 내부에 정의된 모든 변수와 함수를 의미합니다.

왜 위와 같은 규칙을 지켜야 할까요? 간단한 예시를 보여드리겠습니다.

버튼으로 increment를 변경하고, 변경된 increment만큼 증가하는 count를 보여주는 Timer 컴포넌트입니다.

```tsx
import { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  function onTick() {
    setCount(count + increment);
  }

  useEffect(() => {
    const id = setInterval(onTick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button disabled={increment === 0} onClick={() => setIncrement(i => i - 1)}>
          –
        </button>
        <b>{increment}</b>
        <button onClick={() => setIncrement(i => i + 1)}>+</button>
      </p>
    </>
  );
}
```

컴포넌트가 처음 마운트 됐을 때만 타이머를 등록하고 싶다는 생각에 위와 같은 코드를 작성하는 경우가 있습니다.

useEffect에서 사용하는 모든 값은 의존성 배열에 포함되어야 한다는 규칙에 어긋난 코드입니다.

`count`는 0에서 1로 한번 변경되고 그 이후로 변경되지 않습니다.

첫 렌더링시 `onTick`에서 `count`를 변경할 때 사용되는 `count`와 `increment` 값은 각각 `useState` 초갓값인 0과 1입니다.

useEffect에서 매초마다 `onTick`를 호출하고 있지만 의존성 배열에는 빈 배열이 전달되고 있기 때문에 `onTick`에서는 매번 `setCount(0 + 1)`을 호출합니다.

이와 같은 이유로 `count`는 1에서 변경되지 않습니다.

문제를 해결하기 위해 `onTick` 함수를 의존성 배열에 추가해야 합니다.

[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)를 활용하면 의존성 배열에 필요한 값이 누락될 경우 linter가 경고해 주기 때문에 위와 같은 실수를 방지할 수 있습니다.

아래와 같이 linter를 무시하는 주석을 사용하는 경우도 있습니다. 하지만 언제나 linter를 무시하는 방법이 아닌 더 나은 해결책이 있을 겁니다.

```tsx
useEffect(() => {
  // eslint-ignore-next-line react-hooks/exhaustive-deps
}, []);
```

## cleanup function 활용하기.

A 컴포넌트가 처음 마운트 되면 채팅 서버와 커넥션을 맺는다고 가정해 봅시다.

A 컴포넌트가 렌더링 되면 useEffect가 호출되고, 채팅 서버와 연결이 됩니다.

사용자는 다른 페이지로 이동했다가 다시 A 컴포넌트가 있는 페이지로 이동합니다.

다시 useEffect가 호출되면서 다시 연결을 시도하는데 첫 번째 연결은 사라지지 않은 상태로 이루어집니다.

이런 동작이 여러 번 반복되면 계속해서 커넥션 연결을 시도하게 되고 버그를 발생시킬 수 있습니다.

```tsx
export default function A() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
```

이와 같은 문제를 해결하기 위해 cleanup function을 활용할 수 있습니다.

```tsx
export default function A() {
  useEffect(() => {
    // setup function
    const connection = createConnection();
    connection.connect();
    // cleanup function
    return () => {
      connection.disconnect();
    };
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
```

cleanup function은 useEffect가 다시 호출되기 직전, 그리고 컴포넌트가 unmount 될 때 호출됩니다.

리액트는 개발 모드일 때 내부적으로 컴포넌트를 remount 시켜서 위와 같은 버그를 예방하도록 합니다.

개발 모드일 때 useEffect는 setup => cleanup => setup 순서로 호출이 되는데 effect가 두 번 호출되면서 이상하게 동작한다면 잘못된 코드라고 볼 수 있습니다.

이를 고치기 위해 코드를 한 번만 호출시키기 위한 방법을 찾기보다는 cleanup function을 활용하여 개발 모드에서도 정상적으로 동작하도록 수정이 되어야 합니다.

## 불필요한 useEffect 제거하기.

불필요하게 useEffect를 사용하는 경우가 있습니다. 몇 가지 예시를 들어보겠습니다.

### props나 state로 계산이 가능한 경우에는 새로운 state를 만들지 말고, 렌더링 단계에서 계산하기.

```tsx
function Form() {
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  // fullName이라는 state는 불필요한 state 입니다.
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);

  // 새로운 state와 effect를 사용하지 말고, 아래와 같은 방식으로 사용 가능합니다.
  const fullName = firstName + ' ' + lastName;
}
```

아래의 경우에도 마찬가지로 `visibleTodos`라는 state를 새로 만들 필요가 없습니다.

```tsx
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');

  const [visibleTodos, setVisibleTodos] = useState([]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);

  // 아래 코드만으로 충분합니다.
  const visibleTodos = getFilteredTodos(todos, filter);
}
```

만약 `getFilteredTodos`가 오래 걸리는 작업이라면 useMemo로 memoization 할 수 있습니다.  
`todos`, `filter`의 변경 사항이 없으면 useMemo 내부의 값을 다시 계산하지 않습니다.  
**하지만 대부분의 작업은 useMemo가 필요한 만큼 비용이 많이 들지 않습니다.**

```tsx
import { useMemo, useState } from 'react';

function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');

  const visibleTodos = useMemo(() => {
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);
}
```

### props의 변경에 따라 state를 초기화해야할 경우 key 활용하기.

`ProfilePage` 컴포넌트는 `userId`를 prop으로 받고, `comment`라는 state를 갖고 있습니다.
`userId`가 변경됨에 따라 `comment`를 초기화하기 위해 useEffect를 사용하는 경우가 있습니다.

```tsx
export default function ProfilePage({ userId }) {
  const [comment, setComment] = useState('');

  useEffect(() => {
    setComment('');
  }, [userId]);
}
```

이때 useEffect 대신에 key를 활용할 수 있습니다.

리액트는 동일한 컴포넌트가 동일한 위치에 렌더링 될 때 상태가 유지됩니다.

`userId`를 `Profile` 컴포넌트의 key로 전달하면 리액트는 서로 다른 `userId`를 가진 컴포넌트를 각각 다른 컴포넌트로 취급합니다.

따라서 key가 변경될 때마다 DOM을 다시 그리고 `Profile` 컴포넌트의 state를 초기화합니다.

```tsx
export default function ProfilePage({ userId }) {
  return <Profile userId={userId} key={userId} />;
}

function Profile({ userId }) {
  // comment를 포함하여 Profile 컴포넌트에 정의된 모든 state는 key가 변경되면 초기화 됩니다.
  const [comment, setComment] = useState('');
}
```

## 의존성 제거하기

포스팅 초반에 useEffect에서 사용하는 모든 값은 의존성 배열에 추가해야 한다고 설명했습니다.

하지만 여러 가지 값들이 의존성 배열에 담겨있다면 useEffect가 불필요하게 많이 호출되거나 심한 경우 무한 호출이 발생할 수도 있습니다.

따라서 필요한 시점에만 useEffect를 호출하기 위해 불필요한 의존성을 줄여야 합니다. 이를 위한 몇 가지 방법을 설명해 드리겠습니다.

### 이벤트 핸들러로 옮길 수 있는 코드인지 확인.

먼저 useEffect가 정말 필요한 상황이 맞는지 생각해 볼 수 있습니다.

아래 예시처럼 `submitted`라는 state를 두고, 폼을 제출하면 `submitted`를 변경하고 useEffect에서 `submitted`에 따라 post 요청을 보내 코드가 있습니다.

```tsx
function Form() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      post('/api/register');
      showNotification('Successfully registered!');
    }
  }, [submitted]);

  function handleSubmit() {
    setSubmitted(true);
  }

  // ...
}
```

예를 들어 `showNotification`의 변경 사항으로 `theme`를 받아서 `theme`에 따라 다른 스타일의 notification 메시지를 보여준다고 가정해 봅시다.

그럼 `showNotification`에 `theme`를 인자로 전달해야 하므로 useEffect의 의존성 배열에도 추가해야 합니다.

이 경우에는 `theme`만 변경이 되어도 post 요청이 보내지게 됩니다.

```tsx
function Form() {
  const [submitted, setSubmitted] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (submitted) {
      post('/api/register');
      showNotification('Successfully registered!', theme);
    }
  }, [submitted, theme]);

  function handleSubmit() {
    setSubmitted(true);
  }

  // ...
}
```

위와 같은 코드는 버그를 만들어 낼 수 있습니다. 따라서 useEffect가 아닌 이벤트 핸들러에서 동작하는 게 더 올바른 코드입니다.

useEffect를 사용하기 전에 필요한 상황인지 다시 한번 생각해보세요.

특정 인터렉션에 따른 동작일 경우에는 이벤트 핸들러를 활용하는 게 더 나은 방법일 수 있습니다.

```tsx
function Form() {
  const theme = useContext(ThemeContext);

  function handleSubmit() {
    post('/api/register');
    showNotification('Successfully registered!', theme);
  }

  // ...
}
```

### useEffect 분리하기

useEffect는 목적에 따라 분리해야 합니다.

아래 코드는 하나의 useEffect에서 `cities`와 `areas` 데이터를 가져오고 있습니다.

특정 상태(country, city) 변화에 따라 관련 없는 API를 호출하게 될 수도 있고, 이는 버그로 이어질 수도 있습니다.

```tsx
function ShippingForm({ country }) {
  const [cities, setCities] = useState(null);
  const [city, setCity] = useState(null);
  const [areas, setAreas] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch(`/api/cities?country=${country}`)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setCities(json);
        }
      });

    if (city) {
      fetch(`/api/areas?city=${city}`)
        .then(response => response.json())
        .then(json => {
          if (!ignore) {
            setAreas(json);
          }
        });
    }
    return () => {
      ignore = true;
    };
  }, [country, city]);

```

이런 경우에는 서로 관련 있는 부분끼리 묶어서 분리할 수 있습니다.

`country`에 의존하는 useEffect와 `city`에 의존하는 useEffect 두 개로 분리했습니다.

목적에 따라 useEffect를 분리하였고, 각각 다른 의존성을 갖고 있어 서로의 코드에 영향을 주지 않습니다.

이렇게 함으로써 의도하지 않은 useEffect 호출을 방지할 수 있습니다.

```tsx
function ShippingForm({ country }) {
  const [cities, setCities] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(`/api/cities?country=${country}`)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setCities(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [country]);

  const [city, setCity] = useState(null);
  const [areas, setAreas] = useState(null);
  useEffect(() => {
    if (city) {
      let ignore = false;
      fetch(`/api/areas?city=${city}`)
        .then(response => response.json())
        .then(json => {
          if (!ignore) {
            setAreas(json);
          }
        });
      return () => {
        ignore = true;
      };
    }
  }, [city]);
}
```

코드가 더 길어지긴 했지만, 이전과는 다르게 불필요한 API 호출도 일어나지 않고, 코드를 파악하고, 유지보수하기에도 용이해졌습니다.

하나의 useEffect가 한 가지 이상의 목적을 갖고 있다면 분리해 주세요.

### updater function 활용하기.

useEffect에서 상태 변경을 위해 현재 상태를 사용해야 할 경우 [updater function](https://react.dev/learn/queueing-a-series-of-state-updates)을 활용할 수 있습니다.

아래 코드에서 메시지를 받으면 기존의 `messages`와 새로 받은 메시지를 합쳐 `message` 상태를 변경합니다.

`messages`가 의존성 배열에도 들어가 있고, 문제가 없어 보입니다.

```tsx
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    connection.on('message', (receivedMessage) => {
      setMessages([...messages, receivedMessage]);
    });
    return () => connection.disconnect();
  }, [roomId, messages]);
  // ...
```

위 코드에서 메시지를 받으면 `messages`를 변경하는데 `messages`가 변경되었기 때문에 다시 useEffect를 호출합니다.

다시 useEffect를 호출하기 전에 cleanup function 부분이 실행되기 떄문에 `connection`이 끊겼다가 다시 연결됩니다.

결국 메시지를 받을 때마다 `connection`이 끊겼다가 다시 연결 시도하는 문제가 발생합니다.

이때 updater function을 활용할 수 있습니다.

`setMessages`에 updater function을 전달함으로써 의존성 배열에 있는 `messages`를 제거할 수 있습니다.

이제 `messages`의 변경에 따라 useEffect가 다시 호출되지 않습니다.

이처럼 기존의 state를 이용해서 새로운 state를 만들어야 할 경우 updater function을 활용할 수 있습니다.

```tsx
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    connection.on('message', (receivedMessage) => {
      setMessages(msgs => [...msgs, receivedMessage]);
    });
    return () => connection.disconnect();
  }, [roomId]);
  // ...
```

### 객체나 함수는 컴포넌트 외부나 useEffect 내부에 선언하기.

가능하면 객체나 함수는 의존성 배열에 포함하지 않는 것이 좋습니다.

그 이유는 컴포넌트 내부에 있는 객체나 함수는 렌더링마다 새로 생성되기 때문입니다.

이로인해 의도치 않은 useEffect 호출이 여러 번 발생할 수 있습니다.

아래 ChatRoom 컴포넌트는 다음과 같이 동작합니다.

1. input이 변경될 때마다 컴포넌트 리렌더링.
2. 렌더링마다 `options` 새로 생성.
3. `options`의 변경에 따라 useEffect 호출.

결국 input의 변경이 매번 connection을 다시 만드는 잘못된 동작을 만들어 내고 있습니다.

```tsx
const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const options = {
    serverUrl: serverUrl,
    roomId: roomId,
  };

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={e => setMessage(e.target.value)} />
    </>
  );
}
```

#### 정적인 객체나 함수는 컴포넌트 외부에 선언.

이를 막기 위해 정적인 객체나 함수는 컴포넌트 외부에 선언하여 의존성을 제거할 수 있습니다.

만약 `options`가 정적인 객체라면 컴포넌트 외부에 선언하면 됩니다.

컴포넌트 외부에 선언하면 `options`는 리렌더링에 따라 변하지 않는 값이기 때문에 의존성 배열에서 제거할 수 있습니다.

```tsx
const options = {
  serverUrl: 'https://localhost:1234',
  roomId: 'music'
};

function ChatRoom() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, []);
  // ...
```

함수일 경우에도 마찬가지입니다.

컴포넌트에 의존하는 값이 없으면 함수를 컴포넌트 외부에 선언하면 의존성 배열에 추가할 필요가 없습니다.

```tsx
function createOptions() {
  return {
    serverUrl: 'https://localhost:1234',
    roomId: 'music'
  };
}

function ChatRoom() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);
  // ...
```

#### 동적인 객체나 함수는 useEffect 내부에 선언.

props나 state 등 동적인 값에 의존하는 객체나 함수는 useEffect 내부에 선언하여 의존성을 제거할 수 있습니다.

기존 예시에서는 `roomId`를 prop으로 전달받고, `options`는 `roomId`에 의존하고 있었습니다.

이런 경우에는 `options`를 `useEffect` 내부로 옮기면 됩니다.

```tsx
const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...
```

`options`는 useEffect 내부로 옮겼고, `roomId`를 사용하고 있기 때문에 의존성 배열에 roomId만 추가해 주면 됩니다.

코드에 `roomId`의 타입은 나와 있지 않지만 primitive 타입이라고 가정합니다.

이제 useEffect가 `options` 객체가 아닌 `roomId`에만 의존하고 있기 때문에 이전처럼 `message` 변경에 따라 useEffect가 호출되지 않습니다.

함수일 경우에도 마찬가지로 useEffect 내부에 선언해 줘서 의존성을 줄이고 불필요한 useEffect 호출을 막을 수 있습니다.

```tsx
const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    function createOptions() {
      return {
        serverUrl: serverUrl,
        roomId: roomId
      };
    }

    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...
```

다시 한번 정리하자면 useEffect에서 사용되는 객체나 함수는 정적인 값일 경우에는 컴포넌트 외부로 옮기고, 동적인 값일 경우에는 useEffect 내부로 옮겨서 의존성을 없애고, 불필요한 호출을 막을 수 있습니다.

가능하면 객체나 함수가 의존성 배열에 포함되지 않도록 해주세요.

#### 객체나 함수를 props로 전달받는 경우

물론 useEffect 에서 객체나 함수를 전달받아 사용해야 하는 경우도 있습니다.

`ChatRoom` 컴포넌트는 부모 컴포넌트로부터 `options`를 props로 받고 있습니다.

이 경우에는 `ChatRoom`의 부모 컴포넌트가 리렌더링 될 때마다 `ChatRoom`의 useEffect도 다시 호출됩니다.

```tsx
function ChatRoom({ options }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]);
  // ...
```

```tsx
<ChatRoom
  roomId={roomId}
  options={{
    serverUrl: serverUrl,
    roomId: roomId,
  }}
/>
```

위의 경우에는 아래 코드처럼 useEffect 외부에서 `options`를 구조 분해 할당 해주고, useEffect 내부에서 다시 객체를 만들어 줍니다.

다소 어색한 느낌이 들긴 하지만 useEffect가 의존하는 값을 명시적으로 확인할 수 있고, 부모 컴포넌트의 리렌더링에 따라 useEffect가 호출돼서 connection이 끊길 일도 없습니다.

```tsx
function ChatRoom({ options }) {
  const [message, setMessage] = useState('');

  const { roomId, serverUrl } = options;
  useEffect(() => {
    const connection = createConnection({
      roomId: roomId,
      serverUrl: serverUrl
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
  // ...
```

## 마무리

지금까지 useEffect를 사용하며 놓칠 수 있는 부분과 올바르게 사용할 수 있는 방법에 대해 알아봤습니다.

`useEffectEvent` 훅을 활용하는 방법도 있지만 experimental API라 따로 다루지는 않았습니다.

그래도 대부분의 경우 위에서 설명한 내용들로 대응이 가능할거라 생각합니다.

사실 위에서 작성한 내용은 리액트 [공식 문서](https://react.dev/)에 전부 있는 내용입니다.

더욱 자세한 설명이 필요하다면 직접 공식 문서를 정독해보시는 걸 추천드리면서 포스팅을 마칩니다.

봐주셔서 감사합니다.

## 참고자료

[synchronizing-with-effects](https://react.dev/learn/synchronizing-with-effects)

[you-might-not-need-an-effect](https://react.dev/learn/you-might-not-need-an-effect)

[lifecycle-of-reactive-effects](https://react.dev/learn/lifecycle-of-reactive-effects)

[removing-effect-dependencies](https://react.dev/learn/removing-effect-dependencies)
