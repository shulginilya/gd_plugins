import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/appStore/store";
import { PluginItemType } from "@/types";

interface initialStateType {
    pluginsData: PluginItemType[];
};

const initialState: initialStateType = {
    pluginsData: []
};

export const pluginSlice = createSlice({
    name: "plugins",
    initialState,
    reducers: {
        mutatePlugin: (state) => {
            console.log('state: ', state);
        }
    } 
});

export const {
    mutatePlugin
} = pluginSlice.actions;

export const selectPlugins = (state: RootState) => state.plugins.pluginsData;

export default pluginSlice.reducer;
