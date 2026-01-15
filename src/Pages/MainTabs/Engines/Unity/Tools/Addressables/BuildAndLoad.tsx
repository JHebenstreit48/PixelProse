import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildAndLoad = () => {
  const markdownFilePath = 'Engines/Unity/Tools/Addressables/BuildAndLoad';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Build & Load" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildAndLoad;
