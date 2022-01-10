import "./Home.css";
// import YouTube from '../../HomeArea/YouTube/YouTube'
import YouTube from '../YouTube/YouTube'
import Discount from '../Discount/Discount'

function Home(): JSX.Element {
    return (
        <div className="Home">
            <Discount />
		  <YouTube />

        </div>
    );
}

export default Home;

