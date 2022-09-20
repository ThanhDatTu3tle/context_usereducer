// import logo from './logo.svg';
import './App.css';
import { TextField, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useStore, actions } from './store';

function App() {
  const [state, dispatch] = useStore()
  const { todos, todoInput} = state

  const handleSubmit = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
  }

  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index))
  } 

  const handleEdit = (index, payload) => {
    dispatch(actions.editTodo(index, payload))
  }

  return (
    <div className="App">
      <h1>
        todos
      </h1>
      <div className="Input">
        <TextField 
          id="filled-basic" 
          label="Enter task..." 
          variant="filled" 
          value={todoInput}
          onChange={e => {
            dispatch(actions.setTodoInput(e.target.value))
          }}
        />
        <Button 
          variant="contained"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </div>

      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText 
              primary={todo} 
            />

            <ListItemButton
              // selected={selectedIndex === 0}
              onClick={() => handleDelete(index)}
            >
              <ListItemIcon>
                <DeleteForeverIcon />
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton
              // selected={selectedIndex === 0}
              onClick={() => handleEdit(index, payload)}
            >
              <ListItemIcon>
                <EditIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
        {/* <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem> */}
      </List>
    </div>
  );
}

export default App;
