export interface Button {
    label: string;
    style: 1 | 2 | 3 | 4 | 5;
    type: 2;
    url?: string;
    disabled?: boolean;
    emoji?: {
        name: string;
        id?: string;
        animated?: boolean;
    };
    custom_id?: string;
}
export interface SelectMenu {
    type: 3 | 5 | 6 | 7 | 8;
    custom_id: string;
    placeholder: string;
    min_values?: number;
    max_values?: number;
    disabled?: boolean;
}
export interface StringInput extends SelectMenu {
    type: 3;
    options: {
        label: string;
        value: string;
        description?: string;
        emoji?: {
            name: string;
            id?: string;
            animated?: boolean;
        };
        default?: boolean;
    }[];
}
export interface UserInput extends SelectMenu {
    type: 5;
}
export interface RoleInput extends SelectMenu {
    type: 6;
}
export interface MentionableInput extends SelectMenu {
    type: 7;
}
export interface ChannelInput extends SelectMenu {
    type: 8;
    channel_types: number[];
}
export interface ActionRow {
    type: 1;
    components: (Button | StringInput | UserInput | RoleInput | MentionableInput | ChannelInput | TextInput)[];
}
export interface TextInput {
    type: 4;
    custom_id: string;
    style: 1 | 2;
    label: string;
    min_length?: number;
    max_length?: number;
    placeholder?: string;
    required?: boolean;
    value?: string;
}
//# sourceMappingURL=typing.d.ts.map