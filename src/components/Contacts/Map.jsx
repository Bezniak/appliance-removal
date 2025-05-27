import { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        const script = document.createElement('script');
        // Удаляем параметры width и height из URL, чтобы карта заняла контейнер целиком
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A917b77ae899ab503d1e130967abc71cde98ae476e0f916f068d71aa0b078ad63&lang=ru_RU&scroll=true";
        script.async = true;
        script.type = 'text/javascript';
        document.getElementById('yandex-map-container').appendChild(script);
    }, []);

    return (
        <div
            id="yandex-map-container"
            className="w-full h-[80vh] overflow-hidden"
        />
    );
};

export default Map;
