import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CObjCInterop = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/InteropAndUnsafe/CObjCInterop';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="C/ObjC Interop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CObjCInterop;
