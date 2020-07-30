import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tmpLabel: ''
        };
    }

    render() {
        return (
            <form>
                <TextField id='standard-basic' fullWidth={true} label='Task name' value={this.state.tmpLabel} onChange={evt => this.setState({
                    tmpLabel: evt.target.value
                })} />
                <div>
                    <Button variant="outlined" color="primary" fullWidth={true} style={{marginTop:'1rem'}} onClick={ () => {
                        this.props.addTask(this.state.tmpLabel);
                        this.setState({tmpLabel: ''});
                    }}>Add task</Button>
                </div>
            </form>
        );
    }
}

export default TaskForm;