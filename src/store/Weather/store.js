import {create} from "zustand";
import axios from "axios";

export const useWeather = create((set, get) => ({
    temperature: [],
    getWeather: async () => {
        try {
            const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=57.63&longitude=39.87&hourly=temperature_2m');
            const newTemperature = [...get().temperature, response.data.hourly.temperature_2m[167]];
            set({ temperature: newTemperature });
        } catch (error) {
            console.error(error);
        }
    },
}));