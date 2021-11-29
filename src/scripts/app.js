import '../styles/styles.css';
import { ToDoModel } from './Model/Model';
import { ToDoView } from './View/View';
import { ToDoController } from './Controller/Сontroller';

const controller = new ToDoController();
const view = new ToDoView(controller);
const model = new ToDoModel(view);

controller.addModel(model);
controller.addView(view);