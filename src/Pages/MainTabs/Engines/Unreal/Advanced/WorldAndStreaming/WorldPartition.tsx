import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
