import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WorldStreaming = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/WorldAndEnvironment/WorldStreaming';

  return (
    <>
      <PageLayout>
        <PageTitle title="World Streaming" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorldStreaming;
