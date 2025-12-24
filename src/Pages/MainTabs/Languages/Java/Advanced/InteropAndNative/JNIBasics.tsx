import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JNIBasics = () => {
  const markdownFilePath = 'Languages/Java/Advanced/InteropAndNative/JNIBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JNI Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JNIBasics;
