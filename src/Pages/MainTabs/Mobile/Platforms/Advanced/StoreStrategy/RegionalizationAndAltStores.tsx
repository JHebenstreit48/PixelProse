import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RegionalizationAndAltStores = () => {
  const markdownFilePath = 'Mobile/Platforms/Advanced/StoreStrategy/RegionalizationAndAltStores';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Regionalization & Alt Stores" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RegionalizationAndAltStores;
