import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VecAndHashMap = () => {
  const markdownFilePath = 'Languages/Rust/Basics/CollectionsAndIO/VecAndHashMap';

  return (
    <>
      <PageLayout>
        <PageTitle title="Vec & HashMap" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VecAndHashMap;
