import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
