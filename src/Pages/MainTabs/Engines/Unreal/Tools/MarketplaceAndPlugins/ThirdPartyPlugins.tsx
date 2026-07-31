import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ThirdPartyPlugins = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/MarketplaceAndPlugins/ThirdPartyPlugins';

  return (
    <>
      <PageLayout>
        <PageTitle title="Third-Party Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThirdPartyPlugins;
