import path from 'path'

export default class CiderPluginTemplate {
    /**
     * Base Plugin Details (Eventually implemented into a GUI in settings)
     */
    public name: string = 'Cider Plugin Template';
    public description: string = 'A template for building Cider plugins using Typescript.';
    public version: string = '1.0.0';
    public author: string = 'Chase Ingebritson';
         
    /**
     * Private variables for interaction in plugins
     */
    private env

    /**
     * Runs on plugin load (Currently run on application start)
     */
    constructor(env) {
        this.env = env

        console.debug(`[Plugin][${this.name}] Loading Complete.`)
    }

    /**
     * Runs on app ready
     */
    async onReady(): Promise<void> {
        await this.assureOutputFileExists()
        console.debug(`[Plugin][${this.name}] Ready.`)
    }

    /**
     * Runs on renderer ready
     * @param win 
     */
    onRendererReady(win) {
        console.log(`[Plugin][${this.name}] Renderer Ready`)
        this.env.utils.loadJSFrontend(path.join(this.env.dir, "index.frontend.js"))
    }

    /**
     * Runs on app stop
     */
    onBeforeQuit(): void {
        console.log(`[Plugin][${this.name}] Stopped`)
    }

    /**
     * Runs on playback State Change
     * @param attributes Music Attributes (attributes.status = current state)
     */
    onPlaybackStateDidChange(attributes: object): void {

    }

    /**
     * Runs on song change
     * @param attributes Music Attributes
     */
    onNowPlayingItemDidChange(attributes: object): void {

    }

    /**
     * Create the output file, or just open it if it already exists
     * @private
     */
    private async assureOutputFileExists(): Promise<void> {

    }
}