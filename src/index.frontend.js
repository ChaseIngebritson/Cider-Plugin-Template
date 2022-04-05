
class CiderPluginTemplateFrontend {
  PLUGIN_NAME = 'cider-plugin-template'

  constructor() {
    CiderFrontAPI.StyleSheets.Add('./plugins/cider-plugin-template/ciderplugintemplate.less')

    this.menuEntryId = window.uuidv4()

    const menuEntry = new CiderFrontAPI.Objects.MenuEntry()
    menuEntry.Id = this.menuEntryId
    menuEntry.name = "Cider Plugin Template"
    menuEntry.onClick = ()=>{
      app.appRoute("plugin/cider-plugin-template-ui")
    }
    CiderFrontAPI.AddMenuEntry(menuEntry)
  }

  async getArtist (id) {
    const musickit = window.app.mk
    
    const storefront = musickit.storefrontId
    const response = await musickit.api.v3.music(`/v1/catalog/${storefront}/artists/${id}`)
  
    const artist = response?.data?.data[0]
    return artist
  }

  async getSimilarArtists (id) {
    const musickit = window.app.mk
    
    const storefront = musickit.storefrontId
    const response = await musickit.api.v3.music(`/v1/catalog/${storefront}/artists/${id}`, {
      views: ['similar-artists']
    })
  
    const artist = response?.data?.data[0]
    return artist.views['similar-artists'].data
  }

  async getNowPlayingArtist () {
    const musickit = window.app.mk
    const nowPlayingSong = musickit.nowPlayingItem
  
    const storefront = musickit.storefrontId
    const response = await musickit.api.v3.music(`/v1/catalog/${storefront}/songs/${nowPlayingSong.songId}`, {
      views: ['artists']
    })
  
    return response?.data?.data[0]?.relationships?.artists?.data[0]
  }

  async debug(text) {
    console.log(`[Plugin][${this.PLUGIN_NAME}]`, text)
  }
}


window.CiderPluginTemplatePlugin = new CiderPluginTemplateFrontend()