import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ThirdPartyPlugins = () => {
  const markdownFilePath = 'Engines/Cry/Tools/MarketplaceAndPlugins/ThirdPartyPlugins';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Third-Party Plugins" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThirdPartyPlugins;
