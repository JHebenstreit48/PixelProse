import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AllocatorsAndArcBox = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/MemoryAndUnsafe/AllocatorsAndArcBox';

  return (
    <>
      <PageLayout>
        <PageTitle title="Allocators & Arc/Box" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AllocatorsAndArcBox;
