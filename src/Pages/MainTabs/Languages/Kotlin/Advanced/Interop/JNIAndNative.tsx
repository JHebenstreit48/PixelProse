import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JNIAndNative = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Interop/JNIAndNative';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JNI & Native" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JNIAndNative;
