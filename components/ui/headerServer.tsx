import { getContentForHeaderNav } from "@/content/queries";
import Header from './header';

export default async function HeaderServer() {
  const data = await getContentForHeaderNav()
  const links = data?.navigationCollection?.items[0]?.linksCollection?.items || [];

  return <Header links={links} />;
}