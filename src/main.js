// containers
const TASK_COUNT = 41;
const ONE_LOAD_TASKS = 8;
let tasksOnPage = ONE_LOAD_TASKS;

const mainMenuContainer = document.querySelector(`.main__control`);
const mainContainer = document.querySelector(`.main`);

const boardContainer = mainContainer.appendChild(document.createElement(`section`));
boardContainer.className = `board container`;

const boardTasks = mainContainer.appendChild(document.createElement(`div`));
boardTasks.className = `board__tasks`;

import {getTask, getFilter} from "./components/data";
import {getMenuLayout} from "./components/site-menu";
import {getSearchLayout} from "./components/search";
import {getFiltersLayout} from "./components/filter";
import {getCardLayout} from "./components/card";
import {getLoadMoreBtnLayout} from "./components/load-more-btn";
import {getFormLayout} from "./components/form";

const taskObjectArray = new Array(TASK_COUNT).fill(``).map(getTask);

const renderElement = (container, content) => {
  container.insertAdjacentHTML(`beforeend`, content);
};

const renderTask = (taskDataObject) => {
  renderElement(boardTasks, getCardLayout(taskDataObject));
};

renderElement(mainMenuContainer, getMenuLayout());
renderElement(boardContainer, getSearchLayout());
renderElement(boardContainer, getFiltersLayout(getFilter(taskObjectArray)));
boardContainer.appendChild(boardTasks);
renderElement(boardTasks, getFormLayout(taskObjectArray[0]));
taskObjectArray.slice(1, ONE_LOAD_TASKS).forEach(renderTask);
renderElement(boardContainer, getLoadMoreBtnLayout());


const loadMoreBtn = document.querySelector(`.load-more`);
const onLoadBtnClick = (evt) => {
  evt.preventDefault();
  taskObjectArray.slice(tasksOnPage, tasksOnPage + ONE_LOAD_TASKS).forEach(renderTask);
  if (tasksOnPage + ONE_LOAD_TASKS < TASK_COUNT) {
    tasksOnPage += ONE_LOAD_TASKS;
  } else {
    loadMoreBtn.removeEventListener(`click`, onLoadBtnClick);
    loadMoreBtn.remove();
  }
};

loadMoreBtn.addEventListener(`click`, onLoadBtnClick);


// EOF
