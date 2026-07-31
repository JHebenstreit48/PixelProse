import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
