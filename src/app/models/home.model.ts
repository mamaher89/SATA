export interface Home {
    sliders: sliders[]
    categories: categories[]
    newOffers: newOffers[]
}
export interface sliders {
    photo: string;
}
export interface categories {
    name: string;
    id: number;
    photo: string;
}
export interface newOffers {
    name: string;
    RestauranthId: number;
    description: string;
    cover: string;
    cuisines: cuisines[];
}
export interface cuisines {
    name: string;
}