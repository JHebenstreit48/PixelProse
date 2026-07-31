import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ThirdPartyPlugins = () => {
  const markdownFilePath = 'Engines/Cry/Tools/MarketplaceAndPlugins/ThirdPartyPlugins';

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
