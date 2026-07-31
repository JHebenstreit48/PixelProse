import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const MainStores = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/CoreStoreConcepts/MainStores';

  return (
    <>
      <PageLayout>
        <PageTitle title="Main Stores (App Store / Play)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MainStores;
