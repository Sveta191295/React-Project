import React, { useCallback, useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Todo from "./components/Todo";
import { idGenerator } from "../helpers/globalFunctions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";


const Project = () => {
    const [mockTasks, setMockTasks] = useState([]);

    const setNewTaskToDB = (task) => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const setTasksToDB = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }


    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);
    const handleOpenAddTaskModal = () => {
        setAddTaskModalVisible(true);
    }
    const handleCloseAddTaskModal = () => {
        setAddTaskModalVisible(false);
    }
    const addTask = (formData) => {
        const { title, description, attachedTo } = formData;
        setMockTasks((prevData => {
            const copyData = [...prevData];
            const newTask = {
                id: idGenerator(),
                title: title.value,
                description: description.value,
                status: "Active",
                attachedTo: attachedTo.value
            };

            setNewTaskToDB(newTask);
            copyData.push(newTask);
            return copyData;
        }));
        handleCloseAddTaskModal();
    }


    const [editableTask, setEditableTask] = useState('');
    const handleEditTaskOpen = (id) => {
        setEditableTask(mockTasks.filter(item => item.id === id)[0]);
    }
    const handleEditTaskClose = () => {
        setEditableTask(false);
    }
    const editTask = useCallback((editableTask) => {
        const { title, description, attachedTo, status, id } = editableTask;
        setMockTasks((prevData => {
            const copyData = [...prevData];
            const idx = prevData.findIndex(item => item.id === id);
            copyData[idx] = {
                id: id,
                title: title.value || title,
                description: description.value || description,
                status: status,
                attachedTo: attachedTo.value || attachedTo
            }
            setTasksToDB(copyData);
            return copyData;
        }));

        handleEditTaskClose();
    }, []);

    const handleDeleteTask = useCallback((id) => {
        setMockTasks((prevData) => {
            const newTasks = prevData.filter(item => item.id !== id);
            setTasksToDB(newTasks);
            return newTasks;
        });
    }, []);



    const toggleStatusChange = useCallback((id) => {
        setMockTasks((prevData) => {
            const copyData = [...prevData];
            const idx = prevData.findIndex(item => item.id === id);
            const status = copyData[idx].status.toLowerCase() === "active" ? "Done" : "Active";
            copyData[idx] = {
                ...copyData[idx],
                status
            }
            setTasksToDB(copyData);
            return copyData;
        });
    }, []);

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        if (!tasks)
            localStorage.setItem("tasks", JSON.stringify([]));
        else
            setMockTasks(JSON.parse(tasks));

    }, []);

    return (
        <div className="project-container">
            <h1 className="heading1">
                Todo Project
            </h1>

            <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={handleOpenAddTaskModal} />
            <Todo
                mockTasks={mockTasks}
                handleDeleteTask={handleDeleteTask}
                toggleStatusChange={toggleStatusChange}
                editBtnOpen={handleEditTaskOpen}

            />

            {addTaskModalVisible && <AddTask
                onHide={handleCloseAddTaskModal}
                onSubmit={addTask}
            />}

            {editableTask && <EditTask
                task={editableTask}
                onHide={handleEditTaskClose}
                onSubmit={editTask}
            />}
        </div>
    )
}

export default Project;