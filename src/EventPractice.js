import React, {useState} from 'react';

// class EventPractice extends Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     handleChange = (e) => {
//         this.setState({[e.target.name]: e.target.value})
//     }
//
//     handleClick = () => {
//         this.setState(() => {
//             alert(this.state.nickName + " / " + this.state.name);
//             return ({message : '', nickName : ''})
//         });
//     }
//
//     state = {
//         nickName: '',
//         name: ''
//     };
//
//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input type="text"
//                        name={"nickName"}
//                        value={this.state.nickName}
//                        placeholder={"닉네임"}
//                        onChange={this.handleChange}
//                 />
//                 <input type="text"
//                        name={"name"}
//                        value={this.state.name}
//                        placeholder={"이름"}
//                        onChange={this.handleChange}
//                 />
//                 <button onClick={() => {
//                     this.handleClick()
//                 }}>확인
//                 </button>
//             </div>
//         );
//     }
// }

const EventPractice = () => {

    const [form, setForm] = useState({
        firstName: '',
        lastName: ''
    })

    const {firstName, lastName} = form;

    const changeHandler = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    }

    const clickHandler = () => {
        alert(form.firstName +"//"+ form.lastName);
        setForm({firstName: '', lastName: ''});
    }

    return (
        <div>
            <input type="text" onChange={changeHandler} value={firstName} name={'firstName'}/>
            <input type="text" onChange={changeHandler} value={lastName} name={'lastName'}/>
            <button onClick={clickHandler}>확인</button>
        </div>
    );
}

export default EventPractice