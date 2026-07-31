import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
