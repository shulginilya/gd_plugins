import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
} from "@reduxjs/toolkit";
import { makeRequest } from '@/utils/requestUtil';
import { RootState } from "@/appStore/store";
import {
    TabType,
    PluginType,
} from "@/types";

/*
    We define state structure
*/
export enum Status {
    idle = 'idle',
    loading = 'loading',
    succeeded = 'succeeded',
    failed = 'failed'
};
const PLUGINS_PER_TAB = 6;
interface initialStateType {
    data: TabType[],
    status: Status.idle | Status.loading | Status.succeeded | Status.failed,
    error: string | null;
};
const initialState: initialStateType = {
    data: [
        {
            id: "marketing",
            title: "Marketing",
            icon: "icon-marketing",
            plugins: []
        },
        {
            id: "finance",
            title: "Finance",
            icon: "icon-finance",
            plugins: []
        },
        {
            id: "personnel",
            title: "Personnel",
            icon: "icon-people",
            plugins: []
        }
    ],
    status: Status.idle,
    error: null
};

/*
    We load plugins data from the server
*/
export const fetchPlugins = createAsyncThunk('plugins/fetchPlugins', async () => {
    const pluginsData = await makeRequest({
        url: '/plugins'
    });
    return pluginsData;
});

/*
    Slice definition
*/
export const pluginSlice = createSlice({
    name: "tabs",
    initialState,
    reducers: {
        mutatePlugin: (state) => {
            console.log('state: ', state);
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPlugins.pending, (state) => {
                state.status = Status.loading;
            })
            .addCase(fetchPlugins.fulfilled, (state, action: PayloadAction<PluginType[]>) => {
                state.status = Status.succeeded;
                const plugins = action.payload;
                // distributing logic of the plugins among the tabs
                const numberOfIterations = Math.ceil(plugins.length/PLUGINS_PER_TAB);
                for (let i = 0 ; i < numberOfIterations; i++) {
                    const startSlice = PLUGINS_PER_TAB * i;
                    const endSlice = startSlice + PLUGINS_PER_TAB;
                    if (i === numberOfIterations - 1) {
                        state.data[i].plugins = plugins.slice(startSlice);
                    } else {
                        state.data[i].plugins = plugins.slice(startSlice, endSlice);
                    }
                }
            })
            .addCase(fetchPlugins.rejected, (state) => {
                state.status = Status.failed;
                state.error = 'api error';
            })
    }
});

export const {
    mutatePlugin
} = pluginSlice.actions;

export const selectData = (state: RootState) => state.tabs;

export default pluginSlice.reducer;
