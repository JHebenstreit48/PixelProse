import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
