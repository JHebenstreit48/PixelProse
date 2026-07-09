import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
