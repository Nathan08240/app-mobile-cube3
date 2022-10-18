import Footer from './components/Footer';
import {NavigationContainer} from '@react-navigation/native';
import Root from './utils/Root'


function App() {


    return (
        <>
            <NavigationContainer>
                <Root/>
            </NavigationContainer>
            <Footer/>
        </>
    );
}

export default App;
