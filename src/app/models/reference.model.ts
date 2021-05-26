export interface IReference {
    uuid?: string;
    name: string;
    fields: IField[];
    example: string;
}

export interface IField {
    uuid: string;
    position: number;
    value?: string;
    label: string;
    placeholder: string;
    prefix: string;
    suffix: string;
    type: string;
    dateFormat?: string;
    required: boolean;
    italic: boolean;
}