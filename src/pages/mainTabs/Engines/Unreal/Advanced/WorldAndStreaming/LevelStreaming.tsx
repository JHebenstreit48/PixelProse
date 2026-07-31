import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LevelStreaming = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/WorldAndStreaming/LevelStreaming';

  return (
    <>
      <PageLayout>
        <PageTitle title="Level Streaming" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LevelStreaming;
