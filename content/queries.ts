import {contentGqlFetcher} from "./fetch"
import {HeroQuery,LogoWallQuery,HeaderNavigationQuery} from "../types"


export const getContentForHeaderNav = async () => {
    const query = `#graphql
      query NavigationCollection {
        navigationCollection(where: { name: "Header" }) {
          items {
            name
            linksCollection {
              items {
                label
                link
              }
            }
          }
        }
      }
    `;

    const data = await contentGqlFetcher<HeaderNavigationQuery>({ query });

    if (!data || !data.data) {
      console.log("No data returned from contentGqlFetcher");
      return undefined;
    }

    // Access the `data` property to get to the navigationCollection
    const links = data.data.navigationCollection?.items[0]?.linksCollection?.items;

    if (!links || links.length === 0) {
      console.log("No links found in the data");
      return undefined;
    }

    console.log("Links extracted:", links);
    return links;
  };



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
    const data = await contentGqlFetcher<LogoWallQuery>({query,})
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