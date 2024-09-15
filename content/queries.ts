import {contentGqlFetcher} from "./fetch"
import {HeroQuery} from "../types"

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