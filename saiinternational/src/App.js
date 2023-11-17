import './App.css';
import { AppRoutes } from './AppRoutes';
import { CategoryModal } from './components/CategoryModal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MobileMenuModal } from './components/MobileMenuModal';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/features/productSlice'
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_END_POINT+'getProducts',{
          withCredentials:true
        });
        console.log("res ", response.data.data)
        dispatch(getProducts(response.data.data));
      } catch (err) {
        console.log(err);
      }
    }

    fetchProduct();
  }, [])
  return (
    <>
      <div className="main-wrapper">
        <Header></Header>
        <div className="main_body_style">
          <AppRoutes />
        </div>
        <Footer></Footer>
      </div>
      <CategoryModal></CategoryModal>
      <MobileMenuModal></MobileMenuModal>
    </>
  );
}

export default App;
