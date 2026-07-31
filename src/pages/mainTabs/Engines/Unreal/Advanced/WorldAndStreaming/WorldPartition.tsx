import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
