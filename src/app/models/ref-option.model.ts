export interface RefOption {
    uuid: string;
    name: string;
}

export interface RefOptions {
    key: string;
    label: string;
    options: RefOption[];
}