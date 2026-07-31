import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
