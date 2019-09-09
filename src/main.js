// containers
const mainMenuContainer = document.querySelector(`.main__control`);
const mainContainer = document.querySelector(`.main`);

const boardContainer = mainContainer.appendChild(document.createElement(`section`));
boardContainer.className = `board container`;

const boardTasks = mainContainer.appendChild(document.createElement(`div`));
boardTasks.className = `board__tasks`;

import {getMenuLayout} from './components/site-menu';
import {getSearchLayout} from './components/search';
import {getFilterLayout} from './components/filter';
import {getCardLayout} from './components/card';
import {getLoadMoreBtnLayout} from './components/load-more-btn';
import {getFormLayout} from './components/form';

const renderElement = function (container, content) {
  container.insertAdjacentHTML(`beforeend`, content);
};

renderElement(mainMenuContainer, getMenuLayout());
renderElement(boardContainer, getSearchLayout());
renderElement(boardContainer, getFilterLayout());
boardContainer.appendChild(boardTasks);
renderElement(boardTasks, getCardLayout());
renderElement(boardTasks, getCardLayout());
renderElement(boardTasks, getCardLayout());
renderElement(boardContainer, getLoadMoreBtnLayout());

window.getFormLayout = getFormLayout; // Чтобы линтер не ругался.

// EOF
