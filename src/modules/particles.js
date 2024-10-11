import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

export const install = ({ isClient, initialState, app }) => {
    if (isClient)
        app.use(Particles, {
            init: async (engine) => {
                await loadFull(engine);
            }
        });
}