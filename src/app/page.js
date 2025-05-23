import {CarouselPlugin} from "@/app/components/Carousel";
import Welcome from "@/app/components/Welcome";

export default function Home() {
    return (
        <div>
            <CarouselPlugin/>
            <Welcome/>
        </div>
    );
}
