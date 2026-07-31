import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
