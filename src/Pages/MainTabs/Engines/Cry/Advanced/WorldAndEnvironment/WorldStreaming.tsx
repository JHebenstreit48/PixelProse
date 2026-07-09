import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
