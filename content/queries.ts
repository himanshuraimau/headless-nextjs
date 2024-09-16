import {contentGqlFetcher} from "./fetch"
import {HeroQuery,LogoWallQuery} from "../types"


export const getContentForLogoWall = async()=>{
    const query = `#graphql
   query AssetCollection {
    assetCollection(where: { title_contains: "client" }) {
        items {
            url
            width
            height
            title
        }
    }
}


    `

    const data = await contentGqlFetcher<LogoWallQuery>(
        {
            query,
            
        }
    )

    if(!data){
        return undefined
    }
    return data
}




export const getContentForHero = async()=>{
  const query = `#graphql
  query HeroCollection {
    heroCollection {
        items {
            preTitle
            title
            subtitle
            callToActionCollection {
                items {
                    label
                    link
                }
            }
        }
    }
}
`

const data = await contentGqlFetcher<HeroQuery>({query})

if(!data){
  return undefined
}

 return data
}