import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Loader from "../Reusable/Spinner";
import "./styles.css";


const SingleTaskComponent = () => {

    const [task, setTask] = useState(null);
    const { task_id } = useParams();
    const getTaskFromDB = (taskId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const tasks = JSON.parse(localStorage.getItem('tasks'));
                const candidate = tasks.find(task => task.id === taskId);
                resolve(candidate);
            }, 500);
        })
    }
    useEffect(() => {
        getTaskFromDB(task_id)
            .then(task => {
                setTask(task);
            });
    }, []);

    if (!task) return <Loader />;

    return (
        <div className="single-task-container">
            <Card className="single-task-card">
                <Card.Body className="single-task-card-body">
                    <Card.Text className="single-task-card-id">
                        {task.id}
                    </Card.Text>
                    <Card.Text className="single-card-text">
                        {task.title}
                    </Card.Text>
                    <Card.Text className="must-do-text single-card-text">
                        Must do : {task.attachedTo}
                    </Card.Text>
                    <Card.Text className="single-card-text">
                        Description : {task.description}
                    </Card.Text>
                    <Card.Text className="single-card-text">
                        Status : {task.status}
                    </Card.Text>
                    <Link to={`/project`}  className="single-task-card-button" >  
                    <Button variant="secondary">         
                        Back
                    </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleTaskComponent;