import React, {useCallback, useEffect, useState} from "react";
import TaskList from "./TaskList";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TaskForm from "./TaskForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const App = () => {
    const [nextId, setNextId] = useState(null),
        [tasks, setTasks] = useState(null),
        [isFetching, setIsFetching] = useState(true),
        [hasFetchedFirst, setHasFetchedFirst] = useState(false),
        [hasError, setHasError] = useState(false),
        updateTaskStatus = useCallback(
            (id, isDone) => {
                const _tasks = tasks.slice();
                const taskIndex = _tasks.findIndex(t => t.id === id);

                _tasks[taskIndex].isDone = isDone;
                setTasks(_tasks);
            },
            [tasks]
        ),
        addTask = useCallback(
            label => {
                if (!label)
                    return;

                const newTask = {id: nextId, label, isDone: false};
                setNextId(nextId + 1);
                // setTasks(tasks.unshift(newTask));
                setTasks([...tasks, newTask]);
            },
            [tasks, nextId]
        ),
        deleteTask = useCallback(
            id => {
                const _tasks = tasks.slice();
                const taskIndex = _tasks.findIndex(t => t.id === id);

                _tasks.splice(taskIndex, 1);
                setTasks(_tasks);
            },
            [tasks]
        );

    // eslint-disable-next-line
    useEffect(() => {
        if (!hasFetchedFirst) {
            setHasFetchedFirst(true);
            setIsFetching(true);
            setHasError(false);

            window.fetch('https://jsonplaceholder.typicode.com/users/10/todos')
                .then(res => res.json())
                .then(tasks => {
                    setTasks(
                        tasks.map(task => ({
                            id: task.id,
                            label: task.title,
                            isDone: task.completed
                        }))
                    );
                    setNextId(Math.max(...tasks.map(task => task.id)) + 1);
                    setIsFetching(false);

                })
                .catch(() => {
                    setHasError(true);
                });
        }
    });

    if (hasError) {
        return (
            <div>
                <Typography variant="h2" gutterBottom>
                    An error occurred...
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Something happened while fetching API.
                </Typography>
            </div>
        );
    }
    if (isFetching) {
        return (
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <CircularProgress disableShrink size={70} thickness={1.7} />
            </div>
        );
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <h1>To Do</h1>
                    <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <h2>New task</h2>
                    <TaskForm addTask={addTask} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;