import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MainStores = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/CoreStoreConcepts/MainStores';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Main Stores (App Store / Play)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MainStores;
