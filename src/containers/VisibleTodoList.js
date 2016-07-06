import {connect} from 'react-redux'
import { withRouter} from 'react-router'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../reducers'


const mapStateToProps = (state, { params }) => {
    return {
        todos: getVisibleTodos(state, params.filter || 'all')
    }
}

/* Replaced by the object  { onTodoClick: toggleTodo }*/
// const mapDispatchToProps = (dispatch) => ({
//         onTodoClick: (id) => {
//             dispatch(toggleTodo(id))
//     }
// });

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList
