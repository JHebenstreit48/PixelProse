import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
