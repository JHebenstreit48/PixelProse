import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Marketplace = () => {
  const markdownFilePath = 'Engines/Cry/Tools/MarketplaceAndPlugins/Marketplace';

  return (
    <>
      <PageLayout>
        <PageTitle title="Marketplace" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Marketplace;
