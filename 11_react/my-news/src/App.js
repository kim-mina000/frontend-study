import logo from './logo.svg';
import './App.css';
import NewsList  from "./components/NewsList";
import NewsPage from './pages/NewsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* url파라미터 다시 공부하기 */}
      {/* ?는 category값이 선택적이라는 의미
      즉, 있을 수도 있고, 없을 수도 있다는 뜻 */}
      <Route path='/:category?' element={<NewsPage />} />
    </Routes>
  );
}

export default App;
