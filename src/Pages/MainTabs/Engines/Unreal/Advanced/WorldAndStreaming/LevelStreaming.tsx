import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
