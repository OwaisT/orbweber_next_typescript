
export interface Service {
    name: string;
    service_name: string;
    headline: string;
    button_text: string;
    button_to_page: string;
    steps: string;
    packaging: string;
    features: Feature[];
    price: string;
    background: string;
    image: string;
    meta_title: string;
    meta_description: string;
    schema_price: string;
    schema_name: string;
}

export interface Feature {
    name: string;
    description: string;
    order: number;
}