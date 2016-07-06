import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from '../actions';
import TodoList from '../components/TodoList';
import {getVisibleTodos} from '../reducers';

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    render() {
        const {toggleTodo, ...rest} = this.props;
        return (
            <TodoList
                {...rest}
                onTodoClick={toggleTodo}
            />
        );
    }


    fetchData() {
        const {filter, fetchTodos } = this.props;
        fetchTodos(filter);
    }
}

const mapStateToProps = (state, {params}) => {

    const filter = params.filter || 'all'
    return {
        todos: getVisibleTodos(state, filter),
        filter,
    }
};

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList));

export default VisibleTodoList
