import React from "react";
import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

const MetaTags = ({page = "", syncTitle = "", syncDescription = ""}) => {
    const {t} = useTranslation();

    // Используем переданные значения или fallback на локализацию
    const title = t(`${page}.title`);
    const description = t(`${page}.description`);

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Helmet>
    );
};

// Добавление проверки типов
MetaTags.propTypes = {
    page: PropTypes.string,  // Локализованная страница
    syncTitle: PropTypes.string,  // Синхронный заголовок
    syncDescription: PropTypes.string,  // Синхронное описание
};

export default MetaTags;
