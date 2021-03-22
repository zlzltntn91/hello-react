import React, {Component} from 'react';

class Test extends Component {

    ref = this.validateComponent.value();

    render() {
        return (
          <div>{this.ref} 여기 안나옴?</div>
        )
    }
}

export default Test