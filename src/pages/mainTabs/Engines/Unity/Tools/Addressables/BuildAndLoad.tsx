import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
