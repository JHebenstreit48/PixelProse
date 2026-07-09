import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnsafePointers = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/InteropAndUnsafe/UnsafePointers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Unsafe Pointers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnsafePointers;
