import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
