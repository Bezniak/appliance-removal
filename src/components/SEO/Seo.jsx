import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description, keywords }) {
    return (
        <Helmet prioritizeSeoTags>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords.join(', ')} />}
        </Helmet>
    );
}
