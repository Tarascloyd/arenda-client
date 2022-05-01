import { render } from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from './components/Welome/Welcome';
import Page from './components/Page/Page';
import './index.css';
import App from './App';

const TextAbout = 'Наше приложение позволяет вам найти квартиру или отель для жилья в любом городе!' 

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={
          <Page title='Главная страница' text='Переходи на страницу выбора города или отеля или посмотри наши лучшие предложения:'>
            <Welcome />
          </Page>
        } />
        <Route path="about" element={
          <Page title='Подробнее о приложении' text={TextAbout}/>
        } />
        <Route path="*" element={
          <Page title='Страница не найдена' text='Здесь ничего нет'/>
        } />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
