import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
