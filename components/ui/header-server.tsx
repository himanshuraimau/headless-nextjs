import { getContentForHeaderNav } from "@/content/queries"
import Header from './header'

export type Link = {
  link: string;
  label: string;
}

export default async function HeaderServer() {
  try {
    const data = await getContentForHeaderNav()
    const links = data?.navigationCollection?.items[0]?.linksCollection?.items || [];
    return <Header links={links} />;
  } catch (error) {
    console.error("Error fetching navigation data:", error);
    return <Header links={[]} />;
  }
}