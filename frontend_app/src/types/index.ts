export interface PluginType {
    id: string;
    title: string;
    description: string;
    enabled: boolean;
    active: boolean;
};

export interface TabType {
    [key: string]: {
        title: string;
        icon: string;
        plugins: string[];
    };
};
