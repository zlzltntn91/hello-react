import React, {Component} from 'react';
import UsePropsAndChildrenFunction from "./UsePropsAndChildrenFunction";
import PropTypes from "prop-types";

class PropsAndChildren extends Component{

    constructor(props) {
        super(props);
    }

    static propTypes = {
        children: PropTypes.string.isRequired
    }

    static defaultProps = {
        undefinedField: "기본값이다."
    }

    render(){

        const {name, value, children, undefinedField} = this.props;

        return (
            <div>
                <div>{children} 은 태그 사이의 내용입니다.</div>
                <div>{name} 은 MyCompnent 태그의 prperty중 name 입니다.</div>
                <div>{value} 은 MyCompnent 태그의 prperty중 value 입니다.</div>
                <div>{undefinedField}</div>
            </div>
        );
    }
}

// PropsAndChildren.defaultProps ={
//     undefinedField: "기본값입니다."
// }

export default PropsAndChildren