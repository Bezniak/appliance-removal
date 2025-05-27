import React from "react";
import { services } from "../../store/data.js";

export function ServiceJsonLd() {
    const serviceItems = services.map(
        ({ id, title, description, href, img, content }) => {
            // Собираем подробное описание из контента
            const detailedDescription = [
                content?.intro,
                content?.whyChooseUs,
                content?.ecoFriendlyNote,
            ]
                .filter(Boolean)
                .join(" ");

            // Собираем шаги как буллеты в строку
            const howItWorksText = content?.howItWorks
                ? "Этапы выполнения услуги: " + content.howItWorks.join("; ") + "."
                : "";

            return {
                "@type": "Service",
                "name": title,
                "description": `${description} ${detailedDescription} ${howItWorksText}`,
                "url": window.location.origin + href,
                "image": window.location.origin + img,
            };
        }
    );

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": serviceItems.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": service,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
