import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
