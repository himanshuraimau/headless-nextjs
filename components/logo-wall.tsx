import Client from './clients';
import { getContentForLogoWall } from '@/content/queries';

const LogoWall = async () => {
    const data = await getContentForLogoWall();
    return <Client content={data?.assetCollection?.items ?? []} />;
}

export default LogoWall;