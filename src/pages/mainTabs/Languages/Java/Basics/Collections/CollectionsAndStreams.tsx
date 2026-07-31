import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
