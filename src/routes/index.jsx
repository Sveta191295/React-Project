import { Navigate } from "react-router";
import NotFound from "../pages/404";
import About from "../pages/About"
import Form from "../pages/Form";
import Home from "../pages/Home";
import Project from "../pages/Project";
import SingleTask from "../pages/SingleTask";

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/project",
        element: <Project />
    },
    {
        path: "/task/:task_id",
        element: <SingleTask />
    },
    {
        path: "/registration",
        element: <Form />
    },
    {
        path: "/not-found",
        element: <NotFound />
    },
    {
        path: "*",
        element: <Navigate to="/not-found" />
    }
]