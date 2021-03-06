import Box3DRenderer from '../Box3DRenderer';

class Video360Renderer extends Box3DRenderer {
    /** @property {Box3D.Components.Input} - Component that handles device input events */
    inputController;

    /**
     * Get the input controller attached to the runtime
     *
     * @return {Object} The input controller, if any
     */
    getInputController() {
        if (!this.inputController) {
            const app = this.box3d.getApplication();

            if (!app) {
                return null;
            }

            this.inputController = app.getComponentByScriptName('Input');
        }

        return this.inputController;
    }

    /**
     * @inheritdoc
     */
    destroy() {
        this.inputController = null;
        super.destroy();
    }
}

export default Video360Renderer;
