import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnsafeRust = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/MemoryAndUnsafe/UnsafeRust';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Unsafe Rust" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnsafeRust;
