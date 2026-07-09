import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AppStoreOptimization = () => {
  const markdownFilePath = 'Mobile/Platforms/Advanced/StoreStrategy/AppStoreOptimization';

  return (
    <>
      <PageLayout>
        <PageTitle title="App Store Optimization (ASO)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppStoreOptimization;
