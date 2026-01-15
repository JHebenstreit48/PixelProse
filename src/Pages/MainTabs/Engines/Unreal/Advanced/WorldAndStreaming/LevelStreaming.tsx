import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LevelStreaming = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/WorldAndStreaming/LevelStreaming';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Level Streaming" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LevelStreaming;
