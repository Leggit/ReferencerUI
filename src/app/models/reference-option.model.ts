export interface ReferenceOption {
    uuid: string;
    name: string;
}

export interface ReferenceOptions {
    key: string;
    label: string;
    options: ReferenceOption[];
}