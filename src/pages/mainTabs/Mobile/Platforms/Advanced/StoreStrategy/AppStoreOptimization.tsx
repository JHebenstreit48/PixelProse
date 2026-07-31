import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
