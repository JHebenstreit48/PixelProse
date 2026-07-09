import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildAndLoad = () => {
  const markdownFilePath = 'Engines/Unity/Tools/Addressables/BuildAndLoad';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build & Load" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildAndLoad;
