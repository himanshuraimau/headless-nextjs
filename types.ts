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