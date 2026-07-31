import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
