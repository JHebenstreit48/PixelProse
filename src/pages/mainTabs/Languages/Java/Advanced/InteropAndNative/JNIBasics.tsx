import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JNIBasics = () => {
  const markdownFilePath = 'Languages/Java/Advanced/InteropAndNative/JNIBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="JNI Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JNIBasics;
