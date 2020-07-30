import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from "@material-ui/core/Checkbox";
import Task from "./Task";
import DeleteTask from "./DeleteTask";

const TaskList = ({tasks, updateTaskStatus, deleteTask}) => (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>Task name</TableCell>
                    <TableCell align="right">Task ID</TableCell>
                    <TableCell align="right">Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tasks.map(task => (
                    <TableRow key={task.id}>
                        <TableCell>
                            <Checkbox
                                checked={task.isDone}
                                color={"primary"}
                                onChange={() => {
                                    updateTaskStatus(task.id, !task.isDone);
                                }}
                            />
                        </TableCell>
                        <TableCell><Task task={task.label} /></TableCell>
                        <TableCell align="right">{task.id}</TableCell>
                        <TableCell align="right">
                            <DeleteTask taskId={task.id} deleteTask={deleteTask}/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

// class TaskList extends Component {
//     render() {
//
//     }
// }

export default TaskList;