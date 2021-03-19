# Props
컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이다. 컴포넌트는 해당 props를 읽기 전용으로만 사용할 수 있고
props를 바꾸려면 부모 컴포넌트에서 해줘야 한다.

props 값은 컴포넌트 함수의 파라미터로 받아 사양할 수 있고 JSX 내부에서 {} 로 감싼다.
아래 처럼 기본값을 지정할 수 있다. 
``` javascript
<CompnentName>.defaultProps = { 
	<propert>:<value> 
}
```

태그 사이의 내용을 알려주는 props.children 요소가 있다.

# State

state는 바뀔 수 있는 값을 의미하며 두가지 종류가 있다. 

- 클래스형 컴포넌트가 지니고 있는 state
- 함수형 컴포넌트에서 `useState()` 라는 함수를 통해 사용하는 state
