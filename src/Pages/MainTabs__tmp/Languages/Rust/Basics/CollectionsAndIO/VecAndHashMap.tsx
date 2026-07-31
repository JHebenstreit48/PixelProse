import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
