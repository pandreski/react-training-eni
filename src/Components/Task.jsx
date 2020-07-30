import React, {Component} from "react";
import styled from "styled-components";

const Element = styled.span`
    font-weight: bold;
`;

class Task extends Component {
    render() {
        const {task} = this.props;
        return <Element>{task}</Element>;
    }
}

export default Task;