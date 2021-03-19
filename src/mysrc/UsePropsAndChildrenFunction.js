import React from 'react';

const UsePropsAndChildrenFunction = ({children, name, value, undefinedField}) => {
// const UsePropsAndChildrenFunction = (props) => {
    return (
        <div>
            <div>{children} 은 MyComponent 태그 사이의 내용입니다.</div>
            <div>{name} 은 MyComponent 태그의 property중 name 입니다.</div>
            <div>{value} 은 MyComponent 태그의 property중 value 입니다.</div>
            <div>{undefinedField}</div>
        </div>
    );
}

UsePropsAndChildrenFunction.defaultProps ={
    undefinedField: "기본값입니다."
}

export default UsePropsAndChildrenFunction;