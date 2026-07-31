import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const JNIAndNative = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Interop/JNIAndNative';

  return (
    <>
      <PageLayout>
        <PageTitle title="JNI & Native" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JNIAndNative;
