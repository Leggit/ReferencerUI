export interface RefModel {
    uuid: string;
    name: string;
    fields: Field[];
    format: string;
}

export interface Field {
    value?: string;
    name: string;
    label: string;
    type: string;
    required: boolean;
}