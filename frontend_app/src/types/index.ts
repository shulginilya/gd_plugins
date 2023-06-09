export interface PluginItemType {
    title: string;
    description: string;
};

export interface TabType {
    title: string;
    icon: string;
    active: PluginItemType[];
    disabled: PluginItemType[];
    inactive: PluginItemType[];
};
