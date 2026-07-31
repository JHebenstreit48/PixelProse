import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RegionalizationAndAltStores = () => {
  const markdownFilePath = 'Mobile/Platforms/Advanced/StoreStrategy/RegionalizationAndAltStores';

  return (
    <>
      <PageLayout>
        <PageTitle title="Regionalization & Alt Stores" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RegionalizationAndAltStores;
