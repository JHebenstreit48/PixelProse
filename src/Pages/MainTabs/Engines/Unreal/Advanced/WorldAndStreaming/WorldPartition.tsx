import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorldPartition = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/WorldAndStreaming/WorldPartition';

  return (
    <>
      <PageLayout>
        <PageTitle title="World Partition" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorldPartition;
