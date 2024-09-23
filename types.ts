export type HeroQuery = {
  heroCollection: {
    items: {
        preTitle: string
        title: string
        subtitle: string
        callToActionCollection: {
            items: {
                label: string
                link: string
            }[]
        }
    }[]
}
}

export type LogoWallQuery = {
        assetCollection: {
            items :{
                url: string,
                width: number,
                height: number,
                title: string
            }[]
        }


}

export type HeaderNavigationQuery = {
    navigationCollection:{
        items: {
          name: string
          linksCollection: {
            items :{
              label: string
              link: string
            }[]
          }
        }[]
      }
}