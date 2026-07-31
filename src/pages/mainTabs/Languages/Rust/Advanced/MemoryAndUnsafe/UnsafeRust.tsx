import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UnsafeRust = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/MemoryAndUnsafe/UnsafeRust';

  return (
    <>
      <PageLayout>
        <PageTitle title="Unsafe Rust" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnsafeRust;
