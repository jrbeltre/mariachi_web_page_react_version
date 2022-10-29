
import React from 'react';
import MainSection from '../components/main/main_section';
import Portfolio from '../components/galeria/portfolio';
import Contacto from '../components/contacto/contacto';
import {getView} from './header';


function AppBody () {

    var view=getView();
     
console.log("appbody view: ",view)

return ( 
    <div>
        {(view === 1) ? <MainSection/> : (view === 2) ? <Portfolio/> : <Contacto />}
    </div>
)
}
export default AppBody;