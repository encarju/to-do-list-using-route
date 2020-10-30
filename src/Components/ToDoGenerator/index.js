import React, { Component } from 'react';
import { addTodo } from '../../api/todos';
import { Input, Form, Button} from 'antd';

class ToDoGenerator extends Component {
    formRef = React.createRef();

    onSubmit = (value) => {
        const text = value.text;
        addTodo(text).then(response => {
            this.props.addToDo(response.data);
            this.formRef.current.resetFields();
        })


    }

    render() {
        return (
            <div>
            <Form onFinish={this.onSubmit} ref={this.formRef}>
                <section>
                    <Form.Item name="text" rules={[{ required: true, message: 'Please input to-do entry.' }]}>
                        <Input placeholder="Input new to-do here..." />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block htmlType="submit">Add</Button>
                    </Form.Item>
                </section>
            </Form>
            </div>
        );
    }
}

export default ToDoGenerator;