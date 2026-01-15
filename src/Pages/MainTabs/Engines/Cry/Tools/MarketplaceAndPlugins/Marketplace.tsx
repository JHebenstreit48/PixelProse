import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Marketplace = () => {
  const markdownFilePath = 'Engines/Cry/Tools/MarketplaceAndPlugins/Marketplace';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Marketplace" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Marketplace;
