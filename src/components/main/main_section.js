import Hero from './hero';
import Featured from './featured';
import About from './about';
import Services from './services';


function MainSection()
{
    return(
        <div>
            <Hero/>
            <Featured/>
            <About/>
            <Services/>  
        </div>
    );
}
export default MainSection;