import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CObjCInterop = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/InteropAndUnsafe/CObjCInterop';

  return (
    <>
      <PageLayout>
        <PageTitle title="C/ObjC Interop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CObjCInterop;
