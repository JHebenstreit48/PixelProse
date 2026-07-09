import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CollectionsAndStreams = () => {
  const markdownFilePath = 'Languages/Java/Basics/Collections/CollectionsAndStreams';

  return (
    <>
      <PageLayout>
        <PageTitle title="Collections & Streams" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CollectionsAndStreams;
