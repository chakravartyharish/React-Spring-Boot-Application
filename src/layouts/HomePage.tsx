import { Carousel } from "./HomePage/Components/Carousel";
import { ExploreTopBooks } from "./HomePage/Components/ExploreTopBooks";
import { Heros } from "./HomePage/Components/Heros";
import { LibraryServices } from "./HomePage/Components/LibraryServices";


export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heros/>
            <LibraryServices/>
        </>
    );
}