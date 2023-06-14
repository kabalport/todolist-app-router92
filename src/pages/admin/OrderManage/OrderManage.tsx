import React from 'react';
import { Container, Box, Typography, Button } from "@mui/material";
import {Link} from "react-router-dom";
import OrderItem from "./OrderItem";
import {TodoItemType} from "../../../redux/TodoReducer";
import {RootStatesType} from "../../../redux/AppStore";
import {AnyAction, Dispatch} from "redux";
import TodoActionCreator from "../../../redux/TodoActionCreator";
import {connect} from "react-redux";


type PropsType = {
    todoList: Array<TodoItemType>;
    deleteTodo: (id: number) => void;
    toggleDone: (id: number) => void;
};

const OrderManage = ({ todoList, deleteTodo, toggleDone }: PropsType) => {
    let todoItems = todoList.map((item) => {
        return <OrderItem key={item.id} todoItem={item} deleteTodo={deleteTodo} toggleDone={toggleDone} />;
    });

    return (
        <Container>
            <Box sx={{ py: 4 }}>
                <Typography variant="h5" sx={{ mb: 4 }}>
                    주문 관리
                </Typography>
                <div className="row">
                    <div className="col p-3">
                        <Link className="btn btn-primary" to="/admin/order/add">
                            주문 추가
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="list-group">{todoItems}</ul>
                    </div>
                </div>
            </Box>
        </Container>
    );
};

const mapStateToProps = (states: RootStatesType) => ({
    todoList: states.todos.todoList,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    deleteTodo: (id: number) => dispatch(TodoActionCreator.deleteTodo({ id })),
    toggleDone: (id: number) => dispatch(TodoActionCreator.toggleDone({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderManage);

