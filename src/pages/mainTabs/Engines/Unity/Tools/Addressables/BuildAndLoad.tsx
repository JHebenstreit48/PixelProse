import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
