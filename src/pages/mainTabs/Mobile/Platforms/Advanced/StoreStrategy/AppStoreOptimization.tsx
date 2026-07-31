import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
