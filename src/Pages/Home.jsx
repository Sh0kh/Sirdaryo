import Hero from '../Components/Home/Hero';
import Owl from '../Components/Home/Owl';
import Percent from '../Components/Home/Percent';
import AnimateSwiper from '../Components/Home/AnimateSwiper';
import StatisticAppeals from '../Components/Home/StatisticAppeals';
import LinksMap from '../Components/Home/LinksMap';

export default function Home() {
    return (
        <main>
            <Hero/>
            <Owl/>
            <Percent/>
            {/* <AnimateSwiper/> */}
            <StatisticAppeals/>
            <LinksMap/>
        </main>
    );
}
